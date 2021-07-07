import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { Subscription } from 'rxjs';
import { BreadcrumbService } from '../../../../services/breadcrumb.service';
import { CifrarDataService } from '../../../../services/cifrar-data.service';
import { SeguridadService } from '../../services/seguridad.service';
import { GlobalsConstants } from '../../../../models/globals-constants.modelo';
import { StorageService } from '../../../../services/storage.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-panel-recuperar-clave',
  templateUrl: './panel-recuperar-clave.component.html',
  styleUrls: ['./panel-recuperar-clave.component.css']
})
export class PanelRecuperarClaveComponent implements OnInit {

  // Titulo del componente
  titulo = 'Cambiar Contraseña';

  // Name de los botones de accion
  globalConstants: GlobalsConstants = new GlobalsConstants();

  maestroForm: FormGroup;

  modelo: UsuarioModel = new UsuarioModel();

  subscription: Subscription;

  constructor(private fb: FormBuilder,
              private storageService: StorageService,
              private cifrarDataService: CifrarDataService,
              private seguridadService: SeguridadService,
              private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
          { label: 'Modulo Seguridad' },
          { label: 'Cambiar Contraseña', routerLink: ['module-se/panel-recuperar-clave'] }
      ]);
    }

    ngOnInit() {
      this.maestroForm = this.fb.group(
        {
          password : new FormControl('', Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(6)])),
          passwordNueva : new FormControl('', Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(6)])),
          passwordNuevaRepita : new FormControl('', Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(6)])),
        }
      );
    }
  
    onClickSave() {

      var passwordUsuario = this.storageService.getItem('pass')
      var passwordUsuarioInput = this.cifrarDataService.encrypt(this.maestroForm.value.password);
      var passwordNuevo = this.cifrarDataService.encrypt(this.maestroForm.value.passwordNueva);

      if (passwordUsuario !== passwordUsuarioInput) {
        swal.fire(this.globalConstants.msgInfoSummary, 'Contraseña Actual no coincide con la clave ingresada!!!', 'info');
        return;
      }

      if (this.maestroForm.value.passwordNueva !== this.maestroForm.value.passwordNuevaRepita) {
        swal.fire(this.globalConstants.msgInfoSummary, 'Contraseña Nueva no son iguales!!!' , 'info');
        return;
      }
      this.modelo.claveOrigen = passwordNuevo;
      this.subscription = new Subscription();
      this.subscription = this.seguridadService.setUpdatePasswordUsuario(this.modelo)
      .subscribe(() =>  {
        swal.fire(this.globalConstants.msgExitoSummary, this.globalConstants.msgExitoDetail , 'success');
        },
        (error) => {
          swal.fire(this.globalConstants.msgErrorSummary, error.error.resultadoDescripcion ,'error');    
      });
    }
  
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }

}
