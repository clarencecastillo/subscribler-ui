import { SubscriptionPlan } from './subscription-plan';
import { StorePackage } from './store-package';

export type SubscriptionStatus = 'active' | 'inactive' | 'canceled' | 'processing';

export interface Subscription {
  id: string;
  merchantId: string;
  package: Pick<StorePackage, 'id' | 'cycle' | 'name'>;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  autoRenew: boolean;
  expiration: number;
}
