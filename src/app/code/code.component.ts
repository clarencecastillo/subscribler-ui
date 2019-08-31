import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sbr-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @Input()
  code: string;

  @Input()
  name: string;

  constructor(private toastrService: ToastrService) { }

  ngOnInit() {
  }

  onCopyToClipboard() {
    this.toastrService.success(`Copied ${this.name ? this.name + ' '  : ''}to clipboard!`);
  }

}
