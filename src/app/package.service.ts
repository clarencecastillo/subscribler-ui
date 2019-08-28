import { Injectable } from '@angular/core';
import { Package } from 'src/models/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  packages: Package[] = [
    {
      id: 'packagea',
      name: 'Package A',
      description: 'Some package',
      cycle: 'D',
      items: [],
      pricingOption: [{
        cycles: 1,
        price: undefined,
        description: ''
      }]
    },
    {
      id: 'packageb',
      name: 'Package B',
      description: 'Some package',
      cycle: 'D',
      items: [
        // {
        //   itemId: 'itema',
        //   quantity: 1
        // }
      ],
      pricingOption: [{
        cycles: 1,
        price: undefined,
        description: ''
      }, {
        cycles: 2,
        price: undefined,
        description: ''
      }]
    }
  ];

  constructor() { }

  getPackages(): Package[] {
    return this.packages;
  }

  getPackage(packageId: string) {
    return this.packages.find(p => p.id === packageId);
  }

  createPackage(): string {
    const packageId = 'package' + this.packages.length + 1;
    this.packages.push({
      id: 'package' + this.packages.length + 1,
      name: '',
      description: '',
      cycle: 'D',
      items: [],
      pricingOption: [
        {
          cycles: 1,
          price: undefined,
          description: ''
        }
      ]
    });
    return packageId;
  }

  updatePackage(packageId: string, update: PackageDetails): Promise<void> {
    const existingPackage = this.packages.find(p => p.id === packageId);
    if (!existingPackage) {
      return Promise.reject();
    }

    Object.keys(update).forEach(key => {
      existingPackage[key] = update[key];
    });

    return Promise.resolve();
  }

  deletePackage(packageId: string): Promise<void> {
    this.packages.splice(this.packages.findIndex(p => p.id === packageId), 1);
    return Promise.resolve();
  }
}

export type PackageDetails = Pick<Package, 'name' | 'description' | 'cycle' | 'items' | 'pricingOption'>;
