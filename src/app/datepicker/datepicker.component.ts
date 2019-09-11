import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sbr-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: NgbDateAdapter,
      useClass: NgbDateNativeAdapter
    }
  ]
})
export class DatepickerComponent implements OnInit, OnChanges {

  @Input()
  date: Date;

  @Output()
  dateChange: EventEmitter<Date>;

  @Input()
  minDate: Date;

  @Input()
  maxDate: Date;

  minDateStruct: NgbDateStruct;
  maxDateStruct: NgbDateStruct;

  constructor(private adapter: NgbDateAdapter<Date>) {
    this.dateChange = new EventEmitter();
  }

  ngOnInit() {
    // if (this.minDate) {
    //   this.minDateStruct = this.adapter.fromModel(this.minDate);
    // }

    // if (this.maxDate) {
    //   this.maxDateStruct = this.adapter.fromModel(this.maxDate);
    // }
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.minDate && simpleChanges.minDate.currentValue) {
      this.minDateStruct = this.adapter.fromModel(this.minDate);
    }

    if (simpleChanges.maxDate && simpleChanges.maxDate.currentValue) {
      this.maxDateStruct = this.adapter.fromModel(this.maxDate);
    }
  }

}
