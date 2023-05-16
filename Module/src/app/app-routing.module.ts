import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";


const routes: Routes = [
  {path : "" , component : HomeComponent},
  {path : "product" , loadChildren : () => import("./components/product/product.module").then(m => m.ProductModule) },
  {path : "customer" , loadChildren : () => import("./components/customer/customer.module").then(m => m.CustomerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
