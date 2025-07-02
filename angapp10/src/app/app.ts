import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Productlist } from './productlist/productlist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angapp10';
}
