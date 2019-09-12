import { Injectable } from '@angular/core';
import { StorePackage } from 'src/models/store-package';
import { ItemService } from './item.service';
import { PackageService } from './package.service';
import { Store } from 'src/models/store';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  stores: Store[];

  constructor(
    private packageService: PackageService,
    private itemService: ItemService,
    private authService: AuthService
  ) { }

  private async buildDummyDataIfNotExists() {

    if (this.stores) {
      return;
    }

    const partialStores: Pick<Store, 'merchantId' | 'business' | 'address' | 'bankAccount' | 'logistics'>[] = [
      {
        merchantId: 'fb8ce97d-2c03-432d-9090-75bf1e629f87',
        business: {
          name: 'Not Starbucks',
          description: 'This store is not Starbucks.',
          type: 'Food and Beverage'
        },
        address: {
          addressLine1: '',
          addressLine2: '',
          postalCode: '',
        },
        bankAccount: {
          name: '',
          number: '',
          bankName: ''
        },
        logistics: {
          partner: {
            id: 'ninjavan'
          },
          pickUpAddress: {
            addressLine1: '',
            addressLine2: '',
            postalCode: '',
            useBusinessAddress: true
          }
        }
      }
    ];

    const storePromises = Promise.all(partialStores.map<Promise<Store>>(async store => {

      const packages = await Promise.all((await this.packageService.getPackages(store.merchantId)).map<Promise<StorePackage>>(async p => ({
        id: p.id,
        merchantId: p.merchantId,
        merchantName: store.business.name,
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
          item: await this.itemService.getItem(this.authService.getUserId(), item.itemId),
          quantity: item.quantity
        })))
      })));

      return {
        ...store,
        packages,
        popularPackages: packages.slice(0, 3),
      };
    }));

    this.stores = await storePromises;
  }

  public async getStore(merchantId: string): Promise<Store> {
    return this.buildDummyDataIfNotExists()
      .then(() => this.stores.find(store => store.merchantId === merchantId));
  }

  public async getPackage(merchantId: string, packageId: string): Promise<StorePackage> {
    return this.getStore(merchantId).then(store => store.packages.find(p => p.id === packageId));
  }
}
