import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list-component',
  imports: [FormsModule,CommonModule],
  standalone:true,
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css'
})
export class ProductListComponent implements OnInit{

  products:any;

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=data;
    });
  }

}
