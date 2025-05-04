import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-agility-overview',
  imports: [CommonModule],
  templateUrl: './business-agility-overview.component.html',
  styleUrl: './business-agility-overview.component.css'
})



export class BusinessAgilityOverviewComponent implements OnInit, OnDestroy {
  sections = [
    {
      title: 'Process Optimization',
      description: 'Streamline business processes for increased efficiency.',
      icon: '/process-optimization.png'
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business into a digital-first organization.',
      icon: '/digital-transformation.png'
    },
    {
      title: 'Agile Methodologies',
      description: 'Implement agile practices for faster and more flexible development cycles.',
      icon: '/agile-methodologies.png'
    },
    {
      title: 'Change Management',
      description: 'Manage change effectively to ensure successful transformation.',
      icon: '/change-management.png'
    },
    {
      title: 'Automation',
      description: 'Automate repetitive tasks to save time and resources.',
      icon: '/automation.png'
    },
    {
      title: 'Innovation Leadership',
      description: 'Lead innovation initiatives to stay ahead of the competition.',
      icon: '/innovation-leadership.png'
    }
  ];

  teamMembers = [
    {
      name: 'James Lovell',
      designation: 'Vice President of Technology',
      image: '/james-lovell.jpg'
    },
    {
      name: 'Michael Perry',
      designation: 'Director',
      image: '/michael-perry.jpg'
    }
  ];

  caseStudies = [
    {
      title: 'Process Optimization Project',
      subtitle: 'Enhancing Efficiency and Speed',
      clientName: 'Tech Innovators Inc.',
      logo: '/tech-innovators-logo.png',
      services: ['Process Optimization', 'Agile Methodologies'],
      technologies: ['Jira', 'Confluence', 'Trello']
    },
    {
      title: 'Digital Transformation Initiative',
      subtitle: 'Building a Digital-First Organization',
      clientName: 'Acme Corporation',
      logo: '/acme-corporation-logo.png',
      services: ['Digital Transformation', 'Change Management'],
      technologies: ['AWS', 'Azure', 'Google Cloud']
    }
  ];

  activeIndex = 0;

  goToSlide(index: number) {
    this.activeIndex = index;
  }

  // Auto-slide functionality
  private intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.goToNextSlide();
    }, 4000); // Slide every 4 seconds
  }

  stopAutoSlide() {
    clearInterval(this.intervalId);
  }

  goToNextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.caseStudies.length;
  }
}