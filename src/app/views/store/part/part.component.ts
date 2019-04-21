import { Component, OnInit } from '@angular/core';
import {PartServiceClient} from "../../../services/part.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {Part} from "../../../models/part.model.client";

@Component({
  selector: 'app-parts',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {

  userId: string;
  storeId: string;
  partId: string;
  name: string;
  description: string;
  part: Part;

  constructor(private partService: PartServiceClient,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.storeId = params['storeid'];
        this.partId = params['partid'];
      });
    this.partService.findPartById(this.partId, this.storeId)
      .subscribe(
        (data: any) => {
          this.part = data;
        }
      )
  }


  addToCart() {
    console.log('adding part: ' + this.partId + ' to user: ' + this.userId + " cart");
    //need the part to add. How do i get the part???
    this.partService.addPartToCart(this.userId, this.partId)
  }

  backOnePage() {
    this.router.navigate(['/user', this.userId, 'store', this.storeId])
  }

}
