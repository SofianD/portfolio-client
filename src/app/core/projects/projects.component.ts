import { Component, OnInit } from '@angular/core';
import db from 'src/assets/db_projects/db.json';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Array<any>;

  shownImgs: any[] = [];
  selectedImage = '';

  constructor(
    private spinner: NgxSpinnerService
  ) {
    this.projects = db.projects;
  }
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    },
    400);
  }

  openImgCanvas(images: any[]) {
    this.shownImgs = images;
    this.selectImage(this.shownImgs[0]);
  }

  closeImgCanvas() {
    this.shownImgs = [];
  }

  selectImage(imgPath: string) {
    this.selectedImage = imgPath;
  }
}
