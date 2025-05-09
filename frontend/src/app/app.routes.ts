import { Routes } from '@angular/router';
import { DevelopmentOverviewComponent } from './components/development-overview/development-overview.component';
import { GuestComponent } from './components/guest/guest.component';
import { ConsultingOverviewComponent } from './components/consulting-overview/consulting-overview.component';
import { OutsourcingOverviewComponent } from './components/outsourcing-overview/outsourcing-overview.component';
import { CommunityOverviewComponent } from './components/community-overview/community-overview.component';
import { TrainingOverviewComponent } from './components/training-overview/training-overview.component';
import { AiOverviewComponent } from './components/ai-overview/ai-overview.component';
import { ApplicationModernizationOverviewComponent } from './components/application-modernization-overview/application-modernization-overview.component';
import { BusinessAgilityOverviewComponent } from './components/business-agility-overview/business-agility-overview.component';
import { BusinessProcessTransformationOverviewComponent } from './components/business-process-transformation-overview/business-process-transformation-overview.component';
import { ModernCollaborationOverviewComponent } from './components/modern-collaboration-overview/modern-collaboration-overview.component';
import { ModernDataOverviewComponent } from './components/modern-data-overview/modern-data-overview.component';
import { PlatformEngineeringOverviewComponent } from './components/platform-engineering-overview/platform-engineering-overview.component';
import { ProductDeliveryOverviewComponent } from './components/product-delivery-overview/product-delivery-overview.component';
import { PartnersOverviewComponent } from './components/partners-overview/partners-overview.component';
import { AboutOverviewComponent } from './components/about-overview/about-overview.component';
import { CaseStudiesOverviewComponent } from './components/case-studies-overview/case-studies-overview.component';
import { ConsciousCapitalismOverviewComponent } from './components/conscious-capitalism-overview/conscious-capitalism-overview.component';
import { HistoryOverviewComponent } from './components/history-overview/history-overview.component';
import { LeadershipOverviewComponent } from './components/leadership-overview/leadership-overview.component';
import { LocationsOverviewComponent } from './components/locations-overview/locations-overview.component';
import { CultureValuesOverviewComponent } from './components/culture-values-overview/culture-values-overview.component';
import { EmployeeGrowthOverviewComponent } from './components/employee-growth-overview/employee-growth-overview.component';
import { InclusionDiversityOverviewComponent } from './components/inclusion-diversity-overview/inclusion-diversity-overview.component';
import { OpenPositionsOverviewComponent } from './components/open-positions-overview/open-positions-overview.component';

export const routes: Routes = [

  { path: '', component: GuestComponent },  // Default route for guest

    {
      path: '',
      component: GuestComponent, // renders home layout with all the app-* sections
    },
    {
      path: 'services/development-overview',
      component: DevelopmentOverviewComponent,
    },
    { 
        path: 'services/development-overview', 
        component: DevelopmentOverviewComponent 
    },
    { 
    path: 'services/consulting-overview',
    component: ConsultingOverviewComponent 
    },
    {
     path: 'services/outsourcing-overview',
     component: OutsourcingOverviewComponent
    },
    { 
     path: 'services/training-overview',
     component: TrainingOverviewComponent 
    },
    {  
     path: 'services/community-overview',
     component: CommunityOverviewComponent
     },

     { path: 'expertise/platform-engineering-overview', component: PlatformEngineeringOverviewComponent },
     { path: 'expertise/ai-overview', component: AiOverviewComponent },
     { path: 'expertise/modern-data-overview', component: ModernDataOverviewComponent },
     { path: 'expertise/application-modernization-overview', component: ApplicationModernizationOverviewComponent },
     { path: 'expertise/business-agility-overview', component: BusinessAgilityOverviewComponent },
     { path: 'expertise/business-process-transformation-overview', component: BusinessProcessTransformationOverviewComponent },
     { path: 'expertise/modern-collaboration-overview', component: ModernCollaborationOverviewComponent },
     { path: 'expertise/product-delivery-overview', component: ProductDeliveryOverviewComponent },


     {path: 'partners', component: PartnersOverviewComponent},

     {
      path: 'company',
      children: [
        {
          path: 'about-overview',
          component: AboutOverviewComponent
        },
        {
          path: 'leadership-overview',
          component: LeadershipOverviewComponent
        },
        {
          path: 'conscious-capitalism-overview',
          component: ConsciousCapitalismOverviewComponent
        },
        {
          path: 'history-overview',
          component: HistoryOverviewComponent
        },
        {
          path: 'case-studies-overview',
          component: CaseStudiesOverviewComponent
        },
        {
          path: 'locations-overview',
          component: LocationsOverviewComponent
        }
      ]
    },

    {
      path: 'careers',
      children: [
        {
          path: 'open-positions-overview',
          component: OpenPositionsOverviewComponent
        },
        {
          path: 'culture-values-overview',
          component: CultureValuesOverviewComponent
        },
        {
          path: 'inclusion-diversity-overview',
          component: InclusionDiversityOverviewComponent
        },
        {
          path: 'employee-growth-overview',
          component: EmployeeGrowthOverviewComponent
        }
      ]
    }
  
  
   
  ];