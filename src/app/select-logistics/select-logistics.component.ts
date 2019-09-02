import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sbr-select-logistics',
  templateUrl: './select-logistics.component.html',
  styleUrls: ['./select-logistics.component.scss']
})
export class SelectLogisticsComponent implements OnInit {

  @Input()
  value: string;

  @Output()
  valueChange: EventEmitter<string>;

  logisticPartners = [
    {
      id: 'ninavan',
      name: 'Ninja Van',
      imageUrl: 'https://www.ninjavan.co/cover.png'
    },
    {
      id: 'singpost',
      name: 'Singapore Post',
      imageUrl: 'https://assets.aftership.com/couriers/svg/singapore-post.svg'
    },
    {
      id: 'dhl',
      name: 'DHL',
      imageUrl: 'https://yt3.ggpht.com/a/AGF-l78p-2Yh519v1oG-ri4CdFOcLqrhkux63jwLUw=s900-c-k-c0xffffffff-no-rj-mo'
    },
    {
      id: 'fedex',
      name: 'FedEx',
      imageUrl: 'https://thumbor.forbes.com/thumbor/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5cca0b604bbe6f7e6e22b5fe%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D416%26cropY1%3D0%26cropY2%3D416'
    }
  ];

  selectedIcon = faCheck;

  constructor() {
    this.valueChange = new EventEmitter();
  }

  ngOnInit() {
  }

  selectPartner(partner: LogisticPartner) {
    this.value = this.value === partner.id ? undefined : partner.id;
    this.valueChange.next(this.value);
  }

}

interface LogisticPartner {
  id: string;
  name: string;
  imageUrl: string;
}
