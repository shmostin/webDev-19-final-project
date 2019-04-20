import { Component, OnInit } from '@angular/core';
import {PartServiceClient} from "../../../services/part.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-parts',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {

  uid: string;
  sid: string;
  pid: String;
  name: string;
  description: string;

  constructor(private partService: PartServiceClient,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.uid = params['uid'];
        this.sid = params['storeid'];
        this.pid = params['partid'];
      });
  }


  addToCart() {
    console.log('adding part: ' + this.pid + ' to user: ' + this.uid + " cart");
    //need the part to add. How do i get the part???
    this.partService.addPartToCart(this.uid, this.pid)
  }

}
