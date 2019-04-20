import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../../services/user.service.client";
import {Router} from "@angular/router";
import {User} from "../../../models/user.model.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;

  // properties
  // user: User;
  username: string;
  password: string;
  vpassword: string;
  userErrorFlag: boolean;
  userErrorMsg: string;
  pwdErrorFlag: boolean;
  pwdErrorMsg: string;


  //TODO: fill in constructor and add cancel and submit functions
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  createUser() {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const user = new User(username, password, '', '', '');
    // this.userService.createUser(user)
    //   .subscribe(
    //     (user) => this.router.navigate(['/user', user._id]));
    this.userService.register(username, password)
      .subscribe(
        (user: any) => {
          // console.log(data);
          this.router.navigate(['/user', user._id]);
          return;
        },
        (error: any) => {
          // this.error = error._body;
          console.log(error);
        }
      );

  }

}
