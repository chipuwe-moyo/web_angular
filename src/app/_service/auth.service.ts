import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'
import 'rxjs/add/operator/map'
import {tokenNotExpired} from "angular2-jwt";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  constructor(private http: Http, private router: Router) {
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

  login(username: string, password: string) {
    return this.http.post('http://localhost:8000/api/auth/login',
      {username: username, password: password})
      .map(
        (response: Response) => {
          const token = response.json().token;
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace('-', '+').replace('_', '/');
          return {token: token, decoded: JSON.parse(window.atob(base64))};
        }
      )
      .do(
        tokenData => {
          this.router.navigate(['/']);
          localStorage.setItem('token', tokenData.token);
        }
      )
      .finally(() => {

      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('token');
  }

  loggedIn() {
    return tokenNotExpired();
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
