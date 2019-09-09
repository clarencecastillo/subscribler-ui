import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { UserType } from 'src/models/user';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'sbr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userType: UserType = 'subscriber';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.userType = this.route.snapshot.data.userType;
    });
  }

  ngOnInit() {
  }

}
