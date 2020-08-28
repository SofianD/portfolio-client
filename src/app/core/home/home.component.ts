import { Component, OnInit, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import db from 'src/assets/db_projects/links-of-skills-img.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.checkWidth();
  }

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

  carouselIsVisible: boolean;


  constructor() {
    this.linksOfSkillsImg = db.links;
    this.checkWidth();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // tslint:disable-next-line: no-unused-expression
    if (this.carouselIsVisible) {
      this.rotateCarousel;
    }
  }

  checkWidth () {
    if(window.innerWidth > 991) {
      if (!this.carouselIsVisible) {
        console.log('oui')
        this.rotateCarousel;
      }
      this.carouselIsVisible = true;
    } else {
      if (this.carouselIsVisible) {
        this.destroyCarousel();
      }
      this.carouselIsVisible = false;
    }
  }

  destroyCarousel() {
    clearInterval(this.rotateCarousel);
  }

  ngOnDestroy() {
    this.destroyCarousel();
  }
}
