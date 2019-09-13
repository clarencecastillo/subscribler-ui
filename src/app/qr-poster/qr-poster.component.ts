import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sbr-qr-poster',
  templateUrl: './qr-poster.component.html',
  styleUrls: ['./qr-poster.component.scss']
})
export class QrPosterComponent implements OnInit {

  @Input()
  qrPosterUrl: string;

  constructor() {
  }

  ngOnInit() {
  }

}
