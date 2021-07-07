import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../layout.component';
import { UserContextService } from '../../services/user-context.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombre: string;
  imagen: string;

  isVisibleInformacionGeneral: boolean;

  constructor(public app: LayoutComponent,
              private readonly userContextService: UserContextService,
              private storageService: StorageService) { }

  ngOnInit(): void {
    this.profile();
  }

  profile() {
    this.nombre = this.storageService.getItemDecrypt('nombre');
    this.imagen = this.storageService.getItemDecrypt('imagen');
  }

  onDescargaDocumento(event: any) {
    
  }

  onLogout(event) {
    event.preventDefault();
    this.userContextService.logout();
  }

  onMuestraInformacionGeneral() {
    this.isVisibleInformacionGeneral = !this.isVisibleInformacionGeneral;
  }
}
