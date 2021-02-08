import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceRscService } from 'src/app/model/service-rsc.service';
import { distinct, map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
//import mat material dialog
import {MatDialog} from '@angular/material/dialog';
// import Component of our material Dialog
import { CourseDialogComponentComponent } from 'src/app/shared/course-dialog-component/course-dialog-component.component';

@Component({
  selector: 'rsc-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  selectedCategory : any;
  selectedDescriptionCat: any;



  //to implements mobile view
  public isMobile: boolean = false;

  // definition all type of card (heigth and width variable into grid in html)
  // Handset is for device selected (responsive/rotate device)
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          // definition card with title and how space take in the grid html
          { title: 'Card 1', cols: 1, rows: 1 }
        ];
      }
   
      return [
        { title: 'Card 1', cols: 1, rows: 1 }  
      ];
    })
  );

  cardsOne = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          // definition card with title and how space take in the grid html
          { title: 'Card 1', cols: 1, rows: 1 }
        ];
      }
   
      return [
        { title: 'Card 1', cols: 5, rows: 1 }  
      ];
    })
  );




  //in costructor add matDialog to work
  constructor(private serviceRscService : ServiceRscService, private activatedRoute: ActivatedRoute,  private breakpointObserver: BreakpointObserver, public dialog: MatDialog) { 
       //to implements responsive dashbord grid
       breakpointObserver.observe([
        '(max-width: 900px)'
      ]).subscribe(result => {
        this.isMobile = result.matches;
      });
  }

 
// open dialog with data
  openDialog(idSelected: any) {
    this.dialog.open(CourseDialogComponentComponent, {
      data: {
        id: idSelected
      }
    });
  }

  ngOnInit(): void {
   this.serviceRscService.getFilterByCategory(this.activatedRoute.snapshot.paramMap.get('name')).subscribe(data =>  this.selectedCategory = data);
  

   //Service to get only category selected from homePage, to take description
   this.serviceRscService.getAllCategoriesTwo().pipe(
    map(data => 
      data.categories.find(name => name.strCategory === this.activatedRoute.snapshot.paramMap.get('name'))
    )
   ).subscribe(
     res => this.selectedDescriptionCat= res
   )

  }

}
