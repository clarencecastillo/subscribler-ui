import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, skip } from 'rxjs/operators';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from '../profile/profile.component';

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

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd), skip(1))
      .subscribe((e: NavigationEnd) => this.resolveStep(e.urlAfterRedirects));
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

    if (slideId === 'profile') {
      this.profileComponent.resolveUser(this.route.snapshot);
    }
  }

  submit() {
    console.log('submit');
  }

}
