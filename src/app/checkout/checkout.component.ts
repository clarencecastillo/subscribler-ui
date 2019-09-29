import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';
import { StorePackage } from 'src/models/store-package';
import { DeliveryAddress } from 'src/models/delivery-address';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faHome, faBuilding, faMapMarkerAlt, faStore, faPlus } from '@fortawesome/free-solid-svg-icons';
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
  selfCollectIcon = faStore;
  deliverySurchargeIcon = faPlus;

  minStartDate = moment().add(1, 'days').toDate();
  maxStartDate = moment().add(7, 'days').toDate();
  expiryDate: moment.Moment;

  total = 0;

  customizationItems: CustomizationItem[] = [
    {
      id: '43b935ac-1ff2-4ea7-bf49-15032881115f',
      label: 'Jam Flavor',
      options: [
        'Peanut Butter',
        'Strawberry',
        'Chocolate',
        'Cream Cheese'
      ]
    },
    {
      id: '68a61c68-9305-43b8-9a74-46e160aac207',
      label: 'Beverage',
      options: [
        'Espresso',
        'Vanilla Latte',
        'Cappuccino',
        'Caramel Macchiato'
      ]
    }
  ];

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
      startDate: [this.minStartDate, [Validators.required]],
      customization: this.buildCustomizationFormGroup(this.customizationItems)
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
        this.total = selectedPlan.price;
        if (value.deliveryAddressId !== 'selfcollect') {
          this.total += 1.25 * selectedPlan.cycles;
        }
      }
    });
  }

  buildCustomizationFormGroup(customizationItems: CustomizationItem[]) {
    return this.formBuilder.group(customizationItems.reduce((map, item) => {
      map[item.id] = [item.options[0]];
      return map;
    }, {}));
  }

  async fetchPackage(merchantId: string, packageId: string) {
    this.package = await this.storeService.getPackage(merchantId, packageId);
  }

  async fetchDeliveryAddresses(userId: string) {
    const deliveryAddresses = await this.userService.getDeliveryAddresses(userId);
    this.deliveryAddresses = deliveryAddresses.map(address => ({
      ...address,
      surcharge: 1.25
    }));
  }

  ngOnInit() {
    
  }

}

export interface CustomizationItem {
  id: string;
  label: string;
  options: string[];
}
