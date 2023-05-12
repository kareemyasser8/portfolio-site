import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() projectInput: any;
  imagePath = '../../assets/Images/'

  constructor() { }

  ngOnInit(): void {
    console.log('projectInput:', this.projectInput);
  }

}
