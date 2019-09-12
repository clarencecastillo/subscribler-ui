import { PackageItem } from './package-item';
import { CycleSymbol } from './cycle';
import { SubscriptionPlan } from './subscription-plan';

export interface Package {
  id: string;
  merchantId: string;
  name: string;
  description: string;
  cycle: CycleSymbol;
  imageUrl: string;
  items: PackageItem[];
  subscriptionPlans: SubscriptionPlan[];
}
