import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'sbr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  header: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {

      this.header = this.route.firstChild.snapshot.data.header;
    });
  }

  ngOnInit() {
  }

}
