import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/shared/services/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  gh_activities: any[] = [];

  constructor(
    private activitiesService: ActivitiesService
  ) { }

  ngOnInit() {
    this.getGithubActivities();
  }

  async getGithubActivities() {
    this.gh_activities = await this.activitiesService.getGhFeeds();
    console.log(this.gh_activities)
  }


}
