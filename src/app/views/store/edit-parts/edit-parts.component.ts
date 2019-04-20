import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Part} from "../../../models/part.model.client";
import {PartServiceClient} from "../../../services/part.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-parts',
  templateUrl: './edit-parts.component.html',
  styleUrls: ['./edit-parts.component.css']
})
export class EditPartsComponent implements OnInit {

  @ViewChild('f') partsForm: NgForm;

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
              private router: Router) {
    this.oldPart = new Part('', '', '', '');
  }

  ngOnInit() {
    console.log('edit part ngOnInit');
    this.activatedRoute.params.subscribe((params: any) => {
      this.uid = params['uid'];
      this.partId = params['partId'];
      this.storeId = params['storeId'];
    });
    this.partService.findPartById(this.partId, this.storeId)
      .subscribe(
        part => this.oldPart = part
      );
    console.log('page found on the server: ' + JSON.stringify(this.oldPart));
  }

  updatePart() {
    const newPage = new Part(
      this.partsForm.value.partName,
      this.partId,
      this.partsForm.value.partDescription,
      this.partsForm.value.partPrice
    );


    console.log('new name and description of part: ' + this.partsForm.value.partName + ' ' + this.partsForm.value.partDescription);
    this.partService.updatePart(this.partId, this.storeId, newPage)
      .subscribe(
        () => this.backOnePage()
      );
  }

  deletePart() {
    this.partService.deletePart(this.partId)
      .subscribe(
        () => this.backOnePage()
      );
  }

  backOnePage() {
    this.router.navigate(['/user', this.uid, 'my-garage']);
  }

  getOldPartName() {
    console.log('calling get old part name');
    return this.oldPart.name;
  }

  getOldPartDescription() {
    console.log('calling get old part description');
    return this.oldPart.description;
  }

  getOldPartPrice() {
    console.log('calling get old part price');
    return this.oldPart.price;
  }



}
