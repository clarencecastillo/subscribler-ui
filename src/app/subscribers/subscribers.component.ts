import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../../models/subscriber';

@Component({
  selector: 'sbr-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  subscribers: Subscriber[] = [];

  constructor() {
    for (let index = 0; index < 50; index++) {
      this.subscribers.push({
        id: '' + (index + 1),
        firstName: 'Some',
        lastName: 'Person',
        address: '',
        email: 'someperson@test.com',
        phoneNumber: '12341234',
        subscriptions: []
      });
    }
  }

  ngOnInit() {
  }

}
