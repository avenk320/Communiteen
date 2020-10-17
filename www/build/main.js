webpackJsonp([0],{

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/akshaya/Downloads/APCS/Teen Connect/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n<img src="assets/img/fctfrdvNSYab5J5T2Kv0_connect.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <h1 id="about-heading4" style="color:#000000;text-align:center;">\n    Communiteen\n  </h1>\n  <div id="about-markdown15" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;font-size:10px;">\n      We are here to change the worlds mental health during pandemic times\n    </p>\n  </div> \n</ion-content>'/*ion-inline-end:"/Users/akshaya/Downloads/APCS/Teen Connect/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teen_connect_teen_connect__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recommendations_recommendations__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_details_add_details__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_details2_add_details2__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WelcomePage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.goToTeenConnect = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__teen_connect_teen_connect__["a" /* TeenConnectPage */]);
    };
    WelcomePage.prototype.goToRecommendations = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recommendations_recommendations__["a" /* RecommendationsPage */]);
    };
    WelcomePage.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage.prototype.goToAddDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__add_details_add_details__["a" /* AddDetailsPage */]);
    };
    WelcomePage.prototype.goToAddDetails2 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__add_details2_add_details2__["a" /* AddDetails2Page */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/akshaya/Downloads/APCS/Teen Connect/src/pages/welcome/welcome.html"*/'<ion-content padding id="page4">\n  <img src="assets/img/X6SBfvHQSQelQJcC29hL_connect.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <h1 id="welcome-heading2" style="color:#250A0A;font-weight:400;text-align:center;">\n    Communiteen\n  </h1>\n  <div id="welcome-markdown4" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#6E6C6C;">\n      Welcome !\n    </p>\n  </div>\n  <button id="welcome-button2" ion-button color="calm" block on-click="goToLogin()">\n    Login\n  </button>\n  <button id="welcome-button3" ion-button clear color="positive" block style="font-weight:300;color:#000000;" on-click="goToSignup()"></button>\n</ion-content>'/*ion-inline-end:"/Users/akshaya/Downloads/APCS/Teen Connect/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_teen_connect_teen_connect__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_details_add_details__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_details2_add_details2__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_recommendations_recommendations__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_teen_connect_teen_connect__["a" /* TeenConnectPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_details_add_details__["a" /* AddDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_details2_add_details2__["a" /* AddDetails2Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_recommendations_recommendations__["a" /* RecommendationsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_teen_connect_teen_connect__["a" /* TeenConnectPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_details_add_details__["a" /* AddDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_details2_add_details2__["a" /* AddDetails2Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_recommendations_recommendations__["a" /* RecommendationsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecommendationsPage = /** @class */ (function () {
    function RecommendationsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RecommendationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recommendations',template:/*ion-inline-start:"/Users/akshaya/Downloads/APCS/Teen Connect/src/pages/recommendations/recommendations.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Recommendations\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n  <div id="recommendations-markdown11" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Please find some of the suggestions\n    </p>\n  </div>\n  <ion-list id="recommendations-list8">\n    <ion-item color="none" id="recommendations-list-item11">\n      <ion-thumbnail item-left>\n        <img src="assets/img/I4HD186SeadUkbIYVj4Y_Reynolds.jpg" />\n      </ion-thumbnail>\n      <h2>\n        Advice from Dr Renolds\n      </h2>\n    </ion-item>\n    <ion-item color="none" id="recommendations-list-item13">\n      <ion-thumbnail item-left>\n        <img src="assets/img/VoLjtQVOTJCK3zRoslTS_sadie.jpg" />\n      </ion-thumbnail>\n      <h2>\n        Connect sadie elington\n      </h2>\n    </ion-item>\n    <ion-item color="none" id="recommendations-list-item14">\n      <ion-thumbnail item-left>\n        <img src="assets/img/aPQ0GrIcStKy3IJY2D3i_youtube_video.jpg" />\n      </ion-thumbnail>\n      <h2>\n        Funny videos\n      </h2>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/akshaya/Downloads/APCS/Teen Connect/src/pages/recommendations/recommendations.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], RecommendationsPage);
    return RecommendationsPage;
}());

