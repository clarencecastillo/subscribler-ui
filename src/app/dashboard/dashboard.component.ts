import { Component, OnInit } from '@angular/core';
import { faDollarSign, faUsers, faBox, faCube, faCubes, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sbr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  earningsIcon = faDollarSign;
  subscribersIcon = faUsers;
  subscriptionsIcon = faCubes;
  parcelsDeliveriesIcon = faPeopleCarry;

  constructor() { }

  ngOnInit() {
  }

}
