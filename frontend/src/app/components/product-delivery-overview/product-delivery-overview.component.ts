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
      description: 'Create a future-ready product with a comprehensive strategy. From defining your vision to mapping the path forward, we ensure your product delivers sustained growth and meets evolving market demands.',
      icon: '/product-strategy.png'
    },
    {
      title: 'Agile Development',
      description: 'Innovate and iterate at speed. With agile development, we break projects into smaller, manageable cycles, delivering continuous value and adapting to changes quickly to meet evolving customer needs.',
      icon: '/agile-development.png'
    },
    {
      title: 'Continuous Integration/Deployment',
      description: 'Ensure smooth, consistent releases with CI/CD automation. We help integrate and deploy code faster, improve software quality, and reduce the risks associated with manual deployments, enabling your teams to deliver efficiently.',
      icon: '/ci-cd.png'
    },
    {
      title: 'Quality Assurance',
      description: 'Achieve excellence with our robust quality assurance approach. We apply detailed testing protocols to validate functionality, performance, and security, ensuring your product delivers on every promise, every time.',
      icon: '/quality-assurance.png'
    },
    {
      title: 'DevOps Practices',
      description: 'Harness the power of DevOps to streamline your operations. We merge development and IT operations into a unified, automated workflow that accelerates delivery, increases system reliability, and provides real-time visibility across the development lifecycle.',
      icon: '/devops-practices.png'
    },
    {
      title: 'Product Maintenance',
      description: 'Ensure the long-term success of your product with continuous maintenance. Our team provides proactive updates, security patches, and system improvements to maximize performance and maintain customer satisfaction.',
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
