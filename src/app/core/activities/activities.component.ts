import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivitiesService } from 'src/app/shared/services/activities.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit, OnDestroy {

  mode: 'activity' | 'projects' = 'activity'
  isLoading = true;

  ghProjects: any[] = [];

  ghActivities: any[] = [];
  ghAvatar = '';
  ghPseudo = '';
  ghLink = '';
  topOffset = 0;

  octo = document.getElementsByClassName('octocat-container') as HTMLCollectionOf<HTMLElement>;
  ghPhoto = document.getElementsByClassName('gh-photo-container') as HTMLCollectionOf<HTMLElement>;

  constructor(
    private activitiesService: ActivitiesService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getGithubActivities();
    this.getGhProjects();
    // this.paralaxManager(true);
  }

  ngOnDestroy() {
    this.paralaxManager(false);
  }

  changeMode(mode) {
    this.mode = mode;
  }

  paralaxManager(toAdd: boolean) {
    let octoTarget = this.octo[0];
    let ghTarget = this.ghPhoto[0];
    function move(v) {
        const newValue = document.documentElement.scrollTop;
        const a = (-800) + Math.trunc(newValue * 1.3);
        const b = (-200) + Math.trunc(newValue / 2);
        octoTarget.style.bottom = '' + a + 'px';
        ghTarget.style.bottom = '' +  b + 'px';
        this.topOffset = newValue;
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

  async getGhProjects() {
    this.ghProjects = await this.activitiesService.getGhProjects();
  }
}
