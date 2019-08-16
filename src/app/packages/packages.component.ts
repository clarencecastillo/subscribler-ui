import { Component, OnInit, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PackageService, Package } from '../package.service';

@Component({
  selector: 'sbr-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  newPackageIcon = faPlus;

  packages: Package[];
  activePackageId: string;

  constructor(private packageService: PackageService) { }

  ngOnInit() {
    this.packages = this.packageService.getPackages();
    this.activePackageId = this.packages[0].id;
  }

  createPackage() {
    const packageId = this.packageService.createPackage();
    this.activePackageId = packageId;
  }

}
