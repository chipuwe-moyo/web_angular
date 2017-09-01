import { Component, OnInit } from '@angular/core';
import {CommodityService} from "../_service/commodity.service";
import {Commodity} from "../_interface/commodity.interface";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  commodities: Commodity[];

  constructor(private commodityService: CommodityService) { }

  ngOnInit() {
    this.commodityService.getMyCommodities()
      .subscribe(
        (commodities: Commodity[]) => this.commodities = commodities,
        (error: Response) => console.log(error)
      );
  }

  onDeleted(commodity: Commodity) {
    const position = this.commodities.findIndex(
      (commodityEl: Commodity) => {
        return commodityEl.id == commodity.id;
      }
    );
    this.commodities.splice(position, 1);
  }

}
