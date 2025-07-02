import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  imports: [FormsModule,CommonModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css'
})
export class Feedback {
  feedback='';
}
