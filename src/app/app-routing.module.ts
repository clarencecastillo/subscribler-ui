import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackagesComponent } from './packages/packages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterWorkflowComponent } from './register-workflow/register-workflow.component';
import { QrPrinterComponent } from './qr-printer/qr-printer.component';
import { HomeComponent } from './home/home.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { LinksComponent } from './links/links.component';
import { StoreComponent } from './store/store.component';
import { PackageComponent } from './package/package.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'account',
        component: ProfileComponent,
        data: {
          header: 'My Account',
          userType: 'subscriber'
        }
      },
      {
        path: 'subscriptions',
        component: SubscriptionsComponent,
        data: {
          header: 'My Subscriptions'
        }
      },
      {
        path: 'store/:storeId',
        component: StoreComponent
      },
      {
        path: 'store/:storeId/package/:packageId',
        component: PackageComponent
      }
    ]
  },
  {
    path: 'print/qr',
    component: QrPrinterComponent
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
    path: 'admin',
    component: AdminComponent,
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
          header: 'Profile',
          userType: 'merchant'
        }
      },
      {
        path: 'links',
        component: LinksComponent,
        data: {
          header: 'Links'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
