import { Component, OnInit } from '@angular/core';
import { faTachometerAlt, faBoxOpen, faUserFriends, faTruck, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sbr-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  links: NavigationLink[] = [
    {
      icon: faTachometerAlt,
      text: 'Dashboard',
      path: '/app/dashboard'
    },
    {
      icon: faBoxOpen,
      text: 'Packages',
      path: '/app/packages'
    },
    {
      icon: faUserFriends,
      text: 'Subscriptions',
      path: '/app/subscriptions'
    },
    {
      icon: faTruck,
      text: 'Logistics',
      path: '/app/logistics'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface NavigationLink {
  icon: IconDefinition;
  text: string;
  path: string;
}
