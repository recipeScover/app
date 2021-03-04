import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertDisplayNameComponent } from './insert-display-name.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InsertDisplayNameComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InsertDisplayNameModule { }
