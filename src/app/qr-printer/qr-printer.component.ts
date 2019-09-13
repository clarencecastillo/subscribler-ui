import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'sbr-qr-printer',
  templateUrl: './qr-printer.component.html',
  styleUrls: ['./qr-printer.component.scss']
})
export class QrPrinterComponent implements OnInit {

  qrPosterUrl: string;

  constructor(private authService: AuthService) {
    const merchantId = this.authService.getUserId();
    const storePage = encodeURIComponent(encodeURIComponent(`http://localhost:4200/store/${merchantId}`));
    this.qrPosterUrl = `${environment.serverHost}/merchants/${merchantId}/qrcode/${storePage}`;
  }

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
