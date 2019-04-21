import { Component, OnInit } from '@angular/core';
import {PartServiceClient} from "../../../services/part.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service.client";
import {Part} from "../../../models/part.model.client";
import {Store} from "../../../models/store.model.client";

@Component({
  selector: 'app-my-garage',
  templateUrl: './my-garage.component.html',
  styleUrls: ['./my-garage.component.css']
})
export class MyGarageComponent implements OnInit {

  //TODO: fill in constructor and add methods for
  //TODO: create methods:
  /**
   * toAllStores
   * getCartItems
   * getActiveOrders
   * removeStore
   */


  userId: String;
  stores: Store[];
  listings: Part[];
  storeId: String;


  //Find all the parts for a user
  //fins all the favorite stores for a user
  constructor(private partService: PartServiceClient,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log('loading the favorite stores list');
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.storeId = params['storeid'];
      console.log('listing favorite stores for uid: ' + this.userId);
    });
    this.userService.findAllFavStoresForUser(this.userId)
      .subscribe(
        (data: any) => {
          this.stores = data;
          console.log('store list length: ' + this.stores.length);
        });
    this.userService.findAllListingsForUser(this.userId)
      .subscribe(
        (data: any) => {
          this.listings = data;
          console.log('listings length: ' + this.listings.length);
        }
      )
  }

  //back to the user profile
  backOnePage() {
    this.router.navigate(['/user', this.userId])
  }


  //TODO: somehow get the store id and the partId from the garage page???
  goToEditPartListing(partId, storeId) {
    this.router.navigate(['/user', this.userId, 'store', storeId, 'part', partId, 'edit'])
  }

  goToCart() {
    this.router.navigate(['/user', this.userId, 'my-garage/cart'])
  }

  gotToOrders() {
    this.router.navigate(['/user', this.userId, 'my-garage/orders'])
  }

  removeStore(userId, storeId) {
    this.userService.removeStore(userId, storeId)
      .subscribe(
        () => this.backOnePage()
      )
  }

  addNewListing() {
    this.router.navigate(['/user', this.userId, 'store', this.storeId, 'part/new']);
  }
}
