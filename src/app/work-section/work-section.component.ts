import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../animation.service';

@Component({
  selector: 'work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.css']
})
export class WorkSectionComponent implements OnInit {

  constructor(private animationService: AnimationService) { }


  ngOnInit(): void {

  }

}
