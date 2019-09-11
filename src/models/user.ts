import { DeliveryAddress } from './delivery-address';

export type UserType = 'merchant' | 'subscriber';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  imageUrl: string;
  type: UserType;
  deliveryAddresses: DeliveryAddress[];
}
