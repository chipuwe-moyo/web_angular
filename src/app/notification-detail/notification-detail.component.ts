import { Component, OnInit } from '@angular/core';
import {UserService} from "../_service/user.service";
import {Notification} from "../_interface/notification.interface";
import {Location} from "@angular/common";
import {AuthService} from "../_service/auth.service";
import {Commodity} from "../_interface/commodity.interface";
import {CommodityService} from "../_service/commodity.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.css']
})
export class NotificationDetailComponent implements OnInit {

  notification: any;
  commodity: Commodity;

  constructor(private userService: UserService,
              private location: Location,
              private authService: AuthService,
              private commodityService: CommodityService ) { }

  ngOnInit() {
    this.notification = this.userService.notification;
    this.commodityService.getCommodityInfo(this.notification.data.commodity_id)
      .subscribe(commodity => this.commodity = commodity);
  }

  onNotify(form: NgForm) {
    this.commodityService.notifyUser(this.commodity.id, form.value.message, form.value.recipient)
      .subscribe(
        () => alert(this.notification.data.user_id + " has been notified on " + this.commodity.product)
      );
  }

  goBack(){
    this.location.back();
  }
}
