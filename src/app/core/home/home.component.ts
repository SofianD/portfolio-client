import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import db from "src/assets/db_projects/links-of-skills-img.json";

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
      let a = document.getElementsByClassName('carousel') as HTMLCollectionOf<HTMLElement>;
      this.selectedIndex++;
      let angle = this.selectedIndex / this.cellCount * -360;
      a[0].style.transform = 'rotateY(' + angle + 'deg)';
    },
    4500
  );
  constructor() {
    this.linksOfSkillsImg = db.links;
    
  }
  
  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.rotateCarousel;
  }

  ngOnDestroy() {
    clearInterval(this.rotateCarousel);
  }
}
