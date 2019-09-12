import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }
  getUserId() {
    const root = this.router.routerState.snapshot.root;
    return root.firstChild.data.userId;
  }

  async getUser(): Promise<User> {
    this.user = await this.userService.getUser(this.getUserId());
    return this.user;
  }
}
