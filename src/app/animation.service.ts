import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor(){}

  onScrollAnimation() {
    let logos = document.querySelectorAll('.fade-in');
    let options = {};
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          else {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target)
          }
        })
      }
    )

    logos.forEach(logo=>{
      observer.observe(logo)
    })

  }

}
