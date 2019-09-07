import { Component, OnInit, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sbr-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  max: number;

  @Input()
  score: number;

  @Input()
  count: number;

  ratingIcon = faStar;

  constructor() { }

  ngOnInit() {
  }

}
