import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'sbr-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  header: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.header = this.route.firstChild.snapshot.data.header;
    });
  }

  ngOnInit() {
  }

}
