import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sbr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userRegistrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userRegistrationForm = formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
    // formBuilder.group({
    //   user: ,
    //   // business: formBuilder.group({
    //   //   name: ['', [Validators.required]],
    //   //   website: [''],
    //   //   address: formBuilder.group({
    //   //     addressLine1: ['', [Validators.required]],
    //   //     addressLine2: [''],
    //   //     postalCode: [''],
    //   //     country: ['']
    //   //   })
    //   // })
    // });
  }

  ngOnInit() {
  }

}
