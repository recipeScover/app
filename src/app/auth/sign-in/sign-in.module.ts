import { SignInComponent } from './sign-in.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { Router } from '@angular/router';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,ReactiveFormsModule,MaterialModule,AppRoutingModule
  ]
})
export class SignInModule {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', Validators.required]
  });


  constructor(public authService: AuthService, private router: Router, public fb: FormBuilder) { }


}
