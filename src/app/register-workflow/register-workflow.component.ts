import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, skip } from 'rxjs/operators';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sbr-register-workflow',
  templateUrl: './register-workflow.component.html',
  styleUrls: ['./register-workflow.component.scss']
})
export class RegisterWorkflowComponent implements OnInit, AfterViewInit {

  @ViewChild(NgbCarousel, { static: false })
  carousel: NgbCarousel;

  constructor(private router: Router) {
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
    this.carousel.select(urlParts[urlParts.length - 1]);
  }

  submit() {
    console.log('submit');
  }

}
