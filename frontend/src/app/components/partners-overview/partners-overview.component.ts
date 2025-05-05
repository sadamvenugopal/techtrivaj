// src/app/partners-overview/partners-overview.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partners-overview',
  standalone: true,
  templateUrl: './partners-overview.component.html',
  styleUrls: ['./partners-overview.component.css'],
  imports: [CommonModule]
})
export class PartnersOverviewComponent {
  title = 'Trusted Technology Partnerships';

  globalPartners = [
    {
      title: 'Microsoft',
      description: 'As an award-winning, certified Microsoft Gold Partner, Improving has the technical know-how and success record to support clients along their digital transformation journey.',
      logo: '/aws.png',
    },
    {
      title: 'AWS Partner Network',
      description: 'Improving is an AWS Advanced Consulting Partner guiding clients who want to migrate their data to the AWS cloud and advance their business goals. We have extensive experience in DevOps, Microservices, API development, and Platform engineering.',
      logo: '/aws.png',
    },
    {
      title: 'Google Cloud Partner',
      description: 'We are an official Google Cloud Platform Service Partner. We’re helping clients liberate data from legacy systems into Google’s cloud and transform the way they do business.',
      logo: '/aws.png',
    },
    {
      title: 'Scrum.org',
      description: 'Improving is one of the largest certified providers of training for Scrum.org across the globe. Our team of highly skilled instructors offer training in Scrum Master and Product Owner certifications, test-driven development, Angular, team dynamics, and more.',
      logo: '/aws.png',
    }
  ];


  platformPartners = [
    {
      logo: '/aws.png',
      title: 'Snowflake',
      description: 'We partner with Snowflake to provide clients with cloud-agnostic data warehousing solutions that deliver affordable, secure, and fast access to a variety of data structures.'
    },
    {
      logo: '/aws.png',
      title: 'Confluent',
      description: 'Our partnership with Confluent allows us to manage data in real-time to best serve our customer’s changing business needs.'
    },
    {
      logo: '/aws.png',
      title: 'SAP',
      description: 'We are an SAP Gold Partner and are seen as the leader in Analytic Solutions within the SAP North American marketplace.'
    },
    {
      logo: '/aws.png',
      title: 'Akka',
      description: 'Improving leverages its partnership with Akka to deliver high-performance, distributed systems and resilient, scalable applications.'
    },
  ];
  
  constructor(private router: Router) {}

  navigateToPartner(partnerTitle: string) {
    this.router.navigate(['/partners', partnerTitle.toLowerCase().replace(/\s+/g, '-')]);
  }
}