import { SubscriptionPlan } from './subscription-plan';
import { StorePackage } from './store-package';

export type SubscriptionStatus = 'active' | 'inactive' | 'canceled' | 'processing' | 'pending';

export interface Subscription {
  id: string;
  subscriberId: string;
  merchantId: string;
  package: Pick<StorePackage, 'id' | 'cycle' | 'name'>;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  autoRenew: boolean;
  startDate: number;
  expirationDate: number;
  deliveryAddressId: string;
}
