import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule,CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  products = [
    { name: 'Keyboard', price: 599 },
    { name: 'Monitor', price: 4999 }
  ];
}
