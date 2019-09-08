import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sbr-like-btn',
  templateUrl: './like-btn.component.html',
  styleUrls: ['./like-btn.component.scss']
})
export class LikeBtnComponent implements OnInit {

  likeIcon = faHeart;

  @Input()
  size: 'lg' | 'md' = 'md';

  constructor() { }

  ngOnInit() {
  }

}
