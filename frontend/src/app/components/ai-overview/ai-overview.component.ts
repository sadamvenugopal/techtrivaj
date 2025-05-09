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
      description: 'We provide deep, actionable insights through comprehensive data analysis that helps you understand trends, identify opportunities, and make smarter business decisions. Our team turns raw data into meaningful intelligence that drives growth and efficiency.',
      icon: '/data-analysis.png'
    },
    {
      title: 'Machine Learning Model Deployment',
      description: 'We help you move from model development to real-world impact by deploying scalable, production-ready machine learning models. Our team ensures your models are optimized for performance, integrated with your systems, and ready to drive automation, innovation, and smarter decision-making.',
      icon: '/ml-model-deployment.png'
    },
    {
      title: 'Natural Language Processing',
      description: 'Transform the way your business interacts with users and data. Our NLP solutions use state-of-the-art AI models to automate language understanding, improve customer support, extract insights from text, and enhance decision-making—bridging the gap between human communication and digital systems.',
      icon: '/nlp.png'
    },
    {
      title: 'AI Strategy Development',
      description: 'Accelerate innovation with a forward-thinking AI roadmap built around your business objectives. We assess your current capabilities, identify strategic opportunities, and develop a clear, actionable plan for adopting AI technologies that drive efficiency, competitiveness, and long-term success.',
      icon: '/ai-strategy.png'
    },
    {
      title: 'AI Training & Education',
      description: 'Get your team up to speed with real-world AI training. We cover everything from how AI works to how to use it—from planning to deployment—so your people can build, adopt, and scale smarter solutions, faster.',
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
