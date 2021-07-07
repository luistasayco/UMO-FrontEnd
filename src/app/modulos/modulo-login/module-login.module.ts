import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './modulo-login-routing.module';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [ CommonModule, LoginRoutingModule, ReactiveFormsModule, MessageModule, MessagesModule, DialogModule, ProgressBarModule, DropdownModule],
    exports: [],
    providers: [MessageService],
})
export class LoginModule {}