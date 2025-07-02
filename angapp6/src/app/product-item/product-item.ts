import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-item',
  imports: [FormsModule,CommonModule],
  standalone:true,
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {

  @Input() name!:string;
  @Input() price!:number;
}
