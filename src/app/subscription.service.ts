import { Injectable } from '@angular/core';
import { Subscription } from 'src/models/subscription';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  subscriptions: Subscription[] = [
    {
      id: 'ebeec51b-aba5-44b9-9f2f-21cb32d812ee',
      subscriberId: '1722564c-d093-4722-8788-b1d0a403a5d1',
      merchantId: 'fb8ce97d-2c03-432d-9090-75bf1e629f87',
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
      startDate: moment().valueOf(),
      expirationDate: moment().add(1, 'week').valueOf(),
      deliveryAddressId: '356cf5fb-db1b-46c4-a326-e9872c9f0969'
    }, {
      id: 'eed2b38b-157e-4931-b181-8b11f67f2fbe',
      subscriberId: '1722564c-d093-4722-8788-b1d0a403a5d1',
      merchantId: 'fb8ce97d-2c03-432d-9090-75bf1e629f87',
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
      startDate: undefined,
      expirationDate: undefined,
      deliveryAddressId: '31b49a6e-1d3b-4e8e-8c99-ccb94aff6d78'
    }
  ];

  constructor() { }

  public getSubscriptions(subscriberId: string): Promise<Subscription[]> {
    return Promise.resolve(this.subscriptions);
  }
}
