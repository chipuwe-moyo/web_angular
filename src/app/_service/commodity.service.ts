import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class CommodityService{
  constructor(private http: Http){

  }

  getCommodities(): Observable<any> {
    return this.http.get('http://localhost:8000/api/commodity')
      .map(
        (response: Response) => {
          return response.json().commodities;
        }
      );
  }
}
