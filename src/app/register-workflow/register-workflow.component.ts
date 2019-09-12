import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, skip } from 'rxjs/operators';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from '../profile/profile.component';
import { RegisterComponent } from '../register/register.component';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'sbr-register-workflow',
  templateUrl: './register-workflow.component.html',
  styleUrls: ['./register-workflow.component.scss']
})
export class RegisterWorkflowComponent implements OnInit, AfterViewInit {

  @ViewChild(NgbCarousel, { static: false })
  carousel: NgbCarousel;

  @ViewChild(ProfileComponent, { static: false })
  profileComponent: ProfileComponent;

  @ViewChild(RegisterComponent, { static: false })
  registerComponent: RegisterComponent;

  merchantId: string;

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private authService: AuthService
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd), skip(1))
      .subscribe((e: NavigationEnd) => this.resolveStep(e.urlAfterRedirects));
    this.merchantId = this.authService.getUserId();
  }

  registerUser() {
    this.registerComponent.register('merchant')
      .then(user => {
        this.merchantId = user.id;
        this.toastrService.success('Created account successfully!');
        this.router.navigate(['/', 'register', 'packages']);
      })
      .catch(() => this.toastrService.error('Failed to create account'));
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => this.resolveStep(this.router.url));
  }

  resolveStep(url: string) {
    const urlParts = url.split('/');
    const slideId = urlParts[urlParts.length - 1];
    this.carousel.select(slideId);
  }

}
