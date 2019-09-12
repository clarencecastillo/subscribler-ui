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
import { CheckoutComponent } from './checkout/checkout.component';
import { LandingComponent } from './landing/landing.component';
import { MerchantAuthGuard } from './merchant-auth.guard';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LandingComponent,
        pathMatch: 'full'
      },
      {
        path: 'account',
        component: AccountComponent,
        data: {
          header: 'My Account'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'subscriptions',
        component: SubscriptionsComponent,
        data: {
          header: 'My Subscriptions'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'store/:merchantId',
        component: StoreComponent
      },
      {
        path: 'store/:merchantId/package/:packageId',
        component: PackageComponent
      },
      {
        path: 'store/:merchantId/package/:packageId/checkout/:planId',
        component: CheckoutComponent,
        data: {
          header: 'Checkout'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'store/:merchantId/package/:packageId/checkout',
        component: CheckoutComponent,
        data: {
          header: 'Checkout'
        },
        canActivate: [AuthGuard]
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
        component: RegisterWorkflowComponent,
        canActivate: [MerchantAuthGuard]
      },
      {
        path: 'profile',
        component: RegisterWorkflowComponent,
        canActivate: [MerchantAuthGuard]
      },
      {
        path: 'complete',
        component: RegisterWorkflowComponent,
        canActivate: [MerchantAuthGuard]
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [MerchantAuthGuard],
    canActivateChild: [MerchantAuthGuard],
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
        path: 'store',
        component: ProfileComponent,
        data: {
          header: 'Store Settings'
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
