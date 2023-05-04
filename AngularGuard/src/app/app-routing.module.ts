import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { canActivateFnGuard } from './guards/can-activate/can-activate-fn.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { canActivateChildGuard } from './guards/can-activate-child/can-activate-child-fn.guard';
import { canDeactivateFnGuard } from './guards/can-deactivate/can-deactivate-fn.guard';
import { resolveFnGuard } from './guards/resolve/resolve.guard';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { canMatchAdminGuard, canMatchUserGuard } from './guards/can-match/can-match-fn.guard';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },

  
  {path:"dashboard",component:AdminComponent,canMatch: [canMatchAdminGuard]},
  {path:"dashboard",component:UserComponent,canMatch: [canMatchUserGuard]},



  {
    path: "products", component: ProductComponent,
    canActivate: [canActivateFnGuard],
    canActivateChild: [canActivateChildGuard],
    canDeactivate: [canDeactivateFnGuard],
    resolve: { photos: resolveFnGuard },
    children: [
      { path: "addProduct", component: AddProductComponent, }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
