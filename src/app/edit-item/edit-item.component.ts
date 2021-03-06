import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Item } from 'src/models/item';
import { ItemService, NewItem } from '../item.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'sbr-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit, OnChanges {

  @Input()
  item: Item;

  itemForm: FormGroup;

  units: string[] = [
    'pcs', 'hrs', 'kg', 'oz',
    'cm', 'm', 'mm', 'l'
  ];

  itemImage: string | ArrayBuffer;

  lookupUnit = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map((term: string) => this.units.filter(unit => unit.startsWith(term.toLowerCase())))
  )

  constructor(
    private itemService: ItemService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {

    this.itemForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: [''],
      unit: [''],
      imageUrl: ['']
    });
  }

  ngOnInit() {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.item && simpleChanges.item.currentValue) {
      this.itemForm.get('name').setValue(this.item.name);
      this.itemForm.get('description').setValue(this.item.description);
      this.itemForm.get('unit').setValue(this.item.unit);
      this.itemForm.get('imageUrl').setValue(this.item.imageUrl);
      this.itemImage = this.item.imageUrl;
    }
  }

  public async save(): Promise<Item> {
    const formValue: NewItem = this.itemForm.value;
    const userId = this.authService.getUserId();

    if (this.item) {
      return this.itemService.updateItem(userId, this.item.id, formValue);
    }

    return this.itemService.createItem(userId, formValue);
  }

}
