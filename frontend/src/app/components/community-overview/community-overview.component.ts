import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community-overview',
  standalone: true,
  templateUrl: './community-overview.component.html',
  styleUrls: ['./community-overview.component.css'],
  imports: [CommonModule]
})
export class CommunityOverviewComponent {
  title = 'Community Services';
  sections = [
    {
      title: 'Workshops and Seminars',
      description: 'We organize workshops and seminars to educate your community on various topics and technologies.',
      icon: 'assets/images/workshops.jpg'
    },
    {
      title: 'Mentorship Programs',
      description: 'Our mentorship programs connect experienced professionals with aspiring individuals to foster growth and development.',
      icon: 'assets/images/mentorship.jpg'
    },
    {
      title: 'Networking Events',
      description: 'We host networking events to bring together professionals from various industries and backgrounds.',
      icon: 'assets/images/networking.jpg'
    },
    {
      title: 'Volunteer Opportunities',
      description: 'Join our volunteer programs to give back to the community and make a positive impact.',
      icon: 'assets/images/volunteer.jpg'
    }
  ];

  constructor(private router: Router) {}

  navigateToOverview(sectionTitle: string) {
    this.router.navigate(['/services', sectionTitle.toLowerCase().replace(/\s+/g, '-')]);
  }
}