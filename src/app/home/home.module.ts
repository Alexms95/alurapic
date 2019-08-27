import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormGroup } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [ SigninComponent ],
    imports: [ 
        ReactiveFormsModule,
        CommonModule,
        VmessageModule,
        RouterModule,
        BrowserAnimationsModule,
        MatButtonModule
    ]
})
export class HomeModule{}