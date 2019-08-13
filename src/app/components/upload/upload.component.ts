import { UploadService } from './../../services/upload.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  @ViewChild('file', {static: false}) file;
  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }
  addFile() {
    this.file.nativeElement.click();
  }
  onFilesAdded($event) {
    this.uploadService.uploadFile($event.target.files);
  }
}