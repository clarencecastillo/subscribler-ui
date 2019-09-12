import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sbr-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @ViewChild(LoginComponent, { static: false })
  loginComponent: LoginComponent;

  illustrations: string[] = [
    'http://localhost:4200/assets/illustrations/1.svg',
    'http://localhost:4200/assets/illustrations/2.svg',
    'http://localhost:4200/assets/illustrations/3.svg',
  ];

  constructor(
    private router: Router,
    private toastrService: ToastrService
  ) {
  }

  ngOnInit() {
  }

  login() {
    this.loginComponent.login().then(user => {
      if (user.type === 'merchant') {
        this.router.navigate(['/', 'admin']);
      }
      this.toastrService.success('Login success');
    }).catch(() => {
      this.toastrService.error('Login error');
    });
  }

}
