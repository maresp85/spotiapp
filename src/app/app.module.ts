import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

//Routes
import { ROUTES } from "./app.routes";
//services
import { SpotifyService } from './services/spotify.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { PlaylistComponent } from './components/pages/playlist/playlist.component';
import { TrackComponent } from './components/pages/track/track.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoadingComponent,
    PlaylistComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [ SpotifyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
