
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeListRoutingModule } from './recipe-list-routing.module';
import { RecipeListComponent } from './recipe-list.component';


@NgModule({
  declarations: [RecipeListComponent],
  imports: [
    CommonModule,
    RecipeListRoutingModule
  ],
  exports: [RecipeListComponent]
})
export class RecipeListModule { }
