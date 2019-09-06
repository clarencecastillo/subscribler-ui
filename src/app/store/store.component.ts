import { Component, OnInit } from '@angular/core';
import { StorePackage } from 'src/models/store-package';
import { StoreService } from '../store.service';

@Component({
  selector: 'sbr-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  popularPackages: StorePackage[] = [];
  packages: StorePackage[] = [];

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit() {
    this.fetchPackages();
  }

  async fetchPackages() {
    const storeData = await this.storeService.getStoreData();
    this.popularPackages = storeData.popularPackages;
    this.packages = storeData.packages;
  }

}
