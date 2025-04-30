import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { PartnerBannerComponent } from '../partner-banner/partner-banner.component';
import { ServicesOverviewComponent } from '../services-overview/services-overview.component';
import { TechnologyExpertiseComponent } from '../technology-expertise/technology-expertise.component';
import { AboutComponent } from '../about/about.component';
import { StartupPromoComponent } from '../startup-promo/startup-promo.component';
import { TrainingComponent } from '../training/training.component';
import { AiTrainingComponent } from '../ai-training/ai-training.component';
import { PartnersComponent } from '../partners/partners.component';
import { TeamComponent } from '../team/team.component';
import { BlogComponent } from '../blog/blog.component';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guest',
  standalone: true,
  imports: [ CommonModule,
    HeaderComponent,
    HeroComponent,
    PartnerBannerComponent,
    ServicesOverviewComponent,
    TechnologyExpertiseComponent,
    AboutComponent,
    // StartupPromoComponent,
    // TrainingComponent,
    // AiTrainingComponent,
    PartnersComponent,
    TeamComponent,
    BlogComponent,
    CallToActionComponent,
    FooterComponent
  ],
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent {

  showBubble = false;

  ngOnInit() {
    setTimeout(() => {
      this.showBubble = true;
    }, 3000); // Show after 3 seconds

    // Optional: Hide after 8 seconds
    setTimeout(() => {
      this.showBubble = false;
    }, 11000); // 3s delay + 8s visibility
  }
}