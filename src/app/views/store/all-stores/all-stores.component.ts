import { Component, OnInit } from '@angular/core';
import {StoreServiceClient} from "../../../services/store.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "../../../models/store.model.client";

@Component({
  selector: 'app-all-stores',
  templateUrl: './all-stores.component.html',
  styleUrls: ['./all-stores.component.css']
})
export class AllStoresComponent implements OnInit {

  userId: string;
  stores: Store[];


  constructor(private storeService: StoreServiceClient,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
    });
    this.storeService.getAllStores()
      .subscribe(
        stores => this.stores = stores
      );
  }

  backOnePage() {
    this.router.navigate(['/user', this.userId, 'my-garage']);
  }

}
