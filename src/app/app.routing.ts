import {RouterModule, Routes} from "@angular/router";
import {NewCommodityComponent} from "./new-commodity/new-commodity.component";
import {ModuleWithProviders} from "@angular/core";
import {CommoditiesComponent} from "./commodities/commodities.component";
const APP_ROUTES: Routes = [
  {path: '', component: CommoditiesComponent},
  {path: 'new-commodity', component: NewCommodityComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
