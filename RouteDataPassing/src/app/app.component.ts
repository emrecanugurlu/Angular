import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    App Component <br>

    <a routerLink="home" [state]="{data3:'veri3'}">Home</a>


    | <a routerLink="product" >Product</a>
    <hr>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'RouteDataPassing';
}
