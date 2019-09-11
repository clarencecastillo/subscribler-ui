import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { StoreService } from '../store.service';
import { StorePackage } from 'src/models/store-package';
import { DeliveryAddress } from 'src/models/delivery-address';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { faHome, faBuilding, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { CyclePipe } from '../cycle.pipe';

@Component({
  selector: 'sbr-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  package: StorePackage;

  deliveryAddresses: DeliveryAddress[] = [];

  subscriptionForm: FormGroup;

  addressHomeIcon = faHome;
  addressWorkIcon = faBuilding;
  addressOthersIcon = faMapMarkerAlt;

  minStartDate = moment().add(1, 'days').toDate();
  maxStartDate = moment().add(7, 'days').toDate();
  expiryDate: moment.Moment;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cyclePipe: CyclePipe
  ) {

    this.subscriptionForm = this.formBuilder.group({
      subscriberId: [''],
      merchantId: [''],
      packageId: [''],
      planId: [''],
      deliveryAddressId: [''],
      startDate: [this.minStartDate]
    });

    this.route.params.subscribe(async params => {
      this.subscriptionForm.get('merchantId').setValue(params.storeId);
      this.subscriptionForm.get('packageId').setValue(params.packageId);
      this.subscriptionForm.get('planId').setValue(params.planId);
      await this.fetchPackage(params.packageId);
    });

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      const userId = this.route.snapshot.parent.data.userId;
      this.subscriptionForm.get('subscriberId').setValue(userId);
      this.fetchDeliveryAddresses(userId);
    });

    this.subscriptionForm.valueChanges.subscribe(value => {
      if (this.package && value.planId && value.startDate) {
        const selectedPlan = this.package.subscription.plans.find(plan => plan.id === value.planId);
        const planDays = cyclePipe.transform(this.package.cycle, 'days') as number;
        this.expiryDate = moment(value.startDate).add(selectedPlan.cycles * planDays, 'days');
      }
    });
  }

  async fetchPackage(packageId: string) {
    this.package = await this.storeService.getPackage(packageId);
  }

  async fetchDeliveryAddresses(userId: string) {
    this.deliveryAddresses = await this.userService.getDeliveryAddresses(userId);
  }

  ngOnInit() {
    
  }

}
