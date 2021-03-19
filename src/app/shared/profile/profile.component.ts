import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { UserImg } from '../services/user';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import {MatDialog} from '@angular/material/dialog';
import { DialogProfilImgComponent } from '../dialog-profil-img/dialog-profil-img.component';
import { InsertDisplayNameComponent } from '../insert-display-name/insert-display-name.component';
@Component({
  selector: 'rsc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router, public matDialog: MatDialog) { }


  url="url('"
  apice="')"




  ngOnInit(): void {
    this.authService.getImg().subscribe(data => this.authService.userImg = data.docs.map(e => {
      return {
       id: e.id,
       ... e.data() as any
      } as UserImg;
    }));
    if(this.authService.user?.displayName == null || this.authService.user?.displayName==''){
      this.openDialog();
    }



  }

  changePassword(){
    this.router.navigateByUrl('forgot-password');

  }




  openDialogChangePsw() {
    this.matDialog.open(ChangePasswordComponent, { disableClose: true });
  }
  openDialogChangeImg() {
    this.matDialog.open(DialogProfilImgComponent);
  }

  openDialog(){
    this.matDialog.open(InsertDisplayNameComponent)
  }

}
