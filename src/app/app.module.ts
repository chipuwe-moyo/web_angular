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
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from "./_service/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    CommodityComponent,
    CommoditiesComponent,
    NewCommodityComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CommodityService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
