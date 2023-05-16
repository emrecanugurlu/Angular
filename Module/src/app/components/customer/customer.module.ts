import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    CustomerDeleteComponent,
    CustomerAddComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path : "add" , component : CustomerAddComponent},
        {path : "list" , component : CustomerListComponent},
        {path : "delete" , component : CustomerDeleteComponent}
      ]
    )
  ]
})
export class CustomerModule { }
