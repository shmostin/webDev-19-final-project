import { Component, OnInit } from '@angular/core';
import {PartServiceClient} from "../../../services/part.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {StoreServiceClient} from "../../../services/store.service.client";
import {Part} from "../../../models/part.model.client";

@Component({
  selector: 'app-store-instance',
  templateUrl: './store-instance.component.html',
  styleUrls: ['./store-instance.component.css']
})


//backOnePage
export class StoreInstanceComponent implements OnInit {

  userId: string;
  partId: string;
  storeId: string;
  parts: Part[];

  constructor(private storeService: StoreServiceClient,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    console.log('store instance ngOnInit');
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.partId = params['partId'];
      this.storeId = params['storeId'];
    });
    this.storeService.findAllPartsByStoreId(this.storeId)
      .subscribe(
        parts => this.parts = parts
      );
  }


  backOnePage() {
    this.router.navigate(['/user', this.userId, 'my-garage']);
  }

}
