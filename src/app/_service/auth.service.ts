import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs/Rx'

@Injectable()
export class AuthService{
  constructor(private http: Http){

  }

  register(
    first_name: string,
    last_name: string,
    username: string,
    password: string,
    street_address: string,
    country: string,
    city: string,
    email: string,
    phone_number: string
  ){
    return this.http.post('http://localhost:8000/api/auth/register', {
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
      street_address: street_address,
      country: country,
      city: city,
      email: email,
      phone_number: phone_number
    });
  }

  login(username: string,
        password: string){
    return this.http.post('http://localhost:8000/api/auth/login',{
      username: username,
      password: password
    }).map(
      (response: Response) => {
        const token = response.json().token;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return {token: token, decoded: JSON.parse(window.atob(base64))};
      }
    )
      .do(
        tokenData => {
          localStorage.setItem('token', tokenData.token);
        }
      );
    }

    getToken(){
      return localStorage.getItem('token');
    }
}
