import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
//import mat material dialog
import {MatDialog} from '@angular/material/dialog';
// import Component of our material Dialog
import { Recipe, User, UserImg } from './user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /* Inserisco isLogged e email nel service per utilizzarli in tutta l'applicazione, basta importarlo nel costruttore */
  isLoggedIn = false;
  email : string = '';
  displayN: any;
  imgProf: string= 'url("../../../assets/user-profile.jpg")';
  userImg: any=[];
  userRecipe: Recipe[] | undefined;
  user: any;


  constructor(public firebaseAuth: AngularFireAuth, public router: Router, public afs: AngularFirestore, public dialog: MatDialog) { }


  //login -> signInWithEmailAndPassword()
  async signin(email:string,password: string){
    this.email = email; // assegno a this.email (variabile creata sopra) l'email inserita nel inputc
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res => {
      this.isLoggedIn = true; // sono loggato
      this.router.navigateByUrl('myHomePage');
      this.displayN= res.user?.displayName;
      this.user=res.user;

      this.getImg();
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
      this.userImg='';
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












  









//ChangePassword
//Al click si apre la dialog con alert
//Se si mi aggancio al changePassword altrimenti chiudo la dialog




changePassword(){
 this.resetPassword(this.email);
  this.logout();
  alert("Email received to change password");
}



getImg() {
  return this.afs.collection('imgProfile',ref => ref.where('user','==', this.email )).get();
}

update(dati: any, id:string) {
    this.afs.doc('imgProfile/' + id).update(dati);
}

createImg(userImg: any){
  return this.afs.collection('imgProfile').add(userImg);
}

deleteImg(userImg: UserImg){
  this.afs.doc('policies/' + userImg.id).delete();
}


deleteRecipe(id : string){
  this.afs.doc('userRecipe/' + id).delete();
}


createRecipe(ricetta: Recipe){
  return this.afs.collection('userRecipe').add(ricetta);
}

getRecipe() {
  return this.afs.collection('userRecipe',ref => ref.where('user','==', this.email )).get();
}




getData(){
  return this.getRecipe().subscribe(data => this.userRecipe = data.docs.map(e => {
    return {
     id: e.id,
     ... e.data() as any
    } as Recipe;
  }));
  

}




updateRecipe(dati: Recipe, id:string) {
  this.afs.doc('userRecipe/' + id).update(dati);
}



}
