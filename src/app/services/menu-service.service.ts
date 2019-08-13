import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  public selectedItem = '';
  @Output() item: EventEmitter<any> = new EventEmitter();
  constructor() {
  }
  select(value) {
    this.selectedItem = value;
    this.item.emit(value);

  }
  getEmittedValue() {
    return this.item;
  }
}
