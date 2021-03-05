import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
//import mat material dialog
import {MatDialog} from '@angular/material/dialog';
// import Component of our material Dialog
import { InsertDisplayNameComponent } from '../../shared/insert-display-name/insert-display-name.component'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /* Inserisco isLogged e email nel service per utilizzarli in tutta l'applicazione, basta importarlo nel costruttore */
  isLoggedIn = false;
  email : string = '';
  displayN: any;


  constructor(public firebaseAuth: AngularFireAuth, public router: Router, public afs: AngularFirestore, public dialog: MatDialog) { }


  //login -> signInWithEmailAndPassword()
  async signin(email:string,password: string){
    this.email = email; // assegno a this.email (variabile creata sopra) l'email inserita nel inputc
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res => {
      this.isLoggedIn = true; // sono loggato
      this.router.navigateByUrl('myHomePage');
      this.displayN= res.user?.displayName;

      if(res.user?.displayName == null || res.user?.displayName==''){
        this.openDialog();
      }
      localStorage.setItem('user',JSON.stringify(res.user))
      alert("You are logged!!!!");

    }).catch((error) => {
      alert(error);
    });
  }


  //regiter -> createUserWithEmailAndPassword()
  async signup(email:string,password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res => {
      this.router.navigateByUrl('sign-in');
      localStorage.setItem('user',JSON.stringify(res.user))
      alert("Great,You signed up, now you can log in");
    }).catch((error) => {
      alert(error);
    });
  }



  openDialog() {
    this.dialog.open(InsertDisplayNameComponent, { disableClose: true });
  }
  closeDialog() {
    this.dialog.closeAll();
  }



  addDisplayName( username: string){
    var user = firebase.auth().currentUser;
    if(user){
    user.updateProfile({
      displayName: username
    }).then(function(response) {
    }, function(error) {
      //Error
      console.log(error);
    });
  }
  this.displayN= username;
  this.closeDialog();
}





  // logout
  logout(){
    this.firebaseAuth.signOut().then(() => {
      this.router.navigateByUrl('sign-in');
      localStorage.removeItem('user');
      this.displayN='';
      this.isLoggedIn = false;
      this.email = '';
    }).catch((error) => {
      alert(error);
    });
  }


// reset password

async resetPassword(email: string) {
  await this.firebaseAuth.sendPasswordResetEmail(email)
    .then(resp => {
      alert('message sent!');
      this.router.navigateByUrl('sign-in')
    })
    .catch(error => {
      alert(error);
    });
}


}
