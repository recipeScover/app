import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../shared/services/auth-service.service";

@Component({
  selector: 'rsc-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm = new FormGroup({
     resetPasswordEmail: new FormControl('', Validators.required)
  });

  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }

}


