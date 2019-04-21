(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_user_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/home/home.component */ "./src/app/views/user/home/home.component.ts");
/* harmony import */ var _views_garage_my_garage_my_garage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/garage/my-garage/my-garage.component */ "./src/app/views/garage/my-garage/my-garage.component.ts");
/* harmony import */ var _views_garage_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/garage/my-orders/my-orders.component */ "./src/app/views/garage/my-orders/my-orders.component.ts");
/* harmony import */ var _views_garage_my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/garage/my-cart/my-cart.component */ "./src/app/views/garage/my-cart/my-cart.component.ts");
/* harmony import */ var _views_store_store_instance_store_instance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/store/store-instance/store-instance.component */ "./src/app/views/store/store-instance/store-instance.component.ts");
/* harmony import */ var _views_store_part_part_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/store/part/part.component */ "./src/app/views/store/part/part.component.ts");
/* harmony import */ var _views_store_edit_parts_edit_parts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/store/edit-parts/edit-parts.component */ "./src/app/views/store/edit-parts/edit-parts.component.ts");
/* harmony import */ var _services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth-gaurd.service */ "./src/app/services/auth-gaurd.service.ts");














var appRoutes = [
    { path: '', component: _views_user_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'user/:uid', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'user/:uid/my-garage', component: _views_garage_my_garage_my_garage_component__WEBPACK_IMPORTED_MODULE_7__["MyGarageComponent"] },
    { path: 'user/:uid/my-garage/orders', component: _views_garage_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_8__["MyOrdersComponent"] },
    { path: 'user/:uid/my-garage/cart', component: _views_garage_my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_9__["MyCartComponent"] },
    { path: 'user/:uid/store/:storeid', component: _views_store_store_instance_store_instance_component__WEBPACK_IMPORTED_MODULE_10__["StoreInstanceComponent"] },
    { path: 'user/:uid/store/:storeid/part/:partid/listing', component: _views_store_part_part_component__WEBPACK_IMPORTED_MODULE_11__["PartComponent"] },
    { path: 'user/:uid/store/:storeid/part/:partid/edit', component: _views_store_edit_parts_edit_parts_component__WEBPACK_IMPORTED_MODULE_12__["EditPartsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<div style=\"text-align:center\">-->\n  <!--<h1>-->\n    <!--Welcome to my Web Development {{ title }}!-->\n  <!--</h1>-->\n  <!--<img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">-->\n<!--</div>-->\n<!--<h2>Here are some links to help you start: </h2>-->\n<!--<ul>-->\n  <!--<li>-->\n    <!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>-->\n  <!--</li>-->\n  <!--<li>-->\n    <!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>-->\n  <!--</li>-->\n  <!--<li>-->\n    <!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>-->\n  <!--</li>-->\n<!--</ul>-->\n\n\n\n<!--Stuff for the tab-->\n<!--<head>-->\n  <!--<title>SparePartGarage</title>-->\n  <!--&lt;!&ndash;meta tags for making this a mobile app&ndash;&gt;-->\n  <!--<meta charset=\"utf-8\">-->\n  <!--<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">-->\n  <!--<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">-->\n<!--</head>-->\n\n\n<!--<body>-->\n\n<!--<div class=\"jumbotron text-center jumboHeaderImg\">-->\n  <!--<h1>Spare Parts Garage</h1>-->\n  <!--<p>Find all the old part you cant get anywhere else!</p>-->\n<!--</div>-->\n\n<!--&lt;!&ndash;Inside a bootstrap container&ndash;&gt;-->\n<!--<div class=\"container\">-->\n  <!--&lt;!&ndash;All of this on one row&ndash;&gt;-->\n  <!--<div class=\"row\">-->\n\n    <!--<div class=\"col-sm-4 text-center\">-->\n      <!--<h3>-->\n        <!--<a routerLink=\"/login\" class=\"homePageColor\">-->\n          <!--Login-->\n        <!--</a>-->\n      <!--</h3>-->\n        <!--<p>Please login her with your credentials</p>-->\n    <!--</div>-->\n    <!--<div class=\"col-sm-4 text-center\">-->\n      <!--<h3>-->\n        <!--<a routerLink=\"/register\" class=\"homePageColor\">-->\n          <!--Register-->\n        <!--</a>-->\n      <!--</h3>-->\n      <!--<p>Please register here for new users</p>-->\n    <!--</div>-->\n    <!--<div class=\"col-sm-4 text-center\">-->\n      <!--<h3>-->\n        <!--<a routerLink=\"/profile\" class=\"homePageColor\">-->\n          <!--Profile-->\n        <!--</a>-->\n      <!--</h3>-->\n      <!--<p>Return to your profile page</p>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n<!--<div class=\"container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-sm-12 text-center homePageColor\">-->\n        <!--<hr/>-->\n        <!--<p>Join a large community of automotive enthusiasts that are buying and selling old and vintage car and motorcycle-->\n          <!--part. If you have been searching for that hard to find part, look no further. We have thousands of part listed-->\n          <!--by enthusiasts just like yourself who just might have that elusive part you have been desperately needing to finish-->\n          <!--you build.-->\n        <!--</p>-->\n      <!--</div>-->\n    <!--</div>-->\n\n<!--</div>-->\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'final-project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_user_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/home/home.component */ "./src/app/views/user/home/home.component.ts");
/* harmony import */ var _views_garage_my_garage_my_garage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/garage/my-garage/my-garage.component */ "./src/app/views/garage/my-garage/my-garage.component.ts");
/* harmony import */ var _views_garage_my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/garage/my-cart/my-cart.component */ "./src/app/views/garage/my-cart/my-cart.component.ts");
/* harmony import */ var _views_garage_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/garage/my-orders/my-orders.component */ "./src/app/views/garage/my-orders/my-orders.component.ts");
/* harmony import */ var _views_store_store_instance_store_instance_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/store/store-instance/store-instance.component */ "./src/app/views/store/store-instance/store-instance.component.ts");
/* harmony import */ var _views_store_part_part_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/store/part/part.component */ "./src/app/views/store/part/part.component.ts");
/* harmony import */ var _views_store_edit_parts_edit_parts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/store/edit-parts/edit-parts.component */ "./src/app/views/store/edit-parts/edit-parts.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth-gaurd.service */ "./src/app/services/auth-gaurd.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_garage_service_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/garage.service.client */ "./src/app/services/garage.service.client.ts");
/* harmony import */ var _services_store_service_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/store.service.client */ "./src/app/services/store.service.client.ts");
/* harmony import */ var _services_part_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/part.service.client */ "./src/app/services/part.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


















