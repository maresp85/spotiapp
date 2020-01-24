import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  //Get information API Spotify
  getQuery( query:string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCdM3mfq6ZQ7d-L5Ucple0vzc6Lqelg5Fo5GOA4RfO_8bI8Pb8ysrXE1ry5J9ZGED6jg6nSS1FVDjIfmGs'
    });

    return this.http.get(url, { headers });

  }

  //GetProfile
  getProfile(user_id: any) {
    return this.getQuery(`users/${ user_id }`);
  }

  //Get User's Playlist
  getPlaylists(user_id: any) {
    return this.getQuery(`users/${ user_id }/playlists`);
  }

  //Get Playlist's Tracks
  getTracks(playlist_id: any) {
    return this.getQuery(`playlists/${ playlist_id }`);
  }

}
