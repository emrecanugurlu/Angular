import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    ProductDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path : "add" , component : ProductAddComponent},
        {path : "list" , component : ProductListComponent},
        {path : "delete" , component : ProductDeleteComponent}
      ]
    )
  ]
})
export class ProductModule { }
