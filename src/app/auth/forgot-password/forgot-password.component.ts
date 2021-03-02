import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../shared/services/auth-service.service";

@Component({
  selector: 'rsc-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  emailError = "Email cannot be empty";

  forgotPasswordForm = new FormGroup({
     resetPasswordEmail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  });

  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }

}


