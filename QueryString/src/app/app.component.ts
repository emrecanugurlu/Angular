import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  App Component <br>

  <a routerLink="a" [queryParams]="{size:12}" queryParamsHandling="merge">Go A Component</a> <br>
  <a routerLink="b" [queryParams]="{product:12}">Go B Component</a>

  `
})
export class AppComponent {
  title = 'QueryString';
}
