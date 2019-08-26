import { Component, OnInit } from '@angular/core';
import { faTimes, faCheck, faPencilAlt, faTrash, faPlus, faEllipsisV, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/models/item';
import { ItemService } from '../item.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ToastrService } from 'ngx-toastr';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'sbr-select-item-modal',
  templateUrl: './select-item-modal.component.html',
  styleUrls: ['./select-item-modal.component.scss']
})
export class SelectItemModalComponent implements OnInit {

  closeIcon = faTimes;
  selectedIcon = faCheck;
  editIcon = faPencilAlt;
  deleteIcon = faTrash;
  addItemIcon = faPlus;
  contextMenuIcon = faEllipsisV;
  emptyListPlaceholderIcon = faArrowLeft;

  items: Item[] = [];
  selectedItemIds: string[] = [];

  constructor(
    private modal: NgbActiveModal,
    private itemService: ItemService,
    private modalService: NgbModal,
    private toastrService: ToastrService
  ) {
    this.itemService.getItems().then(items => {
      this.items = items;
    });
  }

  ngOnInit() {
  }

  close() {
    this.modal.dismiss();
  }

  selectItem(item: Item) {
    if (this.selectedItemIds.includes(item.id)) {
      this.selectedItemIds.splice(this.selectedItemIds.indexOf(item.id), 1);
    } else {
      this.selectedItemIds.push(item.id);
    }
  }

  submit() {
    this.modal.close(this.selectedItemIds);
  }

  async deleteItem(item: Item) {
    this.itemService.deleteItem(item.id).then(() => {
      this.toastrService.show(`Item ${item.name} was deleted successfully`, '', {
        timeOut: 3000,
        toastClass: 'alert bg-success shadow text-light'
      });
    }).catch(error => {
      this.toastrService.show(`Failed to delete item: ${error}`, '', {
        timeOut: 3000,
        toastClass: 'alert bg-danger shadow text-light'
      });
    });
  }

  presentConfirmDeleteItemModal(item: Item) {
    const modal = this.modalService.open(ConfirmModalComponent, {
      centered: true
    });
    const confirmModalComponent: ConfirmModalComponent = modal.componentInstance;
    confirmModalComponent.prompt = 'Are you sure you want to delete this item?';
    modal.result.then(() => this.deleteItem(item)).catch(() => {});
  }

  presentEditItemModal(item?: Item) {
    const modal = this.modalService.open(EditItemModalComponent, {
      centered: true,
      backdrop: 'static'
    });
    const editItemModalComponent: EditItemModalComponent = modal.componentInstance;
    editItemModalComponent.itemId = item ? item.id : undefined;
  }

}
