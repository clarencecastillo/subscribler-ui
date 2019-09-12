import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { AuthService, NewUser } from '../auth.service';
import { UserType } from 'src/models/user';

@Component({
  selector: 'sbr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['Jinping', [Validators.required]],
      lastName: ['Xi', [Validators.required]],
      email: ['jinping@mymail.com', [Validators.required, Validators.email]],
      phoneNumber: ['29583265', [Validators.required]],
      password: ['123', [Validators.required]],
      confirmPassword: ['123', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  async register(userType: UserType) {
    if (this.registerForm.invalid ||
      this.registerForm.get('password').value !== this.registerForm.get('confirmPassword').value) {
      return Promise.reject();
    }

    const details = _.omit(this.registerForm.value, 'confirmPassword') as NewUser;
    return this.authService.register(userType, details);
  }

}
