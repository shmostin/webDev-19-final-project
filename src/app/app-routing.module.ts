import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from "./views/user/login/login.component";
import {RegisterComponent} from "./views/user/register/register.component";
import {ProfileComponent} from "./views/user/profile/profile.component";
import {HomeComponent} from "./views/user/home/home.component";
import {MyGarageComponent} from "./views/garage/my-garage/my-garage.component";
import {MyOrdersComponent} from "./views/garage/my-orders/my-orders.component";
import {MyCartComponent} from "./views/garage/my-cart/my-cart.component";
import {StoreInstanceComponent} from "./views/store/store-instance/store-instance.component";
import {PartComponent} from "./views/store/part/part.component";
import {EditPartsComponent} from "./views/store/edit-parts/edit-parts.component";
import {AuthGuard} from "./services/auth-gaurd.service";
import {NewPartComponent} from "./views/store/new-part/new-part.component";
import {AllStoresComponent} from "./views/store/all-stores/all-stores.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/:uid', component: ProfileComponent, canActivate: [AuthGuard]},

  {path: 'user/:uid/store/:storeid/my-garage', component: MyGarageComponent},
  {path: 'user/:uid/store/:storeid/my-garage/orders', component: MyOrdersComponent},
  {path: 'user/:uid/store/:storeid/my-garage/cart', component: MyCartComponent},

  {path: 'user/:uid/all-stores', component: AllStoresComponent},
  {path: 'user/:uid/store/:storeid', component: StoreInstanceComponent},
  {path: 'user/:uid/store/:storeid/part/:partid/listing', component: PartComponent},
  {path: 'user/:uid/store/:storeid/part/new', component: NewPartComponent},
  {path: 'user/:uid/store/:storeid/part/:partid/edit', component: EditPartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
