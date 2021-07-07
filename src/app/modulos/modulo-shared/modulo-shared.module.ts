import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPrimeNgModule } from './modulo-shared-primeng.module';
import { BtnSalirComponent } from './components/btn-salir/btn-salir.component';
import { LabelEstadoComponent } from './components/label-estado/label-estado.component';

@NgModule({
    declarations: [BtnSalirComponent,
        LabelEstadoComponent],
    imports: [ CommonModule, SharedPrimeNgModule ],
    exports: [BtnSalirComponent,
        LabelEstadoComponent],
    providers: [],
})
export class SahredModule {}