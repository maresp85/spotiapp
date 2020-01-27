import { TestBed } from '@angular/core/testing';

import { SpotifyService } from './spotify.service';

describe('SpotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyService = TestBed.get(SpotifyService);
    expect(service).toBeTruthy();
  });

  it('Debe retornar un observable<Profile[]>', ()=>{
    const service: SpotifyService = TestBed.get(SpotifyService);
    let mockUser:User[] = [{
      id: 1,
      node_id: "MDQ6VXNlcjE=",
      avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mojombo",
      login: "mojombo",
      html_url: "https://github.com/mojombo",
      followers_url: "https://api.github.com/users/mojombo/followers",
      following_url: "https://api.github.com/users/mojombo/following{/other_user}",
      gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
      starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
      organizations_url: "https://api.github.com/users/mojombo/orgs",
      repos_url: "https://api.github.com/users/mojombo/repos",
      events_url: "https://api.github.com/users/mojombo/events{/privacy}",
      received_events_url: "https://api.github.com/users/mojombo/received_events",
      type: "User",
      site_admin: false
    }];

  });

});
