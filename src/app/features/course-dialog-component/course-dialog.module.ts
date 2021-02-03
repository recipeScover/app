import { NgModule } from '@angular/core';
import { CourseDialogComponentComponent } from './course-dialog-component.component';
import { CommonModule } from '@angular/common';
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
    MatIconModule
  ]
})
export class CourseDialogModule { }
