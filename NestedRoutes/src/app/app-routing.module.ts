import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductSpecComponent } from './components/product-spec/product-spec.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';

const routes: Routes = [
  {
    path: "product", component: ProductComponent,
    children: [
      {
        path: "productdetail/:id", component: ProductDetailComponent,
        children: [
          { path: "", pathMatch: "full", redirectTo: "overview" },
          { path: "spec", component: ProductSpecComponent },
          { path: "overview", component: ProductOverviewComponent }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
