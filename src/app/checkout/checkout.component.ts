import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';
import { StorePackage } from 'src/models/store-package';
import { DeliveryAddress } from 'src/models/delivery-address';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faHome, faBuilding, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { CyclePipe } from '../cycle.pipe';
import { AuthService } from '../auth.service';
import * as moment from 'moment';

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
    private cyclePipe: CyclePipe,
    private authService: AuthService
  ) {

    this.subscriptionForm = this.formBuilder.group({
      subscriberId: ['', [Validators.required]],
      merchantId: ['', [Validators.required]],
      packageId: ['', [Validators.required]],
      planId: ['', [Validators.required]],
      deliveryAddressId: ['', [Validators.required]],
      startDate: [this.minStartDate, [Validators.required]]
    });

    this.route.params.subscribe(async params => {
      this.subscriptionForm.get('merchantId').setValue(params.merchantId);
      this.subscriptionForm.get('packageId').setValue(params.packageId);
      this.subscriptionForm.get('planId').setValue(params.planId);
      await this.fetchPackage(params.merchantId, params.packageId);
    });

    const userId = this.authService.getUserId();
    this.subscriptionForm.get('subscriberId').setValue(userId);
    this.fetchDeliveryAddresses(userId);

    this.subscriptionForm.valueChanges.subscribe(value => {
      if (this.package && value.planId && value.startDate) {
        const selectedPlan = this.package.subscription.plans.find(plan => plan.id === value.planId);
        const planDays = this.cyclePipe.transform(this.package.cycle, 'days') as number;
        this.expiryDate = moment(value.startDate).add(selectedPlan.cycles * planDays, 'days');
      }
    });
  }

  async fetchPackage(merchantId: string, packageId: string) {
    this.package = await this.storeService.getPackage(merchantId, packageId);
  }

  async fetchDeliveryAddresses(userId: string) {
    this.deliveryAddresses = await this.userService.getDeliveryAddresses(userId);
  }

  ngOnInit() {
    
  }

}