//client Services





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _views_user_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _views_garage_my_garage_my_garage_component__WEBPACK_IMPORTED_MODULE_9__["MyGarageComponent"],
                _views_garage_my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_10__["MyCartComponent"],
                _views_garage_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_11__["MyOrdersComponent"],
                _views_store_store_instance_store_instance_component__WEBPACK_IMPORTED_MODULE_12__["StoreInstanceComponent"],
                _views_store_part_part_component__WEBPACK_IMPORTED_MODULE_13__["PartComponent"],
                _views_store_edit_parts_edit_parts_component__WEBPACK_IMPORTED_MODULE_14__["EditPartsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_18__["UserService"], _services_store_service_client__WEBPACK_IMPORTED_MODULE_20__["StoreServiceClient"], _services_garage_service_client__WEBPACK_IMPORTED_MODULE_19__["GarageServiceClient"], _services_part_service_client__WEBPACK_IMPORTED_MODULE_21__["PartServiceClient"], _services_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _services_shared_service__WEBPACK_IMPORTED_MODULE_17__["SharedService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/part.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/part.model.client.ts ***!
  \*********************************************/
/*! exports provided: Part */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Part", function() { return Part; });
var Part = /** @class */ (function () {
    function Part(name, partId, description, price) {
        this.name = name;
        this.description = description;
        this.partId = partId;
        this.price = price;
    }
    return Part;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password, firstName, lastName, email) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());

//possibly add store id to this users model???
//possibly add a cart and orders as well????


/***/ }),

/***/ "./src/app/services/auth-gaurd.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-gaurd.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service.client */ "./src/app/services/user.service.client.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/garage.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/garage.service.client.ts ***!
  \***************************************************/
/*! exports provided: GarageServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GarageServiceClient", function() { return GarageServiceClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
// TODO: create/find/update/delete




var GarageServiceClient = /** @class */ (function () {
    function GarageServiceClient(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    GarageServiceClient.prototype.createGarage = function (userId, garage) {
        console.log('Creating store one client side');
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/garage', garage);
    };
    GarageServiceClient.prototype.findAllStoresForUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/garage');
    };
    GarageServiceClient.prototype.findWebsiteById = function (userId, garageId) {
        console.log('looking for storeById');
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/garage/' + garageId);
    };
    GarageServiceClient.prototype.updateStore = function (userId, garageId, garage) {
        console.log('front end store service updateStore Called');
        var url = this.baseUrl + '/api/user/' + userId + '/garage/' + garageId;
        // const body = websiteId;
        return this.http.put(url, garage);
    };
    GarageServiceClient.prototype.deleteWebsite = function (garageId) {
        console.log('Deleting store from the client side');
        return this.http.delete(this.baseUrl + '/api/garage/' + garageId);
    };
    GarageServiceClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], GarageServiceClient);
    return GarageServiceClient;
}());



/***/ }),

/***/ "./src/app/services/part.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/part.service.client.ts ***!
  \*************************************************/
