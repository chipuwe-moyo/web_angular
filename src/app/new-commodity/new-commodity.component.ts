import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CommodityService} from "../_service/commodity.service";

@Component({
  selector: 'app-new-commodity',
  templateUrl: './new-commodity.component.html',
  styleUrls: ['./new-commodity.component.css']
})
export class NewCommodityComponent implements OnInit {

  constructor(private commodityService: CommodityService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.commodityService.addCommodity(
      form.value.product,
      form.value.description,
      form.value.price,
      form.value.quantity,
      form.value.metric,
      form.value.town,
      form.value.province,
      form.value.country
    )
      .subscribe(
        () => alert("Commodity Created")
      );
    form.reset();
  }
}
