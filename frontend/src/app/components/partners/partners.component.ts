import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
  imports:[CommonModule]

})
export class PartnersComponent {
  title = 'Our Technology Partners';
  partners = [
    { name: 'Microsoft', logo: '🪟' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Google Cloud', logo: '🔍' },
    { name: 'IBM', logo: '💻' },
    { name: 'Oracle', logo: '🏛️' }
  ];
}