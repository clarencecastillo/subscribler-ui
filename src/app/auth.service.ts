import { Injectable } from '@angular/core';
import { User, UserType } from 'src/models/user';
import { UserService } from './user.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const USER_LS_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: BehaviorSubject<User>;
  readonly user$: Observable<User>;

  constructor(
    private userService: UserService,
    private http: HttpClient
  ) {

    const user: User = JSON.parse(localStorage.getItem(USER_LS_KEY));
    this.user = new BehaviorSubject(user);
    this.user$ = this.user.asObservable();
  }

  public async login(email: string, password: string) {
    const user = this.userService.users.find(u => u.email === email);
    this.setUser(user);
    return user;
  }

  public async register(type: UserType, details: NewUser) {
    const user = this.userService.users.find(u => u.email === details.email && u.type === type);
    this.setUser(user);
    return user;
  }

  getUserId(): string {
    return this.user.value ? this.user.value.id : undefined;
  }

  getUser(): User {
    return this.user.value;
  }

  private setUser(user: User) {
    if (user) {
      localStorage.setItem(USER_LS_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_LS_KEY);
    }

    this.user.next(user);
  }

  public async logout() {
    this.setUser(undefined);
  }
}

export interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
}
