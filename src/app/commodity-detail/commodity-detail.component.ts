import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommodityService} from "../_service/commodity.service";
import {Commodity} from "../_interface/commodity.interface";
import {AuthService} from "../_service/auth.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Location} from "@angular/common";
import {UserService} from "../_service/user.service";

@Component({
  selector: 'app-commodity-detail',
  templateUrl: './commodity-detail.component.html',
  styleUrls: ['./commodity-detail.component.css']
})
export class CommodityDetailComponent implements OnInit {
  commodity: Commodity;
  @Output() commodityDeleted = new EventEmitter<Commodity>();
  editing = false;
  editProduct;
  editDescription = '';
  editPrice;
  editQuantity;
  editMetric = '';

  constructor(private route: ActivatedRoute,
              private commodityService: CommodityService,
              private authService: AuthService,
              private location: Location,
              private userService: UserService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.commodityService.getCommodityInfo(+params.get('id')))
      .subscribe(commodity => this.commodity = commodity);
  }

  onEdit() {
    this.editing = true;
    this.editProduct = this.commodity.product;
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
          this.commodity.product = this.editProduct;
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

  onNotify(form: NgForm) {
    this.userService.notifyUser(this.commodity.id, form.value.message, form.value.recipient)
      .subscribe(
        () => alert(this.commodity.user_id + " has been notified on " + this.commodity.product)
      );
  }

  goBack(){
    this.location.back();
  }
}
