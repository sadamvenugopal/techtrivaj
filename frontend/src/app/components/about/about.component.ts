import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  imports:[CommonModule],
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'About Improving';
  description = 'We are dedicated to delivering exceptional services and building long-term relationships with our clients. Our team of experts is committed to excellence in every project we undertake.';
  features = [
    'Accounting Your All-Impact Celebration',
    'Health - On Training Opportunities',
    'Healthcare - Offering Our Business'
  ];
}