import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sbr-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  buttonLinkCode = `<button>Subscribe<button>`;

  constructor() { }

  ngOnInit() {
  }

}
