import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Logistics } from 'src/models/logistics';
import { Store } from 'src/models/store';

@Component({
  selector: 'sbr-edit-logistics',
  templateUrl: './edit-logistics.component.html',
  styleUrls: ['./edit-logistics.component.scss']
})
export class EditLogisticsComponent implements OnInit, OnChanges {

  @Input()
  store: Store;

  logisticsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.logisticsForm = this.formBuilder.group({
      partner: this.formBuilder.group({
        id: ['', [Validators.required]]
      }),
      pickUpAddress: this.formBuilder.group({
        useBusinessAddress: [true],
        addressLine1: [''],
        addressLine2: [''],
        postalCode: ['']
      })
    });
    this.togglePickUpAddressDisabled(true);
  }

  ngOnInit() {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.store && simpleChanges.store.currentValue) {
      this.logisticsForm.setValue(this.store.logistics);
      if (this.store.logistics.pickUpAddress.useBusinessAddress) {
        this.logisticsForm.get('pickUpAddress').get('addressLine1').setValue(this.store.address.addressLine1);
        this.logisticsForm.get('pickUpAddress').get('addressLine2').setValue(this.store.address.addressLine2);
        this.logisticsForm.get('pickUpAddress').get('postalCode').setValue(this.store.address.postalCode);
      }
    }
  }

  togglePickUpAddressDisabled(disable?: boolean) {

    const pickUpAddressForm: FormGroup = this.logisticsForm.get('pickUpAddress') as FormGroup;
    if (disable === undefined) {
      disable = pickUpAddressForm.get('useBusinessAddress').value;
    }

    Object.keys(pickUpAddressForm.controls)
      .filter(controlName => controlName !== 'useBusinessAddress')
      .map(controlName => pickUpAddressForm.get(controlName))
      .forEach(control => disable ? control.disable() : control.enable());
  }

}
