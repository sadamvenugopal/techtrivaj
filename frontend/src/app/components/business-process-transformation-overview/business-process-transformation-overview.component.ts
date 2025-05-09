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
      description: ' Transform how work flows through your business. By identifying bottlenecks and automating routine steps, we help you streamline operations and drive consistent, scalable results.',
      icon: '/process-optimization.png'
    },
    {
      title: 'Digital Workflow Automation',
      description: ' Modernize the way your business runs by replacing clunky, manual tasks with smooth, automated workflows. Save time, reduce costs, and get work moving faster—without the headaches.',
      icon: '/digital-workflow-automation.png'
    },
    {
      title: 'Change Management',
      description: ' Transformation is only as strong as your change strategy. We help you manage transitions in a way that minimizes disruption and maximizes momentum.',
      icon: '/change-management.png'
    },
    {
      title: 'Operational Excellence',
      description: 'Drive peak performance by embedding a culture of continuous improvement across every function. Our approach sharpens processes, uplifts quality, and maximizes value—ensuring your operations run at their very best.',
      icon: '/operational-excellence.png'
    },
    {
      title: 'Lean Six Sigma',
      description: 'Optimize operational workflows by merging Lean efficiency with Six Sigma precision. We help organizations cut through inefficiencies, enhance output, and build systems that deliver repeatable excellence.',
      icon: '/lean-six-sigma.png'
    },
    {
      title: 'Agile Transformation',
      description: ' Enable strategic responsiveness at scale. Our agile transformation services embed adaptive frameworks that enhance productivity, reduce delivery risk, and improve time-to-value across complex environments.',
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
