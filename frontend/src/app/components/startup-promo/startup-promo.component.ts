import { Component } from '@angular/core';

@Component({
  selector: 'app-startup-promo',
  standalone: true,
  templateUrl: './startup-promo.component.html',
  styleUrls: ['./startup-promo.component.css']
})
export class StartupPromoComponent {
  title = 'Accelerate Your Startup at CodeLaunch';
  description = 'Join our exclusive program designed to help startups grow and succeed in the competitive tech landscape.';
  ctaText = 'Apply Now';
}