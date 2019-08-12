import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit {
  selectedItem = '';
  constructor(private router: Router) {
  }
  ngOnInit() {
    console.log(this.router.url);
    switch (this.router.url) {
      case '/home':
        this.selectedItem = 'Home';
        break;
      case '/':
          this.selectedItem = 'Home';
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
  select(value) {
    this.selectedItem = value;
  }
}
