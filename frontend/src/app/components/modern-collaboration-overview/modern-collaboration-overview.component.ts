import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-collaboration-overview',
  imports: [CommonModule],
  templateUrl: './modern-collaboration-overview.component.html',
  styleUrl: './modern-collaboration-overview.component.css'
})


export class ModernCollaborationOverviewComponent implements OnInit, OnDestroy {
  sections = [
    {
      title: 'Team Collaboration Tools',
      description: 'Enhance teamwork with modern collaboration tools.',
      icon: '/team-collaboration-tools.png'
    },
    {
      title: 'Integrated Communication Platforms',
      description: 'Integrate communication platforms for seamless interaction.',
      icon: '/integrated-communication-platforms.png'
    },
    {
      title: 'Remote Work Solutions',
      description: 'Enable remote work with robust collaboration solutions.',
      icon: '/remote-work-solutions.png'
    },
    {
      title: 'Knowledge Management Systems',
      description: 'Implement knowledge management systems for better information sharing.',
      icon: '/knowledge-management-systems.png'
    },
    {
      title: 'Virtual Meetings',
      description: 'Facilitate virtual meetings and conferences efficiently.',
      icon: '/virtual-meetings.png'
    },
    {
      title: 'Document Collaboration',
      description: 'Enable real-time document collaboration for teams.',
      icon: '/document-collaboration.png'
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
      title: 'Remote Work Implementation',
      subtitle: 'Enabling Efficient Remote Collaboration',
      clientName: 'Tech Innovators Inc.',
      logo: '/tech-innovators-logo.png',
      services: ['Remote Work Solutions', 'Virtual Meetings'],
      technologies: ['Microsoft Teams', 'Zoom', 'Slack']
    },
    {
      title: 'Knowledge Management System Rollout',
      subtitle: 'Improving Information Sharing',
      clientName: 'Acme Corporation',
      logo: '/acme-corporation-logo.png',
      services: ['Knowledge Management Systems', 'Document Collaboration'],
      technologies: ['Confluence', 'SharePoint', 'Notion']
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
