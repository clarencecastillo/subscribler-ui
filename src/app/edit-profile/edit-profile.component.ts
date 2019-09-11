import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DeliveryAddress, deliveryAddressLabels, DeliveryAddressLabel } from 'src/models/delivery-address';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/models/user';

@Component({
  selector: 'sbr-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit, OnChanges {

  @Input()
  user: User;

  profileForm: FormGroup;

  addressLabels: DeliveryAddressLabel[] = deliveryAddressLabels;

  deleteDeliveryAddressIcon = faTimes;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      firstName: [, [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: [''],
      deliveryAddresses: this.formBuilder.array(
        [this.buildDeliveryAddressForm()],
        [Validators.minLength(1)]
      ),
      primaryDeliveryAddressId: ['']
    });
  }

  ngOnInit() {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.user && simpleChanges.user.currentValue) {
      this.profileForm.get('firstName').setValue(this.user.firstName);
      this.profileForm.get('lastName').setValue(this.user.lastName);
      this.profileForm.get('email').setValue(this.user.email);
      this.profileForm.get('phoneNumber').setValue(this.user.phoneNumber);
      this.setDeliveryAddresses(this.user.deliveryAddresses);
    }
  }

  async setDeliveryAddresses(addresses: DeliveryAddress[]) {
    const value = addresses.map(address => this.buildDeliveryAddressForm(address));
    this.profileForm.setControl('deliveryAddresses', this.formBuilder.array(value, [Validators.minLength(1)]));
  }

  buildDeliveryAddressForm(deliveryAddress?: DeliveryAddress) {
    return this.formBuilder.group({
      address: this.formBuilder.group({
        addressLine1: [deliveryAddress ? deliveryAddress.address.addressLine1 : ''],
        addressLine2: [deliveryAddress ? deliveryAddress.address.addressLine2 : ''],
        postalCode: [deliveryAddress ? deliveryAddress.address.postalCode : '']
      }),
      label: [deliveryAddress ? deliveryAddress.label : this.addressLabels[0]],
      note: [deliveryAddress ? deliveryAddress.note : '']
    });
  }

  addDeliveryAddress() {
    const addresses = this.profileForm.get('deliveryAddresses') as FormArray;
    addresses.push(this.buildDeliveryAddressForm());
  }

  deleteDeliveryAddress(index: number) {
    const addresses = this.profileForm.get('deliveryAddresses') as FormArray;
    addresses.removeAt(index);
  }

}
