import { Component, OnInit } from '@angular/core';
import {SearchService} from "../_service/search.service";
import {Commodity} from "../_interface/commodity.interface";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;
  commodities : Commodity[];

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.query = this.searchService.query;
    this.searchService.search(this.query)
      .subscribe(
        (commodities: Commodity[]) => this.commodities = commodities,
        (error: Response) => console.log(error)
      );
  }

}
