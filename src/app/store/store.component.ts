import { Component, OnInit } from '@angular/core';
import { StorePackage } from 'src/models/store-package';
import { StoreService } from '../store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sbr-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  name: string;
  description: string;
  popularPackages: StorePackage[] = [];
  packages: StorePackage[] = [];

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.fetchPackages(params.merchantId);
    });
  }

  ngOnInit() {
  }

  async fetchPackages(merchantId: string) {
    const store = await this.storeService.getStore(merchantId);
    this.name = store.business.name;
    this.description = store.business.description;
    this.popularPackages = store.popularPackages;
    this.packages = store.packages;
  }

}
