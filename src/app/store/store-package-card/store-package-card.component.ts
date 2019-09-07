import { Component, OnInit, Input } from '@angular/core';
import { StorePackage } from 'src/models/store-package';
import { faHeart, faEllipsisV, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { SubscriptionPlan } from 'src/models/subscription-plan';

@Component({
  selector: 'sbr-store-package-card',
  templateUrl: './store-package-card.component.html',
  styleUrls: ['./store-package-card.component.scss']
})
export class StorePackageCardComponent implements OnInit {

  @Input()
  package: StorePackage;

  wishlistIcon = faHeart;
  contextMenuIcon = faEllipsisV;
  reportIcon = faExclamationTriangle;

  store: string;

  basicPlan: SubscriptionPlan;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.store = params.store;
    });
  }

  ngOnInit() {
    this.basicPlan = this.package.subscription.plans.find(plan => plan.id === this.package.subscription.basicPlanId);
  }

}
