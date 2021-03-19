import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'rsc-dialog-confirm-delete',
  templateUrl: './dialog-confirm-delete.component.html',
  styleUrls: ['./dialog-confirm-delete.component.scss']
})
export class DialogConfirmDeleteComponent implements OnInit {


  id: any;
  constructor(public matDialog: MatDialog,  @Inject(MAT_DIALOG_DATA) public getId: string, public authService: AuthService) { 
    this.id=getId;
  }

  ngOnInit(): void {

  }

  fine(){
    this.authService.deleteRecipe(this.id.id);
    setTimeout(()=>{this.authService.getData()}, 1000);
    this.authService.closeDialog();
  }
  
  
}
