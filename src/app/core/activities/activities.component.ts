import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivitiesService } from 'src/app/shared/services/activities.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit, OnDestroy {

  isLoading = true;

  ghActivities: any[] = [];
  ghAvatar = '';
  ghPseudo = '';
  ghLink = '';
  topOffset = 0;

  octo = document.getElementsByClassName('octocat-container') as HTMLCollectionOf<HTMLElement>;

  constructor(
    private activitiesService: ActivitiesService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getGithubActivities();
    this.paralaxManager(true);
  }

  ngOnDestroy() {
    this.paralaxManager(false);
  }

  paralaxManager(toAdd: boolean) {
    let target = this.octo;
    function move(v) {
      if (target.length > 0) {
        const newValue = document.documentElement.scrollTop;
        const a = 100 + Math.trunc(newValue / 25);
        target[0].style.bottom = '' + a + 'px';
        this.topOffset = newValue;
      }
    }

    if(toAdd) {
      window.addEventListener('scroll', move);
    } else {
      window.removeEventListener('scroll', move);
    }
  }

  async getGithubActivities() {
    this.isLoading = true;
    this.spinner.show();
    try {
      const response = await this.activitiesService.getGhFeeds();
      this.ghActivities = response.data;
      this.ghAvatar = response.avatar;
      this.ghPseudo = response.pseudo;
      this.ghLink = 'https://github.com/' + this.ghPseudo;
    } catch (error) {
      console.log('Cannot load data from the github API');
    }
    this.isLoading = false;
    this.spinner.hide();
  }

}
