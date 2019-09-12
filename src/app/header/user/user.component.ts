import { Component, OnInit, Input } from '@angular/core';
import { faSignOutAlt, IconDefinition, faUser, faCogs, faListUl } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/models/user';

@Component({
  selector: 'sbr-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  userLinks: UserLink[] = [
    {
      text: 'Account',
      icon: faUser,
      path: '/account'
    },
    {
      text: 'Settings',
      icon: faCogs,
      path: undefined
    },
    {
      text: 'Activity Log',
      icon: faListUl,
      path: undefined
    }
  ];

  logoutLink: UserLink = {
    text: 'Logout',
    icon: faSignOutAlt,
    path: undefined
  };

  constructor() { }

  ngOnInit() {
  }

}

interface UserLink {
  text: string;
  icon: IconDefinition;
  path: string;
}
