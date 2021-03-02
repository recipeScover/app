import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /* Inserisco isLogged e email nel service per utilizzarli in tutta l'applicazione, basta importarlo nel costruttore */
  isLoggedIn = false;
  email : string = '';


  constructor(public firebaseAuth: AngularFireAuth, public router: Router, public afs: AngularFirestore) { }


  //login -> signInWithEmailAndPassword()
  async signin(email:string,password: string){
    this.email = email; // assegno a this.email (variabile creata sopra) l'email inserita nel input
    console.log(email,password);
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res => {
      this.isLoggedIn = true; // sono loggato
      this.router.navigateByUrl('home');
      localStorage.setItem('user',JSON.stringify(res.user))
      alert("You are logged!!!!");
    })
  }


  //regiter -> createUserWithEmailAndPassword()
  async signup(email:string,password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res => {
      this.router.navigateByUrl('sign-in');
      localStorage.setItem('user',JSON.stringify(res.user))
      alert("Great,You signed up, now you can log in");
    })
  }

  // logout
  logout(){
    this.firebaseAuth.signOut().then(() => {
      this.router.navigateByUrl('sign-in');
      localStorage.removeItem('user')
    }).catch((error) => {
      alert(error);
    });
  }

}
