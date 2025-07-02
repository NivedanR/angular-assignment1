import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingCart } from './shopping-cart/shopping-cart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ShoppingCart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angapp7';
}
