import { Injectable } from '@angular/core';
import { StorePackage } from 'src/models/store-package';
import { ItemService } from './item.service';
import { Package } from 'src/models/package';
import { Business } from 'src/models/business';
import { BankAccount } from 'src/models/bank-account';
import { PackageService, BackEndPackage } from './package.service';
import { Store } from 'src/models/store';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as uuid from 'uuid/v4';
import * as _ from 'lodash';
import * as faker from 'faker';
import { Item } from 'src/models/item';
import { Address } from 'src/models/address';
import { Logistics } from 'src/models/logistics';
import { PackageItem } from 'src/models/package-item';
import { StorePackageItem } from 'src/models/store-package-item';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  stores: Store[];

  constructor(
    private packageService: PackageService,
    private itemService: ItemService,
    private authService: AuthService,
    private http: HttpClient
  ) { }

  getAddressFromBackend(backendAddress: string): Address {
    const splitAddr = backendAddress.split('\n')
      return {
        addressLine1: splitAddr[0],
        addressLine2: splitAddr[1],
        postalCode: splitAddr[2]
    }
  }

  mockLogistics(): Logistics {
    return {
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

  mockBusiness(): Business {
    return {
      name: 'Not Starbucks',
      description: 'This store is not Starbucks.',
      type: 'Food and Beverage'
    }
  }

  async mapPackageItemToStorePackageItem(packageItem: PackageItem, merchantId: string): Promise<StorePackageItem> {
    return {
      item: await this.itemService.getItem(merchantId, packageItem.itemId),
      quantity: packageItem.quantity
    }
  }

  async mapPackageToStorePackage(inputPackage: Package, backEndStore: BackEndStore): Promise<StorePackage> {
    return {
      id: inputPackage.id,
      merchantId: inputPackage.merchantId,
      merchantName: backEndStore.business !== null ? backEndStore.business.name : this.mockBusiness().name,
      name: inputPackage.name,
      description: inputPackage.description,
      cycle: inputPackage.cycle,
      imageUrl: inputPackage.imageUrl,
      rating: {
        score: Math.floor((Math.random() * 5) + 3),
        count: Math.floor((Math.random() * 100) + 1)
      },
      subscription: inputPackage.subscriptionPlans && inputPackage.subscriptionPlans.length > 0 ? {
        basicPlanId: inputPackage.subscriptionPlans[0].id,
        mostPopularPlanId: inputPackage.subscriptionPlans[inputPackage.subscriptionPlans.length > 1 ? 1 : 0].id,
        plans: inputPackage.subscriptionPlans,
      } : {
        basicPlanId: undefined,
        mostPopularPlanId: undefined,
        plans: []
      },
      items: inputPackage.items !== null ? await Promise.all(inputPackage.items.map(async item => await this.mapPackageItemToStorePackageItem(item, inputPackage.merchantId))) : []
    };
  }

  private async mapMerchantToStore(merchantId: string, backEndStore: BackEndStore): Promise<Store> {
    const storePackages = await Promise.all(backEndStore.packageList.map(async p => await this.mapPackageToStorePackage(this.packageService.mapPackage(merchantId,p), backEndStore)));
    return {
      merchantId: merchantId,
      business: backEndStore.business || this.mockBusiness(),
      bankAccount: backEndStore.bankAccount !== null ? 
      {name: backEndStore.bankAccount.name, number: backEndStore.bankAccount.accountNumber, bankName: backEndStore.bankAccount.bankName}
      : {name :  "DBS", number : "123", bankName: "DBS"},
      address: await this.getAddressFromBackend(backEndStore.address || ' \n \n \n '),
      packages: storePackages,
      popularPackages: storePackages.slice(0, 3),
      logistics: this.mockLogistics()
    };
  }

  public async getStore(merchantId: string): Promise<Store> {
    return this.http.get<BackEndStore>(`${environment.serverHost}/merchants/${merchantId}`).toPromise().
    then(async store => await this.mapMerchantToStore(merchantId, store));
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

  public async getEmbeddedButton(merchantId: string, url: string) {
    return this.http.get(`${environment.serverHost}/merchants/${merchantId}/embed/${encodeURIComponent(url)}`, {
      responseType: 'text'
    }).toPromise();
  }
}

interface BackEndStore {
  id: string;
  name: string;
  description: string;
  cyclePeriod: number;
  imageUrl: string;
  packageList: BackEndPackage[];
  itemList: Item[];
  business: Business;
  bankAccount: BankAccount;
  address: string;
}
