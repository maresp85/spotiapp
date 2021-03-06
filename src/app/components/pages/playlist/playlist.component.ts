import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router, ActivatedRoute } from '@angular/router';
// This lets me use jquery
declare var $: any;

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

   //enable jquery modals
  ngOnInit() {
    $(document).ready(function(){
      $('.modal').modal();
    });    
    
    this.activatedRoute.params.subscribe( params => {
      this.playlist_id = params['id']; 
    }); 

    this.loading = true;
    this.spotify.getTracks(this.playlist_id)
                .subscribe( (data: any) => {  
                  console.log(data);  
                  this.playlists = data.data;
                  this.loading = false;               
    }, error => {
      this.loading = false;
      console.log("Error", error)
    });
  }

   //Reload info into the modal
  listen(track_name: any, preview_url: any) {
    this.track_name = track_name;
    this.preview_url = preview_url;
  }

}
