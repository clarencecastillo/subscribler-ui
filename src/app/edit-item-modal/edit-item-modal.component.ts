import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ItemService } from '../item.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/models/item';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sbr-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  @ViewChild(EditItemComponent, { static: false })
  editItemComponent: EditItemComponent;

  @Input()
  itemId: string;

  closeIcon = faTimes;

  item: Item;

  constructor(
    private modal: NgbActiveModal,
    private itemService: ItemService,
    private toastrService: ToastrService
  ) { }

  async fetchItem(itemId: string) {
    this.item = await this.itemService.getItem(itemId);
  }

  ngOnInit() {
    this.fetchItem(this.itemId);
  }

  cancel() {
    this.modal.dismiss();
  }

  save() {
    this.editItemComponent.save().then(() => {
      this.toastrService.show(`Item ${this.itemId ? 'updated' : 'created'} successfully`, '', {
        timeOut: 3000,
        toastClass: 'alert bg-success shadow text-light'
      });
    }).catch(error => {
      this.toastrService.show(`Failed to save item: ${error}`, '', {
        timeOut: 3000,
        toastClass: 'alert bg-danger shadow text-light'
      });
    });
    this.modal.close();
  }

}
