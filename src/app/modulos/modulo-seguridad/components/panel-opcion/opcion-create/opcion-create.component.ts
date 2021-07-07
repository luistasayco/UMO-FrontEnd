import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { OpcionModel } from '../../../models/opcion.model';
import { SeguridadService } from '../../../services/seguridad.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BreadcrumbService } from '../../../../../services/breadcrumb.service';
import { Subscription } from 'rxjs';
import { GlobalsConstants } from '../../../../../models/globals-constants.modelo';
import swal from'sweetalert2';

@Component({
  selector: 'app-opcion-create',
  templateUrl: './opcion-create.component.html',
  styleUrls: ['./opcion-create.component.css']
})
export class OpcionCreateComponent implements OnInit, OnDestroy {

  // Titulo del componente
  titulo = 'Opcion';

  // Name de los botones de accion
  globalConstants: GlobalsConstants = new GlobalsConstants();

  maestroForm: FormGroup;

  modelo: OpcionModel = new OpcionModel();

  // Id del menu seleccionado
  idMenu: number;

  subscription: Subscription;

  constructor(private fb: FormBuilder,
              private seguridadService: SeguridadService,
              private router: Router,
              private breadcrumbService: BreadcrumbService,
              private route: ActivatedRoute) {
                this.breadcrumbService.setItems([
                    { label: 'Módulo Seguridad' },
                    { label: 'Opción', routerLink: ['modulo-se/panel-opcion'] },
                    { label: 'Nuevo'}
                ]);
              }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.idMenu = params.id;
    });

    this.maestroForm = this.fb.group(
      {
        'descripcion' : new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(4)])),
        'keyOpcion' : new FormControl(''),
      }
    );
  }

  onClickSave() {
    this.modelo.idMenu = Number(this.idMenu);
    this.modelo.descripcionOpcion = this.maestroForm.controls['descripcion'].value;
    this.modelo.keyOpcion = this.maestroForm.controls['keyOpcion'].value;
    this.subscription = new Subscription();
    this.subscription = this.seguridadService.setInsertOpcion(this.modelo)
    .subscribe(() =>  {
      swal.fire(this.globalConstants.msgExitoSummary, this.globalConstants.msgExitoDetail , 'success');
      this.back(); },
      (error) => {
        swal.fire(this.globalConstants.msgErrorSummary, error.error.resultadoDescripcion ,'error');
    });
  }

  back() {
    this.router.navigate(['/main/modulo-se/panel-opcion']);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
