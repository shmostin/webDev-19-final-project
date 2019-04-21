// TODO: create/find/update/delete

import {Injectable} from "@angular/core";
import {environment} from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {Part} from "../models/part.model.client";
import {Store} from "../models/store.model.client";


@Injectable()
export class StoreServiceClient {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {

  }

  getAllStores() {
    console.log('getting all stores');
    return this.http.get<Store[]>(this.baseUrl + '/api/all-stores');
  }

  createStore(userId, store) {
    console.log('Creating store one client side');
    return this.http.post<Store>(this.baseUrl + '/api/user/' + userId + '/store', store);
  }

  findAllStoresForUser(userId: String) {
    return this.http.get<Store[]>(this.baseUrl + '/api/user/' + userId + '/store');
  }

  findAllPartsByStoreId(storeId) {
    return this.http.get<Part[]>(this.baseUrl + '/api/store/' + storeId);
  }


  findWebsiteById(userId, storeId) {
    console.log('looking for storeById');
    return this.http.get<Store>(this.baseUrl + '/api/user/' + userId + '/store/' + storeId);
  }

  updateStore(userId, storeId, store) {
    console.log('front end store service updateStore Called');
    const url = this.baseUrl + '/api/user/' + userId + '/store/' + storeId;
    // const body = websiteId;
    return this.http.put<Store>(url, store);
  }

  deleteWebsite(storeId) {
    console.log('Deleting store from the client side');
    return this.http.delete<Store>(this.baseUrl + '/api/store/' + storeId);
  }

}


