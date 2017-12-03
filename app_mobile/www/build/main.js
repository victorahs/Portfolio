webpackJsonp([0],{

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skills_skills__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_project__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, appctrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.appctrl = appctrl;
        this.http = http;
        this.skillsPage = __WEBPACK_IMPORTED_MODULE_2__skills_skills__["a" /* SkillsPage */];
        this.projectPage = __WEBPACK_IMPORTED_MODULE_3__project_project__["a" /* ProjectPage */];
        this.contactPage = __WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */];
        this.http.get('http://victora.public.codeur.online/app_web/public//abouts')
            .map(function (res) { return res.json(); })
            .subscribe(function (about) {
            _this.abouts = about;
        }, function (err) {
            console.log(err);
        }, function () { return console.log(_this.abouts); });
        this.http.get('http://victora.public.codeur.online/app_web/public/education')
            .map(function (res) { return res.json(); })
            .subscribe(function (education) {
            _this.educations = education;
        }, function (err) {
            console.log(err);
        }, function () { return console.log(_this.educations); });
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\victor\Documents\professionel\portfolio\app_mobile\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Victor Ahsene</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="conteneurAcceuil">\n    <ion-grid>\n    <section>\n        <h1>I am a new junior developper web from 2017 </h1> </section>\n        <ion-row><ion-col width-60><img src="./assets/image/work.jpg" /></ion-col></ion-row>\n\n    <ion-item-group *ngFor="let data of abouts">\n        <ion-item-divider color="light">About Me</ion-item-divider>\n        <ion-item>\n            <ion-icon name="person" item-left></ion-icon>{{data.firstName}} {{data.name}}</ion-item>\n        <ion-item>\n            <ion-icon name="at" item-left></ion-icon>{{data.emailAddress}} </ion-item>\n        <ion-item>\n            <ion-icon name="home" item-left></ion-icon>{{data.address}} </ion-item>\n        <ion-item>\n            <ion-icon name="call" item-left></ion-icon>{{data.numberPhone}} </ion-item>\n        <ion-item-divider color="light">Education</ion-item-divider>\n        <ion-item *ngFor="let data of educations">\n            {{data.date_begin}}/{{data.date_end}} {{data.nameFormation}}\n        </ion-item>\n    </ion-item-group>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\victor\Documents\professionel\portfolio\app_mobile\src\pages\home\home.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SkillsPage = (function () {
    function SkillsPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.http.get('http://victora.public.codeur.online/app_web/public//skills')
            .map(function (res) { return res.json(); })
            .subscribe(function (skill) {
            _this.skills = skill;
        }, function (err) {
            console.log(err);
        }, function () { return console.log(_this.skills); });
    }
    SkillsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-skills',template:/*ion-inline-start:"C:\Users\victor\Documents\professionel\portfolio\app_mobile\src\pages\skills\skills.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-title>Skills</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item *ngFor=\'let data of skills\'>\n            <ion-thumbnail item-left> <img src="./assets/image/{{data.skillPicture}}"> </ion-thumbnail>\n            <h2>{{data.skills}}</h2> </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\victor\Documents\professionel\portfolio\app_mobile\src\pages\skills\skills.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], SkillsPage);
    return SkillsPage;
}());
//# sourceMappingURL=skills.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectPage = (function () {
    function ProjectPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.http.get('http://victora.public.codeur.online/app_web/public/projects')
            .map(function (res) { return res.json(); })
            .subscribe(function (project) {
            _this.projects = project;
        }, function (err) {
            console.log(err);
        }, function () { return console.log(_this.projects); });
    }
    ProjectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectPage');
    };
    ProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-project',template:/*ion-inline-start:"C:\Users\victor\Documents\professionel\portfolio\app_mobile\src\pages\project\project.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Projects</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-slides [options]="slideOptions" pager loop autoplay>\n        <ion-slide *ngFor="let data of projects">\n            <h1>{{ data.nameProject }}</h1> <img src="./assets/image/{{ data.namepicture }}" />\n            <p>{{data.commentary}}</p> <a href="{{data.urlProject}}">See More</a> </ion-slide>\n    </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\Users\victor\Documents\professionel\portfolio\app_mobile\src\pages\project\project.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ProjectPage);
    return ProjectPage;
}());
//# sourceMappingURL=project.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactPage = (function () {
    function ContactPage(navCtrl, http, alertCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.appCtrl = appCtrl;
    }
    ContactPage.prototype.onSubmit = function (myForm) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        this.data = myForm.value;
        console.log(this.data);
        var link = 'http://victora.public.codeur.online/app_web/public/send';
        var data = JSON.stringify({ alldata: this.data });
        this.http.post(link, data, options)
            .subscribe(function (data) {
            console.log(_this.data.response = data);
            if (_this.data.response.ok == true && _this.data.response.status == 200) {
                _this.showAlert(true);
            }
            else {
                _this.showAlert(false);
            }
        }, function (error) {
            console.log("Oooops - it's not working!");
            _this.showAlert(false);
        });
    };
    ContactPage.prototype.showAlert = function (trueOrfalse) {
        if (trueOrfalse == true) {
            var alert_1 = this.alertCtrl.create({
                title: "Thank you",
                subTitle: 'Your message has been sent successfully !',
                buttons: ['OK']
            });
            alert_1.present();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: "Sorry",
                subTitle: 'Your message could not be sent ! Try again.',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\victor\Documents\professionel\portfolio\app_mobile\src\pages\contact\contact.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Contact\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <form #myForm=\'ngForm\' (ngSubmit)="onSubmit(myForm)">\n\n        <ion-item>\n            <ion-label floating>Name</ion-label>\n            <ion-input type="text" [(ngModel)]="name" name="name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>FirstName</ion-label>\n            <ion-input type="text" [(ngModel)]="firstname" name="firstname"></ion-input>\n        </ion-item>\n\n\n\n        <ion-item>\n            <ion-label floating>Mail</ion-label>\n            <ion-input type="email" [(ngModel)]="mail" name="mail"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Message</ion-label>\n            <ion-textarea type="text" [(ngModel)]="message" name="message" ></ion-textarea>\n        </ion-item>\n\n\n        <button ion-button type="submit" block >Send</button>\n\n\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\victor\Documents\professionel\portfolio\app_mobile\src\pages\contact\contact.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], ContactPage);
    return ContactPage;
}());
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 264:
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
webpackEmptyAsyncContext.id = 264;

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_project__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skills_skills__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__project_project__["a" /* ProjectPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__skills_skills__["a" /* SkillsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"C:\Users\victor\Documents\professionel\portfolio\app_mobile\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Project" tabIcon="folder-open"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Skills" tabIcon="settings"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="paper-plane"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\victor\Documents\professionel\portfolio\app_mobile\src\pages\tabs\tabs.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], TabsPage);
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(618);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_contact_contact__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_skills_skills__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_project_project__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* enableProdMode */])();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_skills_skills__["a" /* SkillsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_project_project__["a" /* ProjectPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_skills_skills__["a" /* SkillsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_project_project__["a" /* ProjectPage */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(499);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Splashscreen */].hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"C:\Users\victor\Documents\professionel\portfolio\app_mobile\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\victor\Documents\professionel\portfolio\app_mobile\src\app\app.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ })

},[524]);
//# sourceMappingURL=main.js.map