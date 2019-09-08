import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'src/models/subscription';
import * as moment from 'moment';

@Component({
  selector: 'sbr-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  contextMenuIcon = faEllipsisV;

  subscriptions: Subscription[] = [
    {
      id: '123',
      merchantId: '123',
      package: {
        id: 'b018400d-a81a-4a7e-8d1c-3dae05d062f6',
        name: 'Breakfast Pancakes with Coffee',
        cycle: 'D'
      },
      plan: {
        id: '1b73589f-6783-449d-904f-50346a180561',
        name: 'Weekly',
        cycles: 7,
        price: 82.45,
        description: ''
      },
      status: 'active',
      autoRenew: true,
      expiration: moment().add(1, 'week').valueOf()
    }, {
      id: '124',
      merchantId: '123',
      package: {
        id: 'f35c3a92-1197-4889-b084-977c1f4dba3b',
        name: 'Peanut Butter & Jelly Toast with Coffee',
        cycle: 'D'
      },
      plan: {
        id: 'bf0a905e-7da6-4708-98a0-94e4462b4c6b',
        name: 'Monthly',
        cycles: 31,
        price: 360.95,
        description: ''
      },
      status: 'inactive',
      autoRenew: false,
      expiration: undefined
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
