import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { User } from 'src/models/user';
import { filter } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'sbr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.resolveUser(this.route.snapshot);
    });
  }

  public async resolveUser(snapshot: ActivatedRouteSnapshot) {
    const userId = snapshot.data.userId || snapshot.parent.data.userId;
    this.user = await this.userService.getUser(userId);
  }

  ngOnInit() {
  }

}
