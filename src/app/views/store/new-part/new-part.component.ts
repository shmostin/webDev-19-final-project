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

  userId: string;
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
        this.userId = params['uid'];
        this.storeId = params['storeid'];
      });
  }

  backOnePage() {
    this.router.navigate(['/user', this.userId, 'store', this.storeId, 'my-garage'])
  }

  newPart() {
    const name = this.pageForm.value.partName;
    const description = this.pageForm.value.partDescription;
    const price = this.pageForm.value.partPrice;
    const part = new Part(name, description, price);

    this.partService.createPart(this.userId, this.storeId, part)
      .subscribe(
        part => this.router.navigate(['../'])
      )
  }



}
