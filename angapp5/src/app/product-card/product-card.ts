import { Component } from '@angular/core';
import { PriceFormatPipe } from '../price-format-pipe';

@Component({
  selector: 'app-product-card',
  imports: [PriceFormatPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  price=1599;
}
