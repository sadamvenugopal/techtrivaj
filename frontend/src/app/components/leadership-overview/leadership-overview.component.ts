// src/app/company/leadership-overview/leadership-overview.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leadership-overview',
  templateUrl: './leadership-overview.component.html',
  styleUrls: ['./leadership-overview.component.css'],
  imports: [CommonModule]
})
export class LeadershipOverviewComponent {
  leadership = [
    {
      name: 'Curtis Hite',
      position: 'Chief Executive Officer',
      photo: '/curtis-hite.jpg'
    },
    {
      name: 'Ric DeAnda',
      position: 'Chief Acquisition Officer',
      photo: '/ric-deanda.jpg'
    },
    {
      name: 'Susan Fojtasek',
      position: 'Chief of Staff',
      photo: '/susan-fojtasek.jpg'
    },
    {
      name: 'Jorge Pliego',
      position: 'Chief Financial Officer',
      photo: '/jorge-pliego.jpg'
    },
    {
      name: 'Kristin Johnson',
      position: 'Vice President, Marketing',
      photo: '/kristin-johnson.jpg'
    },
    {
      name: 'Devlin Liles',
      position: 'CCO & President',
      photo: '/devlin-liles.jpg'
    },
    {
      name: 'Amber Robinson',
      position: 'Corporate Counsel',
      photo: '/amber-robinson.jpg'
    },
    {
      name: 'Scott McMichael',
      position: 'Managing Director, North America',
      photo: '/scott-mcmichael.jpg'
    },
    {
      name: 'Anurag Kumar',
      position: 'Strategic Advisor',
      photo: '/anurag-kumar.jpg'
    },
    {
      name: 'Clara Sponitz',
      position: 'Vice President, Centralized Recruiting',
      photo: '/clara-sponitz.jpg'
    },
    {
      name: 'Matt Russell',
      position: 'Senior Vice President, Centralized Sales',
      photo: '/matt-russell.jpg'
    },
    {
      name: 'Don McGreal',
      position: 'Vice President of Learning Solutions',
      photo: '/don-mcgreal.jpg'
    },
    {
      name: 'Mark Kovacevich',
      position: 'Senior Vice President, Integrations',
      photo: '/mark-kovacevich.jpg'
    },
    {
      name: 'Jason W. Taylor',
      position: 'President, CodeLaunch',
      photo: '/jason-taylor.jpg'
    },
    {
      name: 'Justin McNeely',
      position: 'Regional Director - Canada',
      photo: '/justin-mcneely.jpg'
    },
    {
      name: 'Michael Matrick',
      position: 'Regional Director - Canada',
      photo: '/michael-matrick.jpg'
    }
  ];

  constructor(private router: Router) {}

  navigateToLeader(leaderName: string) {
    this.router.navigate(['/leaders', leaderName.toLowerCase().replace(/\s+/g, '-')]);
  }

  navigateToCulture() {
    this.router.navigate(['/culture']);
  }
}