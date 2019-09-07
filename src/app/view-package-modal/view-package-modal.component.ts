import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { faTimes, faTruck } from '@fortawesome/free-solid-svg-icons';
import { StorePackage } from 'src/models/store-package';
import { Item } from 'src/models/item';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sbr-view-package-modal',
  templateUrl: './view-package-modal.component.html',
  styleUrls: ['./view-package-modal.component.scss']
})
export class ViewPackageModalComponent implements OnInit, OnChanges {

  @Input()
  package: StorePackage;

  @Input()
  items: Item[];

  itemsMap: {[id in string]: Item} = {};

  closeIcon = faTimes;
  deliverIcon = faTruck;

  constructor(
    private modal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.buildItemsMap();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items) {
      this.buildItemsMap();
    }
  }

  buildItemsMap() {
    this.itemsMap = this.items.reduce((map, item) => {
      map[item.id] = item;
      return map;
    }, {});
  }

  getItem(itemId: string): Item {
    return this.items.find(item => item.id === itemId);
  }

  close() {
    this.modal.dismiss();
  }

}
