import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogListComponent } from './blog-list-component/blog-list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BlogListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angapp9';
}
