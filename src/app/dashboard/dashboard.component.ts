import { Component, OnInit } from '@angular/core';
import {CommodityService} from "../_service/commodity.service";
import {Commodity} from "../_interface/commodity.interface";
import {Notification} from "../_interface/notification.interface";
import {Router} from "@angular/router";
import {UserService} from "../_service/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  commodities: Commodity[];
  notifications: Notification[];

  constructor(private commodityService: CommodityService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.commodityService.getMyCommodities()
      .subscribe(
        (commodities: Commodity[]) => this.commodities = commodities,
        (error: Response) => console.log(error)
      );

    this.commodityService.getNotifications()
      .subscribe(
        (likes: Notification[]) => this.notifications = likes,
        (error: Response) =>console.log(error)
      );
  }

  onNotification(notification: Notification){
    this.userService.notification = notification;
    this.router.navigate(['/notification-detail'])
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
