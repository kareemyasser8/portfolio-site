import { Component, OnInit } from '@angular/core';
import { fade } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fade]
})
export class AppComponent implements OnInit {

  title = 'portfolio-site';

  handleLinkClicked(section) {
    const targetRect = document.getElementById(section).getBoundingClientRect();

    window.scrollTo({
      top: targetRect.top + window.pageYOffset - 65,
      left: targetRect.left + window.pageXOffset,
      behavior: "smooth",
    });

    // document.getElementById(section).scrollIntoView({behavior: "smooth"})
  }


  showTopBtn = function () {
    let topBtn = document.querySelector(".toTop");
    let y = window.scrollY;
    topBtn.classList.toggle("show", y >= 154);
  }

  scrollToTop(){
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  ngOnInit(): void {
    window.addEventListener("scroll", this.showTopBtn);
  }

}
