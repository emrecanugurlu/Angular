import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent {
  @Input() id;
  @Input() productName;

  ngOnInit(){
    console.log(this.id)
    console.log(this.productName)
  }
}



