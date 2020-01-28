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
                .subscribe((data: any) => {
                  this.profile = data;
                  this.userservice.setUsuario(usuario);
                  this.spotify.getPlaylists(usuario)
                              .subscribe((data: any) => {
                    this.playlists = data;                                 
                    this.loading = false;
                  }, error => {
                    this.loading = false;
                  })
                }, error => {
                  this.loading = false;
                  Swal.fire({    
                    text: 'User not found',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    allowOutsideClick: false
                  });        
                });
  }
       
  onSubmit(form: FormGroup) {
    this.getProfile(form.value.name);
  }

}
