import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem,CommonModule,FormsModule],
  standalone:true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products = [
    { name: 'Wireless Mouse', price: 999 },
    { name: 'Keyboard', price: 1499 },
    { name: 'Monitor', price: 8999 }
  ];
}