/*! exports provided: PartServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartServiceClient", function() { return PartServiceClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var PartServiceClient = /** @class */ (function () {
    function PartServiceClient(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    //user/:uid/store/:storeid/part/:partid/listing
    //calls the user api to post the part to the users cart. Use the partId to retrieve the part info and
    // add it to the cart
    PartServiceClient.prototype.addPartToCart = function (userId, partId) {
        console.log('calling addPartToCart from client side');
        return this.http.post(this.baseUrl + '/api/user' + userId, partId);
    };
    PartServiceClient.prototype.createPart = function (storeId, part) {
        console.log('calling create part from the client side');
        return this.http.post(this.baseUrl + '/api/store/' + storeId, part);
    };
    PartServiceClient.prototype.findPartsByStoreId = function (storeId) {
        console.log('calling findPagesByStore from client');
        return this.http.get(this.baseUrl + '/api/store/' + storeId);
    };
    PartServiceClient.prototype.findPartById = function (partId, storeId) {
        console.log('calling findPageById on client side');
        return this.http.get(this.baseUrl + '/api/store/' + storeId + '/part/' + partId + '/listing');
    };
    //should route to part edit component
    PartServiceClient.prototype.updatePart = function (partId, storeId, part) {
        console.log('AT UPDATE PAGE ON CLIENT SIDE');
        return this.http.put(this.baseUrl + '/api/store/' + storeId + '/part/' + partId + '/edit', part);
    };
    PartServiceClient.prototype.deletePart = function (partId) {
        // for (let i = 0; i < this.pages.length; i++) {
        //     if (this.pages[i]._id === pageId) {
        //         const cut = +i;
        //         this.pages.splice(cut, 1);
        //     }
        // }
        return this.http.delete(this.baseUrl + '/api/userpart/' + partId);
    };
    PartServiceClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PartServiceClient);
    return PartServiceClient;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = '';
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/store.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/store.service.client.ts ***!
  \**************************************************/
/*! exports provided: StoreServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreServiceClient", function() { return StoreServiceClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
// TODO: create/find/update/delete




var StoreServiceClient = /** @class */ (function () {
    function StoreServiceClient(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    StoreServiceClient.prototype.createStore = function (userId, store) {
        console.log('Creating store one client side');
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/store', store);
    };
    StoreServiceClient.prototype.findAllStoresForUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/store');
    };
    StoreServiceClient.prototype.findAllPartsByStoreId = function (storeId) {
        return this.http.get(this.baseUrl + '/api/store/' + storeId);
    };
    StoreServiceClient.prototype.findWebsiteById = function (userId, storeId) {
        console.log('looking for storeById');
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/store/' + storeId);
    };
    StoreServiceClient.prototype.updateStore = function (userId, storeId, store) {
        console.log('front end store service updateStore Called');
        var url = this.baseUrl + '/api/user/' + userId + '/store/' + storeId;
        // const body = websiteId;
        return this.http.put(url, store);
    };
    StoreServiceClient.prototype.deleteWebsite = function (storeId) {
        console.log('Deleting store from the client side');
        return this.http.delete(this.baseUrl + '/api/store/' + storeId);
    };
    StoreServiceClient = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StoreServiceClient);
    return StoreServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







// import {RequestOptions} from '@angular/http';
// import { User } from '../models/user.model.client';
// let options;
// options = new RequestOptions();
//TODO: the map errors should go away after the server side is completed
var UserService = /** @class */ (function () {
    function UserService(http, router, sharedService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.options = {
            withCredentials: false
        };
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.APIUrl = '/api/user/';
    }
    UserService.prototype.login = function (username, password) {
        console.log('client side user service login() called');
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/login', body, this.options).map(function (res) {
            console.log('Inside login() response, res is ' + res);
            // const data = res.json();
            return res;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        return this.http.get(this.baseUrl + '/api/loggedIn', this.options)
            .map(function (res) {
            var user = JSON.stringify(res);
            console.log('Checking for logged in with: ' + user);
            if (user !== '0') {
                console.log(_this.sharedService);
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    /**
     * adds a user to the users array
     * @param user is the user we want to add to the array.
     */
    UserService.prototype.createUser = function (user) {
        console.log('The user we are sending with the post req: ' + JSON.stringify(user));
        // const userBody = {username: user.username, password: user.password};
        return this.http.post(this.baseUrl + this.APIUrl, user);
    };
    /**
     * find the user by their _id.
     * @param userId the _id we are looking for.
     */
    UserService.prototype.findUserById = function (userId) {
        console.log('findUserById looking for userId: ' + userId);
        return this.http.get(this.baseUrl + this.APIUrl + userId);
        // /api/user/:uid
    };
    /**
     * find the user by their username.
     * @param username the username we are looking for.
     */
    UserService.prototype.findUserByUsername = function (username) {
        console.log('Calling findUserByUsername from user client service');
        return this.http.get(this.baseUrl + '/api/user?username=' + username);
    };
    /**
     * find the user by their credentials.
     * @param username the username we are looking for.
     * @param password the password we are looking for.
     */
    // TODO: changed the url here if that causes problems look here
    UserService.prototype.findUserByCredentials = function (username, password) {
        console.log('made it to the client side findUserByCredential http request');
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
    };
    /**
     * update a user in the array of users.
     * @param userId the _id we are looking for.
     * @param user the user information we want to use as the update.
     */
    UserService.prototype.updateUserById = function (userId, user) {
        return this.http.put(this.baseUrl + this.APIUrl + userId, user);
    };
    /**
     * deletes a user from the array of users.
     * @param userId the _id we are using to find the user.
     */
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + this.APIUrl + userId);
    };
    UserService.prototype.register = function (username, password) {
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/register', body, this.options)
            .map(function (res) {
            // const data = res.json();
            return res;
        });
    };
    UserService.prototype.logout = function () {
        // this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            return res;
        });
    };
    UserService.prototype.findAllPartsInCart = function (userId) {
        console.log('find all parts in the cart client');
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/getParts');
    };
    UserService.prototype.orderThisPart = function (userId, part) {
        console.log('submit order for these parts client side');
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/orderParts', part);
    };
    UserService.prototype.removeFromCart = function (userId, partId) {
        console.log('remove this item from my cart, client');
        return this.http.delete(this.baseUrl + 'api/deleteItem/' + partId, userId);
    };
    UserService.prototype.findAllOrdersForUser = function (userId) {
        console.log('get all  the orders for this user: ' + userId);
        return this.http.get(this.baseUrl + 'api/user/' + userId + '/orders');
    };
    UserService.prototype.removeOrder = function (userId, partId) {
        console.log('remove order: ' + partId + ' for user: ' + userId);
        return this.http.delete(this.baseUrl + 'api/user/' + userId + '/order/' + partId);
    };
    UserService.prototype.findAllFavStoresForUser = function (userId) {
        console.log('finding all favorite stores for user: ' + userId);
        return this.http.get(this.baseUrl + '/api/stores/' + userId);
    };
    UserService.prototype.findAllListingsForUser = function (userId) {
        console.log('finding all listings for this user: ' + userId);
        return this.http.get(this.baseUrl + '/api/listings/' + userId);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/views/garage/my-cart/my-cart.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/garage/my-cart/my-cart.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2dhcmFnZS9teS1jYXJ0L215LWNhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/garage/my-cart/my-cart.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/garage/my-cart/my-cart.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--MY CART NAV: back button / page title-->\n<nav class=\"navbar cl-grey-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <a (click)=\"backOnePage()\" class=\"navbar-link \">\n      <span class=\"cl-text-white fas fa-chevron-left\"></span>\n    </a>\n\n    <span class=\"cl-text-white navbar-brand mb-0 h5 mr-auto cl-header-padding\">\n      Cart\n    </span>\n  </div>\n</nav>\n\n<!--List of part in my cart-->\n<!--TODO:change so that each part is ordered individually instead of all of them-->\n<main>\n  <div class=\"container above-below-space\">\n    <ul class=\"list-group list-borderless\">\n      <li class=\"list-group-item list-borderless\" *ngFor=\"let part of parts\">\n        <!--Route to the part listing-->\n        <a routerLink=\"/user/{{userId}}/part/{{part._id}}/listing\">{{part.name}}</a>\n        <!--Remove the part from your cart-->\n        <a (click)=\"removeFromCart(part._id, part.name)\"><i class=\"far fa-minus-square float-right\"></i></a>\n      </li>\n    </ul>\n  </div>\n</main>\n\n<div class=\"container\">\n  <a class=\"btn save-btn-color btn-block\" (click)=\"orderTheseParts()\">Order!</a>\n</div>\n\n\n<!--NAVBAR: profile-->\n<!--TODO: maybe make a function to route back to the users profile page-->\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <a class=\"align-right fas fa-user fa-inverse fontawesome_icon cl-icon-padding\" [routerLink]=\"['../../' + userId]\">\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/garage/my-cart/my-cart.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/garage/my-cart/my-cart.component.ts ***!
  \***********************************************************/
/*! exports provided: MyCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCartComponent", function() { return MyCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");




var MyCartComponent = /** @class */ (function () {
    function MyCartComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    MyCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('loading the parts for this users cart');
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            console.log('at my-cart, uid: ' + _this.userId);
        });
        this.userService.findAllPartsInCart(this.userId)
            .subscribe(function (data) {
            _this.parts = data;
            console.log('website list length: ' + _this.parts.length);
            console.log('website number 1: ' + JSON.stringify(_this.parts[0]));
        });
    };
    //back to my-garage
    MyCartComponent.prototype.backOnePage = function () {
        this.router.navigate(['/user', this.userId, 'my-garage']);
    };
    MyCartComponent.prototype.orderThisPart = function () {
        var _this = this;
        this.userService.orderThisPart(this.userId, this.parts)
            .subscribe(function () { return _this.router.navigate(['/user', _this.userId, 'my-garage', 'orders']); });
    };
    //delete this from the cart and reload the cart page.
    MyCartComponent.prototype.removeFromCart = function (partId) {
        var _this = this;
        this.userService.removeFromCart(this.userId, partId)
            .subscribe(function () { return _this.router.navigate(['/user', _this.userId, 'my-garage', 'cart']); });
    };
    MyCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-cart',
            template: __webpack_require__(/*! ./my-cart.component.html */ "./src/app/views/garage/my-cart/my-cart.component.html"),
            styles: [__webpack_require__(/*! ./my-cart.component.css */ "./src/app/views/garage/my-cart/my-cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MyCartComponent);
    return MyCartComponent;
}());



/***/ }),

/***/ "./src/app/views/garage/my-garage/my-garage.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/garage/my-garage/my-garage.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2dhcmFnZS9teS1nYXJhZ2UvbXktZ2FyYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/garage/my-garage/my-garage.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/garage/my-garage/my-garage.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n<!--NAVBAR: ALL STORES/ PAGE HEADING/ CART/ ORDERS-->\n<nav class=\"navbar cl-grey-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <a (click)=\"toAllStores()\" class=\"navbar-link\">\n      <span class=\"cl-text-white\">All Stores</span>\n    </a>\n\n    <span class=\"cl-text-white navbar-brand mb-0 h5 mr-auto cl-header-padding\">\n      My Garage\n    </span>\n\n    <div class=\"float-right\">\n      <a (click)=\"getCartItems()\" class=\"navbar-link cl-text-white cl-cart-padding\">\n        <span class=\"cl-text-white fas fa-shopping-cart\"></span>\n      </a>\n\n      <a (click)=\"getActiveOrders()\" class=\"navbar-link\">\n        <span class=\"cl-text-white\">Orders</span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<!--MY FAVORITE STORES / MY LISTINGS-->\n<main>\n  <div class=\"container above-below-space\">\n    <h3 class=\"favorite-stores\">Favorite Stores</h3>\n    <ul class=\"list-group list-borderless\">\n      <li class=\"list-group-item list-borderless\" *ngFor=\"let store of stores\">\n        <!--route to this stores listings page-->\n        <a routerLink=\"/user/{{userId}}/store/{{storeNum}}\">{{store.name}}</a>\n        <!--remove store from your favorites-->\n        <a (click)=\"removeStore()\"><i class=\"far fa-minus-square float-right part-listings-bottom-margin\"></i></a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"container above-below-space\">\n    <div class=\"row\">\n      <h3 class=\"favorite-stores my-listings-padding\">My Listings</h3>\n      <a (click)=\"addNewListing()\" class=\"cl-text-white\">\n        <span class=\"listing-plus-padding cl-text-white fas fa-plus\"></span>\n      </a>\n    </div>\n    <ul class=\"list-group list-borderless\">\n      <li class=\"list-group-item list-borderless\" *ngFor=\"let part of listings\">\n        <!--View your own part listing-->\n        <a routerLink=\"/user/{{userId}}/part/{{part._id}}/listing\">{{part.name}}</a>\n        <!--remove your listing-->\n        <a routerLink=\"/user/{{userId}}/part/{{part._id}}\"><i class=\"fas fa-cog fontawsome_icon float-right part-listings-bottom-margin\"></i></a>\n      </li>\n    </ul>\n  </div>\n</main>\n\n<!--NAVBAR: profile-->\n<!--TODO: maybe make a function to route back to the users profile page-->\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <a class=\"align-right fas fa-user fa-inverse fontawesome_icon cl-icon-padding\" [routerLink]=\"['../../' + userId]\">\n    </a>\n  </div>\n</nav>\n\n</body>\n"

/***/ }),

/***/ "./src/app/views/garage/my-garage/my-garage.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/garage/my-garage/my-garage.component.ts ***!
  \***************************************************************/
/*! exports provided: MyGarageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGarageComponent", function() { return MyGarageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_part_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/part.service.client */ "./src/app/services/part.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");





