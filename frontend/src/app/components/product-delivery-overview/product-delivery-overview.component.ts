import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delivery-overview',
  imports: [CommonModule],
  templateUrl: './product-delivery-overview.component.html',
  styleUrl: './product-delivery-overview.component.css'
})

export class ProductDeliveryOverviewComponent implements OnInit, OnDestroy {
  sections = [
    {
      title: 'Product Strategy',
      description: 'Develop a clear product vision and roadmap.',
      icon: '/product-strategy.png'
    },
    {
      title: 'Agile Development',
      description: 'Deliver products iteratively using agile methodologies.',
      icon: '/agile-development.png'
    },
    {
      title: 'Continuous Integration/Deployment',
      description: 'Implement CI/CD pipelines for automated builds and deployments.',
      icon: '/ci-cd.png'
    },
    {
      title: 'Quality Assurance',
      description: 'Ensure product quality through rigorous testing and validation.',
      icon: '/quality-assurance.png'
    },
    {
      title: 'DevOps Practices',
      description: 'Integrate DevOps to streamline development and operations.',
      icon: '/devops-practices.png'
    },
    {
      title: 'Product Maintenance',
      description: 'Provide ongoing support and updates for deployed products.',
      icon: '/product-maintenance.png'
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
      title: 'Agile Development Project',
      subtitle: 'Iterative and Incremental Delivery',
      clientName: 'Tech Innovators Inc.',
      logo: '/tech-innovators-logo.png',
      services: ['Agile Development', 'Continuous Integration/Deployment'],
      technologies: ['Scrum', 'JIRA', 'GitLab']
    },
    {
      title: 'CI/CD Pipeline Implementation',
      subtitle: 'Automated Builds and Deployments',
      clientName: 'Acme Corporation',
      logo: '/acme-corporation-logo.png',
      services: ['Continuous Integration/Deployment', 'DevOps Practices'],
      technologies: ['Jenkins', 'AWS CodePipeline', 'GitHub Actions']
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
