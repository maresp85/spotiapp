import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { PlaylistComponent } from './components/playlist/playlist.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'playlist/:id', component: PlaylistComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
]