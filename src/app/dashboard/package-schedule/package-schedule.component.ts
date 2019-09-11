import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sbr-package-schedule',
  templateUrl: './package-schedule.component.html',
  styleUrls: ['./package-schedule.component.scss']
})
export class PackageScheduleComponent implements OnInit {

  @ViewChild('datepicker', { static: false })
  datePicker: NgbDatepicker;

  date: Date = new Date();
  minDate: Date = this.date;

  schedules = [
    {
      packageName: 'Package A',
      count: 12
    },
    {
      packageName: 'Package B',
      count: 26
    },
    {
      packageName: 'Package C',
      count: 7
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onDateSelect() {
    this.schedules.forEach(schedule => {
      schedule.count = Math.floor(Math.random() * 30);
    });
  }

}
