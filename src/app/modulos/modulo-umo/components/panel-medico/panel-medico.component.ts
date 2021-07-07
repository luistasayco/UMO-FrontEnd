import { Component, OnInit } from '@angular/core';
import { GlobalsConstants } from '../../../../models/globals-constants.modelo';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-panel-medico',
  templateUrl: './panel-medico.component.html',
  styleUrls: ['./panel-medico.component.css']
})
export class PanelMedicoComponent implements OnInit {
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
      cmp: [''],
      apellidoPaterno: [''],
      apellidoMaterno: [''],
      nombres: ['']
    });
  }
}
