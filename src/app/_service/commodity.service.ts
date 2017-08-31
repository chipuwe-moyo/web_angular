import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";
import {Commodity} from "../_interface/commodity.interface";

@Injectable()
export class CommodityService {
  constructor(private http: Http, private authService: AuthService) {

  }

  addCommodity(product: number,
               description: string,
               price: number,
               quantity: number,
               metric: string,
               town: string,
               province: string,
               country: string
  ) {
    const token = this.authService.getToken();
    const body = JSON.stringify({
      product: product,
      description: description,
      price: price,
      quantity: quantity,
      metric: metric,
      town: town,
      province: province,
      country: country
    });
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8000/api/commodity/store?token=' + token, body, {headers: headers});
  }

  getMyCommodities(): Observable<Commodity[]> {
    const token = this.authService.getToken();
    return this.http.get('http://localhost:8000/api/commodity/mine?token=' + token)
      .map(
        (response: Response) => {
          return response.json().commodities;
        }
      );
  }

  getAllCommodities(): Observable<Commodity[]> {
    return this.http.get('http://localhost:8000/api/commodity/all')
      .map(
        (response: Response) => {
          return response.json().commodities;
        }
      );
  }

  getCommodityInfo(id: number): Observable<Commodity> {
    return this.http.get('http://localhost:8000/api/commodity/info/'+id)
      .map(
        (response: Response) => {
          return response.json().commodity;
        }
      );
  }

  updateCommodity(id: number,
                  newProduct: number,
                  newDescription: string,
                  newPrice: number,
                  newQuantity: number,
                  newMetric: string) {
    const token = this.authService.getToken();
    const body = JSON.stringify({
      product: newProduct,
      description: newDescription,
      price: newPrice,
      quantity: newQuantity,
      metric: newMetric
    });
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('http://localhost:8000/api/commodity/' + id + '?token=' + token, body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }

  deleteCommodity(id: number) {
    const token = this.authService.getToken();
    return this.http.delete('http://localhost:8000/api/commodity/' + id + '?token=' + token);
  }

  likeCommodity(id: number) {
    const token = this.authService.getToken();
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8000/api/commodity/like/' + id + '?token=' + token, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
