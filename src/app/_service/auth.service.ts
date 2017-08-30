import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable";
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthService {

  public token: string;

  constructor(private http: Http) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  register(first_name: string,
           last_name: string,
           username: string,
           password: string,
           street_address: string,
           city: string,
           province: string,
           country: string,
           email: string,
           phone_number: string) {
    return this.http.post('http://localhost:8000/api/auth/register', {
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
      street_address: street_address,
      city: city,
      province: province,
      country: country,
      email: email,
      phone_number: phone_number
    });
  }

  login(username: string,
        password: string): Observable<boolean> {
    return this.http.post('http://localhost:8000/api/auth/login', {
      username: username,
      password: password
    }).map(
      (response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({username: username}));
          localStorage.setItem('token', token);

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          localStorage.setItem('fail', 'fail');
          return false;
        }
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }

  loggedIn() {
    return tokenNotExpired();
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
