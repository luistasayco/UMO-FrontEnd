import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GlobalsConstants } from '../../../../models/globals-constants.modelo';
import { BreadcrumbService } from '../../../../services/breadcrumb.service';
import { UmoService } from '../../services/umo.service';

@Component({
  selector: 'app-panel-faltante',
  templateUrl: './panel-faltante.component.html',
  styleUrls: ['./panel-faltante.component.css']
})
export class PanelFaltanteComponent implements OnInit {
  // Name de los botones de accion
  globalConstants: GlobalsConstants = new GlobalsConstants();
  // Formulario
  formularioCabecera: FormGroup;

  listModelo: any[];
  columnas: any;

  isHabilitarItems: boolean;

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
      usuario: [''],
      nota: ['']
    });
  }

  private onHeaderGrilla() {
    this.columnas = [
      { field: 'item', header: 'Item' },
      { field: 'descripcion', header: 'Descripción' },
      { field: 'cantidad', header: 'Cantidad' }
    ];
  }

  goListarItems() {
    this.isHabilitarItems = !this.isHabilitarItems;
  }

}
