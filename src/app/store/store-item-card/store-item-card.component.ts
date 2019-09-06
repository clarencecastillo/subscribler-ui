import { Component, OnInit, Input } from '@angular/core';
import { StorePackage } from 'src/models/store-package';

@Component({
  selector: 'sbr-store-item-card',
  templateUrl: './store-item-card.component.html',
  styleUrls: ['./store-item-card.component.scss']
})
export class StoreItemCardComponent implements OnInit {

  @Input()
  package: StorePackage;

  constructor() { }

  ngOnInit() {
  }

}
