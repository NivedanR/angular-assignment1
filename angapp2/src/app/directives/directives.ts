import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule,CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {

  userRole='';
}
