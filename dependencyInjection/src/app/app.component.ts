import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/productService';

@Component({
  selector: 'app-root',
  template : `
  `
})

export class AppComponent implements OnInit{

  constructor(private productService : ProductService) {
 
  }
  ngOnInit(): void {
    console.log(this.productService.getProduct())
  }
}

