import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Feedback } from './feedback/feedback';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Feedback],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angapp3';
}
