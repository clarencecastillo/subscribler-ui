import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sbr-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.scss']
})
export class CreatePackageComponent implements OnInit {

  createPackageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createPackageForm = formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

}
