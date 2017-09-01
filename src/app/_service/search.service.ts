import {Injectable} from "@angular/core";
import {Commodity} from "../_interface/commodity.interface";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
@Injectable()
export class SearchService {
  constructor(private http: Http){}

  public query: string;

  search(query: string): Observable<Commodity[]> {

    return this.http.get('http://localhost:8000/api/search?q=' + query)
      .map(
        (response: Response) => {
          return response.json().commodities;
        }
      );
  }
}
