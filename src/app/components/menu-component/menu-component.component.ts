import { MenuServiceService } from './../../services/menu-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit {
  selectedItem;
  constructor(private menuService: MenuServiceService, private router: Router) {
    
    switch (this.router.url) {
      case '/home':
        this.selectedItem = 'Home';
        break;
      case '/':
          this.selectedItem = '';
          break;
      case '/view':
        this.selectedItem = 'View';
        break;
      case '/about':
        this.selectedItem = 'About';
        break;
      case '/register':
        this.selectedItem = 'Register';
        break;
      case '/upload':
        this.selectedItem = 'Upload';
        break;
      case '/login':
        this.selectedItem = 'Login';
        break;
    }
  }
  ngOnInit() {
    this.menuService.getEmittedValue().subscribe(item => this.selectedItem = item);
  }
  select(value) {
    this.selectedItem = value;
  }
  recieveItem($event) {
    this.selectedItem = $event;
  }
}
