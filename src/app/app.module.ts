import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { PackagesComponent } from './packages/packages.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterWorkflowComponent } from './register-workflow/register-workflow.component';
import { PackageComponent } from './package/package.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './header/user/user.component';
import { MessagesComponent } from './header/messages/messages.component';
import { NotificationsComponent } from './header/notifications/notifications.component';
import { CreatePackageComponent } from './create-package/create-package.component';
import { ModifyPackageComponent } from './modify-package/modify-package.component';

const COMPONENTS = [
  RegisterComponent,
  LogisticsComponent,
  PackagesComponent,
  AccountComponent,
  ShopComponent,
  SubscriptionsComponent,
  DashboardComponent,
  NavigationComponent,
  HomeComponent,
  RegisterWorkflowComponent,
  PackageComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    HeaderComponent,
    UserComponent,
    MessagesComponent,
    NotificationsComponent,
    CreatePackageComponent,
    ModifyPackageComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
