import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <a routerLink="home" routerLinkActive="active">Home</a>|
  <a routerLink="about" routerLinkActive="active">About</a>|
  <a [routerLink] = "['contact','a','b','c']" routerLinkActive="active">Contact</a>|
  
  <a [routerLink]="['home',1]">1 Number Product</a>

  <hr><br>

  <router-outlet>

  <button (click)="go()">Go URL</button>

  `,
  styles:[".active{color:green}"]

})
export class AppComponent {
  title = 'AngularRouter';

  go(){
    history.pushState("message","title","a/b")
  }

}
