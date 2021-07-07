import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PerfilModel } from '../../../models/pefil.model';
import { SeguridadService } from '../../../services/seguridad.service';
import { Router } from '@angular/router';
import { BreadcrumbService } from '../../../../../services/breadcrumb.service';
import { Subscription } from 'rxjs';
import { GlobalsConstants } from '../../../../../models/globals-constants.modelo';
import swal from'sweetalert2';

@Component({
  selector: 'app-perfil-create',
  templateUrl: './perfil-create.component.html',
  styleUrls: ['./perfil-create.component.css']
})
export class PerfilCreateComponent implements OnInit, OnDestroy {

  // Titulo del componente
  titulo = 'Perfil';

  // Name de los botones de accion
  globalConstants: GlobalsConstants = new GlobalsConstants();

  maestroForm: FormGroup;

  modelo: PerfilModel = new PerfilModel();

  subscription: Subscription;

  constructor(private fb: FormBuilder,
              private seguridadService: SeguridadService,
              private router: Router,
              private breadcrumbService: BreadcrumbService) {
                this.breadcrumbService.setItems([
                    { label: 'Módulo Seguridad' },
                    { label: 'Perfil', routerLink: ['modulo-se/panel-perfil'] },
                    { label: 'Nuevo'}
                ]);
              }

  ngOnInit() {
    this.maestroForm = this.fb.group(
      {
        'descripcion' : new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(4)])),
      }
    );
  }

  onClickSave() {
    this.modelo.descripcionPerfil = this.maestroForm.controls['descripcion'].value;
    this.subscription = new Subscription();
    this.subscription = this.seguridadService.setInsertPerfil(this.modelo)
    .subscribe(() =>  {
      swal.fire(this.globalConstants.msgExitoSummary, this.globalConstants.msgExitoDetail , 'success');
      this.back(); },
      (error) => {
        swal.fire(this.globalConstants.msgErrorSummary, error.error.resultadoDescripcion ,'error');
    });
  }

  back() {
    this.router.navigate(['/main/modulo-se/panel-perfil']);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
