import { Component, OnInit } from '@angular/core';
import { faSignOutAlt, IconDefinition, faUser, faCogs, faListUl } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sbr-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = {
    name: 'Abhijeet Joshi',
    imageUrl: 'https://media.licdn.com/dms/image/C4D03AQFpVvpLBKewrg/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=dpJ6f4L7qfqRJeSHEXBtnRZpcHDqU5fqtMx06q9ztSs'
  };

  userLinks: UserLink[] = [
    {
      text: 'Account',
      icon: faUser
    },
    {
      text: 'Settings',
      icon: faCogs
    },
    {
      text: 'Activity Log',
      icon: faListUl
    }
  ];

  logoutLink = {
    text: 'Logout',
    icon: faSignOutAlt
  };

  constructor() { }

  ngOnInit() {
  }

}

interface UserLink {
  text: string;
  icon: IconDefinition;
}

interface User {
  name: string;
  imageUrl: string;
}