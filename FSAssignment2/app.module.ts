import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AngularComponent } from './angular.component';
import { AngularService } from './angular.service';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AngularService],
  bootstrap: [AppComponent]
})
export class AppModule { }
