import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogAddRecipeRoutingModule } from './dialog-add-recipe-routing.module';
import { DialogAddRecipeComponent } from './dialog-add-recipe.component';
import { MaterialModule } from '../../material/material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [DialogAddRecipeComponent],
  imports: [
    CommonModule,
    DialogAddRecipeRoutingModule,
    MaterialModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class DialogAddRecipeModule { }
