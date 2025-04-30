import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-overview',
  standalone: true,
  templateUrl: './services-overview.component.html',
  imports: [CommonModule], // Ensure CommonModule is imported here
  styleUrls: ['./services-overview.component.css']
})
export class ServicesOverviewComponent implements OnInit {
  title = 'What We Do';
  services = [
    { title: 'Development', icon: '/development.png' },
    { title: 'Consulting', icon: '/consulting.png' },
    { title: 'Outsourcing', icon: '/outsourcing.png' },
    { title: 'Training', icon: '/training.png' },
    { title: 'Community', icon: '/community.png' }
  ];

  visibleCards: boolean[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.visibleCards = new Array(this.services.length).fill(false);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        this.visibleCards[index] = true;
      }
    });
  }

  onServiceClick(serviceTitle: string) {
    switch (serviceTitle) {
      case 'Development':
        this.router.navigate(['/services/development-overview']);
        break;
      case 'Consulting':
        this.router.navigate(['/services/consulting-overview']);
        break;
      case 'Outsourcing':
        this.router.navigate(['/services/outsourcing-overview']);
        break;
      case 'Training':
        this.router.navigate(['/services/training-overview']);
        break;
      case 'Community':
        this.router.navigate(['/services/community-overview']);
        break;
      default:
        break;
    }
  }
  
}