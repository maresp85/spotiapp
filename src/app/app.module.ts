import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

//Routes
import { ROUTES } from "./app.routes";
//services
import { SpotifyService } from './services/spotify.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { PlaylistComponent } from './components/pages/playlist/playlist.component';
import { SearchComponent } from './components/pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoadingComponent,
    PlaylistComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,    
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [SpotifyService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
