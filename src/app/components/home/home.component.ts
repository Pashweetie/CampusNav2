import { MenuServiceService } from './../../services/menu-service.service';
import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private menuService: MenuServiceService) { }
  ngOnInit() {
  }
  select(value) {
    this.menuService.select(value);
  }
  
}
