import { PackageItem } from './package-item';
import { BillingOption } from './billing-option';

export interface Package {
  id: string;
  name: string;
  description: string;
  cycle: string;
  items: PackageItem[];
  billingOptions: BillingOption[];
}
