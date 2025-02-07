import { Routes } from '@angular/router';
import { OverallSLAComponent } from './overall-sla/overall-sla.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

export const routes: Routes = [
    {
        path:'overallSLA',
        component:OverallSLAComponent
    },
    {
        path:'teamDetails',
        component:TeamDetailsComponent
    }
];
