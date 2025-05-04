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
      description: 'Build robust data warehouses for centralized data storage and analysis.',
      icon: '/data-warehousing.png'
    },
    {
      title: 'Advanced Analytics',
      description: 'Leverage advanced analytics to gain valuable business insights.',
      icon: '/advanced-analytics.png'
    },
    {
      title: 'Data Governance',
      description: 'Establish comprehensive data governance policies and practices.',
      icon: '/data-governance.png'
    },
    {
      title: 'Data Visualization',
      description: 'Create intuitive data visualizations to communicate insights effectively.',
      icon: '/data-visualization.png'
    },
    {
      title: 'Big Data Solutions',
      description: 'Implement big data solutions for handling large volumes of data.',
      icon: '/big-data-solutions.png'
    },
    {
      title: 'Data Security',
      description: 'Ensure data security and compliance with modern data practices.',
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
