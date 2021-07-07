import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PanelUmoComponent } from './components/panel-umo/panel-umo.component';


const routes: Routes = [
    { path: 'panel-umo', component: PanelUmoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UMORoutingModule {}
