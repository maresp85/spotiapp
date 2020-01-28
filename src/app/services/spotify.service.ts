import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient, userService: UserService) { }

   //Get information API Spotify
  getQuery( query:string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    let access_token = localStorage.getItem('access_token')

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${access_token}` 
    });
    
    return this.http.get(url, { headers });
  }

   //GetProfile
  getProfile(user_id: any) {
    this.token().subscribe((data:any)=>{
      localStorage.setItem('access_token', data.access_token);
    })
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

   //GetProfile
  searchArtist(word: any) {
    return this.getQuery(`search/?q=${ word }&type=track`);
  }

   //Obtener Token
  token() {
    const body = new HttpParams()
    .set('grant_type', 'client_credentials')
    .set('client_id', 'f2848a562eb3494ab4d1d3b5a101e019')
    .set('client_secret', '8091983914184c77a6f292ffe03026b7');

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }); 

    const url = 'https://accounts.spotify.com/api/token';
     
    return this.http.post(url, body.toString(), { headers })   
  }

}
