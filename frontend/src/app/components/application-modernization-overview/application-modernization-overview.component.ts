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
      description: ' Modernize your outdated systems with innovative technologies that boost efficiency and scalability. Keep data secure and ensure a seamless upgrade with minimal operational disruption.',
      icon: '/legacy-system-modernization.png'
    },
    {
      title: 'Cloud Native Development',
      description: 'Move to a smarter, more agile cloud environment with cloud-native development. Tailor your applications to take full advantage of cloud scalability, flexibility, and cost-efficiency, driving innovation and long-term success.',
      icon: '/cloud-native-development.png'
    },
    {
      title: 'Microservices Architecture',
      description: 'Move from monolithic to microservices architecture to boost scalability and streamline application management. Enable faster deployment cycles and greater flexibility, improving your ability to innovate and respond to market needs.',
      icon: '/microservices-architecture.png'
    },
    {
      title: 'DevOps Integration',
      description: 'Integrate DevOps to unify development and operations, enabling faster releases, better collaboration, and greater agility. By automating workflows and fostering a culture of continuous improvement, DevOps accelerates time-to-market and drives operational efficiency.',
      icon: '/devops-integration.png'
    },
    {
      title: 'Distributed Systems',
      description: 'Empower your applications to perform at scale with distributed systems built for high availability and low latency. By bringing compute and data closer to users, you ensure seamless experiences, even under heavy load or across global regions.',
      icon: '/distributed-systems.png'
    },
    {
      title: 'API Development',
      description: 'Develop secure, efficient APIs that connect your services, enable automation, and scale with your business. Our API-first approach ensures reliable communication between systems, creating a strong foundation for modern software ecosystems.',
      icon: '/api-development.png'
    },
    {
      title: 'Modern Application Security',
      description: ' From design to deployment, our security-first approach protects your applications against breaches, exploits, and compliance risks. Stay agile without sacrificing safety—modern security, built for modern software.',
      icon: '/modern-application-security.png'
    },
    {
      title: 'Training & Education',
      description: 'Invest in your people with tailored training programs that sharpen skills in software design, architecture, and modern development tools. Our goal: to help your team innovate with confidence and stay future-ready',
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