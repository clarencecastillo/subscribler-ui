import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PackageService } from '../package.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { cycles, Cycle } from 'src/models/cycle';
import { Package } from 'src/models/package';
import { faTimes, faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectItemModalComponent } from '../select-item-modal/select-item-modal.component';
import { ItemService } from '../item.service';
import { Item } from 'src/models/item';
import { PricingOption } from 'src/models/pricing-option';
import { PackageItem } from 'src/models/package-item';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'sbr-edit-package',
  templateUrl: './edit-package.component.html',
  styleUrls: ['./edit-package.component.scss']
})
export class EditPackageComponent implements OnInit, OnChanges {

  @Input()
  packageId: string;

  package: Package;

  packageForm: FormGroup;

  cycles: Cycle[] = cycles;

  removeItemIcon = faTimes;
  emptyItemsIcon = faTruckLoading;
  deletePricingOptionIcon = faTimes;

  selectedItems: Item[] = [];
  loadChanges = false;

  constructor(
    private packageService: PackageService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private itemService: ItemService
  ) {

    this.packageForm = this.formBuilder.group({
      name: [''],
      description: [''],
      cycle: ['', [Validators.required]],
      items: this.formBuilder.array([]),
      pricingOption: this.formBuilder.array([], [Validators.minLength(1)]),
    });

    this.packageForm.valueChanges.pipe(
      filter(() => !this.loadChanges)
    ).subscribe(event => {
      this.packageService.updatePackage(this.packageId, this.packageForm.value);
    });
  }

  ngOnInit() {

  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.packageId) {
      this.loadChanges = true;
      this.package = this.packageService.getPackage(changes.packageId.currentValue);
      this.packageForm.patchValue({
        name: this.package.name,
        description: this.package.description,
        cycle: this.package.cycle
      });
      this.setpricingOption(this.package.pricingOption);
      await this.setPackageItems(this.package.items);
      this.loadChanges = false;
    }
  }

  async setPackageItems(items: PackageItem[]) {
    this.selectedItems = await this.itemService.getItemsById(items.map(item => item.itemId));
    const value = items.map(item => this.buildPackageItemForm(item));
    this.packageForm.setControl('items', this.formBuilder.array(value, [Validators.minLength(1)]));
  }

  setpricingOption(pricingOption: PricingOption[]) {
    const value = pricingOption.map(PricingOption => this.buildPricingOptionForm(PricingOption));
    this.packageForm.setControl('pricingOption', this.formBuilder.array(value, [Validators.minLength(1)]));
  }

  buildPricingOptionForm(PricingOption?: PricingOption) {
    return this.formBuilder.group({
      cycles: [PricingOption ? PricingOption.cycles : 1, [Validators.required]],
      price: [PricingOption ? PricingOption.price : undefined, [Validators.required]],
      description: [PricingOption ? PricingOption.description : '']
    });
  }

  addPricingOption() {
    const pricingOption = this.packageForm.get('pricingOption') as FormArray;
    pricingOption.push(this.buildPricingOptionForm());
  }

  buildPackageItemForm(item: PackageItem) {
    return this.formBuilder.group({
      itemId: [item.itemId],
      quantity: [item.quantity, [Validators.required, Validators.min(1)]]
    });
  }

  addPackageItem(item: Item, quantity: number) {
    this.selectedItems.push(item);
    const items = this.packageForm.get('items') as FormArray;
    items.push(this.buildPackageItemForm({ itemId: item.id, quantity }));
  }

  removeItem(index: number) {
    this.selectedItems.splice(index, 1);
    const items = this.packageForm.get('items') as FormArray;
    items.removeAt(index);
  }

  presentSelectItemModal() {
    const modal = this.modalService.open(SelectItemModalComponent, {
      centered: true,
      size: 'xl'
    });

    modal.result.then(async (itemIds: string[]) => {
      const items = await this.itemService.getItemsById(itemIds);
      items.forEach(item => this.addPackageItem(item, 1));
    }).catch(() => {});
  }

  deletePricingOption(index: number) {
    const pricingOption = this.packageForm.get('pricingOption') as FormArray;
    pricingOption.removeAt(index);
  }
}
