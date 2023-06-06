import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone : true,
  template: `
    <ul>
      <ng-container *ngFor = "let product of productList">
        <li *ngIf="product.enabled">{{product.productName}}</li>
      </ng-container>
    </ul>
  
  `,
  imports : [NgFor, NgIf]
  
})
export class AppComponent {
 
  productList : any[] = [
    {productName : "Kalem", enabled: true},
    {productName : "Silgi", enabled: false},
    {productName : "Açacak", enabled: true},
    {productName : "Çanta", enabled: false},
    {productName : "Defter", enabled: true},
  ]
}
