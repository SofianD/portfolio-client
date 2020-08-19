import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/shared/services/activities.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  isLoading = true;

  ghActivities: any[] = [];
  ghAvatar = '';
  ghPseudo = '';
  ghLink = '';

  constructor(
    private activitiesService: ActivitiesService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getGithubActivities();
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
