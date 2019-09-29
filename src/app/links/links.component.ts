import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';
import { StoreService } from '../store.service';

@Component({
  selector: 'sbr-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit, OnChanges {

  @Input()
  merchantId: string;

  printIcon = faPrint;

  buttonLinkCode = `<button>Subscribe<button>\nasd`;

  merchantPageUrl: string;
  qrPosterUrl: string;

  constructor(
    private authService: AuthService,
    private storeService: StoreService
  ) {
  }

  private async fetchEmbeddedLinkCode(merchantId: string, encodedUrl: string) {
    this.buttonLinkCode = await this.storeService.getEmbeddedButton(merchantId, encodedUrl);
  }

  ngOnInit() {

    if (!this.merchantId) {
      this.merchantId = this.authService.getUserId();
    }

    this.fetchLinks(this.merchantId);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.merchantId) {
      this.fetchLinks(this.merchantId);
    }
  }

  async fetchLinks(merchantId: string) {
    if (!merchantId) {
      return;
    }

    this.merchantPageUrl = `http://localhost:4200/store/${merchantId}`;
    const encodedMerchantPageUrl = escape(encodeURIComponent(this.merchantPageUrl));
    this.qrPosterUrl = `${environment.serverHost}/merchants/${merchantId}/qrcode/${encodedMerchantPageUrl}`;
    this.fetchEmbeddedLinkCode(merchantId, encodedMerchantPageUrl);
  }
}
