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
    { name: 'Cloud Computing', image: '/cloud-computing1.png' },
    { name: 'Artificial Intelligence', image: '/artificial-intelligence1.jpg' },
    { name: 'Data Analytics', image: '/data-analytics1.jpg' },
    { name: 'Cybersecurity', image: '/cyber-security1.jpg' },
    { name: 'IoT Solutions', image: '/iot-solution1.png' },
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
