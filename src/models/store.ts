import { StorePackage } from './store-package';
import { Logistics } from './logistics';
import { stringLitArray } from 'src/utils';
import { Address } from './address';

export const businessTypes = stringLitArray(['Service', 'Retail', 'Food and Beverage']);
export type BusinessType = (typeof businessTypes)[number];

export interface Store {
  merchantId: string;
  business: {
    name: string;
    type: BusinessType;
    description: string;
  };
  bankAccount: {
    name: string;
    number: string;
    bankName: string;
  };
  address: Address;
  logistics: Logistics;
  popularPackages: StorePackage[];
  packages: StorePackage[];
}
