import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-application-modernization-overview',
  templateUrl: './application-modernization-overview.component.html',
  styleUrls: ['./application-modernization-overview.component.css'],
  imports:[CommonModule]
})
export class ApplicationModernizationOverviewComponent {
  // Sample data for the services section
  sections = [
    {
      title: 'Legacy System Modernization',
      description: 'Transform and update your outdated systems to more current, efficient, and scalable technologies while ensuring data integrity and minimal disruption.',
      icon: '/legacy-system-modernization.png'
    },
    {
      title: 'Cloud Native Development',
      description: 'Transition to a dynamic, efficient, and cost-effective cloud environment with our cloud-native development services. Harness the power of the cloud by tailoring solutions to its unique capabilities.',
      icon: '/cloud-native-development.png'
    },
    {
      title: 'Microservices Architecture',
      description: 'Transition from a monolithic to a microservices architecture to enhance application scalability, flexibility, and speed of deployments.',
      icon: '/microservices-architecture.png'
    },
    {
      title: 'DevOps Integration',
      description: 'Integrate DevOps practices to streamline development and operations, enhancing collaboration, and accelerating time-to-market.',
      icon: '/devops-integration.png'
    },
    {
      title: 'Distributed Systems',
      description: 'Elevate your application’s responsiveness by optimizing proximity to your users. With our distributed systems solutions, ensure enhanced availability and performance while meeting the demands of today’s digital-first world.',
      icon: '/distributed-systems.png'
    },
    {
      title: 'API Development',
      description: 'Design, build, and deploy APIs that facilitate seamless integration, data exchange, and functionality expansion across various applications and systems.',
      icon: '/api-development.png'
    },
    {
      title: 'Modern Application Security',
      description: 'Strengthen your application’s security with modern approaches that ensure robust protection against evolving digital threats.',
      icon: '/modern-application-security.png'
    },
    {
      title: 'Training & Education',
      description: 'Equip your team with cutting-edge skills in Software Delivery, Architecture, Design, and specific technologies. Our expert training services are geared to foster growth, innovation, and mastery in today’s dynamic tech landscape.',
      icon: '/training-education.png'
    }
  ];


  // Sample data for testimonials or team members
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
      title: 'Web Application to Modernize Processes',
      subtitle: 'Transforming Legacy Systems for Efficiency',
      clientName: 'Boys Town National Research Hospital',
      logo: '/artificial-intelligence.jpg',
      services: ['Application Development', 'DevOps Enablement'],
      technologies: ['React', 'Spring Boot', 'SQL Server']
    },
    {
      title: 'Cloud Migration Success Story',
      subtitle: 'Migrating to AWS for Scalability',
      clientName: 'Acme Corporation',
      logo: '/cloud-computing.jpg',
      services: ['Cloud Migration', 'Infrastructure Optimization'],
      technologies: ['AWS', 'Docker', 'Kubernetes']
    },
    {
      title: 'Microservices Transformation',
      subtitle: 'Enhancing Agility and Scalability',
      clientName: 'Tech Innovators Inc.',
      logo: '/cyber-security.jpg',
      services: ['Microservices Architecture', 'Continuous Integration/Deployment'],
      technologies: ['Java', 'Spring Cloud', 'Kafka']
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
    }, 4000); // Slide every 2 seconds
  }

  stopAutoSlide() {
    clearInterval(this.intervalId);
  }

  goToNextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.caseStudies.length;
  }
}