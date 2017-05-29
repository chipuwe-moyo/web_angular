import {Component, Input, OnInit} from '@angular/core';
import {Commodity} from "../_interface/commodity.interface";

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent implements OnInit {

  @Input() commodity: Commodity;

  constructor() { }

  ngOnInit() {
  }

}
