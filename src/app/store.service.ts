import { Injectable } from '@angular/core';
import { StorePackage } from 'src/models/store-package';
import { ItemService } from './item.service';
import { PackageService } from './package.service';
import { Store } from 'src/models/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  packages: StorePackage[];

  constructor(
    private packageService: PackageService,
    private itemService: ItemService
  ) { }

  private async buildDummyDataIfNotExists() {

    if (this.packages) {
      return;
    }

    this.packages = await this.packageService.getPackages('')
      .then(packages => Promise.all(packages.map<Promise<StorePackage>>(async p => ({
        id: p.id,
        name: p.name,
        description: p.description,
        cycle: p.cycle,
        imageUrl: p.imageUrl,
        rating: {
          score: Math.floor((Math.random() * 5) + 3),
          count: Math.floor((Math.random() * 100) + 1)
        },
        subscription: {
          basicPlanId: p.subscriptionPlans[0].id,
          mostPopularPlanId: p.subscriptionPlans[p.subscriptionPlans.length - 2].id,
          plans: p.subscriptionPlans
        },
        items: await Promise.all(p.items.map(async item => ({
          item: await this.itemService.getItem(item.itemId),
          quantity: item.quantity
        })))
      }))));
  }

  public async getStore(storeId: string): Promise<Store> {
    return this.buildDummyDataIfNotExists().then(() => ({
      name: 'Not Starbucks',
      description: 'Definitely not Starbucks.',
      popularPackages: this.packages.slice(0, 3),
      packages: this.packages
    }));
  }

  public async getPackage(packageId: string): Promise<StorePackage> {
    return this.buildDummyDataIfNotExists()
      .then(() => ({
        ...this.packages.find(p => p.id === packageId),
        store: {
          id: '3',
          name: 'Not Starbucks'
        }
      }));
  }
}
