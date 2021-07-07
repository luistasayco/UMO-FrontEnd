import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonaModel } from '../../models/persona.model';
import { SeguridadService } from '../../services/seguridad.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { BreadcrumbService } from '../../../../services/breadcrumb.service';
import { Subscription } from 'rxjs';
import { ButtonAcces } from '../../../../models/acceso-button.model';
import { GlobalsConstants } from '../../../../models/globals-constants.modelo';
import { AccesoOpcionesService } from '../../../../services/acceso-opciones.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-panel-persona',
  templateUrl: './panel-persona.component.html',
  styleUrls: ['./panel-persona.component.css']
})
export class PanelPersonaComponent implements OnInit, OnDestroy {

  // Titulo del componente
  titulo = 'Usuario';
  // Acceso de botones
  buttonAcces: ButtonAcces = new ButtonAcces();
  // Name de los botones de accion
  globalConstants: GlobalsConstants = new GlobalsConstants();

  // Opcion Buscar
  descripcionFind = '';
  modeloFind: PersonaModel;
  listModelo: PersonaModel[];

  columnas: any[];

  // Opcion Eliminar
  modeloEliminar: PersonaModel;

  subscription: Subscription;

  constructor(private seguridadService: SeguridadService,
              private router: Router,
              private confirmationService: ConfirmationService,
              private breadcrumbService: BreadcrumbService,
              private accesoOpcionesService: AccesoOpcionesService) {
                this.breadcrumbService.setItems([
                    { label: 'Módulo Seguridad' },
                    { label: 'Usuario', routerLink: ['modulo-se/panel-persona'] }
                ]);
              }

  ngOnInit() {
    this.columnas = [
      { header: 'Usuario' },
      { header: 'Apellidos y Nombres' },
      { header: 'Nro Documento' },
      { header: 'Perfil' },
      { header: 'Activo' }
    ];
    this.buttonAcces = this.accesoOpcionesService.getObtieneOpciones('app-panel-persona');
    this.onListar();
  }

  onToBuscar() {
    this.onListar();
  }

  onListar() {

    this.modeloFind = {nombre: this.descripcionFind};
    this.subscription = new Subscription();
    this.subscription = this.seguridadService.getPersona(this.modeloFind)
    .subscribe((resp: PersonaModel[]) => {
      if (resp) {
          this.listModelo = resp;
        }
      },
      (error) => {
        swal.fire(this.globalConstants.msgErrorSummary, error.error.resultadoDescripcion ,'error');
      }
    );
  }

  onToRowSelectEdit(modelo: PersonaModel) {
    this.router.navigate(['/main/modulo-se/persona-update', modelo.idPersona]);
  }


  onToRowSelectDelete(modelo: PersonaModel) {
    this.modeloEliminar = modelo;
    this.onConfirmDelete();
  }

  onToCreate() {
    this.router.navigate(['/main/modulo-se/persona-create']);
  }

  onConfirmDelete() {
    this.confirmationService.confirm({
        message: this.globalConstants.subTitleEliminar,
        header: this.globalConstants.titleEliminar,
        icon: 'pi pi-info-circle',
        acceptLabel: 'Si',
        rejectLabel: 'No',
        accept: () => {
          this.onToDelete();
        },
        reject: () => {
          swal.fire(this.globalConstants.msgCancelSummary, this.globalConstants.msgCancelDetail , 'warning');
        }
    });
  }

  onToDelete() {
    this.subscription = new Subscription();
    this.subscription = this.seguridadService.setDeletePersona(this.modeloEliminar)
    .subscribe((resp) => {
      this.listModelo = this.listModelo.filter(datafilter => datafilter.idPersona !== this.modeloEliminar.idPersona );
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
