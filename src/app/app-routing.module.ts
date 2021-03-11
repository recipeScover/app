import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from  './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { AuthGuard } from "./shared/guard/auth.guard";
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { HomeComponent } from './features/home/home.component';




const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  { path: 'category-detail/:name', loadChildren: () => import('./features/category-detail/category-detail.module').then(m => m.CategoryDetailModule) },
  { path: 'login', loadChildren: () => import('./features/category-detail/category-detail.module').then(m => m.CategoryDetailModule) },
  { path: 'myHomePage', loadChildren: () => import('./shared/my-home-page/my-home-page.module').then(m => m.MyHomePageModule) },
  { path: 'profile', loadChildren: () => import('./shared/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'recipeList', loadChildren: () => import('./shared/recipe-list/recipe-list.module').then(m => m.RecipeListModule) },
  { path: 'changePassword', loadChildren: () => import('./shared/change-password/change-password.module').then(m => m.ChangePasswordModule) },
  { path: 'dialogProfilImg', loadChildren: () => import('./shared/dialog-profil-img/dialog-profil-img.module').then(m => m.DialogProfilImgModule) },
  { path: 'dialogAddRecip', loadChildren: () => import('./shared/dialog-add-recipe/dialog-add-recipe.module').then(m => m.DialogAddRecipeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
