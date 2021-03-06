import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  word:string = "";
  tracks: any[] = [];
  search: boolean = false;

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

   //get Artists By Search Service APi Spotify
  searchArtist() {
    this.spotify.searchArtist(this.word)
                .subscribe((data: any) =>{
      this.tracks = data.tracks
      this.search = true;
    }, error => {
      console.log("error")
    });
  }

}
