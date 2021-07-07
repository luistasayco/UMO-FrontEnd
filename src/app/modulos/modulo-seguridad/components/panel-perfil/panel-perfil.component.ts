import { Component, OnInit, OnDestroy } from '@angular/core';
import { PerfilModel } from '../../models/pefil.model';
import { SeguridadService } from '../../services/seguridad.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng';
import { BreadcrumbService } from '../../../../services/breadcrumb.service';
import { Subscription } from 'rxjs';
import { ButtonAcces } from '../../../../models/acceso-button.model';
import { GlobalsConstants } from '../../../../models/globals-constants.modelo';
import { AccesoOpcionesService } from '../../../../services/acceso-opciones.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-panel-perfil',
  templateUrl: './panel-perfil.component.html',
  styleUrls: ['./panel-perfil.component.css']
})
export class PanelPerfilComponent implements OnInit, OnDestroy {

  // Titulo del componente
  titulo = 'Perfil';
  // Acceso de botones
  buttonAcces: ButtonAcces = new ButtonAcces();
  // Name de los botones de accion
  globalConstants: GlobalsConstants = new GlobalsConstants();

  // Opcion Buscar
  descripcionFind = '';
  modeloFind: PerfilModel;
  listModelo: PerfilModel[];

  columnas: any[];

  // Opcion Editar
  modelocloned: { [s: string]: PerfilModel; } = {};

  // Opcion Eliminar
  modeloEliminar: PerfilModel;

  subscription: Subscription;

  constructor(private seguridadService: SeguridadService,
              private router: Router,
              private confirmationService: ConfirmationService,
              private breadcrumbService: BreadcrumbService,
              private accesoOpcionesService: AccesoOpcionesService) {
                this.breadcrumbService.setItems([
                    { label: 'Módulo Seguridad' },
                    { label: 'Perfil', routerLink: ['modulo-se/panel-perfil'] }
                ]);
              }

  ngOnInit() {
    this.columnas = [
      { header: 'Codigo' },
      { header: 'Descripcion' },
      { header: 'Activo' }
    ];
    this.buttonAcces = this.accesoOpcionesService.getObtieneOpciones('app-panel-perfil');
    this.onListar();
  }

  onToBuscar() {
    this.onListar();
  }

  onListar() {

    this.modeloFind = {descripcionPerfil: this.descripcionFind};
    this.subscription = new Subscription();
    this.subscription = this.seguridadService.getPerfil(this.modeloFind)
    .subscribe(resp => {
      if (resp) {
          this.listModelo = resp;
        }
      },
      (error) => {
        swal.fire(this.globalConstants.msgErrorSummary, error.error.resultadoDescripcion ,'error');
      }
    );
  }

  onRowEditInit(modelo: PerfilModel) {
    this.modelocloned[modelo.idPerfil] = {...modelo};
  }

  onRowEditSave(modelo: PerfilModel) {
    this.subscription = new Subscription();
    this.subscription = this.seguridadService.setUpdatePerfil(modelo)
    .subscribe((resp) => {
      delete this.modelocloned[modelo.idPerfil];
      swal.fire(this.globalConstants.msgExitoSummary, this.globalConstants.msgExitoDetail , 'success');
    },
      (error) => {
        swal.fire(this.globalConstants.msgErrorSummary, error.error.resultadoDescripcion ,'error');
      });
  }

  onRowEditCancel(modelo: PerfilModel, index: number) {
    this.listModelo[index] = this.modelocloned[modelo.idPerfil];
    delete this.modelocloned[modelo.idPerfil];
  }

  onToRowSelectDelete(modelo: PerfilModel) {
    this.modeloEliminar = modelo;
    this.onConfirmDelete();
  }

  onToCreate() {
    this.router.navigate(['/main/modulo-se/perfil-create']);
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
    this.subscription = this.seguridadService.setDeletePerfil(this.modeloEliminar)
    .subscribe((resp) => {
      this.listModelo = this.listModelo.filter(datafilter => datafilter.idPerfil !== this.modeloEliminar.idPerfil );
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
