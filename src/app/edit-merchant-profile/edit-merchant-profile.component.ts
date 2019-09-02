import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sbr-edit-merchant-profile',
  templateUrl: './edit-merchant-profile.component.html',
  styleUrls: ['./edit-merchant-profile.component.scss']
})
export class EditMerchantProfileComponent implements OnInit {

  profileForm: FormGroup;

  businessTypes: string[] = [
    'Food & Beverage',
    'Service',
    'Retail'
  ];

  logisticsPartnerId: string;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      account: this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phoneNumber: ['']
      }),
      business: this.formBuilder.group({
        name: ['', [Validators.required]],
        type: [this.businessTypes[0], [Validators.required]],
        description: [''],
        address: [''],
        logisticsPartnerId: ['']
      }),
      bankAccount: this.formBuilder.group({
        name: ['', [Validators.required]],
        number: ['', [Validators.required]],
        bankName: ['']
      })
    });
  }

  ngOnInit() {
  }

}
