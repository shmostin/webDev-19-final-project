import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Part} from "../../../models/part.model.client";
import {PartServiceClient} from "../../../services/part.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-part',
  templateUrl: './new-part.component.html',
  styleUrls: ['./new-part.component.css']
})
export class NewPartComponent implements OnInit {
  @ViewChild('f') pageForm: NgForm;

  uid: string;
  partId: string;
  storeId: string;
  name: string;
  description: string;
  parts: Part[];
  part: Part;
  oldPart: Part;
  constructor(private partService: PartServiceClient,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.uid = params['uid'];
      });
  }

  backOnePage(storeId) {
    this.router.navigate(['user', this.uid, 'store', storeId, 'my-garage'])
  }

  newPart(userId, storeId) {
    const name = this.pageForm.value.partName;
    const description = this.pageForm.value.partDescription;
    const price = this.pageForm.value.partPrice;
    const part = new Part(name, description, price);

    this.partService.createPart(userId, storeId, part)
      .subscribe(
        part => this.router.navigate(['../'])
      )
  }

}