//# sourceMappingURL=recommendations.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_teen_connect_teen_connect__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_recommendations_recommendations__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_details_add_details__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_details2_add_details2__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToTeenConnect = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_teen_connect_teen_connect__["a" /* TeenConnectPage */]);
    };
    MyApp.prototype.goToRecommendations = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_recommendations_recommendations__["a" /* RecommendationsPage */]);
    };
    MyApp.prototype.goToAbout = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */]);
    };
    MyApp.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */]);
    };
    MyApp.prototype.goToAddDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_add_details_add_details__["a" /* AddDetailsPage */]);
    };
    MyApp.prototype.goToAddDetails2 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_add_details2_add_details2__["a" /* AddDetails2Page */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/akshaya/Downloads/APCS/Teen Connect/src/app/app.html"*/'<ion-menu persistent="true" [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Communiteen\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <ion-list id="teenConnect2-list1">\n      <ion-item color="none" menuClose="" on-click="goToTeenConnect()" id="teenConnect2-list-item1">\n        Home\n      </ion-item>\n      <ion-item color="none" href-inappbrowser="page2" id="teenConnect2-list-item2">\n        Recommendations\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToAbout()" id="teenConnect2-list-item3">\n        About us\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToLogin()" id="teenConnect2-list-item15">\n        Log Out\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/akshaya/Downloads/APCS/Teen Connect/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeenConnectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recommendations_recommendations__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeenConnectPage = /** @class */ (function () {
    function TeenConnectPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TeenConnectPage.prototype.goToRecommendations = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recommendations_recommendations__["a" /* RecommendationsPage */]);
    };
    TeenConnectPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    TeenConnectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teen-connect',template:/*ion-inline-start:"/Users/akshaya/Downloads/APCS/Teen Connect/src/pages/teen-connect/teen-connect.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <button ion-button icon-only menuToggle start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Communiteen\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <div id="teenConnect-markdown9" class="show-list-numbers-and-dots">\n  </div>\n  <form id="teenConnect-form12" style="margin-bottom: 20px">\n    <ion-item id="teenConnect-input15">\n      <ion-label floating>\n        Describe your feeling ?\n      </ion-label>\n      <ion-input type="text" placeholder="Describe your feeling ?"></ion-input>\n    </ion-item>\n  </form>\n  <button id="teenConnect-button11" ion-button color="positive" block>\n    Discover\n  </button>\n  <div class="spacer" style="width:300px;height:18px;" id="teenConnect-spacer8"></div>\n  <img src="assets/img/oUGPj2OQPuLVSvxASWQ3_smiliey.jpg" style="display:block;width:20%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:18px;" id="teenConnect-spacer9"></div>\n  <div id="teenConnect-markdown10" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      I&#39;m sorry you feel that way. Please find the below suggestions which will help !\n    </p>\n  </div>\n  <button id="teenConnect-button12" ion-button clear color="positive" block on-click="goToRecommendations()">\n    View Recommendations\n  </button>\n  <div class="spacer" style="width:300px;height:18px;" id="teenConnect-spacer10"></div>\n</ion-content>'/*ion-inline-end:"/Users/akshaya/Downloads/APCS/Teen Connect/src/pages/teen-connect/teen-connect.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TeenConnectPage);
    return TeenConnectPage;
}());

//# sourceMappingURL=teen-connect.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDetails2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teen_connect_teen_connect__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recommendations_recommendations__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddDetails2Page = /** @class */ (function () {
    function AddDetails2Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AddDetails2Page.prototype.goToTeenConnect = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__teen_connect_teen_connect__["a" /* TeenConnectPage */]);
    };
    AddDetails2Page.prototype.goToRecommendations = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recommendations_recommendations__["a" /* RecommendationsPage */]);
    };
    AddDetails2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-details2',template:/*ion-inline-start:"/Users/akshaya/Downloads/APCS/Teen Connect/src/pages/add-details2/add-details2.html"*/'<ion-content padding id="page8">\n  <div class="spacer" style="width:300px;height:26px;" id="addDetails2-spacer7"></div>\n  <img src="assets/img/45AObMRgQgCllZnbZUbc_sad.jpg" style="display:block;width:37%;height:auto;" />\n  <div class="spacer" style="width:300px;height:12px;" id="addDetails2-spacer5"></div>\n  <div id="addDetails2-markdown7" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      What do you see in the image ?\n    </p>\n  </div>\n  <form id="addDetails2-form9">\n    <ion-item id="addDetails2-input13">\n      <ion-label floating>\n        Input\n      </ion-label>\n      <ion-input type="text" placeholder="Answer ?"></ion-input>\n    </ion-item>\n  </form>\n  <img src="assets/img/45AObMRgQgCllZnbZUbc_sad.jpg" style="display:block;width:37%;height:auto;" />\n  <div class="spacer" style="width:300px;height:12px;" id="addDetails2-spacer6"></div>\n  <div id="addDetails2-markdown8" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      What do you see in the image ?\n    </p>\n  </div>\n  <form id="addDetails2-form10">\n    <ion-item id="addDetails2-input14">\n      <ion-label floating>\n        Input\n      </ion-label>\n      <ion-input type="text" placeholder="Answer ?"></ion-input>\n    </ion-item>\n    <button id="addDetails2-button10" ion-button color="positive" block on-click="goToTeenConnect()">\n      Go to Home\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/akshaya/Downloads/APCS/Teen Connect/src/pages/add-details2/add-details2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AddDetails2Page);
    return AddDetails2Page;
}());

