import { Component, OnInit } from '@angular/core';
import { ServiceRscService } from '../../model/service-rsc.service';

@Component({
  selector: 'rsc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public results : any;



  constructor(private serviceRsc : ServiceRscService) { }

  ngOnInit(): void {
    this.serviceRsc.getAllCategories()
    .subscribe(res => {this.results = res;})
  
  }

}
