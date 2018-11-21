import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
authToken: any;
user: any;

  constructor(private http: Http) { }

  // make POSt request to register to backend API
  registerUser(user): any {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
    .pipe(map(res => res.json()));

  }
}
