import { Component, Input, OnInit } from '@angular/core';
import { EstadoService } from '../../services/estado.service';

@Component({
  selector: 'app-label-estado',
  templateUrl: './label-estado.component.html',
  styleUrls: ['./label-estado.component.css']
})
export class LabelEstadoComponent implements OnInit {

  @Input() isEstado: string;
  constructor(private estadoService: EstadoService) { }

  ngOnInit(): void {
  }

  goGetClassEstadoVenta() : string {
    return this.estadoService.estadoVenta(this.isEstado.trim());
  }

}
