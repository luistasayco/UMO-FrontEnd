import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  goValidarEmail(email)
  {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  }

  goConvertirMayuscula(data: string): string {

    data = data === null ? '': data;
    data = data === undefined ? '' : data;

    let mayus = data.toUpperCase();

    return mayus;

  }
}
