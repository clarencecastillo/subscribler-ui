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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './header/user/user.component';
import { MessagesComponent } from './header/messages/messages.component';
import { NotificationsComponent } from './header/notifications/notifications.component';
import { CreatePackageComponent } from './create-package/create-package.component';
import { EditPackageComponent } from './edit-package/edit-package.component';
import { SelectItemModalComponent } from './select-item-modal/select-item-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, GlobalConfig } from 'ngx-toastr';
import { EditItemComponent } from './edit-item/edit-item.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ImageInputComponent } from './image-input/image-input.component';
import { EditMerchantProfileComponent } from './edit-merchant-profile/edit-merchant-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { LinksComponent } from './links/links.component';
import { QrPosterComponent } from './qr-poster/qr-poster.component';
import { HttpClientModule } from '@angular/common/http';
import { QrPrinterComponent } from './qr-printer/qr-printer.component';
import { ClipboardModule } from 'ngx-clipboard';
import { CodeComponent } from './code/code.component';
import { StoreComponent } from './store/store.component';
import { SelectLogisticsComponent } from './select-logistics/select-logistics.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { DataTablesModule } from 'angular-datatables';
import { BigNumberCardComponent } from './dashboard/big-number-card/big-number-card.component';
import { ChartsModule } from 'ng2-charts';
import { SubscriptionsOverviewChartComponent } from './dashboard/subscriptions-overview-chart/subscriptions-overview-chart.component';
import { RevenueSourcesChartComponent } from './dashboard/revenue-sources-chart/revenue-sources-chart.component';
import { PackageScheduleComponent } from './dashboard/package-schedule/package-schedule.component';
import { RevenueOverviewChartComponent } from './dashboard/revenue-overview-chart/revenue-overview-chart.component';
import { CyclePipe } from './cycle.pipe';
import { ViewPackageModalComponent } from './view-package-modal/view-package-modal.component';
import { StorePackageCardComponent } from './store/store-package-card/store-package-card.component';
import { RatingComponent } from './rating/rating.component';
import { MerchantComponent } from './merchant/merchant.component';
import { StoreHomeComponent } from './store-home/store-home.component';
import { MomentModule } from 'ngx-moment';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { UiSwitchModule } from 'ngx-ui-switch';
import { UiSwitchModuleConfig } from 'ngx-ui-switch/ui-switch/ui-switch.config';
import { CycleBadgeComponent } from './cycle-badge/cycle-badge.component';
import { LikeBtnComponent } from './like-btn/like-btn.component';
import { EditStoreComponent } from './edit-store/edit-store.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';

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
  PackageComponent,
  HeaderComponent,
  UserComponent,
  MessagesComponent,
  NotificationsComponent,
  CreatePackageComponent,
  EditPackageComponent,
  EditItemComponent,
  ImageInputComponent,
  EditMerchantProfileComponent,
  ProfileComponent,
  LinksComponent,
  QrPosterComponent,
  QrPrinterComponent,
  CodeComponent,
  StoreComponent,
  SelectLogisticsComponent,
  SubscribersComponent,
  BigNumberCardComponent,
  SubscriptionsOverviewChartComponent,
  RevenueSourcesChartComponent,
  PackageScheduleComponent,
  RevenueOverviewChartComponent,
  StorePackageCardComponent
];

const MODALS = [
  SelectItemModalComponent,
  ConfirmModalComponent,
  EditItemModalComponent,
  ViewPackageModalComponent
];

const PIPES = [
  CyclePipe
];

const TOASTR_GLOBAL_CONFIG: Partial<GlobalConfig> = {
  positionClass: 'toast-bottom-right',
  timeOut: 5000,
  toastClass: 'alert shadow text-light',
  iconClasses: {
    error: 'bg-danger',
    success: 'bg-success'
  }
};

const UI_SWITCH_GLOBAL_CONFIG: UiSwitchModuleConfig = {
  color: '#8E54E9',
  switchColor: '#FFFFFF',
  defaultBgColor: 'rgb(232, 236, 239)',
  defaultBoColor: 'rgb(226, 230, 240)'
};

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    ...MODALS,
    ...PIPES,
    RatingComponent,
    MerchantComponent,
    StoreHomeComponent,
    CycleBadgeComponent,
    LikeBtnComponent,
    EditStoreComponent,
    EditProfileComponent,
    EditPaymentComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(TOASTR_GLOBAL_CONFIG),
    NgxFileDropModule,
    HttpClientModule,
    ClipboardModule,
    DataTablesModule,
    ChartsModule,
    MomentModule,
    ScrollToModule.forRoot(),
    UiSwitchModule.forRoot(UI_SWITCH_GLOBAL_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ...MODALS
  ]
})
export class AppModule { }
