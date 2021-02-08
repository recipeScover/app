import { Component, OnInit } from '@angular/core';
import { ServiceRscService } from '../../model/service-rsc.service';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {TooltipPosition} from '@angular/material/tooltip';


@Component({
  selector: 'rsc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  // results is the result of categories object data by sevice
  public results : any;

  //to implements mobile view
  public isMobile: boolean = false;

  // definition all type of card (heigth and width variable into grid in html)
  cards = this.breakpointObserver.observe(Breakpoints.TabletLandscape).pipe(
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

  constructor(private serviceRsc : ServiceRscService, private breakpointObserver: BreakpointObserver) {
    //to implements responsive dashbord grid
    breakpointObserver.observe([
      '(max-width: 900px)'
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
   }



  ngOnInit(): void {
    //take service data by api
    this.serviceRsc.getAllCategories()
    .subscribe(res => {this.results = res;})
  
  }

}
