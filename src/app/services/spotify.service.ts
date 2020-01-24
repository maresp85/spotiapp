import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query:string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAdUMf3Yq_n2n_f1dro1EQbTV3H2u8KEKbJ8_eORskLTGdwsIshKvN_n-nyL-1nuExc_GR02mymtv9uwTI'
    });

    return this.http.get(url, { headers });

  }

  getProfile( user_id: any ){
    return this.getQuery(`users/${ user_id }`);
  }

  getPlaylists( user_id: any ){
    return this.getQuery(`users/${ user_id }/playlists`);
  }
}
