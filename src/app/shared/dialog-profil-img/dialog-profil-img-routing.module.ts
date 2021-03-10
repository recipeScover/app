import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogProfilImgComponent } from './dialog-profil-img.component';

const routes: Routes = [{ path: '', component: DialogProfilImgComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogProfilImgRoutingModule { }
