import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/models/user';

@Component({
  selector: 'sbr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  readonly loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['donald@mymail.com', [Validators.required, Validators.email]],
      password: ['123', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login(): Promise<User> {

    if (this.loginForm.invalid) {
      return Promise.reject();
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    return this.authService.login(email, password);
  }

}
