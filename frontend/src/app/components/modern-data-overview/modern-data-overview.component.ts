import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-data-overview',
  imports: [CommonModule],
  templateUrl: './modern-data-overview.component.html',
  styleUrl: './modern-data-overview.component.css'
})
export class ModernDataOverviewComponent implements OnInit, OnDestroy {
  sections = [
    {
      title: 'Data Warehousing',
      description: 'We build resilient, cloud-native data warehouses designed for modern analytics, machine learning, and real-time insights. Our architectures support structured and semi-structured data, ensuring agility, scalability, and seamless integration with BI and AI tools.',
      icon: '/data-warehousing.png'
    },
    {
      title: 'Advanced Analytics',
      description: 'Get ahead of the competition with advanced analytics. We leverage Data Analytics Engineering to design tailored solutions that uncover key insights and accelerate business growth.',
      icon: '/advanced-analytics.png'
    },
    {
      title: 'Data Governance',
      description: 'Build a solid data governance framework that ensures trust, consistency, and compliance across your organization.Define clear policies and best practices to manage data securely, reduce risk, and support smarter decision-making.',
      icon: '/data-governance.png'
    },
    {
      title: 'Data Visualization',
      description: ' Empower your organization with data visualizations that simplify complex analytics and reveal actionable insights. Support every decision with clear, compelling visuals tailored for fast, informed action.',
      icon: '/data-visualization.png'
    },
    {
      title: 'Big Data Solutions',
      description: '.Big data solutions help you manage and analyze large datasets with platforms like AWS and Google Cloud. Quickly uncover trends, optimize operations, and turn complex data into clear, actionable insights that drive growth and improve decision-making.',
      icon: '/big-data-solutions.png'
    },
    {
      title: 'Data Security',
      description: ' Protect your business with advanced data security solutions that meet industry standards and regulatory requirements. By implementing modern security practices, you can secure sensitive data, minimize risks, and ensure compliance in today’s fast-paced digital environment. Keep your business safe and compliant with robust, proactive measures.',
      icon: '/data-security.png'
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
      title: 'Data Warehouse Implementation',
      subtitle: 'Centralized Data Storage and Analysis',
      clientName: 'Tech Innovators Inc.',
      logo: '/tech-innovators-logo.png',
      services: ['Data Warehousing', 'Advanced Analytics'],
      technologies: ['Snowflake', 'Tableau', 'AWS Redshift']
    },
    {
      title: 'Big Data Analytics Solution',
      subtitle: 'Handling Large Volumes of Data',
      clientName: 'Acme Corporation',
      logo: '/acme-corporation-logo.png',
      services: ['Big Data Solutions', 'Data Security'],
      technologies: ['Hadoop', 'Spark', 'Azure HDInsight']
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
