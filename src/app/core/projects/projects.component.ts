import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import db from 'src/assets/db_projects/db.json';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {

  projects: Array<any>;

  shownImgs: any[] = [];
  selectedImage = '';
  observer: IntersectionObserver;
  items;

  constructor(
    private spinner: NgxSpinnerService
  ) {
    this.projects = db.projects;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.projectsAnimation();
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  projectsAnimation() {
    this.observer = new IntersectionObserver(
      function(entries) {
        entries.forEach((elmnt) => {
          if (elmnt.intersectionRatio > 0.01) {
            elmnt.target.classList.remove('not-visible');
          } else {
            elmnt.target.classList.add('not-visible');
          }
        });
      },
      {
        threshold: [0.01]
      }
    );

    this.items = document.querySelectorAll('.pj-container');

    // if (NodeList.prototype.forEach === undefined) {
    //   NodeList.prototype.forEach = Array.prototype.forEach as any;
    // }

    this.items.forEach(element => {
      element.classList.add('not-visble');
      this.observer.observe(element);
    });
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
