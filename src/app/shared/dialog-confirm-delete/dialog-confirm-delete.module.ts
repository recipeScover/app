import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogConfirmDeleteRoutingModule } from './dialog-confirm-delete-routing.module';
import { DialogConfirmDeleteComponent } from './dialog-confirm-delete.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [DialogConfirmDeleteComponent],
  imports: [
    CommonModule,
    DialogConfirmDeleteRoutingModule,
    MaterialModule
  ]
})
export class DialogConfirmDeleteModule { }
