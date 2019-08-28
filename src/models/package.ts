import { PackageItem } from './package-item';
import { PricingOption } from './pricing-option';

export interface Package {
  id: string;
  name: string;
  description: string;
  cycle: string;
  items: PackageItem[];
  pricingOption: PricingOption[];
}
