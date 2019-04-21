import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model.client';
import {Part} from "../models/part.model.client";
import {Store} from "../models/store.model.client";
// import {RequestOptions} from '@angular/http';


// import { User } from '../models/user.model.client';

// let options;
// options = new RequestOptions();

//TODO: the map errors should go away after the server side is completed
@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient,
              private router: Router,
              private sharedService: SharedService) {

  }

  options = {
    withCredentials: false
  };
  baseUrl = environment.baseUrl;
  APIUrl = '/api/user/';


  login(username: String, password: String) {
    console.log('client side user service login() called');
    this.options.withCredentials = true;
    const body = {
      username: username,
      password: password
    };
    return this.http.post(this.baseUrl + '/api/login', body, this.options).map(
      (res: Response) => {
        console.log('Inside login() response, res is ' + res);
        // const data = res.json();
        return res;
      });
  }

  loggedIn() {
    return this.http.get(this.baseUrl + '/api/loggedIn', this.options)
      .map((res: Response) => {
        const user = JSON.stringify(res);
        console.log('Checking for logged in with: ' + user);

        if (user !== '0') {
          console.log(this.sharedService);
          this.sharedService.user = user;
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      });
  }

  /**
   * adds a user to the users array
   * @param user is the user we want to add to the array.
   */
  createUser(user: any) {
    console.log('The user we are sending with the post req: ' + JSON.stringify(user));
    // const userBody = {username: user.username, password: user.password};
    return this.http.post(this.baseUrl + this.APIUrl, user);
  }


  /**
   * find the user by their _id.
   * @param userId the _id we are looking for.
   */
  findUserById(userId) {
    console.log('findUserById looking for userId: ' + userId);
    return this.http.get<User>(this.baseUrl + this.APIUrl + userId);
    // /api/user/:uid
  }

  /**
   * find the user by their username.
   * @param username the username we are looking for.
   */
  findUserByUsername(username: String) {
    console.log('Calling findUserByUsername from user client service');
    return this.http.get(this.baseUrl + '/api/user?username=' + username);
  }

  /**
   * find the user by their credentials.
   * @param username the username we are looking for.
   * @param password the password we are looking for.
   */
  // TODO: changed the url here if that causes problems look here
  findUserByCredentials(username, password) {
    console.log('made it to the client side findUserByCredential http request');
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
  }


  /**
   * update a user in the array of users.
   * @param userId the _id we are looking for.
   * @param user the user information we want to use as the update.
   */
  updateUserById(userId, user) {
    console.log('calling updateuserbyId from client side');
    return this.http.put<User>(this.baseUrl + this.APIUrl + userId, user);
  }

  /**
   * deletes a user from the array of users.
   * @param userId the _id we are using to find the user.
   */
  deleteUser(userId) {
    return this.http.delete(this.baseUrl + this.APIUrl + userId);
  }

  register(username: String, password: String) {

    this.options.withCredentials = true;
    const body = {
      username : username,
      password : password
    };

    return this.http.post(this.baseUrl + '/api/register', body, this.options)
      .map(
        (res: Response) => {
          // const data = res.json();
          return res;
        }
      );
  }


  logout() {
    // this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options)
      .map((res: Response) => {
        return res;
      });
  }



  findAllPartsInCart(userId) {
    console.log('find all parts in the cart client');
    return this.http.get(this.baseUrl + '/api/user/' + userId + '/getParts');
  }

  orderThisPart(userId, part) {
    console.log('submit order for these parts client side');
    return this.http.post<Part>(this.baseUrl + '/api/user/' + userId + '/orderParts', part);
  }


  removeFromCart(userId, partId) {
    console.log('remove this item from my cart, client');
    return this.http.delete(this.baseUrl + 'api/deleteItem/' + partId, userId);
  }


  findAllOrdersForUser(userId) {
    console.log('get all  the orders for this user: ' + userId);
    return this.http.get(this.baseUrl + 'api/user/' + userId + '/orders');
  }

  removeOrder(userId, partId) {
    console.log('remove order: ' + partId + ' for user: ' + userId);
    return this.http.delete(this.baseUrl + 'api/user/' + userId + '/order/' + partId);
  }

  findAllFavStoresForUser(userId) {
    console.log('finding all favorite stores for user: ' + userId);
    return this.http.get<Store[]>(this.baseUrl + '/api/stores/' + userId);
  }

  findAllListingsForUser(userId) {
    console.log('finding all listings for this user: ' + userId);
    return this.http.get<Part[]>(this.baseUrl + '/api/listings/' + userId);
  }

  removeStore(userId, storeId) {
    console.log('removing store from users favorite stores');
    return this.http.delete(this.baseUrl + '/api/user/' + userId + 'store/' + storeId);
  }
}
