import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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


  @Output() linkClicked = new EventEmitter<string>();

  toggleMenu: boolean = false;


  constructor() { }

  onClick(section) {
    this.linkClicked.emit(section);
    if(this.toggleMenu) this.toggleMenu = !this.toggleMenu;
  }

  navigateToPage(url) {
    window.open(url, '_blank');
    if(this.toggleMenu) this.toggleMenu = !this.toggleMenu;
  }


  ngOnInit(): void {
    const navbar = document.querySelector('.navbar-container');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        navbar.classList.add('shadow');
      } else {
        navbar.classList.remove('shadow');
      }
    });
  }

  showMenu() {
    this.toggleMenu = !this.toggleMenu;
  }

}
