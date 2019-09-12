import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { AuthService } from '../auth.service';
import { Store } from 'src/models/store';
import { StoreService } from '../store.service';

@Component({
  selector: 'sbr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  store: Store;

  constructor(
    private authService: AuthService,
    private storeService: StoreService
  ) {

    this.fetchUser().then(() => {
      if (this.user.type === 'merchant') {
        this.fetchStore();
      }
    });

  }

  async fetchUser() {
    this.user = await this.authService.getUser();
  }

  async fetchStore() {
    this.store = await this.storeService.getStore(this.user.id);
  }

  ngOnInit() {
  }

}