var MyGarageComponent = /** @class */ (function () {
    //Find all the parts for a user
    //fins all the favorite stores for a user
    function MyGarageComponent(partService, userService, activatedRoute, router) {
        this.partService = partService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    MyGarageComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('loading the favorite stores list');
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            console.log('listing favorite stores for uid: ' + _this.userId);
        });
        this.userService.findAllFavStoresForUser(this.userId)
            .subscribe(function (data) {
            _this.stores = data;
            console.log('store list length: ' + _this.stores.length);
        });
        this.userService.findAllListingsForUser(this.userId)
            .subscribe(function (data) {
            _this.listings = data;
            console.log('listings length: ' + _this.listings.length);
        });
    };
    //back to the user profile
    MyGarageComponent.prototype.backOnePage = function () {
        this.router.navigate(['/user', this.userId]);
    };
    //TODO: somehow get the store id and the partId from the garage page???
    MyGarageComponent.prototype.goToEditPartListing = function (partId, storeId) {
        this.router.navigate(['/user', this.userId, 'store', storeId, 'part', partId, 'edit']);
    };
    MyGarageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-garage',
            template: __webpack_require__(/*! ./my-garage.component.html */ "./src/app/views/garage/my-garage/my-garage.component.html"),
            styles: [__webpack_require__(/*! ./my-garage.component.css */ "./src/app/views/garage/my-garage/my-garage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_part_service_client__WEBPACK_IMPORTED_MODULE_2__["PartServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MyGarageComponent);
    return MyGarageComponent;
}());



