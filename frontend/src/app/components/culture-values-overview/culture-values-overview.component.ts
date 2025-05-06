import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-culture-values-overview',
  imports: [CommonModule],
  templateUrl: './culture-values-overview.component.html',
  styleUrls: ['./culture-values-overview.component.css'] // Ensure this is plural
})
export class CultureValuesOverviewComponent {
  cultureValuesContent = {
    coreValuesSection: {
      heading: 'Our Core Values',
      values: [
        {
          title: 'Excellence',
          description: 'Excellence is not an occasional act, but a persistent habit.'
        },
        {
          title: 'Involvement',
          description: 'Our success is a consequence of our collective involvement.'
        },
        {
          title: 'Dedication',
          description: 'Thinking of others more without thinking less of ourselves.'
        }
      ]
    },
    awardsSection: {
      heading: 'Voted Best Place to Work for Over a Decade!',
      paragraphs: [
        'Our dedication to establishing ongoing trust and a thriving culture is the reason our offices are continually named the best places to work in every city we operate in. Throughout North America, we have received more than 100 Best Place to Work awards and that number continues to grow.',
        'At Improving, we are determined to preserve our amazing work culture which exemplifies teamwork, excellence, and fun! We believe this kind of culture encourages both the inspiration and the motivation to achieve incredible things.'
      ],
      buttonLabel: 'View Our Awards',
      imageUrl: '/assets/images/awards.jpg',
      altText: 'Team Celebrating Awards'
    },
    inclusionSection: {
      heading: 'A Home In Which To Feel Safe',
      paragraphs: [
        'We feel that Improving shines when everyone is able to be true to themselves. That\'s why we think it is important to strive for inclusion so that we can all do amazing things and succeed together.',
        'Different outlooks and perspectives are sincerely celebrated at Improving. We believe authenticity is not only beautiful but necessary to make our workplace great.'
      ],
      buttonLabel: 'Inclusion and Diversity',
      imageUrl: '/assets/images/inclusion.jpg',
      altText: 'Diverse Team'
    },
    testimonialSection: {
      profile: {
        imageUrl: '/assets/images/testimonial-profile.jpg',
        altText: 'Testimonial Profile',
        name: 'Robyn Fuentes',
        role: 'VP of Consulting',
        bioButtonLabel: 'Read Full Bio'
      },
      quote: 'I\'m proud that I get to work with the best and brightest while taking on challenges that make a difference.'
    },
    ctaSection: {
      heading: 'Ready to join the Improving team?',
      buttonLabel: 'Become an Improver'
    }
  };

  // Access the content using this.cultureValuesContent
  content = this.cultureValuesContent;
}