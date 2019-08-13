import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }
  uploadFile(file) {
    const url = 'localhost:4200/upload';
    return this.http.post<any>(url, file);
  }
}