//# sourceMappingURL=add-details2.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teen_connect_teen_connect__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recommendations_recommendations__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_details_add_details__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_details2_add_details2__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.goToTeenConnect = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__teen_connect_teen_connect__["a" /* TeenConnectPage */]);
    };
    LoginPage.prototype.goToRecommendations = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recommendations_recommendations__["a" /* RecommendationsPage */]);
    };
    LoginPage.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(LoginPage_1);
    };
    LoginPage.prototype.goToAddDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_details_add_details__["a" /* AddDetailsPage */]);
    };
    LoginPage.prototype.goToAddDetails2 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__add_details2_add_details2__["a" /* AddDetails2Page */]);
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/akshaya/Downloads/APCS/Teen Connect/src/pages/login/login.html"*/'<ion-content padding id="page5">\n  <form id="login-form1">\n    <img src="assets/img/dsaJzA5aSgSQ5daL3tev_connect.jpg" style="display:block;width:66%;height:auto;margin-left:auto;margin-right:auto;" />\n    <h1 id="welcome-heading2" style="color:#250A0A;font-weight:400;text-align:center;">\n    Communiteen\n  </h1>\n    <ion-list id="login-list2">\n      <ion-item id="login-input1">\n        <ion-label floating>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="login-input2">\n        <ion-label floating>\n          Password\n        </ion-label>\n        <ion-input type="password" placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:5px;" id="login-spacer1"></div>\n    <button id="login-button4" ion-button color="positive" block on-click="goToTeenConnect()">\n      Log in\n    </button>\n    <button id="login-button5" ion-button clear color="positive" block on-click="goToSignup()">\n      Or create an account\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/akshaya/Downloads/APCS/Teen Connect/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_details2_add_details2__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teen_connect_teen_connect__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recommendations_recommendations__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddDetailsPage = /** @class */ (function () {
    function AddDetailsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AddDetailsPage.prototype.goToAddDetails2 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_details2_add_details2__["a" /* AddDetails2Page */]);
    };
    AddDetailsPage.prototype.goToTeenConnect = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__teen_connect_teen_connect__["a" /* TeenConnectPage */]);
    };
    AddDetailsPage.prototype.goToRecommendations = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recommendations_recommendations__["a" /* RecommendationsPage */]);
    };
    AddDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-details',template:/*ion-inline-start:"/Users/akshaya/Downloads/APCS/Teen Connect/src/pages/add-details/add-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Add Details\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <form id="addDetails-form6">\n    <ion-item id="addDetails-input11">\n      <ion-label floating>\n        Name\n      </ion-label>\n      <ion-input type="text" placeholder="What is your Name ?" name="name"></ion-input>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:21px;" id="addDetails-spacer2"></div>\n    <ion-item id="addDetails-select1">\n      <ion-label>\n        Select Country\n      </ion-label>\n      <ion-select name="Select Country">\n        <ion-option>\n          India\n        </ion-option>\n        <ion-option>\n          USA\n        </ion-option>\n        <ion-option>\n          UK\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:21px;" id="addDetails-spacer3"></div>\n    <ion-item id="addDetails-select2">\n      <ion-label>\n        Select Gender\n      </ion-label>\n      <ion-select name="Select Country">\n        <ion-option>\n          Male\n        </ion-option>\n        <ion-option>\n          Female\n        </ion-option>\n        <ion-option>\n          Not to mention\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:21px;" id="addDetails-spacer4"></div>\n    <ion-item id="addDetails-select3">\n      <ion-label>\n        Ethinicity\n      </ion-label>\n      <ion-select name="Ethinicity">\n        <ion-option>\n          Asia\n        </ion-option>\n        <ion-option>\n          Mexican\n        </ion-option>\n        <ion-option>\n          American\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </form>\n  <button id="addDetails-button9" ion-button color="positive" block on-click="goToAddDetails2()">\n    Next\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/akshaya/Downloads/APCS/Teen Connect/src/pages/add-details/add-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AddDetailsPage);
    return AddDetailsPage;
}());

