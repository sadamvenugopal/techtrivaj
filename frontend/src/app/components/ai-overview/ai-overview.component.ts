import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai-overview',
  imports: [CommonModule],
  templateUrl: './ai-overview.component.html',
  styleUrl: './ai-overview.component.css'
})
export class AiOverviewComponent implements OnInit, OnDestroy {
  sections = [
    {
      title: 'Data Analysis',
      description: 'Comprehensive analysis of your data to uncover valuable insights.',
      icon: '/data-analysis.png'
    },
    {
      title: 'Machine Learning Model Deployment',
      description: 'Deploy machine learning models to drive innovation and automation.',
      icon: '/ml-model-deployment.png'
    },
    {
      title: 'Natural Language Processing',
      description: 'Implement NLP solutions to enhance user interaction and data understanding.',
      icon: '/nlp.png'
    },
    {
      title: 'AI Strategy Development',
      description: 'Develop a strategic AI roadmap tailored to your business needs.',
      icon: '/ai-strategy.png'
    },
    {
      title: 'AI Training & Education',
      description: 'Train your team in AI methodologies and best practices.',
      icon: '/ai-training.png'
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
      title: 'AI-Powered Chatbot Implementation',
      subtitle: 'Enhancing Customer Engagement',
      clientName: 'Tech Innovators Inc.',
      logo: '/tech-innovators-logo.png',
      services: ['Data Analysis', 'Machine Learning Model Deployment'],
      technologies: ['Python', 'TensorFlow', 'AWS']
    },
    {
      title: 'Predictive Analytics Solution',
      subtitle: 'Driving Business Insights',
      clientName: 'Acme Corporation',
      logo: '/acme-corporation-logo.png',
      services: ['AI Strategy Development', 'Natural Language Processing'],
      technologies: ['R', 'Keras', 'Google Cloud']
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
