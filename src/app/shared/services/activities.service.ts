import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  async getGhFeeds(): Promise<any> {
    let res;
    try {
      res = await this.http.get('https://api.github.com/users/SofianD/events').toPromise();
    } catch (error) {
      console.log('Can\'t get github data.');
      return 'error';
    }

    // tslint:disable-next-line: prefer-const
    let arr = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < res.length; i++) {

      if (res[i].type === 'PushEvent') {
        arr.push({
          id: res[i].id,
          type: res[i].type,
          repo: {
            name: res[i].repo.name.split('/').pop(),
            branch: res[i].payload.ref.split('/').pop(),
            link: 'http://github.com/' + res[i].repo.name
          },
          commits: res[i].payload.commits.map(x => x.message),
          date: res[i].created_at.slice(0, 10).split('-').reverse().join('/')
        });

      } else if (res[i].type === 'PullRequestEvent') {
        arr.push ({
          id: res[i].id,
          type: res[i].type,
          repo: {
            name: res[i].repo.name.split('/').pop(),
            link: 'http://github.com/' + res[i].repo.name
          },
          opened: res[i].payload.action === 'opened' ? true : false,
          date: res[i].created_at
        });

      } else if (res[i].type === 'CreateEvent' || res[i].type === 'DeleteEvent') {
        arr.push ({
          id: res[i].id,
          type: res[i].type,
          repo: {
            name: res[i].repo.name.split('/').pop(),
            link: 'http://github.com/' + res[i].repo.name
          },
          payload: {
            name: res[i].payload.ref,
            type: res[i].payload.ref_type
          },
          date: res[i].created_at
        });
      }
    }
    return {
      data: arr,
      avatar: res[0].actor.avatar_url,
      pseudo: res[0].actor.login
    };
  }
}
