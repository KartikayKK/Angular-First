import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DogDetailsComponent}from'./dog-details.component';
import { DogListComponent } from './dog-list/dog-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DogDetailsComponent,
    DogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
