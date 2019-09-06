import { CycleSymbol } from './cycle';
import { PackageItem } from './package-item';
import { SubscriptionPlan } from './subscription-plan';

export interface StorePackage {
  id: string;
  name: string;
  description: string;
  cycle: CycleSymbol;
  imageUrl: string;
  items: PackageItem[];
  subscription: {
    startingPrice: number;
    plans: SubscriptionPlan[];
  };
}
