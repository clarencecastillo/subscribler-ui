import { Injectable } from '@angular/core';
import { StorePackage } from 'src/models/store-package';
import { ItemService } from './item.service';
import { PackageService } from './package.service';
import { Store } from 'src/models/store';
import { AuthService } from './auth.service';
import * as uuid from 'uuid/v4';
import * as _ from 'lodash';
import * as faker from 'faker';

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
        merchantId: '9',
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

  private generatePackage(): StorePackage {
    const basicPlanId = uuid();
    return {
      id: uuid(),
      merchantId: '999',
      merchantName: 'Random Shop',
      name: faker.commerce.productName(),
      description: faker.commerce.product(),
      cycle: 'M',
      imageUrl: _.sample([
        'http://localhost:4200/assets/images/0e886426-d289-4446-a6b7-96229188ae71.jpg',
        'http://localhost:4200/assets/images/4eb138ec-ac9b-467b-b4cf-019319ce04e1.jpg',
        'http://localhost:4200/assets/images/6cc22d02-d09a-11e9-bb65-2a2ae2dbcce4.jpg',
        'http://localhost:4200/assets/images/6cc22fc8-d09a-11e9-bb65-2a2ae2dbcce4.jpg',
        'http://localhost:4200/assets/images/6cc23388-d09a-11e9-bb65-2a2ae2dbcce4.jpg',
        'http://localhost:4200/assets/images/6cc23694-d09a-11e9-bb65-2a2ae2dbcce4.jpg',
        'http://localhost:4200/assets/images/7f927f9a-d09a-11e9-bb65-2a2ae2dbcce4.jpg',
        'http://localhost:4200/assets/images/7f928620-d09a-11e9-bb65-2a2ae2dbcce4.jpg',
        'http://localhost:4200/assets/images/40db326c-aa8b-4297-9dc7-0d366320e6a7.jpg',
        'http://localhost:4200/assets/images/61ec68e1-f8cd-41c6-8c4c-d3accacc823d.jpg',
        'http://localhost:4200/assets/images/078e4aec-d09a-11e9-bb65-2a2ae2dbcce4.jpg'
      ]),
      rating: {
        score: _.random(1, 5, false),
        count: _.random(100, false)
      },
      subscription: {
        basicPlanId,
        mostPopularPlanId: basicPlanId,
        plans: [
          {
            id: basicPlanId,
            name: 'Basic Plan',
            cycles: 1,
            price: _.random(3, 50),
            description: ''
          }
        ]
      },
      items: []
    };
  }

  public async generateRandomPackages(n: number): Promise<StorePackage[]> {
    const newPackages = _.range(n).map(() => this.generatePackage());
    return Promise.resolve(newPackages);
  }
}
