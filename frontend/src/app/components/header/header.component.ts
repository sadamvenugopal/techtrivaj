import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule],
})
export class HeaderComponent {
  logo = '/logo2.png'; // Adjust the path based on where your image is stored
  isMenuOpen = false;
  
  navItems = [
    { name: 'Home', link: '#home' },
    { name: 'Services', link: '#services' },
    { name: 'Expertise', link: '#expertise' },
    { name: 'About', link: '#about' },
    { name: 'Training', link: '#training' },
    { name: 'Partners', link: '#partners' },
    { name: 'Contact', link: '#contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  // New smooth scroll function
  scrollToSection(event: Event, link: string) {
    event.preventDefault();
    this.closeMenu();
    
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}