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
      }),
      logistics: this.formBuilder.group({
        partnerId: ['', [Validators.required]]
      })
    });
  }

  ngOnInit() {
  }

}
