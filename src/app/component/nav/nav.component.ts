import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  offsetTop = document.documentElement.scrollTop;
  nav = document.getElementsByClassName('navbar') as HTMLCollectionOf<HTMLElement>;
  currentUrl = '';

  @HostListener('window:scroll', ['$event']) onScroll($event: Event): void {
    this.offsetTop = document.documentElement.scrollTop;
  }

  constructor(
    private router: Router,
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  scrollTop() {
    window.scroll(0, 0);
  }

  changePage() {
    this.scrollTop();
  }
}
