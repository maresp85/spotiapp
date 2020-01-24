import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  loading: boolean;
  profile: any[] = [];
  playlists: any[] = [];

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {

    this.loading = true;

    this.spotify.getProfile("maresp85")
                .subscribe( (data: any) => {    
                  this.profile = data;
                  this.spotify.getPlaylists("maresp85")
                              .subscribe( (data: any) => {
                                console.log(data)
                                this.playlists = data;
                                this.loading = false;

                  })
        });

  }

}
