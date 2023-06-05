import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
  Home Component
  <br>  <br>  <br>
  <!-- <ng-content></ng-content> -->

  
      <ng-content selector = ".deneme1"></ng-content>
      <ng-content selector = ".deneme2"></ng-content>



  `
})
export class HomeComponent {

}


