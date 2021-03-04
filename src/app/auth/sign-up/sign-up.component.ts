
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { AuthService } from "../../shared/services/auth-service.service";

/*
export enum FormStatus {
  Initial,
  Success,
  Pending,
  Error

}
*/


@Component({
  selector: 'rsc-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})




export class SignUpComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
  });

/*
  FormStatus = FormStatus;
  formStatus = FormStatus.Initial;
  message : any;
  windowRef: any;
  */
  isSignedIn = false;



  constructor( public authService: AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null){
      this.isSignedIn = true;
  } else {
    this.isSignedIn = false;
  }
  }


  async onSignup(email: string, password: string) {
    await this.authService.signup(email, password)
    if (this.authService.isLoggedIn) {
      this.isSignedIn = true;

    }
  }

  handleLogout() {
    this.isSignedIn = false;
  }



}

