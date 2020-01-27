import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  loading: boolean;
  profile: any[] = [];
  playlists: any[] = [];
  myForm: FormGroup;

  constructor(private spotify: SpotifyService,
              private userservice: UserService) {    
  }
  
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('')
    });

     // Get token
    this.getToken();

     /* if there exists user in datastore, get profile
     if not, show the login form */
    if (this.userservice.getUsuario() != '') {
      this.getProfile(this.userservice.getUsuario());
    }  
  }

   //get Profile via Spotify API
  getProfile(usuario: any) {
    this.loading = true;
    this.spotify.getProfile(usuario)  
                .then((data: any) => {
                  this.profile = data.data;
                  console.log(this.profile);
                  this.userservice.setUsuario(usuario);
                  this.spotify.getPlaylists(usuario)
                              .then((data: any) => {
                    this.playlists = data.data;                                 
                    this.loading = false;
                  }).catch((error:any)=>{
                    this.loading = false;
                  })
                }).catch((error: any)=>{
                  this.loading = false;
                  Swal.fire({    
                    text: 'User not found',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    allowOutsideClick: false
                  });        
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
       
  onSubmit(form: FormGroup) {
    this.getProfile(form.value.name);
  }

}
