import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports:[CommonModule],

})
export class FooterComponent {
  companyName = 'TrivaJTech';
  year = new Date().getFullYear();
  links = [
    { name: 'Home', link: '#home' },
    { name: 'Services', link: '#services' },
    { name: 'About', link: '#about' },
    { name: 'Contact', link: '#contact' },
    { name: 'Privacy Policy', link: '#' },
    { name: 'Terms of Service', link: '#' }
  ];
  socialIcons = [
    { name: 'Twitter', icon: '🐦', link: '#' },
    { name: 'LinkedIn', icon: '🔗', link: '#' },
    { name: 'Facebook', icon: '👍', link: '#' },
    { name: 'Instagram', icon: '📷', link: '#' }
  ];
}