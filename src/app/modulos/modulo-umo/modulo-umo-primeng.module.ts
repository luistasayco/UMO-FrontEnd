import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';

@NgModule({
    declarations: [],
    exports: [ InputTextModule,
            ButtonModule,
            ToastModule,
            TableModule,
            MessageModule,
            MessagesModule,
            PanelModule,
            InputTextareaModule,
            CheckboxModule,
            DropdownModule,
            DialogModule,
            ProgressBarModule,
            CalendarModule,
            CardModule],
    providers: [],
})
export class UMOPrimeNgModule {}