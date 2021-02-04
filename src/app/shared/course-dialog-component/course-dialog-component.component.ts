import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { ServiceRscService } from 'src/app/model/service-rsc.service';
// import MAT_DIALOG_DATA to import our params
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'rsc-course-dialog-component',
  templateUrl: './course-dialog-component.component.html',
  styleUrls: ['./course-dialog-component.component.scss']
})
export class CourseDialogComponentComponent implements OnInit {

  selectedMeal: any;
  ingredients: any;
  public showContent: boolean = false;


  constructor(

//  take our data by injection data = data arrived from CategoryDetailComponent
    @Inject(MAT_DIALOG_DATA) public data: any, private serviceRscService : ServiceRscService,
    public dialog: MatDialog,
 ) { 

   }

  ngOnInit(): void {
    // will log the entire data object
  console.log(this.data);
  this.serviceRscService.getIdMeal(this.data.id).subscribe(dataReceived => {console.log(dataReceived); this.selectedMeal = dataReceived});
  setTimeout(()=>this.showContent=true, 2000);

  }


}

