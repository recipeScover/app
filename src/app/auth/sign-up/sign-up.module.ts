import { SignUpComponent } from './sign-up.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,ReactiveFormsModule,MaterialModule,AppRoutingModule
  ]
})
export class SignUpModule { }