/***/ }),

/***/ "./src/app/views/garage/my-orders/my-orders.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/garage/my-orders/my-orders.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2dhcmFnZS9teS1vcmRlcnMvbXktb3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/garage/my-orders/my-orders.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/garage/my-orders/my-orders.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--MY ORDERS NAV: back button / page title-->\n<nav class=\"navbar cl-grey-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <a (click)=\"backOnePage()\" class=\"navbar-link \">\n      <span class=\"cl-text-white fas fa-chevron-left\"></span>\n    </a>\n\n    <span class=\"cl-text-white navbar-brand mb-0 h5 mr-auto cl-header-padding\">\n      Orders\n    </span>\n  </div>\n</nav>\n\n\n<!--List of my orders-->\n\n<main>\n  <div class=\"container above-below-space\">\n    <ul class=\"list-group list-borderless\">\n      <li class=\"list-group-item list-borderless\" *ngFor=\"let part of orders\">\n        <!--Route to the part listing-->\n        <a routerLink=\"/user/{{userId}}/part/{{part._id}}/listing\">{{part.name}}</a>\n        <!--Remove the part from your cart-->\n        <a (click)=\"removeFromOrders(part._id)\"><i class=\"far fa-minus-square float-right\"></i></a>\n      </li>\n    </ul>\n  </div>\n</main>\n\n\n<!--NAVBAR: profile-->\n<!--TODO: maybe make a function to route back to the users profile page-->\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <a class=\"align-right fas fa-user fa-inverse fontawesome_icon cl-icon-padding\" [routerLink]=\"['../../' + userId]\">\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/garage/my-orders/my-orders.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/garage/my-orders/my-orders.component.ts ***!
  \***************************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    // grab all of the orders aka parts that are currently in the orders array for this user
    MyOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('loading the parts for this users orders list');
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            console.log('at my-cart, uid: ' + _this.userId);
        });
        this.userService.findAllOrdersForUser(this.userId)
            .subscribe(function (data) {
            _this.orders = data;
            console.log('order list length: ' + _this.orders.length);
            console.log('website number 1: ' + JSON.stringify(_this.orders[0]));
        });
    };
    MyOrdersComponent.prototype.removeFromOrders = function (partId) {
        var _this = this;
        console.log('deleting this part from the orders list: ' + partId);
        this.userService.removeOrder(this.userId, partId)
            .subscribe(function () { return _this.router.navigate(['/user', _this.userId, 'my-garage', 'orders']); });
    };
    MyOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! ./my-orders.component.html */ "./src/app/views/garage/my-orders/my-orders.component.html"),
            styles: [__webpack_require__(/*! ./my-orders.component.css */ "./src/app/views/garage/my-orders/my-orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/views/store/edit-parts/edit-parts.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/store/edit-parts/edit-parts.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0b3JlL2VkaXQtcGFydHMvZWRpdC1wYXJ0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/store/edit-parts/edit-parts.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/store/edit-parts/edit-parts.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n<!--top nav-->\n<nav class=\"navbar cl-grey-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <a (click)=\"backOnePage()\" class=\"navbar-link \">\n      <span class=\"cl-text-white fas fa-chevron-left\"></span>\n    </a>\n    <a class=\"cl-text-white navbar-brand mb-0 h5 cl-header-padding\" href=\"#\">\n      Edit Part\n    </a>\n  </div>\n</nav>\n\n\n<!--form body-->\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"partName\">Part Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"partName\"\n             placeholder=\"Part Name\"\n             [ngModel]=\"getOldPartName()\"\n             ngModel\n             #partName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"partDescription\">Part Description</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             id=\"partDescription\"\n             placeholder=\"Part Description\"\n             [ngModel]=\"getOldPartDescription()\"\n             ngModel\n             #partDescription=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"partPrice\">Part Price</label>\n      <input type=\"number\"\n             class=\"form-control\"\n             id=\"partPrice\"\n             placeholder=\"Price\"\n             [ngModel]=\"getOldPartPrice()\"\n             ngModel\n             #partPrice=\"ngModel\">\n    </div>\n\n    <!--upload/change image-->\n    <!--<div class=\"form-group\">-->\n    <!--<label for=\"part-Description\">Part Description</label>-->\n    <!--<input type=\"text\"-->\n    <!--class=\"form-control\"-->\n    <!--id=\"part-Description\"-->\n    <!--placeholder=\"Page Title\">-->\n    <!--</div>-->\n  </form>\n  <a class=\"btn save-btn-color btn-block\" (click)=\"updatePart()\">Save</a>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deletePart()\">Delete</a>\n</div>\n\n\n<!--bottom nav-->\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <a class=\"align-right fas fa-user fa-inverse fontawesome_icon cl-icon-padding\" href=\"#\">\n    </a>\n  </div>\n</nav>\n\n\n</body>\n"

/***/ }),

