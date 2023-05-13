import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {

  skills: any[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'SASS',
    'Bootstrap',
    'FireBase',
    'Git',
    'NodeJS',
    'Node Express',
    'MongoDB'
  ]

  imagePath = "../../assets/Images/"

  constructor() { }

  ngOnInit(): void {
  }

}
