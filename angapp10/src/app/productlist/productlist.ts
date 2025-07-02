import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productlist',
  imports: [CommonModule,FormsModule],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css'
})
export class Productlist implements OnInit {

  products = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Headphones', category: 'Electronics' },
    { name: 'Harry Potter', category: 'Books' },
    { name: 'Notebook', category: 'Books' },
    { name: 'Sofa', category: 'Furniture' },
  ];

  filteredProducts=this.products;
  constructor(private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      const category=params['category'];
      if(category){
        this.filteredProducts=this.products.filter((p)=>
        p.category.toLowerCase()===category.toLowerCase());
      }else{
        this.filteredProducts=[];
      }
    });
  }

  filterByCategory(category:string){
    this.router.navigate([],{
      queryParams: {category}
    });
  }

}
