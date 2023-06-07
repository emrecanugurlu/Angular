import { NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';



@Component({
  selector: 'app-root',
  standalone: true,

  template : `
  App Component
  <br>
  <ng-container *ngTemplateOutlet = "template">
    Burası ng-container içeriğidir.
  </ng-container>
  <ng-template #template>
    Burası ng-template içeriğidir.
  </ng-template>
  `,

  
  imports:[NgTemplateOutlet]
})


export class AppComponent {
  
  @ViewChild("template") ngTemplate : TemplateRef<any>

  constructor(private viewContainerRef : ViewContainerRef) {
      
  }

  ngAfterViewInit(){
    this.viewContainerRef.createEmbeddedView(this.ngTemplate)
  }

}
