import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  template:`
    Product Page <br>
    <a [routerLink]="['productdetail',1]">Go Product Detail</a><br>
    <router-outlet></router-outlet>
  `
})
export class ProductComponent {

}
