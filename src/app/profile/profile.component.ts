import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from 'src/models/store';
import { StoreService } from '../store.service';

@Component({
  selector: 'sbr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  store: Store;

  constructor(
    private authService: AuthService,
    private storeService: StoreService
  ) {

    this.fetchStore();
  }

  async fetchStore() {
    const userId = this.authService.getUserId();
    this.store = await this.storeService.getStore(userId);
  }

  ngOnInit() {
  }

}
