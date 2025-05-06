import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-open-positions-overview',
  templateUrl: './open-positions-overview.component.html',
  styleUrls: ['./open-positions-overview.component.css'],
  imports:[CommonModule]
})
export class OpenPositionsOverviewComponent {
  // Sample data for positions
  positions = [
    {
      title: 'Junior Partner Manager',
      category: 'Business Development',
      jobType: 'Full Time',
      location: 'Atlanta, GA; Chicago, IL;',
      applyLink: '#'
    },
    {
      title: 'Sr. Project Manager',
      category: 'Project Management',
      jobType: 'Full-Time',
      location: 'Columbus, OH;',
      applyLink: '#'
    },
    {
      title: 'Sr. Platform Engineer',
      category: 'DevOps',
      jobType: 'Full Time',
      location: 'Houston, TX',
      applyLink: '#'
    },
    {
      title: 'Contract Data Architect',
      category: 'Database Engineering',
      jobType: 'Contract',
      location: 'Calgary, AB',
      applyLink: '#'
    }
  ];
}