import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import {HttpClientModule} from '@angular/common/http';

import { LayoutModule } from '@angular/cdk/layout';
import { CourseDialogModule } from './shared/course-dialog-component/course-dialog.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



import { ReactiveFormsModule } from '@angular/forms';



import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

import { AuthService } from "./shared/services/auth-service.service";
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';


import { MaterialModule } from './material/material.module';
import { InsertDisplayNameModule } from './shared/insert-display-name/insert-display-name.module';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,

    VerifyEmailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    InsertDisplayNameModule,
  ],
  exports:[MaterialModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
