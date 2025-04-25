import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technology-expertise',
  standalone: true,
  templateUrl: './technology-expertise.component.html',
  styleUrls: ['./technology-expertise.component.css'],
  imports:[CommonModule]
})
export class TechnologyExpertiseComponent {
  title = 'Our Strategic Technology Partnerships';
  expertiseAreas = [
    'Cloud Computing',
    'Artificial Intelligence',
    'Data Analytics',
    'Blockchain',
    'Cybersecurity',
    'IoT Solutions'
  ];
}