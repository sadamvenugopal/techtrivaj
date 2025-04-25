import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-training',
  standalone: true,
  templateUrl: './ai-training.component.html',
  styleUrls: ['./ai-training.component.css'],
  imports:[CommonModule],

})
export class AiTrainingComponent {
  title = 'AI Training Programs';
  courses = [
    { 
      title: 'AI Fundamentals', 
      description: 'Learn the basics of artificial intelligence and machine learning.',
      icon: '🤖'
    },
    { 
      title: 'Advanced ML', 
      description: 'Deep dive into machine learning algorithms and applications.',
      icon: '🧠'
    },
    { 
      title: 'AI Ethics', 
      description: 'Understand the ethical implications of AI technologies.',
      icon: '⚖️'
    }
  ];
}