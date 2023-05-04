import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  

constructor(private activatedRoute : ActivatedRoute) {}
  photos
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => this.photos = data["photos"])
  }
}
