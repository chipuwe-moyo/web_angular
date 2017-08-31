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
import {LikeService} from "./_service/like.service";
import {HomeComponent} from './home/home.component';
import {AuthGuard} from "./_guard/auth.guard";
import {DashboardComponent} from './dashboard/dashboard.component';
import {CommodityDetailComponent} from './commodity-detail/commodity-detail.component';
import { SearchComponent } from './search/search.component';
import {SearchService} from "./_service/search.service";

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    CommodityService,
    AuthService,
    LikeService,
    SearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
