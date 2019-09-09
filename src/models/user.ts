export type UserType = 'merchant' | 'subscriber';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  imageUrl: string;
  type: UserType;
}
