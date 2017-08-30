import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {AuthService} from "./auth.service";
import {Observable} from "rxjs/Observable";
import {Like} from "../_interface/like.interface";

@Injectable()
export class LikeService {

  constructor(private http: Http, private authService: AuthService) {

  }

  getLikes(): Observable<Like[]> {
    const token = this.authService.getToken();
    return this.http.get('http://localhost:8000/api/commodity/like/mine?token=' + token)
      .map(
        (response: Response) => {
          return response.json().likes;
        }
      );
  }

}
