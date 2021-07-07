import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './modulos/modulo-login/components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [ {path: 'login',  component: LoginComponent},
{path: 'main',
  component: LayoutComponent,
  children: [
    { path: 'aliada' , loadChildren:
    () => import('./modulos/modulo-page-bienvenida/modulo-page-bienvenida.module').then(m => m.PageBienvenidaModule),
      canActivate: [AuthGuard]},
    { path: 'dashboard' , loadChildren:
    () => import('./modulos/modulo-dashboard/components/dashboard/dashboard.module').then(m => m.DashboardModule),
      canActivate: [AuthGuard]},
    { path: 'modulo-se' , loadChildren:
    () => import('./modulos/modulo-seguridad/modulo-seguridad.module').then(m => m.SeguridadModule),
      canActivate: [AuthGuard]},
    { path: 'modulo-um' , loadChildren:
    () => import('./modulos/modulo-umo/modulo-umo.module').then(m => m.UMOModule),
      canActivate: [AuthGuard]},
  ]
},
{ path: '', redirectTo: 'login', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
