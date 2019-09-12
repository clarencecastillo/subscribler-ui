import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'src/models/subscription';
import { SubscriptionService } from '../subscription.service';
import { AuthService } from '../auth.service';

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
    private authService: AuthService
  ) {

    const userId = this.authService.getUserId();
    this.fetchSubscriptions(userId);
  }

  async fetchSubscriptions(userId: string) {
    this.subscriptions = await this.subscriptionService.getSubscriptions(userId);
  }

  ngOnInit() {
  }

}
