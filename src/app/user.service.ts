import { Injectable } from '@angular/core';
import { DeliveryAddress } from 'src/models/delivery-address';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: '25',
      firstName: 'Donald',
      lastName: 'Trump',
      email: 'donald@mymail.com',
      phoneNumber: '29583265',
      imageUrl: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg',
      type: 'subscriber',
      deliveryAddresses: [
        {
          id: '356cf5fb-db1b-46c4-a326-e9872c9f0969',
          address: {
            addressLine1: '1 Thomson Center',
            addressLine2: '#05-23',
            postalCode: '9123563'
          },
          note: '',
          label: 'home',
        },
        {
          id: '31b49a6e-1d3b-4e8e-8c99-ccb94aff6d78',
          address: {
            addressLine1: '8 Jalan Kakatua',
            addressLine2: '',
            postalCode: '173411'
          },
          note: '',
          label: 'work',
        }
      ]
    },
    {
      id: '2',
      firstName: 'Jinping',
      lastName: 'Xi',
      email: 'jinping@mymail.com',
      phoneNumber: '29583265',
      imageUrl: 'https://specials-images.forbesimg.com/imageserve/5aecccdf31358e612fb80afa/416x416.jpg?background=000000&cropX1=1234&cropX2=3554&cropY1=348&cropY2=2667',
      type: 'merchant',
      deliveryAddresses: []
    }
  ];

  constructor(private http: HttpClient) { }

  getUser(userId: string): Promise<User> {
    return Promise.resolve(this.users.find(user => user.id === userId));
  }

  getDeliveryAddresses(userId: string): Promise<DeliveryAddress[]> {
    return Promise.resolve(this.users.find(user => user.id === userId).deliveryAddresses);
  }
}
