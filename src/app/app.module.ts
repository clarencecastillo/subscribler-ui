import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditPackageComponent } from './edit-package/edit-package.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { PackagesComponent } from './packages/packages.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const COMPONENTS = [
  RegisterComponent,
  EditPackageComponent,
  LogisticsComponent,
  PackagesComponent,
  AccountComponent,
  ShopComponent,
  SubscriptionsComponent,
  DashboardComponent,
  NavigationComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
