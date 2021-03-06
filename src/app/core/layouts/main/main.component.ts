import { AuthService } from './../../../shared/services/auth-service.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddRecipeComponent } from 'src/app/shared/dialog-add-recipe/dialog-add-recipe.component';


@Component({
  selector: 'rsc-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  // se è mobile Breakpoints.Handset
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public authService : AuthService, public matDialog: MatDialog) {}

  
  openDialogAddRecipe() {
    this.matDialog.open(DialogAddRecipeComponent, { disableClose: true });
  }



}
