import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.sass']
})
export class PlaylistComponent implements OnInit {
  
  track_name: any;
  preview_url: any;
  playlist_id: any;
  playlists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.playlist_id = params['id']; 
    }); 

    this.loading = true;
    this.spotify.getTracks(this.playlist_id)
                .then( (data: any) => {  
                  console.log(data);  
                  this.playlists = data;
                  this.loading = false;               
    }).catch((error: any)=>{
      this.loading = false;
      console.log("ERORORORO", error)
    });
  }

  listen(track_name: any, preview_url: any) {
    this.track_name = track_name;
    this.preview_url = preview_url;
  }

}
