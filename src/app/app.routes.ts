import { Routes } from "@angular/router";
import { HomeComponent } from './components/pages/home/home.component';
import { PlaylistComponent } from './components/pages/playlist/playlist.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'playlist/:id', component: PlaylistComponent },
]