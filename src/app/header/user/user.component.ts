import { Component, OnInit, Input } from '@angular/core';
import { faSignOutAlt, IconDefinition, faUser, faCogs, faListUl } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/models/user';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

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

  logoutIcon = faSignOutAlt;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}

interface UserLink {
  text: string;
  icon: IconDefinition;
  path: string;
}
