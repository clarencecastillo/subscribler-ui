import { StorePackage } from './store-package';

export interface Store {
  name: string;
  description: string;
  popularPackages: StorePackage[];
  packages: StorePackage[];
}
