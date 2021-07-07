import { NgModule } from '@angular/core';

// Module PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [],
    exports: [ InputTextModule,
            ButtonModule],
    providers: [],
})
export class SharedPrimeNgModule {}