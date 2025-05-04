import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-platform-engineering-overview',
  imports:[CommonModule],
  templateUrl: './platform-engineering-overview.component.html',
  styleUrl: './platform-engineering-overview.component.css'
})
export class PlatformEngineeringOverviewComponent implements OnInit, OnDestroy {
  sections = [
    {
      title: 'Infrastructure Assessment',
      description: 'Comprehensive evaluation of existing infrastructure to identify areas for improvement.',
      icon: '/infrastructure-assessment.png'
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless migration of applications and data to cloud environments for enhanced scalability and cost-efficiency.',
      icon: '/cloud-migration.png'
    },
    {
      title: 'Microservices Architecture',
      description: 'Transition from monolithic architectures to microservices for improved scalability and flexibility.',
      icon: '/microservices-architecture.png'
    },
    {
      title: 'DevOps Integration',
      description: 'Integrate DevOps practices to streamline development and operations, enhancing collaboration and accelerating time-to-market.',
      icon: '/devops-integration.png'
    },
    {
      title: 'Distributed Systems',
      description: 'Optimize application responsiveness by distributing systems closer to users for enhanced availability and performance.',
      icon: '/distributed-systems.png'
    },
    {
      title: 'API Development',
      description: 'Design, build, and deploy APIs for seamless integration, data exchange, and functionality expansion.',
      icon: '/api-development.png'
    },
    {
      title: 'Modern Application Security',
      description: 'Strengthen application security with modern approaches to protect against evolving digital threats.',
      icon: '/modern-application-security.png'
    },
    {
      title: 'Training & Education',
      description: 'Equip your team with cutting-edge skills in software delivery, architecture, design, and specific technologies.',
      icon: '/training-education.png'
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
      title: 'Infrastructure Optimization Project',
      subtitle: 'Enhancing Performance and Cost Efficiency',
      clientName: 'Tech Innovators Inc.',
      logo: '/tech-innovators-logo.png',
      services: ['Infrastructure Assessment', 'Cloud Migration'],
      technologies: ['AWS', 'Azure', 'Kubernetes']
    },
    {
      title: 'Microservices Transformation',
      subtitle: 'Improving Scalability and Flexibility',
      clientName: 'Acme Corporation',
      logo: '/acme-corporation-logo.png',
      services: ['Microservices Architecture', 'DevOps Integration'],
      technologies: ['Docker', 'Spring Cloud', 'Kafka']
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