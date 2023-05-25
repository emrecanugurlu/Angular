import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModelComponent } from './components/custom-model/custom-model.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CustomModelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
