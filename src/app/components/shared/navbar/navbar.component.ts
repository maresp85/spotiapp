import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              private userservice: UserService) { }

  ngOnInit() {
  }

  exit() {    
    this.userservice.logout().then(()=>{
      this.router.navigateByUrl('/home');
    })    
  }
}
