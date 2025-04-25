import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-training',
  standalone: true,
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
  imports:[CommonModule],

})
export class TrainingComponent {
  title = 'Improving Your Offer As Training';
  programs = [
    { name: 'Technical Training', icon: '💻' },
    { name: 'Leadership Development', icon: '👔' },
    { name: 'Business Skills', icon: '📈' },
    { name: 'Certification Prep', icon: '🎓' }
  ];
}