import { Component, OnInit } from '@angular/core';
import { faPlus, faAngleDown, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { PackageService } from '../package.service';
import { Package } from 'src/models/package';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sbr-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  newPackageIcon = faPlus;
  contextMenuIcon = faAngleDown;
  noSelectedPackageIcon = faBoxOpen;

  packages: Package[] = [];
  activePackageId: string;

  constructor(
    private packageService: PackageService,
    private modalService: NgbModal,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.fetchPackages();
  }

  async fetchPackages() {
    this.packages = await this.packageService.getPackages('123');
  }

  createPackage() {
    const packageId = this.packageService.createPackage();
    this.activePackageId = packageId;
  }

  deletePackage(p: Package) {
    this.packageService.deletePackage(p.id).then(() => {
      this.toastrService.success(`Package ${p.name} was deleted successfully`);

      if (this.activePackageId === p.id) {
        this.activePackageId = undefined;
      }

    }).catch(error => {
      this.toastrService.error(`Failed to delete package: ${error}`);
    });
  }

  presentConfirmDeletePackageModal(p: Package) {
    const modal = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    const confirmModalComponent: ConfirmModalComponent = modal.componentInstance;
    confirmModalComponent.prompt = 'Are you sure you want to delete this package?';
    modal.result.then(() => this.deletePackage(p)).catch(() => {});
  }

}
