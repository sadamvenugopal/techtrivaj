// development-overview.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-development-overview',
  standalone: true,
  templateUrl: './development-overview.component.html',
  styleUrls: ['./development-overview.component.css'],
  imports: [CommonModule]
})
export class DevelopmentOverviewComponent {
  title = 'Software Development Services';
  sections = [
    {
      title: 'Front-End/Mobile Development',
      description: 'Our front-end/mobile development services ensure your website, application, or software system is both intuitive and simple for users while maintaining our industry-leading user interface design standards. Our developers are proficient in a number of front-end programming languages, including React, Angular, and Vue to provide the utmost flexibility when developing your project.',
      icon: '/artificial-intelligence.jpg'
    },
    {
      title: 'Cloud Native Platform Engineering',
      description: 'Our Platform Engineers enable DevOps-focused teams by building internal Developer Platforms that enable organizations to automate and streamline deployment capabilities. We leverage our cloud partnerships and experience to help you reach your desired outcomes.',
      icon: 'assets/images/cloud-engineering.jpg'
    },
    {
      title: 'Modern Data & AI Solutions',
      description: 'Data is a strategic asset for every company. Our Modern Data & AI practice area optimizes this data to facilitate advanced analytics, machine learning, and AI across industry verticals and cloud providers.',
      icon: 'assets/images/data-ai.jpg'
    },
    {
      title: 'Real-Time Streaming Data',
      description: 'Real-Time Streaming Data has changed the way organizations communicate and share data. We engineer systems for clients to share, retrieve, and employ their data in real time, regardless of the application.',
      icon: '/artificial-intelligence.jpg'
    },
    {
      title: 'QA Automation & Software Testing',
      description: 'A properly tested software product ensures dependability, high performance, and security. Our software testing and QA services help ensure your mission-critical software meets the highest quality standards.',
      icon: 'assets/images/qa-testing.jpg'
    },
    {
      title: 'Backend & API Development',
      description: 'We build robust, scalable backend systems and APIs that power your applications. Our expertise includes microservices architecture, database design, and performance optimization.',
      icon: 'assets/images/backend-dev.jpg'
    }
  ];

  constructor(private router: Router) {}

  navigateToOverview(sectionTitle: string) {
    this.router.navigate(['/services', sectionTitle.toLowerCase().replace(/\s+/g, '-')]);
  }
}