import { Component, OnInit } from '@angular/core';
import { faTimes, faCheck, faPlus, faEllipsisV, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/models/item';
import { ItemService } from '../item.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ToastrService } from 'ngx-toastr';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'sbr-select-item-modal',
  templateUrl: './select-item-modal.component.html',
  styleUrls: ['./select-item-modal.component.scss']
})
export class SelectItemModalComponent implements OnInit {


  closeIcon = faTimes;
  selectedIcon = faCheck;
  addItemIcon = faPlus;
  contextMenuIcon = faEllipsisV;
  emptyListPlaceholderIcon = faArrowLeft;

  items: Item[] = [];
  selectedItemIds: string[] = [];

  constructor(
    private modal: NgbActiveModal,
    private itemService: ItemService,
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private authService: AuthService
  ) {
    this.fetchItems();
  }

  ngOnInit() {
  }

  close() {
    this.modal.dismiss();
  }

  async fetchItems() {
    const userId = this.authService.getUserId();
    this.items = await this.itemService.getItems(userId);
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
    this.itemService.deleteItem(this.authService.getUserId(), item.id).then(() => {
      this.toastrService.success(`Item ${item.name} was deleted successfully`);
      this.fetchItems();
    }).catch(error => {
      this.toastrService.error(`Failed to delete item: ${error}`);
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
    modal.result.then(() => this.fetchItems()).catch(error => {});
  }

}
