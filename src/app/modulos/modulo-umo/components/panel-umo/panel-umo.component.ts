import { Component, OnInit } from '@angular/core';
import { UmoService } from '../../services/umo.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LanguageService } from '../../../../services/language.service';
import { GlobalsConstants } from '../../../../models/globals-constants.modelo';
import { SelectItem } from 'primeng';
import { BreadcrumbService } from '../../../../services/breadcrumb.service';

@Component({
  selector: 'app-panel-umo',
  templateUrl: './panel-umo.component.html',
  styleUrls: ['./panel-umo.component.css']
})
export class PanelUmoComponent implements OnInit {
  // Titulo del componente
  titulo = 'Listado - Ordenes de Atención';
  listModelo: any[];
  listEstado: SelectItem[];
  listOrigen: SelectItem[];
  // Formulario
  formularioBusqueda: FormGroup;
  // Columnas
  columnas: any;
  // Name de los botones de accion
  globalConstants: GlobalsConstants = new GlobalsConstants();

  // Habilitar Opciones
  isHabilitarPreRegistro: boolean;
  isHabilitarRegistrarPreparacion: boolean;
  isHabilitarImprimir: boolean;
  isHabilitarListaResiduos: boolean;
  isHabilitarListarItems: boolean;
  isHabilitarRegistrarFaltante: boolean;

  constructor(private readonly umoService: UmoService,
              private readonly formBuilder: FormBuilder,
              public lenguageService: LanguageService,
              private readonly breadcrumbService: BreadcrumbService) { 
    this.breadcrumbService.setItems([
      { label: 'Módulo UMO' },
      { label: 'UMO', routerLink: ['modulo-um/panel-umo'] }
    ]);
  }

  ngOnInit(): void {
    
    this.onHeaderGrilla();
    this.buildForm();

    this.umoService.getListaOrdenesAtencion().then(files => this.listModelo = files);

    this.onListarEstado();
    this.onListarOrigen();
  }

  private buildForm() {
    this.formularioBusqueda = this.formBuilder.group({
      estado: [''],
      origen: [''],
      fecha: [new Date]
    });
  }

  private onHeaderGrilla() {
    this.columnas = [
      { field: 'estado', header: 'Estado' },
      { field: 'horaCita', header: 'Hora Registro' },
      // { field: 'ordenAtencion', header: 'OA' },
      { field: 'paciente', header: 'Paciente' },
      { field: 'diagnostico', header: 'Diagnostico' },
      { field: 'medicoTratante', header: 'Médico Tratante' }
    ];
  }

  onListarEstado(){
    this.umoService.getListaEstado().then(files => {
      this.listEstado = [];
      for (let item of files) {
        this.listEstado.push({ value: item.codigo.trim(), label: item.descripcion.trim() })
      }
    });
  }

  onListarOrigen(){
    this.umoService.getListaOrigen().then(files => {
      this.listOrigen = [];
      for (let item of files) {
        this.listOrigen.push({ value: item.codigo.trim(), label: item.descripcion.trim() })
      }
    });
  }

  goPreRegistro() {
    this.isHabilitarPreRegistro = !this.isHabilitarPreRegistro;
  }

  goRegistroPreparacion() {
    this.isHabilitarRegistrarPreparacion = !this.isHabilitarRegistrarPreparacion;
  }

  goListarResiduos() {

  }

  goListaItems() {

  }

  goRegistrarFaltante() {
    this.isHabilitarRegistrarFaltante = !this.isHabilitarRegistrarFaltante;
  }
}
