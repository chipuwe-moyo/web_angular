import {RouterModule, Routes} from "@angular/router";
import {NewCommodityComponent} from "./new-commodity/new-commodity.component";
import {ModuleWithProviders} from "@angular/core";
import {CommoditiesComponent} from "./commodities/commodities.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

const APP_ROUTES: Routes = [
  {path: '', component: CommoditiesComponent},
  {path: 'new-commodity', component: NewCommodityComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
