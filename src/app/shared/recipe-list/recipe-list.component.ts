import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { Recipe } from '../services/user';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddRecipeComponent } from '../dialog-add-recipe/dialog-add-recipe.component';
import { CourseDialogComponentComponent } from '../course-dialog-component/course-dialog-component.component';
import { DialogConfirmDeleteComponent } from '../dialog-confirm-delete/dialog-confirm-delete.component';




@Component({
  selector: 'rsc-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  constructor(public authService: AuthService, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.authService.getData();
  }



openDialogUpdate(ricetta: Recipe){
  this.matDialog.open(DialogAddRecipeComponent, {
    data: {
      ricetta: ricetta
    },
   disableClose: true
  });
}
openDialogDetail(ricetta: Recipe){
  this.matDialog.open(CourseDialogComponentComponent, {
    data: {
      ricetta: ricetta
    }
  });

}
openDialogConfirm(id: string){
  this.matDialog.open(DialogConfirmDeleteComponent, {
    data:{
      id: id
    }
  } )
}





}

