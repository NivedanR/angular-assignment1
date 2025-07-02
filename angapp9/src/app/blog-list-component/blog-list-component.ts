import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-list-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './blog-list-component.html',
  styleUrl: './blog-list-component.css'
})
export class BlogListComponent {
  blogs = [
    'Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5',
    'Post 6', 'Post 7', 'Post 8', 'Post 9', 'Post 10'
  ];
  // pageSize=5;
  // start=0;

  // nextPage(){
  //   if(this.start+this.pageSize<this.blogs.length){
  //     this.start+=this.pageSize;
  //   }
  // }
  // prevPage(){
  //   if(this.start-this.pageSize>=0){
  //     this.start-=this.pageSize;
  //   }
  // }

  // get end(){
  //   return this.start+this.pageSize;
  // }

  pageSize=5;
  start=0;
  end=this.pageSize;
  nextPage(){
    if(this.start+this.pageSize<this.blogs.length){
      this.start+=this.pageSize;
      this.end+=this.pageSize;
    }
  }
  prevPage(){
    if(this.start-this.pageSize>=0){
      this.start-=this.pageSize;
      this.end-=this.pageSize;
    }
  }

 


}
