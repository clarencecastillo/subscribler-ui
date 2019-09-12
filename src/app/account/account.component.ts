import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'sbr-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user: User;

  constructor(
    private authService: AuthService
  ) {

    this.fetchUser();

  }

  async fetchUser() {
    this.user = this.authService.getUser();
  }

  ngOnInit() {
  }

}
