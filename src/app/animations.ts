import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";

export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate('300ms ease-out')
  ]),
  transition(':leave', [
    animate('200ms ease-out')
  ])
])

export let slide = trigger('slide',[
  state('void',style({transform: 'translateX(-20px)'})),
  transition(':leave',[
    animate('0.5s ease-in', keyframes([
      style({offset: .2, opacity: 1, transform: 'translateX(20px)'}),
      style({offset: 1, opacity: 0, transform: 'translateX(-100%)'}),
    ]))
  ])
])

export let zippy = trigger('zippy',[
  state('void', style({height: '0px'})),
  transition(':enter,:leave',[
    animate('300ms ease-in-out')
  ])
])

