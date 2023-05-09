import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  template : `
  Product Page
  `
})

export class ProductsComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data =>{
      console.log(data)
    })
  }


}
