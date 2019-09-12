import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService, NewUser } from '../user.service';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sbr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userRegistrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService
  ) {
    this.userRegistrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  async register() {
    if (this.userRegistrationForm.invalid ||
      this.userRegistrationForm.get('password').value !== this.userRegistrationForm.get('confirmPassword').value) {
      return Promise.reject();
    }

    return this.userService.createUser(_.omit(this.userRegistrationForm.value, 'confirmPassword') as NewUser)
      .then(() => this.toastrService.success('Created account successfully!'))
      .catch(() => this.toastrService.error('Failed to create account'));
  }

}
