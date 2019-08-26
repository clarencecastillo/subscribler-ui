import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';
import { Item } from 'src/models/item';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { ItemService, ItemDetails } from '../item.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'sbr-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit, OnChanges {

  @Input()
  item: Item;

  dropZoneIcon = faImage;

  itemForm: FormGroup;

  files: NgxFileDropEntry[] = [];

  fileReader: FileReader;

  units: string[] = [
    'pcs', 'hrs', 'kg', 'oz',
    'cm', 'm', 'mm', 'l'
  ];

  lookupUnit = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map((term: string) => this.units.filter(unit => unit.startsWith(term.toLowerCase())))
  )

  constructor(
    private itemService: ItemService,
    private formBuilder: FormBuilder
  ) {
    this.itemForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: [''],
      unit: [''],
      imageUrl: ['']
    });

    this.fileReader = new FileReader();
    this.fileReader.onload = () => {
      this.itemForm.get('imageUrl').setValue(this.fileReader.result);
    };
  }

  ngOnInit() {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.item && simpleChanges.item.currentValue) {
      this.itemForm.get('name').setValue(this.item.name);
      this.itemForm.get('description').setValue(this.item.description);
      this.itemForm.get('unit').setValue(this.item.unit);
      this.itemForm.get('imageUrl').setValue(this.item.imageUrl);
    }
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;

    if (files.length < 1 || files.length > 1 || !files[0].fileEntry.isFile) {
      return;
    }

    const fileEntry = files[0].fileEntry as FileSystemFileEntry;
    fileEntry.file((file: File) => this.fileReader.readAsDataURL(file));
  }

  public save(): Promise<void | string> {
    const formValue: ItemDetails = this.itemForm.value;
    if (this.item) {
      return this.itemService.updateItem(this.item.id, formValue);
    }

    return this.itemService.createItem(formValue);
  }

}
