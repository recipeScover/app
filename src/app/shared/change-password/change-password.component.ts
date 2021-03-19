import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'rsc-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {


  constructor(public authService: AuthService, public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  changePassword(){
    this.authService.changePassword();
    this.closeDialog();
  }
  closeDialog() {
    this.matDialog.closeAll();
  }


}
