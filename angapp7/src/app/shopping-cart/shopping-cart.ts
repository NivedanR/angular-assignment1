import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css'
})
export class ShoppingCart {

  cartItems:any[]=[];

  showItems:boolean=false;

  cartForm=new FormGroup({
    name:new FormControl(''),
    price:new FormControl(1)
  });

  onSubmit(){
    console.log('Form submitted',this.cartForm.value);
    this.cartItems.push(this.cartForm.value);
    this.cartForm.reset({price:1});
  }

  viewCartItems(){
    this.cartItems.forEach((val)=>console.log(val.name,val.price));
    this.showItems=!this.showItems;
  }
}
