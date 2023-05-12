import { Component, OnInit } from '@angular/core';
import { projects } from '../projectsData';

@Component({
  selector: 'work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.css']
})
export class WorkSectionComponent implements OnInit {

  projects: any[] = projects

  constructor() { }

  ngOnInit(): void {

  }

}
