import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PackageService, Package, Cycle } from '../package.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'sbr-modify-package',
  templateUrl: './modify-package.component.html',
  styleUrls: ['./modify-package.component.scss']
})
export class ModifyPackageComponent implements OnInit, OnChanges {

  @Input()
  packageId: string;

  package: Package;

  packageForm: FormGroup;

  cycles: Cycle[];

  constructor(private packageService: PackageService, private formBuilder: FormBuilder) {
    this.cycles = this.packageService.getCycles();

    this.packageForm = this.formBuilder.group({
      name: [''],
      description: [''],
      cycle: ['', [Validators.required]],
      items: this.formBuilder.array([
        this.formBuilder.group({
          name: [''],
          unit: ['pc'],
          quantity: [1, [Validators.required, Validators.min(0)]],
          photos: this.formBuilder.array([])
        })
      ]),
      billingOptions: this.formBuilder.array([], [Validators.minLength(1)]),
    });
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.packageId) {
      this.package = this.packageService.getPackage(changes.packageId.currentValue);
      console.log(this.packageForm.value);
      this.packageForm.patchValue(this.package);
    }
  }


  createBillingOption() {
    return this.formBuilder.group({
      cycle: [undefined, [Validators.required]],
      duration: [undefined, [Validators.required]],
      price: [undefined, [Validators.required]]
    });
  }

  addBillingOption() {
    const billingOptions = this.packageForm.get('billingOptions') as FormArray;
    billingOptions.push(this.createBillingOption());
  }

}
