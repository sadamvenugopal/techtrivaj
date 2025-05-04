import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-process-transformation-overview',
  imports: [CommonModule],
  templateUrl: './business-process-transformation-overview.component.html',
  styleUrl: './business-process-transformation-overview.component.css'
})

export class BusinessProcessTransformationOverviewComponent implements OnInit, OnDestroy {
  sections = [
    {
      title: 'Process Optimization',
      description: 'Streamline business processes for increased efficiency.',
      icon: '/process-optimization.png'
    },
    {
      title: 'Digital Workflow Automation',
      description: 'Automate workflows to reduce manual effort and errors.',
      icon: '/digital-workflow-automation.png'
    },
    {
      title: 'Change Management',
      description: 'Manage change effectively to ensure successful transformation.',
      icon: '/change-management.png'
    },
    {
      title: 'Operational Excellence',
      description: 'Achieve operational excellence through continuous improvement.',
      icon: '/operational-excellence.png'
    },
    {
      title: 'Lean Six Sigma',
      description: 'Implement Lean Six Sigma methodologies for process improvement.',
      icon: '/lean-six-sigma.png'
    },
    {
      title: 'Agile Transformation',
      description: 'Transition to agile practices for faster and more flexible development cycles.',
      icon: '/agile-transformation.png'
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
      title: 'Workflow Automation Project',
      subtitle: 'Reducing Manual Effort and Errors',
      clientName: 'Tech Innovators Inc.',
      logo: '/tech-innovators-logo.png',
      services: ['Digital Workflow Automation', 'Change Management'],
      technologies: ['RPA', 'BPM', 'Azure Logic Apps']
    },
    {
      title: 'Lean Six Sigma Implementation',
      subtitle: 'Improving Process Efficiency',
      clientName: 'Acme Corporation',
      logo: '/acme-corporation-logo.png',
      services: ['Lean Six Sigma', 'Operational Excellence'],
      technologies: ['Minitab', 'JIRA', 'Tableau']
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
