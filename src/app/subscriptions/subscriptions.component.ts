import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'src/models/subscription';
import { SubscriptionService } from '../subscription.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'sbr-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  contextMenuIcon = faEllipsisV;

  subscriptions: Subscription[] = [];

  constructor(
    private subscriptionService: SubscriptionService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      const userId = this.route.snapshot.parent.data.userId;
      this.fetchSubscriptions(userId);
    });
  }

  async fetchSubscriptions(userId: string) {
    this.subscriptions = await this.subscriptionService.getSubscriptions(userId);
  }

  ngOnInit() {
  }

}
