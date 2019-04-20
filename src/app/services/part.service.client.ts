import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';
import {Part} from "../models/part.model.client";


@Injectable()
export class PartServiceClient {


  constructor(private http: HttpClient) {

  }

  baseUrl = environment.baseUrl



  //user/:uid/store/:storeid/part/:partid/listing

  //calls the user api to post the part to the users cart. Use the partId to retrieve the part info and
  // add it to the cart
  addPartToCart(userId: string, partId) {
    console.log('calling addPartToCart from client side');
    return this.http.post<Part[]>(this.baseUrl + '/api/user' + userId, partId);
  }

  createPart(storeId: string, part: Part) {
    console.log('calling create part from the client side')
    return this.http.post<Part>(this.baseUrl + '/api/store/' + storeId, part);
  }

  findPartsByStoreId(storeId: string) {
    console.log('calling findPagesByStore from client');
    return this.http.get<Part[]>(this.baseUrl + '/api/store/' + storeId);
  }


  findPartById(partId: string, storeId: string) {
    console.log('calling findPageById on client side');
    return this.http.get<Part>(this.baseUrl + '/api/store/' + storeId + '/part/' + partId + '/listing');
  }


  //should route to part edit component
  updatePart(partId: string, storeId: string, part: Part) {
    console.log('AT UPDATE PAGE ON CLIENT SIDE');
    return this.http.put<Part>(this.baseUrl + '/api/store/' + storeId + '/part/' + partId + '/edit', part);
  }


  deletePart(partId) {
    // for (let i = 0; i < this.pages.length; i++) {
    //     if (this.pages[i]._id === pageId) {
    //         const cut = +i;
    //         this.pages.splice(cut, 1);
    //     }
    // }
    return this.http.delete(this.baseUrl + '/api/userpart/' + partId);
  }
}
