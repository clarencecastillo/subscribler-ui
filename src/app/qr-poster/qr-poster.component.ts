import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sbr-qr-poster',
  templateUrl: './qr-poster.component.html',
  styleUrls: ['./qr-poster.component.scss']
})
export class QrPosterComponent implements OnInit {

  qrPosterUrl: string;

  constructor(private authService: AuthService) {
    const merchantId = this.authService.getUserId();
    const storePage = encodeURIComponent(encodeURIComponent(`http://localhost:4200/store/${merchantId}`));
    this.qrPosterUrl = `${environment.serverHost}/merchants/${merchantId}/qrcode/${storePage}`;
  }

  ngOnInit() {
  }

}
