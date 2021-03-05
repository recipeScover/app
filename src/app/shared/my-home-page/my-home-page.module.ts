import { RecipeListModule } from './../recipe-list/recipe-list.module';
import { ProfileModule } from './../profile/profile.module';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyHomePageRoutingModule } from './my-home-page-routing.module';
import { MyHomePageComponent } from './my-home-page.component';





@NgModule({
  declarations: [MyHomePageComponent],
  imports: [
    CommonModule,
    MyHomePageRoutingModule,
    ProfileModule,
    RecipeListModule

  ]
})
export class MyHomePageModule { }
