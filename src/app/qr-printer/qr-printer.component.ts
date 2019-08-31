import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'sbr-qr-printer',
  templateUrl: './qr-printer.component.html',
  styleUrls: ['./qr-printer.component.scss']
})
export class QrPrinterComponent implements OnInit {

  constructor() { }

  image: string;

  ngOnInit() {
    setTimeout(() => {
      this.renderAsImage();
    });
  }

  async renderAsImage(): Promise<void> {
    const canvas = await html2canvas(document.getElementById('qr'));
    this.image = canvas.toDataURL('image/png');
  }

  qrReady() {
    window.print();
  }

}
