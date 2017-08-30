import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Commodity} from "../_interface/commodity.interface";
import {CommodityService} from "../_service/commodity.service";

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent implements OnInit {

  @Input() commodity: Commodity;
  @Output() commodityDeleted = new EventEmitter<Commodity>();
  editing = false;
  editProduct;
  editDescription = '';
  editPrice;
  editQuantity;
  editMetric = '';

  constructor(private commodityService: CommodityService) {
  }

  ngOnInit() {
  }

  onEdit() {
    this.editing = true;
    this.editProduct = this.commodity.product_id;
    this.editDescription = this.commodity.description;
    this.editPrice = this.commodity.price;
    this.editQuantity = this.commodity.quantity;
    this.editMetric = this.commodity.metric;
  }

  onUpdate() {
    this.commodityService.updateCommodity(
      this.commodity.id,
      this.editProduct,
      this.editDescription,
      this.editPrice,
      this.editQuantity,
      this.editMetric)
      .subscribe(
        () => {
          this.commodity.product_id = this.editProduct;
          this.editProduct = null;
          this.commodity.description = this.editDescription;
          this.editDescription = '';
          this.commodity.price = this.editPrice;
          this.editPrice = null;
          this.commodity.quantity = this.editQuantity;
          this.editQuantity = null;
          this.commodity.metric = this.editMetric;
          this.editMetric = '';
        }
      );
    this.editing = false;
  }

  onCancel() {
    this.editing = false;
    this.editDescription = '';
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this')) {
      this.commodityService.deleteCommodity(this.commodity.id)
        .subscribe(
          () => {
            this.commodityDeleted.emit(this.commodity);
            console.log('Commodity Deleted')
          }
        );
    }
  }

  onLike() {
    this.commodityService.likeCommodity(this.commodity.id)
      .subscribe(
        () => alert(this.commodity.user_id + " has been notified on " + this.commodity.product_id)
      );
  }

}
