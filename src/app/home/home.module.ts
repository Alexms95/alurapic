import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormGroup, FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [ 
        SigninComponent,
        SignupComponent
     ],
    imports: [ 
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        VmessageModule,
        RouterModule,
        BrowserAnimationsModule,
        MatButtonModule
    ]
})
export class HomeModule{}