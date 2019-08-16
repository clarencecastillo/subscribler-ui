import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sbr-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notificationIcon = faBell;
  notifications: Notification[] = [
    {
      date: '12 December 2019',
      text: 'A new monthly report is ready to download!'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Notification {
  date: string;
  text: string;
}
