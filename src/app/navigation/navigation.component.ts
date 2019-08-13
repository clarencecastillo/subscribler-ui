import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sbr-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  links: NavigationLink[] = [
    {
      text: 'Dashboard',
      path: '/dashboard'
    },
    {
      text: 'Packages',
      path: '/packages'
    },
    {
      text: 'Subscriptions',
      path: '/subscriptions'
    },
    {
      text: 'Logistics',
      path: '/logistics'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface NavigationLink {
  text: string;
  path: string;
}
