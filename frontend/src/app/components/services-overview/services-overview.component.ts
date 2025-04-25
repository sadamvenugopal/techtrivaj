import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services-overview',
  standalone: true,
  templateUrl: './services-overview.component.html',
  imports: [CommonModule], // Ensure CommonModule is imported here
  styleUrls: ['./services-overview.component.css']
})
export class ServicesOverviewComponent {
  title = 'What We Do';
  services = [
    { title: 'Development', icon: '/development-icon.png' },
    { title: 'Consulting', icon: '/consulting-icon.png' },
    { title: 'Outsourcing', icon: '/outsourcing-icon.png' },
    { title: 'Training', icon: '/training-icon.png' },
    { title: 'Community', icon: '/community-icon.png' }
  ];
}