import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PriceFormatPipe } from './price-format-pipe';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PriceFormatPipe,ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angapp5';
}
