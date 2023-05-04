import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  App Component <br>
  <a routerLink="product">Go Product</a> <br>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'NestedRoutes';
}
