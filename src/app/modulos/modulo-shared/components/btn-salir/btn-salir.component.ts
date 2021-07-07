import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalsConstants } from '../../../../models/globals-constants.modelo';

@Component({
  selector: 'app-btn-salir',
  templateUrl: './btn-salir.component.html',
  styleUrls: ['./btn-salir.component.css']
})
export class BtnSalirComponent implements OnInit {

  // Identificador que tiene margen TOP
  @Input() isMargenTop: boolean;
  globalConstants: GlobalsConstants = new GlobalsConstants();

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  goSalir() {
    this.router.navigate(['/main/aliada/bienvenido']);
  }


}
