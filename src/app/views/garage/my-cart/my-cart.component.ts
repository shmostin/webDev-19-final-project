import { Component, OnInit } from '@angular/core';
import {PartServiceClient} from "../../../services/part.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service.client";
import {Part} from "../../../models/part.model.client";

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  //add orderTheseParts() and remove from cart()
  //TODO: add functions:
  /**
   * removeFromCart
   */

  userId: string;
  partId: string;
  parts: Part[];

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log('loading the parts for this users cart');
    this.activatedRoute.params.subscribe( (params: any) => {
      this.userId = params['uid'];
      console.log('at my-cart, uid: ' + this.userId);
    });
    this.userService.findAllPartsInCart(this.userId)
      .subscribe(
        (data: any) => {
          this.parts = data;
          console.log('website list length: ' + this.parts.length);
          console.log('website number 1: ' + JSON.stringify(this.parts[0]));
        });
  }

  //back to my-garage
  backOnePage() {
    this.router.navigate(['/user', this.userId, 'my-garage']);
  }

  orderThisPart() {
    this.userService.orderThisPart(this.userId, this.parts)
      .subscribe(
        () => this.router.navigate(['/user', this.userId, 'my-garage', 'orders'])
      )
  }


  //delete this from the cart and reload the cart page.
  removeFromCart(partId) {
    this.userService.removeFromCart(this.userId, partId)
      .subscribe(
        () => this.router.navigate(['/user', this.userId, 'my-garage', 'cart'])
      )
  }

}
