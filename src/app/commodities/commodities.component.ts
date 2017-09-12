import {Component, OnInit} from '@angular/core';
import {Commodity} from "../_interface/commodity.interface";
import {CommodityService} from "../_service/commodity.service";
import {Response} from '@angular/http';

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css']
})
export class CommoditiesComponent implements OnInit {

  commodities: Commodity[];
  commodityFilter: any = { town: '', province: '', country: ''};

  constructor(private commodityService: CommodityService) {
  }

  ngOnInit() {
    this.commodityService.getAllCommodities()
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
