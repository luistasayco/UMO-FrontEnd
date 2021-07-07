import { Injectable } from '@angular/core';
import { ButtonAcces } from '../models/acceso-button.model';
import { Observable } from 'rxjs';
import { MenuModel } from '../modulos/modulo-seguridad/models/menu.model';
import { StorageService } from './storage.service';
import { OpcionModel } from '../modulos/modulo-seguridad/models/opcion.model';

@Injectable({
  providedIn: 'root'
})
export class AccesoOpcionesService {

  private buttonAcces: ButtonAcces = new ButtonAcces();
  private listOpcion: OpcionModel[];

  constructor(private storageService: StorageService) { }

  // Se tiene que mejorar el acceso a las opciones
  // http://blog.enriqueoriol.com/2017/08/angular-dom-renderer.html
  // https://pablolazaro.github.io/2016/10/13/Angular-2-Controlando-componentes-hijos-con-ViewChild-y-ViewChildren/
  getObtieneOpciones(nombreFormulario: string): ButtonAcces {
    this.buttonAcces = new ButtonAcces();
    this.listOpcion = [];
    if (this.storageService.getItem('menu-opciones')){
      let data: MenuModel[] = this.storageService.getItem('menu-opciones');


      console.log('data', data);

      this.listOpcion  = [...data].find(x => x.nombreFormulario === nombreFormulario).listaOpciones;

          this.listOpcion.forEach(element => {
            if (element.keyOpcion === 'btn-nuevo') {
              this.buttonAcces.btnNuevo = false;
            }
            if (element.keyOpcion === 'btn-editar') {
              this.buttonAcces.btnEditar = false;
            }
            if (element.keyOpcion === 'btn-eliminar') {
              this.buttonAcces.btnEliminar = false;
            }
            if (element.keyOpcion === 'btn-cerrar') {
              this.buttonAcces.btnCerrar = false;
            }
            if (element.keyOpcion === 'btn-grabar') {
              this.buttonAcces.btnGrabar = false;
            }
            if (element.keyOpcion === 'btn-menu-hijo') {
              this.buttonAcces.btnMenuHijo = false;
            }
            if (element.keyOpcion === 'btn-menu-padre') {
              this.buttonAcces.btnMenuPadre = false;
            }
            if (element.keyOpcion === 'btn-pdf') {
              this.buttonAcces.btnPDF = false;
            }
            if (element.keyOpcion === 'btn-download') {
              this.buttonAcces.btnDownload = false;
            }
            if (element.keyOpcion === 'btn-visualizar') {
              this.buttonAcces.btnVisualizar = false;
            }
            if (element.keyOpcion === 'btn-adicionar-eliminar') {
              this.buttonAcces.btnAdicionarEliminar = false;
            }
          });
    }

    

    return this.buttonAcces;
  }
}
