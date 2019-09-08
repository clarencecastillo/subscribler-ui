import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
