import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sbr-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  illustrations: string[] = [
    'http://localhost:4200/assets/illustrations/1.svg',
    'http://localhost:4200/assets/illustrations/2.svg',
    'http://localhost:4200/assets/illustrations/3.svg',
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
