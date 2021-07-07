import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  public estadoVenta(estado: string): string {
    switch (estado) {
      case 'ANULADO':
        return 'estado_anulado';
        break;
      case 'REGISTRADO':
        return 'estado_registrado';
        break;
      case 'PREPARADO':
        return 'estado_preparado';
        break;
      case 'INCOMPLETO':
        return 'estado_incompleto';
        break;
      case 'PENDIENTE':
        return 'estado_pendiente';
        break;
      default:
        return null;
        break;
    }
  }
}
