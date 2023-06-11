import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports : [NgTemplateOutlet, ChildComponent],
  template : `
  
  <!-- <ng-container [ngTemplateOutlet] = "template" [ngTemplateOutletContext] = "{data : 'ali'}"> -->

<!-- 
  <ng-container *ngTemplateOutlet="template; context : {data : 'ali', $implicit : 'Bu değere herhangi bir tanımlama yapılmamıştır'}">
    Burası Ng Container içeriğidir... <br>
  </ng-container>

  <ng-template #template let-a = "data" let-b>
    Burası Ng Template içeriğidir...<br>
    {{a}} <br>
    {{b}}
  </ng-template> -->
  

  <ng-template #t>
    Burası parent template içeriğidir...
  </ng-template>

  <app-child [parentTemplate] = "t">

  </app-child>
  

  `
})
export class AppComponent {
  title = 'ngTemplateOutlet';
}
