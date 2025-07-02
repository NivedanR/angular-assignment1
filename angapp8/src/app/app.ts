import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list-component/product-list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angapp8';
}
