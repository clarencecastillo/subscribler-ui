import { CanActivateChild, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MerchantAuthGuard implements CanActivateChild, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {

  }

  canActivate() {
    const user = this.authService.getUser();
    const canActivate = user && user.type === 'merchant';
    if (canActivate) {
      return true;
    }

    this.toastrService.error('Unauthorised');
    return this.router.parseUrl('/');
  }

  canActivateChild() {
    return this.canActivate();
  }
}
