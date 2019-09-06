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
import { PackageItem } from 'src/models/package-item';
import { filter } from 'rxjs/operators';
import { SubscriptionPlan } from 'src/models/subscription-plan';

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
  deleteSubscriptionPlanIcon = faTimes;

  packageImage: string;
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
      imageUrl: [''],
      items: this.formBuilder.array([]),
      subscriptionPlans: this.formBuilder.array([], [Validators.minLength(1)]),
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
      this.packageImage = this.package.imageUrl;
      this.packageForm.patchValue({
        name: this.package.name,
        description: this.package.description,
        cycle: this.package.cycle
      });
      this.setSubscriptionPlans(this.package.subscriptionPlans);
      await this.setPackageItems(this.package.items);
      this.loadChanges = false;
    }
  }

  async setPackageItems(items: PackageItem[]) {
    this.selectedItems = await this.itemService.getItemsById(items.map(item => item.itemId));
    const value = items.map(item => this.buildPackageItemForm(item));
    this.packageForm.setControl('items', this.formBuilder.array(value, [Validators.minLength(1)]));
  }

  setSubscriptionPlans(subscriptionPlans: SubscriptionPlan[]) {
    const value = subscriptionPlans.map(subscriptionPlan => this.buildSubscriptionPlanForm(subscriptionPlan));
    this.packageForm.setControl('subscriptionPlans', this.formBuilder.array(value, [Validators.minLength(1)]));
  }

  buildSubscriptionPlanForm(subscriptionPlan?: SubscriptionPlan) {
    return this.formBuilder.group({
      cycles: [subscriptionPlan ? subscriptionPlan.cycles : 1, [Validators.required]],
      price: [subscriptionPlan ? subscriptionPlan.price : undefined, [Validators.required]],
      description: [subscriptionPlan ? subscriptionPlan.description : '']
    });
  }

  addSubscriptionPlan() {
    const subscriptionPlan = this.packageForm.get('subscriptionPlans') as FormArray;
    subscriptionPlan.push(this.buildSubscriptionPlanForm());
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

  deleteSubscriptionPlan(index: number) {
    const subscriptionPlans = this.packageForm.get('subscriptionPlans') as FormArray;
    subscriptionPlans.removeAt(index);
  }
}
