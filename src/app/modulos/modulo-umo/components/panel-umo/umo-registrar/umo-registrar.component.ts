import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GlobalsConstants } from '../../../../../models/globals-constants.modelo';
import { BreadcrumbService } from '../../../../../services/breadcrumb.service';
import { UmoService } from '../../../services/umo.service';

@Component({
  selector: 'app-umo-registrar',
  templateUrl: './umo-registrar.component.html',
  styleUrls: ['./umo-registrar.component.css']
})
export class UmoRegistrarComponent implements OnInit {
  // Name de los botones de accion
  globalConstants: GlobalsConstants = new GlobalsConstants();
  // Formulario
  formularioCabecera: FormGroup;

  // Columnas de Detalle de medicamentos
  columnas: any;
  columnasHistorial: any;
  listModelo: any[];
  listModeloHistorial: any[];

  isHabilitarItems: boolean;
  isHabilitarResiduos: boolean;
  isHabilitarPacienteNuevo: boolean;
  isHabilitarMedicoNuevo: boolean;
  isHabilitarMedicamentoNotaSalida: boolean;

  constructor(private readonly fb: FormBuilder,
              private readonly breadcrumbService: BreadcrumbService,
              private readonly umoService: UmoService) { 
    this.breadcrumbService.setItems([
      { label: 'Módulo UMO' },
      { label: 'UMO', routerLink: ['modulo-um/panel-umo'] }
    ]);
  }

  ngOnInit(): void {
    this.buildForm();

    this.onHeaderGrilla();

    this.umoService.getListaMedicamento().then(files => this.listModelo = files);

    this.umoService.getListaHistorial().then(files => this.listModeloHistorial = files);
  }

  private buildForm() {
    this.formularioCabecera = this.fb.group({
      codigoclinica: [{value: null, disabled: true}],
      clinica: [{value: null, disabled: true}],
      creatinina: [{value: null, disabled: true}],
      depuracioncreatinina: [{value: null, disabled: false}],
      codigopaciente: [{value: null, disabled: true}],
      paciente: [{value: null, disabled: false}],
      codigodiagnostico: [{value: null, disabled: true}],
      diagnostico: [{value: null, disabled: true}],
      talla: [{value: null, disabled: true}],
      peso: [{value: null, disabled: true}],
      superficiecorporal: [{value: null, disabled: true}],
      codigomedico: [{value: null, disabled: true}],
      medico: [{value: null, disabled: false}],
      estado: [{value: null, disabled: true}],
      esquema: [{value: null, disabled: true}],
      usuarioregistro: [{value: null, disabled: true}],
      fecharegistro: [{value: new Date(), disabled: true}],
      usuariopreparado: [{value: null, disabled: true}],
      fechapreparado: [{value: null, disabled: true}],
      horainicio: [{value: null, disabled: true}],
      horafin: [{value: null, disabled: true}],
      usuarioultmodif: [{value: null, disabled: true}],
      fechaultmodif: [{value: null, disabled: true}],
      motivo: [{value: null, disabled: true}],
      observacionregistro: [{value: null, disabled: false}],
      observacionpreparado: [{value: null, disabled: false}],
    });

  }

  private onHeaderGrilla() {
    this.columnas = [
      { field: 'a', header: 'A.' },
      { field: 'estado', header: 'Estado Prod.' },
      { field: 'medicamento', header: 'Medicamento' },
      { field: 'cantidad', header: 'Cantidad' },
      { field: 'dosis', header: 'Dosis' },
      { field: 'dosisReal', header: 'Dosis Real' },
      { field: 'solucion', header: 'Solución' },
      { field: 'cretatina', header: 'Cretatina' },
      { field: 'depuracioncretatina', header: 'Dep. Cretatina' },
      { field: 'estabilidad', header: 'Estabilidad' },
      { field: 'via', header: 'Vía' }
    ];

    this.columnasHistorial = [
      { field: 'linea', header: 'Linea' },
      { field: 'concepto', header: 'Concepto' },
      { field: 'fecha', header: 'Fecha' },
      { field: 'usuario', header: 'Usuario' },
      { field: 'observaciones', header: 'Observaciones' }
    ];
  }

  goListarItems() {
    this.isHabilitarItems = !this.isHabilitarItems;
  }

  goListarResiduos() {
    this.isHabilitarResiduos = !this.isHabilitarResiduos;
  }

  goRegistrarPacienteNuevo() {
    this.isHabilitarPacienteNuevo = !this.isHabilitarPacienteNuevo;
  }

  goRegistrarMedicoNuevo() {
    this.isHabilitarMedicoNuevo = !this.isHabilitarMedicoNuevo;
  }

  goRegistrarMedicamentoNotaSalida () {
    this.isHabilitarMedicamentoNotaSalida = !this.isHabilitarMedicamentoNotaSalida;
  }
}
