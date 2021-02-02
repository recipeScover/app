import { Component, OnInit } from '@angular/core';
import { map, toArray } from 'rxjs/operators';
import { ServiceRscService } from './model/service-rsc.service';




@Component({
  selector: 'rsc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'recipeScover';
 
  
  public results : any;

  


 constructor(private serviceRsc : ServiceRscService){
 }

 ngOnInit(){

  this.serviceRsc.getAllCategories()
  .subscribe(res => {this.results = res;})


 }


}
