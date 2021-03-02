import { ForgotPasswordComponent } from './forgot-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,ReactiveFormsModule,MaterialModule,AppRoutingModule
  ]
})
export class ForgotPasswordModule { }
