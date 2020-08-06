import { Component, OnInit } from '@angular/core';
import db from "src/assets/db_projects/db.json";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Array<any>;

  shownImgs: any[] = [];
  selectedImage: string = '';

  constructor() {
    this.projects = db.projects
  }
  ngOnInit() {
    
  }

  openImgCanvas(images: any[]) {
    this.shownImgs = images;
    this.selectImage(this.shownImgs[0])
  }

  closeImgCanvas() {
    this.shownImgs = [];
  }

  selectImage(imgPath: string) {
    this.selectedImage = imgPath;
  }
}
