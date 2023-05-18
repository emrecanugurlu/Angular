import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {CustomPreloadingStrategy} from "./Strategyes/CustomPreloadingStrategy";

const routes: Routes = [
  {path : "product" ,
    loadChildren : () => import("./components/product/product.module").then(pm=>pm.ProductModule),data:{preloading : "true"}},
  {path : "customer" , loadChildren : () => import("./components/customer/customer.module").then(cm=>cm.CustomerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy : CustomPreloadingStrategy})],
  exports: [RouterModule]
})


export class AppRoutingModule { }


