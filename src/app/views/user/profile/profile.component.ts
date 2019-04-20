import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../models/user.model.client";
import {NgForm} from "@angular/forms";
import {UserService} from "../../../services/user.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('f') profileForm: NgForm;
  username: string;
  user: User;
  uid: string;


  //TODO: create button functions and constructor and ngOnInit()
  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.user = new User('', '', '', '', '');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        console.log('profile component: ' + params);
        this.uid = params['uid'];
        console.log('userId: ' + this.uid);
      });
    this.userService.findUserById(this.uid)
      .subscribe(
        user => this.user = user);
  }

  //MIGHT NEED TO FIX TO GET GARAGE INFO INSTEAD OF WEBSITE INFO
  saveInfoAndGetGarageInfo() {
    const username = this.profileForm.value.username;
    const firstName = this.profileForm.value.firstName;
    const lastName = this.profileForm.value.lastName;
    const email = this.profileForm.value.email;
    const newUser = new User(username, this.user.password, firstName, lastName, email);
    console.log('newUser info: ' + JSON.stringify(newUser));
    this.userService.updateUserById(this.user._id, newUser)
      .subscribe(
        () => this.router.navigate(['/user', this.uid, 'garage']));
  }

  saveUserInfo() {
    const username = this.profileForm.value.username;
    const firstName = this.profileForm.value.firstName;
    const lastName = this.profileForm.value.lastName;
    const email = this.profileForm.value.email;
    const newUser = new User(username, this.user.password, firstName, lastName, email);
    console.log('newUser info: ' + JSON.stringify(newUser));
    this.userService.updateUserById(this.user._id, newUser)
      .subscribe(
        () => this.router.navigate(['/user', this.uid]));
  }


  logout() {
    this.userService.logout()
      .subscribe(
        () => this.router.navigate(['/login'])
      );
  }

}
