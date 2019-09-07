import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDateAdapter, NgbDatepicker, NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { SbrMomentDateAdapter } from './moment-date-adapter';
import * as moment from 'moment';

@Component({
  selector: 'sbr-package-schedule',
  templateUrl: './package-schedule.component.html',
  styleUrls: ['./package-schedule.component.scss'],
  providers: [
    {
      provide: NgbDateAdapter,
      useClass: SbrMomentDateAdapter
    }
  ]
})
export class PackageScheduleComponent implements OnInit {

  @ViewChild('datepicker', { static: false })
  datePicker: NgbDatepicker;

  minDate: NgbDateStruct;
  date: moment.Moment = moment();

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

  constructor(private dateAdapter: NgbDateAdapter<moment.Moment>) {
    this.minDate = this.dateAdapter.fromModel(moment());
  }

  ngOnInit() {
  }

  onDateSelect() {
    this.schedules.forEach(schedule => {
      schedule.count = Math.floor(Math.random() * 30);
    });
  }

}
