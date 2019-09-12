import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';
import { User } from 'src/models/user';

@Component({
  selector: 'sbr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  storeIcon = faShoppingCart;

  user: User;

  constructor(private authService: AuthService) {
    this.fetchUser();
  }

  async fetchUser() {
    this.user = await this.authService.getUser();
  }

  ngOnInit() {
  }

}
