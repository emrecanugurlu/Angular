import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [

  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "home", component: HomeComponent },
  { path: "home/:id", component: HomeComponent },
  { path: "home/:id1/:id2/:id3", component: HomeComponent },

  { path: "about", component: AboutComponent },
  { path: "contact/a/b/c", component: ContactComponent },
  { path: "**", component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes/*,{useHash:true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



