import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {UserService} from "../../../services/user.service.client";
import {SharedService} from "../../../services/shared.service";


//TODO: create login function and update constructor
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  // properties
  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password';
  user: any;

  title: string;
  disabledFlag: boolean;
  inputText: string;

  constructor(private router: Router, private userService: UserService, private sharedService: SharedService) {
    this.errorFlag = false
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    console.log('username: ' + this.username);
    console.log('password: ' + this.password);

    this.userService.login(this.username, this.password)
      .subscribe(
        (user: any) => {
          this.sharedService.user = user;
          this.router.navigate(['/user', user._id]);
        }, (error: any) => {
          console.log(error);
        });
  }

  ngOnInit() {
    console.log('loading login page');
  }

}
