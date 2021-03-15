
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeListRoutingModule } from './recipe-list-routing.module';
import { RecipeListComponent } from './recipe-list.component';
import { MaterialModule } from '../../material/material.module'; 
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [RecipeListComponent],
  imports: [
    CommonModule,
    RecipeListRoutingModule,
    MaterialModule,
    MatListModule
  ],
  exports: [RecipeListComponent]
})
export class RecipeListModule { }
