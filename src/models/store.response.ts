import { StorePackage } from './store-package';

export interface StoreResponse {
  name: string;
  description: string;
  popularPackages: StorePackage[];
  packages: StorePackage[];
}
