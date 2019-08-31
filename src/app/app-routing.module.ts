import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackagesComponent } from './packages/packages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { HomeComponent } from './home/home.component';
import { RegisterWorkflowComponent } from './register-workflow/register-workflow.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterWorkflowComponent,
    children: [
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
      },
      {
        path: 'account',
        component: RegisterWorkflowComponent
      },
      {
        path: 'packages',
        component: RegisterWorkflowComponent
      },
      {
        path: 'profile',
        component: RegisterWorkflowComponent
      },
      {
        path: 'complete',
        component: RegisterWorkflowComponent
      }
    ]
  },
  {
    path: 'app',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'packages',
        component: PackagesComponent
      },
      {
        path: 'subscriptions',
        component: SubscriptionsComponent
      },
      {
        path: 'logistics',
        component: LogisticsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
