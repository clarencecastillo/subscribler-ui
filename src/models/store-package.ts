import { CycleSymbol } from './cycle';
import { StorePackageItem } from './store-package-item';
import { SubscriptionPlan } from './subscription-plan';

export interface StorePackage {
  id: string;
  merchantId: string;
  merchantName: string;
  name: string;
  description: string;
  cycle: CycleSymbol;
  imageUrl: string;
  rating: {
    score: number;
    count: number;
  };
  subscription: {
    basicPlanId: string;
    mostPopularPlanId: string;
    plans: SubscriptionPlan[];
  };
  items?: StorePackageItem[];
}
