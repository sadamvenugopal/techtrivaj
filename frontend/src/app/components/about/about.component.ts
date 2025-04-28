import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  imports: [CommonModule],
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  title = 'About Improving';
  description = 'We are dedicated to delivering exceptional services and building long-term relationships with our clients. Our team of experts is committed to excellence in every project we undertake.';
  features = [
    'Accounting Your All-Impact Celebration',
    'Health - On Training Opportunities',
    'Healthcare - Offering Our Business'
  ];

  ngAfterViewInit() {
    const aboutSection = document.querySelector('.about-content');
    
    // IntersectionObserver to detect when the element is in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutSection?.classList.add('visible'); // Add 'visible' class when it comes into view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );
    
    if (aboutSection) {
      observer.observe(aboutSection);
    }
  }
}