/***/ "./src/app/views/store/edit-parts/edit-parts.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/store/edit-parts/edit-parts.component.ts ***!
  \****************************************************************/
/*! exports provided: EditPartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPartsComponent", function() { return EditPartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_part_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/part.model.client */ "./src/app/models/part.model.client.ts");
/* harmony import */ var _services_part_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/part.service.client */ "./src/app/services/part.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EditPartsComponent = /** @class */ (function () {
    function EditPartsComponent(partService, activatedRoute, router) {
        this.partService = partService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.oldPart = new _models_part_model_client__WEBPACK_IMPORTED_MODULE_3__["Part"]('', '', '', '');
    }
    EditPartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('edit part ngOnInit');
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.partId = params['partId'];
            _this.storeId = params['storeId'];
        });
        this.partService.findPartById(this.partId, this.storeId)
            .subscribe(function (part) { return _this.oldPart = part; });
        console.log('page found on the server: ' + JSON.stringify(this.oldPart));
    };
    EditPartsComponent.prototype.updatePart = function () {
        var _this = this;
        var newPage = new _models_part_model_client__WEBPACK_IMPORTED_MODULE_3__["Part"](this.partsForm.value.partName, this.partId, this.partsForm.value.partDescription, this.partsForm.value.partPrice);
        console.log('new name and description of part: ' + this.partsForm.value.partName + ' ' + this.partsForm.value.partDescription);
        this.partService.updatePart(this.partId, this.storeId, newPage)
            .subscribe(function () { return _this.backOnePage(); });
    };
    EditPartsComponent.prototype.deletePart = function () {
        var _this = this;
        this.partService.deletePart(this.partId)
            .subscribe(function () { return _this.backOnePage(); });
    };
    EditPartsComponent.prototype.backOnePage = function () {
        this.router.navigate(['/user', this.uid, 'my-garage']);
    };
    EditPartsComponent.prototype.getOldPartName = function () {
        console.log('calling get old part name');
        return this.oldPart.name;
    };
    EditPartsComponent.prototype.getOldPartDescription = function () {
        console.log('calling get old part description');
        return this.oldPart.description;
    };
    EditPartsComponent.prototype.getOldPartPrice = function () {
        console.log('calling get old part price');
        return this.oldPart.price;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], EditPartsComponent.prototype, "partsForm", void 0);
    EditPartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-parts',
            template: __webpack_require__(/*! ./edit-parts.component.html */ "./src/app/views/store/edit-parts/edit-parts.component.html"),
            styles: [__webpack_require__(/*! ./edit-parts.component.css */ "./src/app/views/store/edit-parts/edit-parts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_part_service_client__WEBPACK_IMPORTED_MODULE_4__["PartServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EditPartsComponent);
    return EditPartsComponent;
}());



/***/ }),

/***/ "./src/app/views/store/part/part.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/store/part/part.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0b3JlL3BhcnQvcGFydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/store/part/part.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/store/part/part.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar cl-grey-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <a (click)=\"backOnePage()\" class=\"navbar-link \">\n      <span class=\"cl-text-white fas fa-chevron-left\"></span>\n    </a>\n\n    <!--TODO:make it so that the header 'part' loads the name of the listing-->\n    <span class=\"cl-text-white navbar-brand mb-0 h5 mr-auto cl-header-padding text-center\">\n      Part\n    </span>\n  </div>\n</nav>\n\n\n<!--In the ngOnInit for this page, use a part number to call the userService to find and return the part-->\n\n<!--Part Description-->\n\n\n<!--Part Price-->\n\n<!--Buy button-->\n\n\n<!--Insert an image of the part here-->\n\n\n<!--contains the part image/description/price-->\n<div class=\"container\">\n  <div class=\"row\">\n    <h3>H3 header</h3>\n  </div>\n  <div class=\"block\">\n    <div class=\"row\">\n      <div class=\"span4\">\n        <img class=\"imageSize img-left\" src=\"https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg\">\n        <div class=\"content-heading\"><h3>Description</h3></div>\n        <!--TODO: ngOnInit retrieve the part information from a service-->\n        <p>{{part.description}}</p>\n        <p>{{part.price}}</p>\n        <button onclick=\"addToCart()\">Add To Cart</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/views/store/part/part.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/store/part/part.component.ts ***!
  \****************************************************/
/*! exports provided: PartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartComponent", function() { return PartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_part_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/part.service.client */ "./src/app/services/part.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PartComponent = /** @class */ (function () {
    function PartComponent(partService, activatedRoute, router) {
        this.partService = partService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.sid = params['storeid'];
            _this.pid = params['partid'];
        });
    };
    PartComponent.prototype.addToCart = function () {
        console.log('adding part: ' + this.pid + ' to user: ' + this.uid + " cart");
        //need the part to add. How do i get the part???
        this.partService.addPartToCart(this.uid, this.pid);
    };
    PartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parts',
            template: __webpack_require__(/*! ./part.component.html */ "./src/app/views/store/part/part.component.html"),
            styles: [__webpack_require__(/*! ./part.component.css */ "./src/app/views/store/part/part.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_part_service_client__WEBPACK_IMPORTED_MODULE_2__["PartServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PartComponent);
    return PartComponent;
}());



/***/ }),

