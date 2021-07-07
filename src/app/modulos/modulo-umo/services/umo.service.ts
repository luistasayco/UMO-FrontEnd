import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UmoService {

  constructor(private http: HttpClient) { }

  // Data de Pruebas
  getListaOrdenesAtencion() {
    return this.http.get<any>('assets/data/list-orden-atencion.json')
                  .toPromise()
                  .then(res => res.data as any[])
                  .then(data => data);
  }

  getListaMedicamento() {
    return this.http.get<any>('assets/data/list-medicamento.json')
                  .toPromise()
                  .then(res => res.data as any[])
                  .then(data => data);
  }

  getListaHistorial() {
    return this.http.get<any>('assets/data/list-historial.json')
                  .toPromise()
                  .then(res => res.data as any[])
                  .then(data => data);
  }

  getListaFaltante() {
    return this.http.get<any>('assets/data/list-faltante.json')
                  .toPromise()
                  .then(res => res.data as any[])
                  .then(data => data);
  }

  getListaResiduos() {
    return this.http.get<any>('assets/data/list-residuos.json')
                  .toPromise()
                  .then(res => res.data as any[])
                  .then(data => data);
  }

  getListaEstado() {
    return this.http.get<any>('assets/data/list-estado.json')
                  .toPromise()
                  .then(res => res.data as any[])
                  .then(data => data);
  }

  getListaOrigen() {
    return this.http.get<any>('assets/data/list-origen.json')
                  .toPromise()
                  .then(res => res.data as any[])
                  .then(data => data);
  }

}
