import { Component, OnInit } from '@angular/core';
interface ClassData{
  time: string;
  days: string;
  location: string;
  name: string;
}
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  classes: ClassData[] = [
    {
      time: '2am-3pm',
      days: 'T/TH',
      location: 'King Center',
      name: 'Underwater Basket Weaving',
    },
    {
      time: '2pm-3pm',
      days: 'T/TH',
      location: 'King Center',
      name: 'Aeronautical Science',
    },
    {
      time: '1pm-2pm',
      days: 'T/TH',
      location: 'King Center',
      name: 'Geospatial Science',
    },
  ];
  today = 'Tuesday';
  display = 'T/TH';
  constructor() { }

  ngOnInit() {
  }

}