/***/ "./src/app/views/store/store-instance/store-instance.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/store/store-instance/store-instance.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0b3JlL3N0b3JlLWluc3RhbmNlL3N0b3JlLWluc3RhbmNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/store/store-instance/store-instance.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/store/store-instance/store-instance.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "=\n\n<!--NAV BAR-->\n<nav class=\"navbar cl-grey-navbar fixed-top\">\n  <div class=\"container-fluid\">\n    <a (click)=\"backOnePage()\" class=\"navbar-link \">\n      <span class=\"cl-text-white fas fa-chevron-left\"></span>\n    </a>\n    <a class=\"cl-text-white navbar-brand mb-0 h5 cl-header-padding\" href=\"#\">\n      Store Name\n    </a>\n  </div>\n</nav>\n\n<!--LISTINGS-->\n\n<div class=\"container-fluid\">\n  <div class=\"table\">\n    <ul class=\"list-group cl-list-group-borderless text-align:left\">\n      <li class=\"list-group-item cl-list-item-borderless\" *ngFor=\"let part of parts\">\n        <a class=\"cl-listing-color\" routerLink=\"/user/{{userId}}/store/{{storeId}}/part/{{part._id}}/listing\">{{part.name}}</a>\n        <p class=\"cl-listing-color float-right part-listings-bottom-margin\">{{part.price}}</p>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <a class=\"align-right fas fa-user fa-inverse fontawesome_icon cl-icon-padding\" href=\"#\">\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/store/store-instance/store-instance.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/store/store-instance/store-instance.component.ts ***!
  \************************************************************************/
/*! exports provided: StoreInstanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreInstanceComponent", function() { return StoreInstanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/store.service.client */ "./src/app/services/store.service.client.ts");




var StoreInstanceComponent = /** @class */ (function () {
    function StoreInstanceComponent(storeService, activatedRoute, router) {
        this.storeService = storeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    StoreInstanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('store instance ngOnInit');
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.partId = params['partId'];
            _this.storeId = params['storeId'];
        });
        this.storeService.findAllPartsByStoreId(this.storeId)
            .subscribe(function (parts) { return _this.parts = parts; });
    };
    StoreInstanceComponent.prototype.backOnePage = function () {
        this.router.navigate(['/user', this.userId, 'my-garage']);
    };
    StoreInstanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store-instance',
            template: __webpack_require__(/*! ./store-instance.component.html */ "./src/app/views/store/store-instance/store-instance.component.html"),
            styles: [__webpack_require__(/*! ./store-instance.component.css */ "./src/app/views/store/store-instance/store-instance.component.css")]
        })
        //backOnePage
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service_client__WEBPACK_IMPORTED_MODULE_3__["StoreServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StoreInstanceComponent);
    return StoreInstanceComponent;
}());



/***/ }),

/***/ "./src/app/views/user/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/views/user/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/views/user/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body>\n\n<div class=\"jumbotron text-center jumboHeaderImg\">\n  <h1>Spare Parts Garage</h1>\n  <p>Find all the old parts you cant get anywhere else!</p>\n</div>\n\n<!--Inside a bootstrap container-->\n<div class=\"container\">\n  <!--All of this on one row-->\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 text-center\">\n      <h3>\n        <a routerLink=\"/login\" class=\"homePageColor\">\n          Login\n        </a>\n      </h3>\n      <p>Please login her with your credentials</p>\n    </div>\n    <div class=\"col-sm-4 text-center\">\n      <h3>\n        <a routerLink=\"/register\" class=\"homePageColor\">\n          Register\n        </a>\n      </h3>\n      <p>Please register here for new users</p>\n    </div>\n    <div class=\"col-sm-4 text-center\">\n      <h3>\n        <a routerLink=\"/profile\" class=\"homePageColor\">\n          Profile\n        </a>\n      </h3>\n      <p>Return to your profile page</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 text-center homePageColor\">\n      <hr/>\n      <p>Join a large community of automotive enthusiasts that are buying and selling old and vintage car and motorcycle\n        parts. If you have been searching for that hard to find part, look no further. We have thousands of parts listed\n        by enthusiasts just like yourself who just might have that elusive part you have been desperately needing to finish\n        you build.\n      </p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/user/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/user/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/views/user/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n  <div class=\"container\">\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n\n\n    <div class=\"text-center\">\n      <h1>Login</h1>\n    </div>\n    <!--// TODO: put this back into the form-->\n    <!--#f=\"ngForm\"-->\n\n    <form (ngSubmit)=\"login()\" style=\"background-color: \">\n      <div class=\"form-group\">\n        <input placeholder=\"username\"\n               name=\"username\"\n               type=\"text\"\n               class=\"form-control\"\n               ngModel\n               required\n               #username=\"ngModel\"/>\n        <!-- TODO: put this back into the form-->\n        <!--#username=\"ngModel\"-->\n\n\n      </div> <!-- form-group// -->\n      <div class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n        Please enter a username\n      </div>\n\n      <div class=\"form-group\">\n        <input placeholder=\"password\"\n               name=\"password\"\n               type=\"password\"\n               class=\"form-control\"\n               ngModel\n               required\n               #password=\"ngModel/>\n\n        <!-- TODO: put this back into the form-->\n        <!--#password=\"ngModel\">-->\n\n\n      </div> <!-- form-group// -->\n\n      <div class=\"form-group\">\n        <button [disabled]=\"!f.valid\"\n                class=\"btn btn-primary btn-block\"\n                type=\"submit\">Login\n        </button>\n      </div>\n      <!--<div class=\"form-group\">-->\n      <!--<a href=\"/facebook/login\" class=\"btn btn-primary btn-block\">-->\n      <!--<span class=\"fa fa-facebook\"></span>-->\n      <!--Facebook-->\n      <!--</a>-->\n      <!--</div>-->\n\n      <div class=\"form-group\">\n        <a class=\"btn btn-success btn-block\" routerLink=\"/register\" role=\"button\">Register</a>\n      </div>\n    </form>\n\n  </div>\n\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");






