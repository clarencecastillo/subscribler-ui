import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorePackage } from 'src/models/store-package';
import { StoreService } from '../store.service';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { Review } from 'src/models/review';
import * as moment from 'moment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'sbr-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {

  package: StorePackage;

  deliverIcon = faTruck;

  reviews: Review[] = [
    {
      author: 'Jonah Z',
      comment: `This is both attractive and highly adaptable. We can't understand how we've been living without this subscription.`,
      score: 5,
      timestamp: moment().subtract(6, 'minutes').valueOf()
    },
    {
      author: 'Tifany K',
      comment: `It's exactly what I've been looking for. I'm good to go. I use subscription often. Subscription is the real deal.`,
      score: 5,
      timestamp: moment().subtract(2, 'days').valueOf()
    },
    {
      author: 'Sheryl S',
      comment: `Your company is truly upstanding and is behind its product 100%."`,
      score: 4,
      timestamp: moment().subtract(3, 'days').valueOf()
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storeService: StoreService,
    private authService: AuthService
  ) {
    this.route.params.subscribe(params => {
      this.fetchPackage(params.merchantId, params.packageId);
    });
  }

  async fetchPackage(merchantId: string, packageId: string) {
    this.package = await this.storeService.getPackage(merchantId, packageId);
  }

  ngOnInit() {
  }

  goToCheckoutPage(planId: string) {
    const user = this.authService.getUser();
    if (user.type === 'subscriber') {
      this.router.navigate(['/', 'store', this.package.merchantId, 'package', this.package.id, 'checkout', planId]);
    }
  }

}
