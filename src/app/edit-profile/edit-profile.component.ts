import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DeliveryAddress, deliveryAddressLabels, DeliveryAddressLabel } from 'src/models/delivery-address';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sbr-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  profileForm: FormGroup;

  addressLabels: DeliveryAddressLabel[] = deliveryAddressLabels;

  deleteDeliveryAddressIcon = faTimes;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      firstName: ['Clarence', [Validators.required]],
      lastName: ['Castillo', [Validators.required]],
      email: ['hello@clarencecastillo.me', [Validators.required]],
      phoneNumber: ['99991111'],
      deliveryAddresses: this.formBuilder.array(
        [this.buildDeliveryAddressForm()],
        [Validators.minLength(1)]
      ),
      primaryDeliveryAddressId: ['']
    });
  }

  ngOnInit() {
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
