// src/app/company/conscious-capitalism-overview/conscious-capitalism-overview.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conscious-capitalism-overview',
  templateUrl: './conscious-capitalism-overview.component.html',
  styleUrls: ['./conscious-capitalism-overview.component.css'],
  imports: [CommonModule]
})
export class ConsciousCapitalismOverviewComponent {
  constructor(private router: Router) {}

  navigateToCodeLaunch() {
    this.router.navigate(['/code-launch']);
  }

  navigateToLeader(leaderName: string) {
    this.router.navigate(['/leaders', leaderName.toLowerCase().replace(/\s+/g, '-')]);
  }

  navigateToPhilosophy() {
    this.router.navigate(['/philosophy']);
  }
}