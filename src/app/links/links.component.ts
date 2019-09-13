import { Component, OnInit } from '@angular/core';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';
import { StoreService } from '../store.service';

@Component({
  selector: 'sbr-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  printIcon = faPrint;

  buttonLinkCode = `<button>Subscribe<button>\nasd`;

  merchantPageUrl: string;
  qrPosterUrl: string;

  constructor(
    private authService: AuthService,
    private storeService: StoreService
  ) {
    const merchantId = this.authService.getUserId();
    this.merchantPageUrl = `http://localhost:4200/store/${merchantId}`;
    const encodedMerchantPageUrl = encodeURIComponent(this.merchantPageUrl);
    this.qrPosterUrl = `${environment.serverHost}/merchants/${merchantId}/qrcode/${encodeURIComponent(encodedMerchantPageUrl)}`;
    this.fetchEmbeddedLinkCode(merchantId, encodedMerchantPageUrl);
  }

  async fetchEmbeddedLinkCode(merchantId: string, url: string) {
    this.buttonLinkCode = await this.storeService.getEmbeddedButton(merchantId, url);
    console.log(this.buttonLinkCode);
  }

  ngOnInit() {
  }
}
