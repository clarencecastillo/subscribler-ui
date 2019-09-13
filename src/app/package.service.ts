import { Injectable } from '@angular/core';
import { Package } from 'src/models/package';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PackageItem } from 'src/models/package-item';
import { SubscriptionPlan } from 'src/models/subscription-plan';
import { CyclePipe } from './cycle.pipe';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient, private cyclePipe: CyclePipe) {}

  private getCyclePeriod(cyclePeriod: number) {
    return {
      1: 'D',
      7: 'W',
      30: 'M',
      365: 'Y'
    }[cyclePeriod] || 'D';
  }

  private mapPackage(merchantId: string, backEndPackage: BackEndPackage): Package {
    return {
      id: backEndPackage.id,
      name: backEndPackage.name || '',
      description: backEndPackage.description || '',
      imageUrl: backEndPackage.imageUrl || '',
      items: backEndPackage.items || [],
      merchantId,
      subscriptionPlans: backEndPackage.subscriptionPlans || [],
      cycle: this.getCyclePeriod(backEndPackage.cyclePeriod)
    };
  }

  private toBackEndPackage(inPackage: PackageDetails): BackEndPackage {
    return {
      id: '',
      name: inPackage.name,
      items: inPackage.items,
      subscriptionPlans: inPackage.subscriptionPlans,
      description: inPackage.description,
      imageUrl: inPackage.imageUrl,
      cyclePeriod: this.cyclePipe.transform(inPackage.cycle, 'days') as number
    };
  }

  public async getPackages(merchantId: string): Promise<Package[]> {
    return this.http.get<BackEndPackage[]>(`${environment.serverHost}/merchants/12/packages`).toPromise()
      .then(resPackages => resPackages.map(resPackage => this.mapPackage(merchantId, resPackage)));
  }

  public async getPackage(merchantId: string, packageId: string): Promise<Package> {
    return this.http.get<BackEndPackage>(`${environment.serverHost}/merchants/12/packages/${packageId}`).toPromise()
      .then(backEndPackage => this.mapPackage(merchantId, backEndPackage));
  }

  public async createPackage(merchantId: string): Promise<Package> {
    return this.http.post<BackEndPackage>(`${environment.serverHost}/merchants/12/packages`, {}).toPromise()
      .then(backEndPackage => this.mapPackage(merchantId, backEndPackage));
  }

  public async updatePackage(merchantId: string, packageId: string, update: PackageDetails): Promise<Package> {
    return this.http.put<BackEndPackage>(`${environment.serverHost}/merchants/12/packages/${packageId}`, this.toBackEndPackage(update))
      .toPromise().then(backEndPackage => this.mapPackage(merchantId, backEndPackage));
  }

  public async deletePackage(merchantId: string, packageId: string): Promise<void> {
    await this.http.delete<Package>(`${environment.serverHost}/merchants/12/packages/${packageId}`).toPromise();
  }
}

export type PackageDetails = Pick<Package, 'name' | 'description' | 'cycle' | 'items' | 'subscriptionPlans' | 'imageUrl'>;

interface BackEndPackage {
  id: string;
  name: string;
  description: string;
  cyclePeriod: number;
  imageUrl: string;
  items: PackageItem[];
  subscriptionPlans: SubscriptionPlan[];
}
