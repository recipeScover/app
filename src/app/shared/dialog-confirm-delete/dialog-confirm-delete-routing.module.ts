import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogConfirmDeleteComponent } from './dialog-confirm-delete.component';

const routes: Routes = [{ path: '', component: DialogConfirmDeleteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogConfirmDeleteRoutingModule { }
