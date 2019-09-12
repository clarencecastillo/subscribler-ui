import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorePackage } from 'src/models/store-package';
import { StoreService } from '../store.service';
import { User } from 'src/models/user';
import { AuthService } from '../auth.service';
import { IconDefinition, faConciergeBell, faHamburger, faStore } from '@fortawesome/free-solid-svg-icons';

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

  popularPackages: StorePackage[] = [];
  recommendedPackages: StorePackage[] = [];

  user: User;

  categories: Category[] = [
    {
      icon: faConciergeBell,
      name: 'Service'
    },
    {
      icon: faHamburger,
      name: 'Food and Beverage'
    },
    {
      icon: faStore,
      name: 'Retail'
    }
  ];

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private storeService: StoreService,
    private authService: AuthService
  ) {
    this.authService.user$.subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.fetchFeaturedPackages();
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

  async fetchFeaturedPackages() {
    this.popularPackages = await this.storeService.generateRandomPackages(6);
    this.recommendedPackages = await this.storeService.generateRandomPackages(12);
  }

}

interface Category {
  icon: IconDefinition;
  name: string;
}
