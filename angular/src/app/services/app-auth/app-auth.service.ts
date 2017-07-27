import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AppAuthService {

  authToken: any;
  user: any;

  constructor(
    private http: Http
  ) { }

  RegisterUser(user)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
                    .map(res => res.json());
  }

  AuthenticateUser(user)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/auth', user, {headers: headers})
                    .map(res => res.json());
  }

  StoreUserData(token, user)
  {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  Logout()
  {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  GetUserProfile()
  {
    let headers = new Headers();
    this.LoadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
                    .map(res => res.json());
  }

  LoadToken()
  {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  LoggedIn()
  {
    /*
    tokenNotExpired will by default assume the token name is 'token' unless a token name is passed to it
    ex: tokenNotExpired('token_name').
    */
    return tokenNotExpired('id_token');
  }
}
