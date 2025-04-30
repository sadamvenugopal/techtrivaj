import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outsourcing-overview',
  standalone: true,
  templateUrl: './outsourcing-overview.component.html',
  styleUrls: ['./outsourcing-overview.component.css'],
  imports: [CommonModule]
})
export class OutsourcingOverviewComponent {
  title = 'Outsourcing Services';
  sections = [
    {
      title: 'IT Outsourcing',
      description: 'Outsource your IT operations to our experts to focus on your core business activities.',
      icon: 'assets/images/it-outsourcing.jpg'
    },
    {
      title: 'Software Development',
      description: 'Our software development team delivers high-quality applications tailored to your needs.',
      icon: 'assets/images/software-development.jpg'
    },
    {
      title: 'Project Management',
      description: 'We manage your projects from start to finish, ensuring timely delivery and success.',
      icon: 'assets/images/project-management.jpg'
    },
    {
      title: 'Quality Assurance',
      description: 'Our QA services ensure your products meet the highest quality standards before launch.',
      icon: 'assets/images/quality-assurance.jpg'
    }
  ];

  constructor(private router: Router) {}

  navigateToOverview(sectionTitle: string) {
    this.router.navigate(['/services', sectionTitle.toLowerCase().replace(/\s+/g, '-')]);
  }
}