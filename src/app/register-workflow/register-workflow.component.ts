import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, skip } from 'rxjs/operators';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from '../profile/profile.component';
import { AuthService } from '../auth.service';
import { RegisterComponent } from '../register/register.component';

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
    private authService: AuthService
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd), skip(1))
      .subscribe((e: NavigationEnd) => this.resolveStep(e.urlAfterRedirects));

    this.merchantId = this.authService.getUserId();
  }

  registerUser() {
    this.registerComponent.register();
    this.router.navigate(['packages']);
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

  submit() {
    console.log('submit');
  }

}
