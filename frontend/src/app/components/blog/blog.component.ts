import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  imports:[CommonModule],

})
export class BlogComponent {
  title = 'Explore Our Latest Thought Leadership';
  posts = [
    { 
      title: 'Innovative Leadership in Tech', 
      excerpt: 'How modern leaders are shaping the future of technology companies.',
      date: 'May 15, 2023'
    },
    { 
      title: 'The Future of AI', 
      excerpt: 'Exploring the next decade of artificial intelligence development.',
      date: 'April 28, 2023'
    },
    { 
      title: 'Digital Transformation Strategies', 
      excerpt: 'Key considerations for businesses undergoing digital transformation.',
      date: 'March 10, 2023'
    }
  ];
}