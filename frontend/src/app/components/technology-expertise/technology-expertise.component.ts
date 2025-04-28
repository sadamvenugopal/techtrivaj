import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-expertise',
  standalone: true,
  templateUrl: './technology-expertise.component.html',
  styleUrls: ['./technology-expertise.component.css'],
  imports: [CommonModule]
})
export class TechnologyExpertiseComponent implements OnInit {
  title = 'Our Strategic Technology Partnerships';
  expertiseAreas = [
    { name: 'Cloud Computing', image: '/cloud-computing.jpg' },
    { name: 'Artificial Intelligence', image: '/artificial-intelligence.jpg' },
    { name: 'Data Analytics', image: '/data-analytics.jpg' },
    { name: 'Cybersecurity', image: '/cyber-security.jpg' },
    { name: 'IoT Solutions', image: '/iot-solutions.jpg' },
  ];

  visibleCards: boolean[] = [];

  ngOnInit() {
    this.visibleCards = new Array(this.expertiseAreas.length).fill(false);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const cards = document.querySelectorAll('.expertise-item');
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        this.visibleCards[index] = true;
        card.classList.add('visible');  // Add the 'visible' class to trigger the transition effect
      }
    });
  }
}
