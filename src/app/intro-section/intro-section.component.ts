import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../animation.service';

@Component({
  selector: 'intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css']
})
export class IntroSectionComponent implements OnInit {

  constructor(private animationService: AnimationService) { }

  ngOnInit(): void {
    this.animationService.onScrollAnimation(".intro-container")
  }

}


