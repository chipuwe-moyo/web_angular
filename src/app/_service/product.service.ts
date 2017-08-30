import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs/Observable";
import {Product} from "../_interface/product.interface";
@Injectable()
export class ProductService{
  constructor(private http: Http, private authService: AuthService){

  }

  getProducts(): Observable<Product[]> {
    const token = this.authService.getToken();
    return this.http.get('http://localhost:8000/api/product?token=' + token)
      .map(
        (response: Response) => {
          return response.json().products;
        }
      );
  }
}
