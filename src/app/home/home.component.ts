import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { User } from 'src/models/user';
import { AuthService } from '../auth.service';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sbr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  header: string;

  user: User;

  logoutIcon = faSignOutAlt;
  accountIcon = faUser;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      const childRoute: ActivatedRoute = this.route.firstChild;
      this.header = childRoute ? childRoute.snapshot.data.header : undefined;
    });

    this.authService.user$.subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