//# sourceMappingURL=add-details.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teen_connect_teen_connect__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recommendations_recommendations__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_details_add_details__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_details2_add_details2__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupPage_1 = SignupPage;
    SignupPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.goToTeenConnect = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__teen_connect_teen_connect__["a" /* TeenConnectPage */]);
    };
    SignupPage.prototype.goToRecommendations = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recommendations_recommendations__["a" /* RecommendationsPage */]);
    };
    SignupPage.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(SignupPage_1);
    };
    SignupPage.prototype.goToAddDetails = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_details_add_details__["a" /* AddDetailsPage */]);
    };
    SignupPage.prototype.goToAddDetails2 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__add_details2_add_details2__["a" /* AddDetails2Page */]);
    };
    SignupPage = SignupPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/akshaya/Downloads/APCS/Teen Connect/src/pages/signup/signup.html"*/'<ion-content padding id="page6">\n  <form id="signup-form5">\n    <img src="assets/img/TATUMrsSSpmmDqNsHHAj_connect.jpg" style="display:block;width:66%;height:auto;margin-left:auto;margin-right:auto;" />\n    <h1 id="welcome-heading2" style="color:#250A0A;font-weight:400;text-align:center;">\n    Communiteen\n  </h1>\n    <ion-item id="signup-input8">\n      <ion-label floating>\n        Username\n      </ion-label>\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n    <ion-item id="signup-input10">\n      <ion-label floating>\n        Password\n      </ion-label>\n      <ion-input type="password" placeholder="Password" name="password"></ion-input>\n    </ion-item>\n    <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n    <button id="signup-button7" ion-button color="positive" block on-click="goToAddDetails()">\n      Create My Account\n    </button>\n  </form>\n  <button id="signup-button8" ion-button clear color="positive" block style="font-weight:300;" on-click="goToLogin()">\n    Existing User ? Login\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/akshaya/Downloads/APCS/Teen Connect/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SignupPage);
    return SignupPage;
    var SignupPage_1;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map