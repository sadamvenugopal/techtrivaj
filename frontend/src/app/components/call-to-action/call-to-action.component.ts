import { Component } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent {
  title = 'Ready to Get Started?';
  subtitle = 'Contact us today to discuss how we can help your business grow and succeed.';
  ctaText = 'Contact Us';
}