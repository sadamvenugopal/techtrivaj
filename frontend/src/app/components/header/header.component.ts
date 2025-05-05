import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule,RouterModule],
})
export class HeaderComponent {
  logo = '/logo2.png'; // Adjust the path based on where your image is stored
  isMenuOpen = false;
  
  navItems = [
    { name: 'Home', link: '/' },
    {
      name: 'Services',
      children: [
        { name: 'Development', link: '/services/development-overview' },
        { name: 'Consulting', link: '/services/consulting-overview' },
        { name: 'Outsourcing', link: '/services/outsourcing-overview' },
        { name: 'Training', link: '/services/training-overview' },
        { name: 'Community', link: '/services/community-overview' },
      ],
      showChildren: false // for mobile toggle
    },
    {
      name: 'Expertise',
      children: [
        { name: 'Platform Engineering', link: '/expertise/platform-engineering-overview' },
        { name: 'AI', link: '/expertise/ai-overview' },
        { name: 'Modern Data', link: '/expertise/modern-data-overview' },
        { name: 'Application Modernization', link: '/expertise/application-modernization-overview' },
        { name: 'Business Agility', link: '/expertise/business-agility-overview' },
        { name: 'Business Process Transformation', link: '/expertise/business-process-transformation-overview' },
        { name: 'Modern Collaboration', link: '/expertise/modern-collaboration-overview' },
        { name: 'Product Delivery', link: '/expertise/product-delivery-overview' },
      ],
      showChildren: false // for mobile toggle
    },
    { name: 'Partners', link: '/partners' },
    {
      name: 'Company',
      children: [
        { name: 'About Us', link: '/company/about-overview' },
        { name: 'Leadership', link: '/company/leadership-overview' },
        { name: 'Conscious Capitalism', link: '/company/conscious-capitalism-overview' },
        { name: 'History', link: '/company/history-overview' },
        { name: 'Case Studies', link: '/company/case-studies-overview' },
        { name: 'Locations', link: '/company/locations-overview' },
      ],
      showChildren: false
    },    
    { name: 'Careers', link: '/careers'},
    { name: 'Contact', link: '/contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  toggleMobileSubMenu(item: any) {
    item.showChildren = !item.showChildren;
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

}