import { Component, OnInit } from '@angular/core';
import { faTachometerAlt, faBoxOpen, faUserFriends, IconDefinition, faAddressCard, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

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
      text: 'Subscribers',
      path: '/app/subscribers'
    },
    {
      icon: faAddressCard,
      text: 'Profile',
      path: '/app/profile'
    }
  ];

  toggleSidebarIcon = faChevronLeft;

  constructor() { }

  ngOnInit() {
  }

}

interface NavigationLink {
  icon: IconDefinition;
  text: string;
  path: string;
}
