import { Routes } from "@angular/router";
import { HomeComponent } from './components/pages/home/home.component';
import { PlaylistComponent } from './components/pages/playlist/playlist.component';
import { SearchComponent } from './components/pages/search/search.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'playlist/:id', component: PlaylistComponent },
    { path: 'search', component: SearchComponent },    
]