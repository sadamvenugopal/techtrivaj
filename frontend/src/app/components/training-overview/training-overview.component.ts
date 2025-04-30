import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training-overview',
  standalone: true,
  templateUrl: './training-overview.component.html',
  styleUrls: ['./training-overview.component.css'],
  imports: [CommonModule]
})
export class TrainingOverviewComponent {
  title = 'Training Services';
  sections = [
    {
      title: 'Technical Training',
      description: 'Our technical training programs cover a wide range of technologies and tools to enhance your skills.',
      icon: 'assets/images/technical-training.jpg'
    },
    {
      title: 'Soft Skills Training',
      description: 'We offer soft skills training to improve communication, leadership, and teamwork.',
      icon: 'assets/images/soft-skills.jpg'
    },
    {
      title: 'Customized Training Programs',
      description: 'We design customized training programs tailored to your specific needs and objectives.',
      icon: 'assets/images/customized-training.jpg'
    },
    {
      title: 'Online and On-Site Training',
      description: 'Choose from online or on-site training options to fit your schedule and preferences.',
      icon: 'assets/images/training-options.jpg'
    }
  ];

  constructor(private router: Router) {}

  navigateToOverview(sectionTitle: string) {
    this.router.navigate(['/services', sectionTitle.toLowerCase().replace(/\s+/g, '-')]);
  }
}