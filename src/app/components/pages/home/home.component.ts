import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  login: boolean;
  loading: boolean;
  profile: any[] = [];
  playlists: any[] = [];
  myForm: FormGroup;

  constructor(private spotify: SpotifyService) { 
   
  }

  
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('')
    });

     // Get token
    this.getToken();

     /* if there exists user in datastore, get profile
     if not, show the login form */
    if (this.getUsuario() != '') {
      this.getProfile(this.getUsuario());
    } else {      
      this.login = true;
    }   
  }

   //get Profile via Spotify API
  getProfile(usuario: any) {
    this.loading = true;
    this.spotify.getProfile(usuario)  
                .then((data: any) => {
                  this.profile = data.data;
                  this.setUsuario(usuario);
                  this.spotify.getPlaylists(usuario)
                              .then((data: any) => {
                    this.playlists = data.data;
                    this.login = false;                  
                    this.loading = false;
                  }).catch((error:any)=>{
                    this.loading = false;
                  })
                }).catch((error: any)=>{
                  this.loading = false;
                  console.log("ERORORORO", error) //se lleva al Login
                });
  }

  getToken() {
    this.spotify.token()
                .subscribe((data: any) => {
        localStorage.setItem("access_token", data.access_token)
    }, error => {
      console.log(error);
    });
  }
  
  setUsuario( usuario: any ) {
    localStorage.setItem("usuario", usuario);
  }

  getUsuario() {
    if ( localStorage.getItem('usuario') ) {
      return localStorage.getItem('usuario');
    } else {
      return '';
    }
  }
   
  onSubmit(form: FormGroup) {
    this.getProfile(form.value.name);
  }

}
