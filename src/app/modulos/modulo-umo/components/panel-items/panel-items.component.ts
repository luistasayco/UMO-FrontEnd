import { Component, OnInit } from '@angular/core';
import { GlobalsConstants } from '../../../../models/globals-constants.modelo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BreadcrumbService } from '../../../../services/breadcrumb.service';
import { UmoService } from '../../services/umo.service';

@Component({
  selector: 'app-panel-items',
  templateUrl: './panel-items.component.html',
  styleUrls: ['./panel-items.component.css']
})
export class PanelItemsComponent implements OnInit {
  // Name de los botones de accion
  globalConstants: GlobalsConstants = new GlobalsConstants();
  // Formulario
  formularioCabecera: FormGroup;
  
  listModelo: any[];
  columnas: any;
  constructor(private readonly fb: FormBuilder,
            private readonly breadcrumbService: BreadcrumbService,
            private readonly umoService: UmoService) { }

  ngOnInit(): void {

    this.buildForm();
    this.onHeaderGrilla();

    this.umoService.getListaFaltante().then(files => this.listModelo = files);
  }

  private buildForm() {
    this.formularioCabecera = this.fb.group({
      linea: [''],
      familia: [''],
      subfamilia: [''],
      codigo: [''],
      descripcion: ['']
    });
  }

  private onHeaderGrilla() {
    this.columnas = [
      { field: 'item', header: 'Item' },
      { field: 'descripcion', header: 'Descripción' },
      { field: 'cantidad', header: 'Cantidad' }
    ];
  }

}
