import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sbr-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.scss']
})
export class EditStoreComponent implements OnInit {

  storeForm: FormGroup;

  businessTypes: string[] = [
    'Food & Beverage',
    'Service',
    'Retail'
  ];

  constructor(private formBuilder: FormBuilder) {
    this.storeForm = this.formBuilder.group({
      business: this.formBuilder.group({
        name: ['Not Starbucks', [Validators.required]],
        type: [this.businessTypes[0], [Validators.required]],
        description: ['Definitely not Starbucks.'],
      }),
      bankAccount: this.formBuilder.group({
        name: ['Business Account', [Validators.required]],
        number: ['9999999999999', [Validators.required]],
        bankName: ['DBS']
      }),
      address: this.formBuilder.group({
        addressLine1: [''],
        addressLine2: [''],
        postalCode: ['']
      })
    });
  }

  ngOnInit() {
  }

}
