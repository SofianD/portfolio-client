import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  
  nav = document.getElementsByClassName('navbar') as HTMLCollectionOf<HTMLElement>;
  currentUrl: string = '';

  count = 'a';

  constructor(
    // private router: Router
  ) {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {        
    //     const b = event.url;
    //     this.currentUrl = b;
    //     // console.log(b);
    //     if(event.url === '/') {
    //       this.textIs('white');
    //     } else {
    //       this.textIs('black');
    //     }
        
    //     this.managerOfNavStyle(false);
    //     this.managerOfNavStyle(true, b);
    //   };
    // });
  }

  ngOnInit() {
    // this.managerOfNavStyle(true);
  }

  ngOnDestroy() {
    // this.managerOfNavStyle(false);
  }

  textIs(color: 'black' | 'white') {
    if (color === 'white') {
      this.nav[0].style.color = '#ffffff';
    } else if (color === 'black') {
      this.nav[0].style.color = '#000000';
    }
  }

  managerOfNavStyle(toAdd: boolean, path?) {

    // const p = path;
    // console.log(p);
    let target = this.nav[0];
    // if (path === '/') {
    //   function transform(v) {
    //     const newValue = document.documentElement.scrollTop;
    //     let a = newValue / 100;
    //     if (a > 1) {
    //       a = 1;
    //       target.style.color = '#000000';
    //     } else {
    //       target.style.color = '#ffffff';
    //     }
    //     target.style.backgroundColor = 'rgba(255, 255, 255, ' + a + ')';      
    //   }
    //   if(toAdd) {
    //     window.addEventListener('scroll', transform);
    //   } else {
    //     path = '';
    //     window.removeEventListener('scroll', transform);
    //   }
    // }
    
    function transform(v) {
      
      const newValue = document.documentElement.scrollTop;
      let a = newValue / 100;
      if (a > 1) {
        a = 1;
      }
      target.style.backgroundColor = 'rgba(255, 255, 255, ' + a + ')';      
    }
    if(toAdd) {
      window.addEventListener('scroll', transform);
    } else {

      window.removeEventListener('scroll', transform);
    }

  }

  // mVdeux(toAdd: boolean, path?) {
  //   let target = this.nav[0];
  //   if (path === '/') {
  //     eval('function transform'+ this.count + '(v) { \
  //       const newValue = document.documentElement.scrollTop;\
  //       let a = newValue / 100;\
  //       if (a > 1) {\
  //         a = 1;\
  //         target.style.color = "#000000";\
  //       } else {\
  //         target.style.color = "#ffffff";\
  //       }\
  //       target.style.backgroundColor = \'rgba(255, 255, 255, \' + a + \')\';}\
  //     ');
  //     // function transform(v) {
      
  //     //   const newValue = document.documentElement.scrollTop;
  //     //   let a = newValue / 100;
  //     //   if (a > 1) {
  //     //     a = 1;
  //     //     target.style.color = '#000000';
  //     //   } else {
  //     //     target.style.color = '#ffffff';
  //     //   }
  //     //   target.style.backgroundColor = 'rgba(255, 255, 255, ' + a + ')';      
  //     // }
  //     if(toAdd) {
  //       eval('window.addEventListener(\'scroll\', transform'+ this.count + ');');
  //     } else {
  //       path = '';
        
  //       eval('window.removeEventListener(\'scroll\', transform);');
  //     }
  //     this.count += this.count;
  //   }
    
  //   function transform(v) {
      
  //     const newValue = document.documentElement.scrollTop;
  //     let a = newValue / 100;
  //     if (a > 1) {
  //       a = 1;
  //     }
  //     target.style.backgroundColor = 'rgba(255, 255, 255, ' + a + ')';      
  //   }
  //   if(toAdd) {
  //     window.addEventListener('scroll', transform);
  //   } else {

  //     window.removeEventListener('scroll', transform);
  //   }

  // }

  scrollTop() {
    window.scroll(0, 0);
  }

  changePage() {
    this.scrollTop();
  }
}
