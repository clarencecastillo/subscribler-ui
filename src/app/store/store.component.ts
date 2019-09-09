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
      this.fetchPackages(params.storeId);
    });
  }

  ngOnInit() {
  }

  async fetchPackages(storeId: string) {
    const store = await this.storeService.getStore(storeId);
    this.name = store.name;
    this.description = store.description;
    this.popularPackages = store.popularPackages;
    this.packages = store.packages;
  }

}
