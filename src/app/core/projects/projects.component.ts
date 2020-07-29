import { Component, OnInit } from '@angular/core';
import db from "src/assets/db_projects/db.json";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Array<any>;

  constructor() {
    this.projects = db.projects
  }
  ngOnInit() {
    
  }
  
}
