import { Injectable } from '@angular/core';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { baseURL, GetApiurl } from '../parameter'
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private authHttp: AuthHttp,
    private http: Http
  ) {

  }


  public login(username, password) {
    const url = GetApiurl('login/')
    const headers = new Headers;
    headers.append('Content-Type', 'application/json');
    const data = {
      'username': username,
      'password': password
    }

    return this.http
      .post(url, JSON.stringify(data), { headers: headers })
      .toPromise()
      .then(res => {
        res = res.json()
        localStorage.setItem('token', res['token']);
        localStorage.setItem('user', res['user'].username)
        console.log(res['user'].username)
        return res
      })
      .catch(Err => Err)
  }
}
