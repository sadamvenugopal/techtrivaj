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
      description: 'Take your business to the next level by optimizing your core processes. Our solutions help you analyze, refine, and automate key workflows, improving efficiency, cutting costs, and enhancing overall performance.',
      icon: '/process-optimization.png'
    },
    {
      title: 'Digital Transformation',
      description: 'Lead your industry with a seamless digital transformation. We help you upgrade legacy systems, boost operational efficiency, and develop a data-driven culture that accelerates growth, innovation, and competitive advantage.',
      icon: '/digital-transformation.png'
    },
    {
      title: 'Agile Methodologies',
      description: 'Achieve quicker results and enhance team adaptability by implementing agile strategies. By embracing shorter development cycles and iterative feedback, your team can make improvements on the fly and meet changing demands head-on.',
      icon: '/agile-methodologies.png'
    },
    {
      title: 'Change Management',
      description: 'Smoothly transition through organizational shifts with a people-focused change strategy. Our approach helps build alignment, reduce resistance, and ensure long-term success during times of transformation.',
      icon: '/change-management.png'
    },
    {
      title: 'Automation',
      description: 'Transform how work gets done with intelligent automation that handles the routine so your team can focus on what matters most. Streamline operations, reduce human error, and increase productivity without adding headcount.',
      icon: '/automation.png'
    },
    {
      title: 'Innovation Leadership',
      description: 'Drive forward-thinking strategies that put your organization ahead of the curve. Our approach to innovation leadership empowers teams to explore new ideas, embrace change, and turn creativity into competitive advantage.',
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