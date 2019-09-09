import { stringLitArray } from 'src/utils';
import { Address } from './address';

export const deliveryAddressLabels = stringLitArray(['home', 'work', 'others']);
export type DeliveryAddressLabel = (typeof deliveryAddressLabels)[number];

export interface DeliveryAddress {
  id: string;
  address: Address;
  note: string;
  label: DeliveryAddressLabel;
}
