import { Component, OnInit } from '@angular/core';
import { GlobalsConstants } from '../../../../models/globals-constants.modelo';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-panel-paciente',
  templateUrl: './panel-paciente.component.html',
  styleUrls: ['./panel-paciente.component.css']
})
export class PanelPacienteComponent implements OnInit {
  // Name de los botones de accion
  globalConstants: GlobalsConstants = new GlobalsConstants();
  // Formulario
  formularioCabecera: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.formularioCabecera = this.formBuilder.group({
      tipoDocumento: [''],
      documentoIdentidad: [''],
      apellidoPaterno: [''],
      apellidoMaterno: [''],
      nombres: [''],
      diagnostico: [''],
      talla: [''],
      peso: ['']
    });
  }

}
