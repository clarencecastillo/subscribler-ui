import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sbr-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @Input()
  prompt: string;

  closeIcon = faTimes;

  constructor(private modal: NgbActiveModal) { }

  ngOnInit() {
  }

  cancel() {
    this.modal.dismiss();
  }

  confirm() {
    this.modal.close();
  }
}
