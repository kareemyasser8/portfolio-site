import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor(){}

  onScrollAnimation(targetClass) {


    let section = document.querySelectorAll(".fade-in");
    let options = {
      root: document.querySelector(targetClass),
      threshold: 0,
      rootMargin: "0px 0px 0px 0px"
    };
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          else {
            entry.target.classList.add("appear");
            // console.log(targetClass)
            observer.unobserve(entry.target)
          }
        })
      },
      options
    )

    section.forEach(logo=>{
      observer.observe(logo)
    })

  }

}
