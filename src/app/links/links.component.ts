import { Component, OnInit } from '@angular/core';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sbr-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  printIcon = faPrint;

  buttonLinkCode = `<button>Subscribe<button>\nasd`;
  merchantPageUrl = 'http://somelink.com/ad245dfgdy';

  constructor() { }

  ngOnInit() {
  }
}
