import { Component, OnInit } from '@angular/core';
import { GlobalsConstants } from '../../../../models/globals-constants.modelo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BreadcrumbService } from '../../../../services/breadcrumb.service';
import { UmoService } from '../../services/umo.service';

@Component({
  selector: 'app-panel-residuos',
  templateUrl: './panel-residuos.component.html',
  styleUrls: ['./panel-residuos.component.css']
})
export class PanelResiduosComponent implements OnInit {
  // Name de los botones de accion
  globalConstants: GlobalsConstants = new GlobalsConstants();
  
  listModelo: any[];
  columnas: any;
  constructor(private readonly breadcrumbService: BreadcrumbService,
            private readonly umoService: UmoService) { }

  ngOnInit(): void {

    this.onHeaderGrilla();

    this.umoService.getListaResiduos().then(files => this.listModelo = files);
  }

  private onHeaderGrilla() {
    this.columnas = [
      { field: 'fecha', header: 'Fecha Registro' },
      { field: 'ordenAtencion', header: 'OA' },
      { field: 'paciente', header: 'Paciente' },
      { field: 'medicamento', header: 'Medicamento' },
      { field: 'cantidad', header: 'Cantidad' }
    ];
  }
}
