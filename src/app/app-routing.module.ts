import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackagesComponent } from './packages/packages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterWorkflowComponent } from './register-workflow/register-workflow.component';
import { QrPrinterComponent } from './qr-printer/qr-printer.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreComponent } from './store/store.component';
import { SubscribersComponent } from './subscribers/subscribers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'print/qr',
    component: QrPrinterComponent
  },
  {
    path: 'store',
    component: StoreComponent
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
        component: DashboardComponent,
        data: {
          header: 'Dashboard'
        }
      },
      {
        path: 'packages',
        component: PackagesComponent,
        data: {
          header: 'Manage Packages'
        }
      },
      {
        path: 'subscribers',
        component: SubscribersComponent,
        data: {
          header: 'Manage Subscribers'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          header: 'Profile'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
