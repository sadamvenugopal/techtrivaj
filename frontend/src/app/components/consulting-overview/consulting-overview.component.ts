import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulting-overview',
  standalone: true,
  templateUrl: './consulting-overview.component.html',
  styleUrls: ['./consulting-overview.component.css'],
  imports: [CommonModule]
})
export class ConsultingOverviewComponent {
  title = 'Consulting Services';
  sections = [
    {
      title: 'Strategic Planning',
      description: 'Our consulting services help you develop strategic plans that align with your business goals and objectives.',
      icon: 'assets/images/strategic-planning.jpg'
    },
    {
      title: 'Process Improvement',
      description: 'We identify inefficiencies in your processes and recommend improvements to enhance productivity and reduce costs.',
      icon: 'assets/images/process-improvement.jpg'
    },
    {
      title: 'Technology Assessment',
      description: 'Our experts assess your current technology infrastructure to recommend upgrades and optimizations.',
      icon: 'assets/images/technology-assessment.jpg'
    },
    {
      title: 'Change Management',
      description: 'We provide change management services to ensure smooth transitions and successful implementation of new strategies.',
      icon: 'assets/images/change-management.jpg'
    }
  ];

  constructor(private router: Router) {}

  navigateToOverview(sectionTitle: string) {
    this.router.navigate(['/services', sectionTitle.toLowerCase().replace(/\s+/g, '-')]);
  }
}