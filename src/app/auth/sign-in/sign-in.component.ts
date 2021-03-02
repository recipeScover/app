import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth-service.service";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'rsc-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {

  emailError = "Email cannot be empty";
  passwordError = "Password cannot be empty"

  isSignedIn = false;




  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', Validators.required]
  });

  constructor(public authService: AuthService, private router: Router, public fb: FormBuilder) { }


  ngOnInit() {

}


}

