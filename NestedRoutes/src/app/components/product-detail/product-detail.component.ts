import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  template:`
  Product Detail <br>
  <a routerLink="overview">Go Overview</a> & <a routerLink="spec">Go Spec</a> <br>
  <router-outlet></router-outlet>
  `
})
export class ProductDetailComponent {

}
