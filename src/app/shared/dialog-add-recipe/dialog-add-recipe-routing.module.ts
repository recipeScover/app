import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogAddRecipeComponent } from './dialog-add-recipe.component';

const routes: Routes = [{ path: '', component: DialogAddRecipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogAddRecipeRoutingModule { }
