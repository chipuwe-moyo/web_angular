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

  addCommodity(product_id: number,
               description: string,
               price: number,
               quantity: number,
               metric: string) {
    const token = this.authService.getToken();
    const body = JSON.stringify({
      product_id: product_id,
      description: description,
      price: price,
      quantity: quantity,
      metric: metric
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

  updateCommodity(id: number,
                  newProduct: number,
                  newDescription: string,
                  newPrice: number,
                  newQuantity: number,
                  newMetric: string) {
    const token = this.authService.getToken();
    const body = JSON.stringify({
      product_id: newProduct,
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
}
