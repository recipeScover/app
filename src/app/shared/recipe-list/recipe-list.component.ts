import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { Recipe } from '../services/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'rsc-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.authService.getRecipe().subscribe(data => this.authService.userRecipe = data.docs.map(e => {
      return {
       id: e.id,
       ... e.data() as any
      } as Recipe;
    }));
  }
delete(id : string){
  this.authService.deleteRecipe(id);
  setTimeout(()=>{this.getData()}, 1000);
}


}

