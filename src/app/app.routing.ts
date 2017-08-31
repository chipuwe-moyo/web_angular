import {RouterModule, Routes} from "@angular/router";
import {NewCommodityComponent} from "./new-commodity/new-commodity.component";
import {ModuleWithProviders} from "@angular/core";
import {CommoditiesComponent} from "./commodities/commodities.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./_guard/auth.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CommodityDetailComponent} from "./commodity-detail/commodity-detail.component";
import {SearchComponent} from "./search/search.component";

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'commodities/all', component: CommoditiesComponent},
  {path: 'new-commodity', component: NewCommodityComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchComponent},
  {path: 'commodity-detail/:id', component: CommodityDetailComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
