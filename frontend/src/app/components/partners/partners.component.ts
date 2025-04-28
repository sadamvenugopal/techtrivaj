import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
  imports: [CommonModule]
})
export class PartnersComponent implements AfterViewInit {
  title = 'Our Technology Partners';
  partners = [
    { name: 'Microsoft', logo: '/windows.png' },
    { name: 'AWS', logo: '/aws.png' },
    { name: 'Google Cloud', logo: '/google-cloud.png' },
    { name: 'IBM', logo: '/ibm.png' },
    { name: 'Oracle', logo: '/oracle.png' }
  ];

  ngAfterViewInit() {
    const partnersSection = document.querySelector('.partners-content');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          partnersSection?.classList.add('visible');
        }
      },
      { threshold: 0.5 }
    );

    if (partnersSection) {
      observer.observe(partnersSection);
    }
  }
}
