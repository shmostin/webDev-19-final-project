import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import { HomeComponent } from './views/user/home/home.component';
import { MyGarageComponent } from './views/garage/my-garage/my-garage.component';
import { MyCartComponent } from './views/garage/my-cart/my-cart.component';
import { MyOrdersComponent } from './views/garage/my-orders/my-orders.component';
import { StoreInstanceComponent } from './views/store/store-instance/store-instance.component';
import { PartComponent } from './views/store/part/part.component';
import { EditPartsComponent } from './views/store/edit-parts/edit-parts.component';


//client Services
import {UserService} from "./services/user.service.client";
import {GarageServiceClient} from "./services/garage.service.client";
import {StoreServiceClient} from "./services/store.service.client";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    MyGarageComponent,
    MyCartComponent,
    MyOrdersComponent,
    StoreInstanceComponent,
    PartComponent,
    EditPartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService, StoreServiceClient, GarageServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
