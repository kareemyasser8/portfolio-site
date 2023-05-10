import { Component, OnInit } from '@angular/core';
import { fade, zippy } from '../animations';

// import { slideInOut } from '../animations';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    fade, zippy
  ],

})
export class NavbarComponent implements OnInit {

  toggleMenu: boolean = false;

  constructor(){ }

  ngOnInit(): void {
  }

  showMenu() {
    this.toggleMenu = !this.toggleMenu;
  }

}
