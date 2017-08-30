import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CommodityService} from "../_service/commodity.service";
import {Product} from "../_model/product.model";
import {ProductService} from "../_service/product.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-new-commodity',
  templateUrl: './new-commodity.component.html',
  styleUrls: ['./new-commodity.component.css']
})
export class NewCommodityComponent implements OnInit {

  constructor(private commodityService: CommodityService) {
  }

  @Input()
  products: Product[];

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.commodityService.addCommodity(
      form.value.product_id,
      form.value.description,
      form.value.price,
      form.value.quantity,
      form.value.metric
    )
      .subscribe(
        () => alert("Commodity Created")
      );
    form.reset();
  }

}
