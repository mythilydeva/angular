import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';
import { GetApiurl } from '../parameter';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: Http,
    private authHttp: AuthHttp) {
      
  }

  public getProjectList(){
    const url = GetApiurl("project/");
    const headers = new Headers;
    headers.append('Content-Type', 'application/json');
    var token = localStorage.getItem('token')
    headers.append('Authorization', `JWT ${token}`)

    return this.http.get(url, { headers: headers })
    .toPromise()
    .then(res => {
      return res.json()
    })
  }
}
