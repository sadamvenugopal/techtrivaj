import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inclusion-diversity-overview',
  templateUrl: './inclusion-diversity-overview.component.html',
  styleUrls: ['./inclusion-diversity-overview.component.css'],
  imports: [CommonModule]
})
export class InclusionDiversityOverviewComponent {
  content = {
    introductionSection: {
      heading: 'A Place to Belong',
      paragraphs: [
        'Our Improvers are a unique mix of passionate professionals who strive to grow and thrive in new ways. We believe Improving shines when everyone is authentic to themselves and feels accepted, respected, supported, valued, and safe. This is why we work hard to build inclusion in our workplace, so we can all do amazing things and succeed together.',
        'We are committed to establishing and maintaining an inclusive culture that allows ALL Improvers to bring their authentic selves to work each day.'
      ]
    },
    comeAsYouAreSection: {
      heading: 'Come As You Are',
      paragraphs: [
        'At Improving, we look to celebrate the differences that collectively make us great. Our ambition is to change the perception of the IT professional, and we are committed to building a team that represents a variety of backgrounds, perspectives, and skills that represent the world we live in and serve.',
        "That's why Improving is an equal-opportunity workplace. Our positions are available to anyone without regard to race, color, religion, sex, pregnancy, national origin, age, physical and mental disability, marital status, sexual orientation, gender identity and expression, genetic information, military and veteran status, and any other characteristic that is protected by law."
      ],
      imageUrl: '/assets/images/come-as-you-are.jpg',
      altText: 'Team Celebrating Inclusion'
    },
    commitmentSection: {
      heading: 'Our Commitment',
      paragraphs: [
        'Improving is committed to cultivating an environment that fosters authentic, long-term professional and personal relationships. We share in the success and accomplishments of the company, promote open and honest communication, and provide creative ways for everyone to learn and grow. We also encourage a positive atmosphere that is both friendly and fun.',
        'Through these commitments to our employees, we work earnestly to guarantee Improving is a great place to work for all. Alone we are good, but together we can be great.'
      ],
      buttonLabel: 'Our Culture',
      imageUrl: '/assets/images/our-commitment.jpg',
      altText: 'Group Photo'
    },
    testimonialSection: {
      profile: {
        imageUrl: '/assets/images/testimonial-profile.jpg',
        altText: 'Testimonial Profile',
        name: 'Sandy Hermosillo',
        role: 'Director, Community Relations'
      },
      quote: 'Being an Improver, I have the opportunity to work in a company where I can be myself and develop my talent in ways that I never could imagine.'
    },
    blogsSection: {
      heading: 'Blogs You Might Be Interested In',
      description: 'Hear the thoughts and opinions of Improvers on their experiences working at the company.',
      blogs: [
        {
          imageUrl: '/assets/images/blog1.jpg',
          category: 'Community & Culture',
          title: 'Building Bonds Beyond Borders: Viva La Retreat',
          excerpt: 'Walk through the Improving Corporate Retreat with Improver Armando Lopez!',
          readButtonLabel: 'Read Blog'
        },
        {
          imageUrl: '/assets/images/blog2.jpg',
          category: 'Community & Culture',
          title: 'International Women\'s Day 2023',
          excerpt: 'Improving celebrates International Women\'s Day by sitting down with women across the company.',
          readButtonLabel: 'Read Blog'
        },
        {
          imageUrl: '/assets/images/blog3.jpg',
          category: 'Community & Culture',
          title: 'Being PRIDEfully Me at Improving',
          excerpt: 'Armando Lopez shares his journey of becoming his true self and how it benefits himself and Improving.',
          readButtonLabel: 'Read Blog'
        }
      ]
    },
    ctaSection: {
      heading: 'Join Our Amazing Team',
      description: 'We welcome all candidates who are looking to find their place in the Improving family. Reach out to us to get a conversation started.',
      buttonLabel: 'Join the Team'
    }
  };
}