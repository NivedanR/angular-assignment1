import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  product:any = {
    name: 'Wireless Mouse',
    imageUrl: 'https://via.placeholder.com/150',
    price: 999
  };

  buynow():void{
    alert(`You clicked on ${this.product.name}`);
  }
}
