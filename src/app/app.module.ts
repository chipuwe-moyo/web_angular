import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommodityComponent } from './commodity/commodity.component';
import { CommoditiesComponent } from './commodities/commodities.component';
import { NewCommodityComponent } from './new-commodity/new-commodity.component';
import {routing} from "./app.routing";
import {CommodityService} from "./_service/commodity.service";

@NgModule({
  declarations: [
    AppComponent,
    CommodityComponent,
    CommoditiesComponent,
    NewCommodityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CommodityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
