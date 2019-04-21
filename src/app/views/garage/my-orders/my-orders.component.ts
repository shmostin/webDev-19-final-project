import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {Part} from "../../../models/part.model.client";
import {Order} from "../../../models/order.model.client";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  //TODO: create functions:
  /**
   * removeFromOrders
   */

  userId: string;
  storeId: string;
  partId: string;
  orders: Part[];

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }


  // grab all of the orders aka parts that are currently in the orders array for this user
  ngOnInit() {
    console.log('loading the parts for this users orders list');
    this.activatedRoute.params.subscribe( (params: any) => {
      this.userId = params['uid'];
      this.storeId = params['storeid'];
      console.log('at my-cart, uid: ' + this.userId);
    });
    this.userService.findAllOrdersForUser(this.userId)
      .subscribe(
        (data: any) => {
          this.orders = data;
          console.log('order list length: ' + this.orders.length);
          console.log('website number 1: ' + JSON.stringify(this.orders[0]));
        });
  }

  removeFromOrders(partId) {
    console.log('deleting this part from the orders list: ' + partId);
    this.userService.removeOrder(this.userId, partId)
      .subscribe(
        () => this.router.navigate(['/user', this.userId, 'my-garage', 'orders'])
      )
  }

  backOnePage() {
    this.router.navigate(['/user', this.userId, 'store', this.storeId, 'my-garage'])
  }

}
