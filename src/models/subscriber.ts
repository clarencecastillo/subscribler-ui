import { Subscription } from './subscription';

export interface Subscriber {
  id: string;
  address: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  subscriptions: Subscription[];
}
