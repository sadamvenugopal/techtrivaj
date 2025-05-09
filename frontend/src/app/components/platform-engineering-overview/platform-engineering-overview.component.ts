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
      description:
       'We conduct a thorough evaluation of your current infrastructure to identify performance bottlenecks, outdated components, and scalability challenges. Our goal is to provide a clear roadmap for modernization—maximizing efficiency, reducing costs, and preparing your tech stack for what’s next.',
      icon: '/infrastructure-assessment.png'
    },
    {
      title: 'Cloud Migration',
      description: 'Our cloud migration services are built around your business goals. We provide a structured, low-risk migration path that ensures continuity, compliance, and improved ROI. Whether you’re consolidating legacy systems or modernizing at scale, we align your cloud strategy with long-term success.',
      icon: '/cloud-migration.png'
    },
    {
      title: 'Microservices Architecture',
      description: 'Move from monolithic to microservices with a seamless transformation that improves system agility and streamlines development. Our approach breaks your application into scalable, independent services that deliver faster deployments, better resource management, and reduced time-to-market—all while enhancing overall system reliability.',
      icon: '/microservices-architecture.png'
    },
    {
      title: 'DevOps Integration',
      description: 'Speed up your release cycles and improve your product’s performance by integrating DevOps practices into your workflow. We help you streamline operations, automate repetitive tasks, and boost collaboration across teams, enabling faster, more efficient development, and quicker time-to-market.',
      icon: '/devops-integration.png'
    },
    {
      title: 'Distributed Systems',
      description: 'Keep your apps fast and available—no matter where your users are. We build distributed systems that reduce latency, improve uptime, and scale with your growth, so your customers always get a smooth experience.',
      icon: '/distributed-systems.png'
    },
    {
      title: 'API Development',
      description: 'APIs are the backbone of modern digital ecosystems. We specialize in building secure, scalable APIs that empower seamless communication between systems, apps, and services. Whether you’re connecting internal tools, integrating with third-party platforms, or creating public-facing APIs for partners, we ensure smooth interoperability, consistent performance, and easy-to-follow documentation that developers love.',
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