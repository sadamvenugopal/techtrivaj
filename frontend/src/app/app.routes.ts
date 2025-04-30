import { Routes } from '@angular/router';
import { DevelopmentOverviewComponent } from './components/development-overview/development-overview.component';
import { GuestComponent } from './components/guest/guest.component';
import { ConsultingOverviewComponent } from './components/consulting-overview/consulting-overview.component';
import { OutsourcingOverviewComponent } from './components/outsourcing-overview/outsourcing-overview.component';
import { CommunityOverviewComponent } from './components/community-overview/community-overview.component';
import { TrainingOverviewComponent } from './components/training-overview/training-overview.component';

export const routes: Routes = [
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

  ];