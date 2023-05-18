import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerAddComponent,
    CustomerDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:"list", component:CustomerListComponent},
        {path:"add", component:CustomerAddComponent},
        {path:"delete", component:CustomerDeleteComponent},
      ]
    )
  ]
})
export class CustomerModule { }
