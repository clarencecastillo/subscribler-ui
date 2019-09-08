import { Component, OnInit } from '@angular/core';
import { faTachometerAlt, faBoxOpen, faUserFriends, IconDefinition, faAddressCard, faChevronLeft, faBullhorn } from '@fortawesome/free-solid-svg-icons';

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
      path: '/admin/dashboard'
    },
    {
      icon: faBoxOpen,
      text: 'Packages',
      path: '/admin/packages'
    },
    {
      icon: faUserFriends,
      text: 'Subscribers',
      path: '/admin/subscribers'
    },
    {
      icon: faAddressCard,
      text: 'Profile',
      path: '/admin/profile'
    },
    {
      icon: faBullhorn,
      text: 'Links',
      path: '/admin/links'
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
