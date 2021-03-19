import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { ServiceRscService } from 'src/app/model/service-rsc.service';
// import MAT_DIALOG_DATA to import our params
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import {ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Recipe } from '../services/user';


@Component({
  selector: 'rsc-course-dialog-component',
  templateUrl: './course-dialog-component.component.html',
  styleUrls: ['./course-dialog-component.component.scss']
})
export class CourseDialogComponentComponent implements OnInit {

  selectedMeal: any;
  ingredients: any;
  public showContent: boolean = false;


ricetta: Recipe| undefined;

  /* grid,card and responsive */



  //to implements mobile view
  public isMobile: boolean = false;

  // definition all type of card (heigth and width variable into grid in html)
  cards = this.breakpointObserver.observe(Breakpoints.TabletLandscape).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
           // definition card responsive
          { title: 'Card 1', cols: 1, rows: 1 },
        ];
      }
   
      return [
             // definition card with title and how space take in the grid html
         { title: 'Card 1', cols: 1, rows: 1 },
     
      ];
    })
  );



  cards1 = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
           // definition card responsive
          { title: 'Card 1', cols: 1, rows: 1 },
        ];
      }
   
      return [
             // definition card with title and how space take in the grid html
         { title: 'Card 1', cols: 4, rows: 1 },
     
      ];
    })
  ); //.pipe

  cards2 = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
           // definition card responsive
          { title: 'Card 1', cols: 1, rows: 1 },
        ];
      }
   
      return [
             // definition card with title and how space take in the grid html
         { title: 'Card 1', cols: 5, rows: 2 },
     
      ];
    })
  );


  cards3 = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
           // definition card responsive
          { title: 'Card 1', cols: 1, rows: 1 },
        ];
      }
   
      return [
             // definition card with title and how space take in the grid html
         { title: 'Card 1', cols: 5, rows: 1 },
     
      ];
    })
  );



url: any;



  constructor(

//  take our data by injection data = data arrived from CategoryDetailComponent
    @Inject(MAT_DIALOG_DATA) public data: any, private serviceRscService : ServiceRscService, 
    public dialog: MatDialog, private breakpointObserver: BreakpointObserver, public dialogRef: MatDialogRef<any>,
    private sanitizer: DomSanitizer
 ) { 

   //to implements responsive dashbord grid
   breakpointObserver.observe([
    '(max-width: 900px)'
  ]).subscribe(result => {
    this.isMobile = result.matches;
  });

   }

  ngOnInit(): void {
    this.dialogRef.updateSize('80%', '80%');
    // will log the entire data object



if(this.data.id){
  this.serviceRscService.getIdMeal(this.data.id).pipe(
    map( data => 
      data.meals.map(element => {
        if(element.strYoutube || element.strYoutube!=""){
        element.strYoutube=element.strYoutube.replace("https://www.youtube.com/watch?v=",'https://www.youtube.com/embed/');
        element.strYoutube = this.sanitizer.bypassSecurityTrustResourceUrl(element.strYoutube);
        }
        return element;
      }
      )
      )
    ).subscribe(dataReceived => 
    this.selectedMeal = dataReceived)

}else{
    this.ricetta=this.data.ricetta;
}
  }
  
}

  

