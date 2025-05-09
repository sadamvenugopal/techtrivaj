import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-collaboration-overview',
  imports: [CommonModule],
  templateUrl: './modern-collaboration-overview.component.html',
  styleUrl: './modern-collaboration-overview.component.css'
})


export class ModernCollaborationOverviewComponent implements OnInit, OnDestroy {
  sections = [
    {
      title: 'Team Collaboration Tools',
      description: 'Simplify teamwork with modern collaboration platforms that bring conversations, files, and workflows into one space. Designed for speed and clarity, these tools help your team focus on execution, not coordination.',
      icon: '/team-collaboration-tools.png'
    },
    {
      title: 'Integrated Communication Platforms',
      description: 'Centralize communication with platforms designed to unify your tools, people, and processes. By integrating voice, video, chat, and task management, your teams can collaborate without missing a beat.',
      icon: '/integrated-communication-platforms.png'
    },
    {
      title: 'Remote Work Solutions',
      description: 'Support your distributed teams with remote work solutions designed for speed, security, and collaboration. Equip your workforce with the tools they need to stay aligned, efficient, and engaged from any location.',
      icon: '/remote-work-solutions.png'
    },
    {
      title: 'Knowledge Management Systems',
      description: 'Break down silos and improve decision-making with scalable knowledge management solutions. Make institutional knowledge accessible across departments so your team can learn, adapt, and innovate faster.',
      icon: '/knowledge-management-systems.png'
    },
    {
      title: 'Virtual Meetings',
      description: 'Elevate your remote collaboration with virtual meeting tools that are easy to use, secure, and built for business. Host meetings, share content, and engage participants from anywhere—all in one seamless experience.',
      icon: '/virtual-meetings.png'
    },
    {
      title: 'Document Collaboration',
      description: ' Simplify teamwork with cloud-based document collaboration that enables instant updates, sharing, and version control. Work together in real time, ensuring that your projects stay on track and deadlines are met.',
      icon: '/document-collaboration.png'
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
      title: 'Remote Work Implementation',
      subtitle: 'Enabling Efficient Remote Collaboration',
      clientName: 'Tech Innovators Inc.',
      logo: '/tech-innovators-logo.png',
      services: ['Remote Work Solutions', 'Virtual Meetings'],
      technologies: ['Microsoft Teams', 'Zoom', 'Slack']
    },
    {
      title: 'Knowledge Management System Rollout',
      subtitle: 'Improving Information Sharing',
      clientName: 'Acme Corporation',
      logo: '/acme-corporation-logo.png',
      services: ['Knowledge Management Systems', 'Document Collaboration'],
      technologies: ['Confluence', 'SharePoint', 'Notion']
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
