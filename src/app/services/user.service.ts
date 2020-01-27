import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

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
  
  logout() {

    return new Promise((resolve,reject)=>{ 

      localStorage.removeItem('usuario');
      this.getUsuario();
      resolve({success :true});
    });
  }

  
}
