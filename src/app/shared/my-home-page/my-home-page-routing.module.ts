import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyHomePageComponent } from './my-home-page.component';

const routes: Routes = [{ path: '', component: MyHomePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyHomePageRoutingModule { }
