// TODO: create/find/update/delete

import {Injectable} from "@angular/core";
import {environment} from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {Garage} from "../models/garage.model.client";


@Injectable()
export class GarageServiceClient {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {

  }

  createGarage(userId, garage) {
    console.log('Creating store one client side');
    return this.http.post<Garage>(this.baseUrl + '/api/user/' + userId + '/garage', garage);
  }

  findAllStoresForUser(userId: String) {
    return this.http.get<Garage[]>(this.baseUrl + '/api/user/' + userId + '/garage');
  }


  findWebsiteById(userId, garageId) {
    console.log('looking for storeById');
    return this.http.get<Garage>(this.baseUrl + '/api/user/' + userId + '/garage/' + garageId);
  }


  updateStore(userId, garageId, garage) {
    console.log('front end store service updateStore Called');
    const url = this.baseUrl + '/api/user/' + userId + '/garage/' + garageId;
    // const body = websiteId;
    return this.http.put<Garage>(url, garage);
  }

  deleteWebsite(garageId) {
    console.log('Deleting store from the client side');
    return this.http.delete<Garage>(this.baseUrl + '/api/garage/' + garageId);
  }

}


