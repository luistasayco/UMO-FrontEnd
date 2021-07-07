import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginModel } from '../../models/login.model';
import { LoginService } from '../../services/login.service';
import { CifrarDataService } from '../../../../services/cifrar-data.service';
import { MenuDinamicoService } from '../../../../services/menu-dinamico.service';
import { SelectItem } from 'primeng';
import { UserContextService } from '../../../../services/user-context.service';
import { StorageService } from '../../../../services/storage.service';
import { GlobalsConstants } from '../../../../models/globals-constants.modelo';
import swal from'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  globalConstants: GlobalsConstants = new GlobalsConstants();
  modeloLogin: LoginModel;
  formularioLogin: FormGroup;

  subscripcion: Subscription;

  displayValida: boolean;

  displayAutenticacion: boolean;

  constructor(private readonly loginService: LoginService,
              private readonly router: Router,
              private readonly userContextService: UserContextService,
              private readonly storageService: StorageService,
              private readonly fb: FormBuilder,
              private readonly cifrarDataService: CifrarDataService,
              private readonly menuDinamicoService: MenuDinamicoService) { }

  ngOnInit(): void {
    this.modeloLogin = new LoginModel();
    this.instanciarFormulario();
  }

  instanciarFormulario() {
    this.formularioLogin = this.fb.group({
      login: new FormControl('', [
        Validators.minLength(4),
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.required
      ])
    });
  }

  onClickLogin()
  {
    this.modeloLogin.usuario = this.formularioLogin.value.login;
    this.modeloLogin.clave = this.cifrarDataService.encrypt(this.formularioLogin.value.password);
    this.displayAutenticacion = true;
    this.onLoginOnline();
  }

  onLoginOnline () {
    this.subscripcion = new Subscription();
    this.subscripcion = this.loginService.autentica(this.modeloLogin)
    .subscribe((res: any) => {
        this.storageService.setItem('token', res.token);
        this.onObtienePermisosPorUsuario();
      },
      (error) => {
        this.displayAutenticacion = false;
        swal.fire(this.globalConstants.msgErrorSummary, error.error.resultadoDescripcion ,'error');
      }
    );
  }

  onObtienePermisosPorUsuario() {
    this.subscripcion = new Subscription();
    this.subscripcion = this.loginService.obtienePermisosPorUsuario(this.modeloLogin)
    .subscribe((res: any) => {
        this.onEncriptaData(res);
        this.onGeneraMenu();
        this.displayAutenticacion = false;
      },
      (error) => {
        this.displayAutenticacion = false;
        swal.fire(this.globalConstants.msgErrorSummary, error.error.resultadoDescripcion ,'error');
      }
    );
  }

  onEncriptaData(res: any) {
    this.storageService.setItem('menu-opciones', res.listaAccesoMenu);
    this.storageService.setItem('menu', res.listaAccesoMenu);

    console.log('res.listaAccesoMenu', res.listaAccesoMenu);

    this.storageService.setItemEncrypt('idUsuario', res.idUsuario);
    this.storageService.setItemEncrypt('idPersona', res.idPersona);
    this.storageService.setItemEncrypt('idPerfil', res.idPerfil);
    this.storageService.setItemEncrypt('imagen', res.imagen);
    this.storageService.setItemEncrypt('nombre', res.nombre);
    this.storageService.setItemEncrypt('usuario', res.usuario);
    this.storageService.setItemEncrypt('email', res.email);
    // this.storageService.setItem('pass', this.modeloLogin.clave);
    this.userContextService.setUser(res.usuario);

    this.onFinalizaProceso();
  }

  onGeneraMenu() {
    this.menuDinamicoService.setArmaMenuDimamico();
  }

  onFinalizaProceso() {
    this.router.navigate(['/main/aliada/bienvenido']);
  }

  onRecuperarContrasena() {
    this.displayValida = true;

    if (this.formularioLogin.value.login === '') {
      swal.fire(this.globalConstants.msgInfoSummary, 'Ingresar Usuario', 'info');
      this.displayValida = false;
      return;
    }
    this.modeloLogin.usuario = this.formularioLogin.value.login;
    this.subscripcion = new Subscription();
    this.subscripcion = this.loginService.RecuperarPassword(this.modeloLogin)
    .subscribe((res: any) => {
      this.displayValida = false;
      swal.fire(this.globalConstants.msgInfoSummary, 'Se envio email con su nueva contraseña...!!!' , 'info');
      },
      (error) => {
        this.displayValida = false;
        swal.fire(this.globalConstants.msgErrorSummary, error.error.resultadoDescripcion ,'error');
      }
    );
  }

  ngOnDestroy() {
    if (this.subscripcion) {
      this.subscripcion.unsubscribe();
    }
  }
}
