import { Address } from './address';

export interface Logistics {
  partner: {
    id: string;
  };
  pickUpAddress: Address & {
    useBusinessAddress: boolean;
  };
}