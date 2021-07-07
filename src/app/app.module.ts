import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './layout/config/config.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HeaderBreadcrumbComponent } from './layout/header-breadcrumb/header-breadcrumb.component';
import { MenuComponent } from './layout/menu/menu.component';
import { MenuitemComponent } from './layout/menu/menuitem/menuitem.component';
import { DomSeguroImagenBase64Pipe } from './pipes/dom-seguro-imagen-base64.pipe';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule, InputSwitchModule, ProgressBarModule, TabViewModule } from 'primeng';
import { HeaderInterceptorService } from './interceptor/header-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeguridadModule } from './modulos/modulo-seguridad/modulo-seguridad.module';
import { LoginModule } from './modulos/modulo-login/module-login.module';
import localePy from '@angular/common/locales/es';

registerLocaleData(localePy, 'es');

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    FooterComponent,
    HeaderComponent,
    HeaderBreadcrumbComponent,
    MenuComponent,
    LayoutComponent,
    MenuitemComponent,
    DomSeguroImagenBase64Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ProgressBarModule,
    InputSwitchModule,
    TabViewModule,
    LoginModule,
    SeguridadModule,
    DialogModule
  ],
  providers: [DatePipe,
            { provide: LOCALE_ID, useValue: 'es' },
            { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }


