import {Component, OnInit} from '@angular/core';
import {Product} from "../_model/product.model";
import {ProductService} from "../_service/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
        products => {
          this.products = products;
        }
      );
  }

}
