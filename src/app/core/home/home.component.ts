import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import db from 'src/assets/db_projects/links-of-skills-img.json';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  linksOfSkillsImg: string[];

  carousel: any;
  cellCount = 5;
  selectedIndex = 0;
  rotateCarousel = setInterval(
    () => {
      // tslint:disable-next-line: prefer-const
      let a = document.getElementsByClassName('carousel') as HTMLCollectionOf<HTMLElement>;
      this.selectedIndex++;
      const angle = this.selectedIndex / this.cellCount * -360;
      a[0].style.transform = 'rotateY(' + angle + 'deg)';
    },
    4500
  );
  constructor(
    private spinner: NgxSpinnerService
  ) {
    this.linksOfSkillsImg = db.links;
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    },
    700);
  }

  ngAfterViewInit() {
    // tslint:disable-next-line: no-unused-expression
    this.rotateCarousel;
  }

  ngOnDestroy() {
    clearInterval(this.rotateCarousel);
  }
}
