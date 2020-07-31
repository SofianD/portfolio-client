import { Component, OnInit } from '@angular/core';
import db from "src/assets/db_projects/links-of-skills-img.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  linksOfSkillsImg: string[];

  constructor() {
    this.linksOfSkillsImg = db.links;
  }

  ngOnInit() {
  }

}
