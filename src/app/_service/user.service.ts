import {Injectable} from "@angular/core";
import {Notification} from "../_interface/notification.interface";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";
import {Http, Response, Headers} from "@angular/http";

@Injectable()

export class UserService{
  notification: Notification;

  constructor(private authService: AuthService, private http: Http){}

  notifyUser(id: number, message: string, recipient: number) {
    const token = this.authService.getToken();
    const body = JSON.stringify({message: message, recipient: recipient});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8000/api/commodity/notify/' + id + '?token=' + token, body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }

  getNotifications() : Observable <Notification[]> {
    const token = this.authService.getToken();
    return this.http.get('http://localhost:8000/api/commodity/notifications?token=' + token)
      .map(
        (response: Response) => response.json().notifications
      )
  }
}
