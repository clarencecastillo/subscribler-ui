import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sbr-big-number-card',
  templateUrl: './big-number-card.component.html',
  styleUrls: ['./big-number-card.component.scss']
})
export class BigNumberCardComponent implements OnInit {

  @Input()
  header: string;

  @Input()
  value: number;

  @Input()
  type: 'number' | 'currency' = 'number';

  @Input()
  icon: IconDefinition;

  constructor() { }

  ngOnInit() {
  }

}
