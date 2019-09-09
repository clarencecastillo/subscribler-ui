import { Component, OnInit, Input } from '@angular/core';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { Cycle } from 'src/models/cycle';

@Component({
  selector: 'sbr-cycle-badge',
  templateUrl: './cycle-badge.component.html',
  styleUrls: ['./cycle-badge.component.scss']
})
export class CycleBadgeComponent implements OnInit {

  @Input()
  cycle: Cycle;

  @Input()
  size: 'md' | 'lg' = 'md';

  cycleIcon = faTruck;

  constructor() { }

  ngOnInit() {
  }

}
