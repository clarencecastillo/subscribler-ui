import { Component, OnInit, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sbr-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageInputComponent implements OnInit {

  @Input()
  image: string | ArrayBuffer;

  @Output()
  imageChange: EventEmitter<string | ArrayBuffer>;

  files: NgxFileDropEntry[] = [];
  fileReader: FileReader;

  dropZoneIcon = faImage;

  constructor() {
    this.imageChange = new EventEmitter();
    this.fileReader = new FileReader();

    this.fileReader.onload = () => {
      this.image = this.fileReader.result;
      this.imageChange.emit(this.image);
    };
  }

  ngOnInit() {
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    if (files.length < 1 || files.length > 1 || !files[0].fileEntry.isFile) {
      return;
    }

    const fileEntry = files[0].fileEntry as FileSystemFileEntry;
    fileEntry.file((file: File) => this.fileReader.readAsDataURL(file));
  }

}
