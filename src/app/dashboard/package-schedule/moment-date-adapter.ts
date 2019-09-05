import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

export class SbrMomentDateAdapter extends NgbDateAdapter<moment.Moment> {

  fromModel(date: moment.Moment): NgbDateStruct {
    return date ? {
      day: date.day() + 1,
      month: date.month() + 1,
      year: date.year()
    } : null;
  }

  toModel(date: NgbDateStruct): moment.Moment {
    return date ? moment(`${date.day}/${date.month}/${date.year}`, 'dd/MM/yyyy') : null;
  }
}