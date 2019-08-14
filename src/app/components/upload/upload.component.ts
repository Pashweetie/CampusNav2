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
    if ($event.target.files.length > 0) {
      const formData = new FormData();
      formData.append('file', $event.target.files[0]);
      // console.log(formData.get('file'));
      // console.log($event.target.files[0]);
      // this.uploadService.uploadFile($event.target.files[0]).subscribe();
      this.uploadService.uploadFile(formData).subscribe();
    }
  }
}
