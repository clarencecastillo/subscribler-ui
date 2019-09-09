import { Component, OnInit } from '@angular/core';
import { faSignOutAlt, IconDefinition, faUser, faCogs, faListUl } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/models/user';

@Component({
  selector: 'sbr-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: Partial<User> = {
    firstName: 'Abhijeet',
    lastName: 'Joshi',
    imageUrl: 'https://media.licdn.com/dms/image/C4D03AQFpVvpLBKewrg/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=dpJ6f4L7qfqRJeSHEXBtnRZpcHDqU5fqtMx06q9ztSs'
  };

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
