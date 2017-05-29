import { Component, OnInit } from '@angular/core';
import {Commodity} from "../_interface/commodity.interface";
import {CommodityService} from "../_service/commodity.service";

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css']
})
export class CommoditiesComponent implements OnInit {

  commodities: Commodity[];

  constructor(private commodityService: CommodityService) { }

  ngOnInit() {
  }

  onGetCommodities(){
    this.commodityService.getCommodities()
      .subscribe(
        (commodities: Commodity[]) => this.commodities = commodities,
        (error: Response) => console.log(error)
      );
  }

}
