// src/app/company/history-overview/history-overview.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-overview',
  templateUrl: './history-overview.component.html',
  styleUrls: ['./history-overview.component.css'],
  imports: [CommonModule]
})
export class HistoryOverviewComponent {
  milestones = [
    {
      year: '2006',
      event: 'Blue Ocean Group',
      description: 'Blue Ocean Group, Inc. was established as a high-end technology services firm with a focus on consulting and project outsourcing.'
    },
    {
      year: '2007',
      event: 'First Acquisition',
      description: 'Improving Enterprises LLC and Blue Ocean Group, Inc. merged to become Improving Enterprises, Inc., combining the established training, consulting, and project management capabilities of each to maximize the benefits of their existing clients and future clients.'
    },
    // Add more milestones as needed
  ];

  newsArticles = [
    {
      image: '/improving-acquires-jump-analytics.jpg',
      title: 'Improving Acquires Jump Analytics',
      summary: 'Toronto-based Jump Analytics has joined the Improving name as we further expand into Canada.',
      slug: 'improving-acquires-jump-analytics'
    },
    {
      image: '/improving-announces-acquisition-of-zigatta.jpg',
      title: 'Improving Announces Acquisition of Zigatta',
      summary: 'We are thrilled to announce the acquisition of Zigatta, a technology solutions company located in the US and Mexico.',
      slug: 'improving-announces-acquisition-of-zigatta'
    },
    {
      image: '/improving-further-expands-into-canada-with-acquisition-of-bit-quill.jpg',
      title: 'Improving Further Expands into Canada with Acquisition of Bit Quill',
      summary: 'Improving adds another Canadian company, Bit Quill Technologies out of Vancouver, to its brand.',
      slug: 'improving-further-expands-into-canada-with-acquisition-of-bit-quill'
    }
  ];

  constructor(private router: Router) {}

  navigateToNews(slug: string) {
    this.router.navigate(['/news', slug]);
  }
}