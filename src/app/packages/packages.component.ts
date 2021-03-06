import { Component, OnInit } from '@angular/core';
import { faPlus, faAngleDown, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { PackageService } from '../package.service';
import { Package } from 'src/models/package';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

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
    private toastrService: ToastrService,
    private authService: AuthService
  ) {
    this.fetchPackages();
  }

  ngOnInit() {}

  async fetchPackages() {
    const userId = this.authService.getUserId();
    this.packages = userId ? await this.packageService.getPackages(userId) : [];
  }

  async createPackage() {
    const p = await this.packageService.createPackage(
      this.authService.getUserId()
    );
    this.packages.push(p);
    this.activePackageId = p.id;
  }

  deletePackage(p: Package) {
    this.packageService.deletePackage(p.merchantId, p.id)
      .then(async () => {
        await this.fetchPackages();
        this.toastrService.success(`Package ${p.name} was deleted successfully`);

        if (this.activePackageId === p.id) {
          this.activePackageId = undefined;
        }
      })
      .catch(error => {
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
