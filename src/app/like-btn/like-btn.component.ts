import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sbr-like-btn',
  templateUrl: './like-btn.component.html',
  styleUrls: ['./like-btn.component.scss']
})
export class LikeBtnComponent implements OnInit {

  likeIcon = faHeart;

  liked = false;

  @Input()
  size: 'lg' | 'md' = 'md';

  constructor(private toastrService: ToastrService) { }

  ngOnInit() {
  }

  toggleLiked() {
    this.liked = !this.liked;
    this.toastrService.success(this.liked ? 'Added package to wishlist' : 'Removed package from wishlist');
  }

}
