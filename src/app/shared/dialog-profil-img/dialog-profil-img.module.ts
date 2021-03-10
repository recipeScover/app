import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogProfilImgRoutingModule } from './dialog-profil-img-routing.module';
import { DialogProfilImgComponent } from './dialog-profil-img.component';
import { MaterialModule } from '../../material/material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [DialogProfilImgComponent],
  imports: [
    CommonModule,
    DialogProfilImgRoutingModule,
    MaterialModule,
    MatToolbarModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
  ]
})
export class DialogProfilImgModule { }