//TODO: create login function and update constructor
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid username or password';
        this.errorFlag = false;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        console.log('username: ' + this.username);
        console.log('password: ' + this.password);
        this.userService.login(this.username, this.password)
            .subscribe(function (user) {
            _this.sharedService.user = user;
            _this.router.navigate(['/user', user._id]);
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        console.log('loading login page');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--Top navbar with \"profile\"-->\n<nav>\n  <div class=\"container-fluid text-center\">\n    <h3 class=\"pageName\">\n      Profile\n    </h3>\n  </div>\n</nav>\n\n\n<!--Body-->\n\n<div class=\"container-fluid\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input\n        type=\"text\"\n        name=\"username\"\n        class=\"form-control\"\n        id=\"username\"\n        ngModel\n        [ngModel]=\"user.username\"\n        #username=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input\n        name=\"email\"\n        type=\"email\"\n        class=\"form-control\"\n        id=\"email\"\n        ngModel\n        [ngModel]=\"user.email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"first name\">First name</label>\n      <input\n        name=\"firstName\"\n        type=\"text\"\n        class=\"form-control\"\n        id=\"first name\"\n        ngModel\n        [ngModel]=\"user.firstName\"\n        #firstName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"last name\">Last name</label>\n      <input\n        name=\"lastName\"\n        type=\"text\"\n        class=\"form-control\"\n        id=\"last name\"\n        ngModel\n        [ngModel]=\"user.lastName\"\n        #lastName=\"ngModel\">\n    </div>\n  </form>\n\n  <!--BUTTONS: save/saveAndGarage/logout-->\n  <a class=\"btn btn-secondary btn-block\"\n     (click)=\"saveUserInfo()\">Save</a>\n  <a class=\"btn btn-primary btn-block\"\n     (click)=\"saveInfoAndGetGarageInfo()\">My Garage</a>\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"logout()\">Logout</a>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ProfileComponent = /** @class */ (function () {
    //TODO: create button functions and constructor and ngOnInit()
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '');
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log('profile component: ' + params);
            _this.uid = params['uid'];
            console.log('userId: ' + _this.uid);
        });
        this.userService.findUserById(this.uid)
            .subscribe(function (user) { return _this.user = user; });
    };
    //MIGHT NEED TO FIX TO GET GARAGE INFO INSTEAD OF WEBSITE INFO
    ProfileComponent.prototype.saveInfoAndGetGarageInfo = function () {
        var _this = this;
        var username = this.profileForm.value.username;
        var firstName = this.profileForm.value.firstName;
        var lastName = this.profileForm.value.lastName;
        var email = this.profileForm.value.email;
        var newUser = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](username, this.user.password, firstName, lastName, email);
        console.log('newUser info: ' + JSON.stringify(newUser));
        this.userService.updateUserById(this.user._id, newUser)
            .subscribe(function () { return _this.router.navigate(['/user', _this.uid, 'garage']); });
    };
    ProfileComponent.prototype.saveUserInfo = function () {
        var _this = this;
        var username = this.profileForm.value.username;
        var firstName = this.profileForm.value.firstName;
        var lastName = this.profileForm.value.lastName;
        var email = this.profileForm.value.email;
        var newUser = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"](username, this.user.password, firstName, lastName, email);
        console.log('newUser info: ' + JSON.stringify(newUser));
        this.userService.updateUserById(this.user._id, newUser)
            .subscribe(function () { return _this.router.navigate(['/user', _this.uid]); });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function () { return _this.router.navigate(['/login']); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--TODO: Create methods for create user login and cancel-->\n\n<div class=\"container\">\n\n  <!--Heading/Page name-->\n  <h1 class=\"text-center pageName\">Register</h1>\n\n  <!--Some error messaging-->\n  <div *ngIf=\"userErrorFlag\" class=\"alert alert-danger\">\n    {{userErrorMsg}}\n  </div>\n\n  <!--FORM for REGISTRATION-->\n  <form (ngSubmit)=\"createUser()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <!--USERNAME-->\n      <input type=\"text\"\n             class=\"form-control\"\n             placeholder=\"username\"\n             name=\"username\"\n             id=\"username\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n    </div>\n\n    <!--PASSWORD-->\n    <div class=\"form-group\">\n      <input type=\"password\"\n             class=\"form-control\"\n             placeholder=\"Password\"\n             name=\"password\"\n             id=\"password\"\n             ngModel\n             required\n             #password=\"ngModel\"/>\n    </div>\n\n    <!--VERIFY PASSWORD-->\n    <div class=\"form-group\">\n      <input type=\"password\"\n             class=\"form-control\"\n             placeholder=\"Verify Password\"\n             id=\"vpassword\"\n             name=\"vpassword\"\n             ngModel\n             required\n             #v_password=\"ngModel\"/>\n    </div>\n\n    <!--PASSWORD ERROR MESSAGE-->\n    <div *ngIf=\"pwdErrorFlag\" class=\"alert alert-danger\">\n      {{pwdErrorMsg}}\n    </div>\n\n    <!--SUBMIT BUTTON-->\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Register\n    </button>\n\n    <!--CANCEL BUTTON--BACK TO LOGIN PAGE-->\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            routerLink=\"/login\">Cancel\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/user.model.client */ "./src/app/models/user.model.client.ts");






var RegisterComponent = /** @class */ (function () {
    //TODO: fill in constructor and add cancel and submit functions
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.createUser = function () {
        var _this = this;
        var username = this.registerForm.value.username;
        var password = this.registerForm.value.password;
        var user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__["User"](username, password, '', '', '');
        // this.userService.createUser(user)
        //   .subscribe(
        //     (user) => this.router.navigate(['/user', user._id]));
        this.userService.register(username, password)
            .subscribe(function (user) {
            // console.log(data);
            _this.router.navigate(['/user', user._id]);
            return;
        }, function (error) {
            // this.error = error._body;
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3200'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/austinvanderwel/Documents/webDevFinalProject/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map