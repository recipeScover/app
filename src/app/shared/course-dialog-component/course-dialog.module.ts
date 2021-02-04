import { NgModule } from '@angular/core';
import { CourseDialogComponentComponent } from './course-dialog-component.component';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from "@angular/material/dialog";

 
@NgModule({
  declarations: [CourseDialogComponentComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ]
})

export class CourseDialogModule { }
