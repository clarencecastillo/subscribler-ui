import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  cycles: Cycle[] = [
    {
      value: 'D',
      text: 'daily',
      days: 1
    },
    {
      value: 'W',
      text: 'weekly',
      days: 7
    },
    {
      value: 'M',
      text: 'monthly',
      days: 30
    },
    {
      value: 'Y',
      text: 'yearly',
      days: 365
    }
  ];

  packages: Package[] = [
    {
      id: 'packagea',
      name: 'Package A',
      description: 'Some package',
      cycle: 'D',
      items: [],
      billingOptions: []
    },
    {
      id: 'packageb',
      name: 'Package B',
      description: 'Some other package',
      cycle: 'D',
      items: [],
      billingOptions: []
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
      billingOptions: []
    });
    return packageId;
  }

  getCycles(): Cycle[] {
    return this.cycles;
  }
}

export interface Cycle {
  value: string;
  text: string;
  days: number;
}

export interface Item {
  name: string;
  unit: string;
  quantity: number;
  photos: string[];
}

export interface BillingOption {
  cycle: string;
  duration: number;
  price: number;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  cycle: string;
  items: Item[];
  billingOptions: BillingOption[];
}
