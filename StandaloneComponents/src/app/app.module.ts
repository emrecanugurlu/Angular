import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Standalone2Component } from "./components/standalone2/standalone2.component";

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    Standalone2Component
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
