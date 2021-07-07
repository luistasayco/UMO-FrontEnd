import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelUmoComponent } from './components/panel-umo/panel-umo.component';
import { UMOPrimeNgModule } from './modulo-umo-primeng.module';
import { UMORoutingModule } from './modulo-umo-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SahredModule } from '../modulo-shared/modulo-shared.module';
import { UmoRegistrarComponent } from './components/panel-umo/umo-registrar/umo-registrar.component';
import { PanelFaltanteComponent } from './components/panel-faltante/panel-faltante.component';
import { PanelItemsComponent } from './components/panel-items/panel-items.component';
import { PanelResiduosComponent } from './components/panel-residuos/panel-residuos.component';
import { PanelPacienteComponent } from './components/panel-paciente/panel-paciente.component';
import { PanelMedicoComponent } from './components/panel-medico/panel-medico.component';
import { PanelMedicamentoNotaSalidaComponent } from './components/panel-medicamento-nota-salida/panel-medicamento-nota-salida.component';

@NgModule({
    declarations: [PanelUmoComponent,
        UmoRegistrarComponent,
        PanelFaltanteComponent,
        PanelItemsComponent,
        PanelResiduosComponent,
        PanelPacienteComponent,
        PanelMedicoComponent,
        PanelMedicamentoNotaSalidaComponent],
    imports: [ CommonModule, UMOPrimeNgModule, UMORoutingModule, FormsModule, ReactiveFormsModule, SahredModule ],
    exports: [],
    providers: [],
})
export class UMOModule {}