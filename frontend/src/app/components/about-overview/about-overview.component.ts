// src/app/company/about-overview/about-overview.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-overview',
  standalone: true,
  templateUrl: './about-overview.component.html',
  styleUrls: ['./about-overview.component.css'],
  imports: [CommonModule]
})
export class AboutOverviewComponent {
  coreValues = [
    {
      title: 'Excellence',
      description: 'Excellence is not an occasional act, but a persistent habit.',
      icon: '/excellence-icon.png'
    },
    {
      title: 'Involvement',
      description: 'Our success is a consequence of our collective involvement.',
      icon: '/involvement-icon.png'
    },
    {
      title: 'Dedication',
      description: 'Thinking of others more without thinking less of ourselves.',
      icon: '/dedication-icon.png'
    }
  ];

  leadership = [
    {
      name: 'Curtis Hite',
      position: 'Chief Executive Officer',
      photo: '/curtis-hite.jpg'
    },
    {
      name: 'Ric DeAnda',
      position: 'Chief Acquisition Officer',
      photo: '/ric-deanda.jpg'
    },
    {
      name: 'Susan Fojtasek',
      position: 'Chief of Staff',
      photo: '/susan-fojtasek.jpg'
    },
    // Add more leaders as needed
  ];

  awardLogos = [
    { src: '/award1.png', alt: 'Award 1' },
    { src: '/award2.png', alt: 'Award 2' },
    { src: '/award3.png', alt: 'Award 3' },
    // Add more logos as needed
  ];

  constructor(private router: Router) {}

  navigateToCompanySection(sectionTitle: string) {
    this.router.navigate(['/company', sectionTitle.toLowerCase().replace(/\s+/g, '-')]);
  }

  navigateToLeader(leaderName: string) {
    this.router.navigate(['/leaders', leaderName.toLowerCase().replace(/\s+/g, '-')]);
  }

  navigateToCulture() {
    this.router.navigate(['/culture']);
  }

  navigateToAwards() {
    this.router.navigate(['/awards']);
  }

  navigateToConsciousCapitalism() {
    this.router.navigate(['/conscious-capitalism']);
  }
}