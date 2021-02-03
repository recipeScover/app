import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import {HttpClientModule} from '@angular/common/http';

import { LayoutModule } from '@angular/cdk/layout';
import { CourseDialogComponentComponent } from './features/course-dialog-component/course-dialog-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseDialogComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,

    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
