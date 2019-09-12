import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, businessTypes } from 'src/models/store';
import * as _ from 'lodash';

@Component({
  selector: 'sbr-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.scss']
})
export class EditStoreComponent implements OnInit, OnChanges {

  @Input()
  store: Store;

  storeForm: FormGroup;

  businessTypes = businessTypes;

  constructor(private formBuilder: FormBuilder) {
    this.storeForm = this.formBuilder.group({
      business: this.formBuilder.group({
        name: ['', [Validators.required]],
        type: [undefined, [Validators.required]],
        description: [''],
      }),
      bankAccount: this.formBuilder.group({
        name: ['', [Validators.required]],
        number: ['', [Validators.required]],
        bankName: ['']
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

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.store && simpleChanges.store.currentValue) {
      this.storeForm.setValue(_.pick(this.store, 'business', 'bankAccount', 'address'));
    }
  }

}
