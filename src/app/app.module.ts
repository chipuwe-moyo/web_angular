import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CommodityComponent} from './commodity/commodity.component';
import {CommoditiesComponent} from './commodities/commodities.component';
import {NewCommodityComponent} from './new-commodity/new-commodity.component';
import {routing} from "./app.routing";
import {CommodityService} from "./_service/commodity.service";
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AuthService} from "./_service/auth.service";
import {HomeComponent} from './home/home.component';
import {AuthGuard} from "./_guard/auth.guard";
import {DashboardComponent} from './dashboard/dashboard.component';
import {CommodityDetailComponent} from './commodity-detail/commodity-detail.component';
import { SearchComponent } from './search/search.component';
import {SearchService} from "./_service/search.service";
import { NotificationDetailComponent } from './notification-detail/notification-detail.component';
import {UserService} from "./_service/user.service";
import {Ng2FilterPipeModule} from "ng2-filter-pipe";

@NgModule({
  declarations: [
    AppComponent,
    CommodityComponent,
    CommoditiesComponent,
    NewCommodityComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    CommodityDetailComponent,
    SearchComponent,
    NotificationDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2FilterPipeModule
  ],
  providers: [
    AuthGuard,
    CommodityService,
    AuthService,
    SearchService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
