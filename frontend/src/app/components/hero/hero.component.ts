import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  title = 'Trust Changes Everything';
  subtitle = 'Improving the quality of the company\'s business and its ability to deliver a better customer experience.';
  ctaText = 'Get Started';
}