import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sbr-edit-logistics',
  templateUrl: './edit-logistics.component.html',
  styleUrls: ['./edit-logistics.component.scss']
})
export class EditLogisticsComponent implements OnInit {

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
