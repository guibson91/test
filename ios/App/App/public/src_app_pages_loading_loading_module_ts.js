"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_loading_loading_module_ts"],{

/***/ 2754:
/*!*********************************************************!*\
  !*** ./src/app/pages/loading/loading-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingPageRoutingModule": () => (/* binding */ LoadingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.page */ 839);




const routes = [
    {
        path: '',
        component: _loading_page__WEBPACK_IMPORTED_MODULE_0__.LoadingPage
    }
];
let LoadingPageRoutingModule = class LoadingPageRoutingModule {
};
LoadingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoadingPageRoutingModule);



/***/ }),

/***/ 7467:
/*!*************************************************!*\
  !*** ./src/app/pages/loading/loading.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingPageModule": () => (/* binding */ LoadingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _loading_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-routing.module */ 2754);
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.page */ 839);







let LoadingPageModule = class LoadingPageModule {
};
LoadingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _loading_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoadingPageRoutingModule
        ],
        declarations: [_loading_page__WEBPACK_IMPORTED_MODULE_1__.LoadingPage]
    })
], LoadingPageModule);



/***/ }),

/***/ 839:
/*!***********************************************!*\
  !*** ./src/app/pages/loading/loading.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingPage": () => (/* binding */ LoadingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _loading_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.page.html?ngResource */ 9838);
/* harmony import */ var _loading_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.page.scss?ngResource */ 5505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5670);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ 9082);
/* harmony import */ var src_app_util_super__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util/super */ 8126);








/**
 * Página inicial do sistema que controla o fluxo
 * AuthService dispara o user de acordo com o listenUser();
 * Se listenUser() conseguir recuperar o usuário, é direcionado para 'home'
 * Se listenUser() não conseguir recuperar usuário, é direcionado para 'login'
 */
let LoadingPage = class LoadingPage extends src_app_util_super__WEBPACK_IMPORTED_MODULE_4__.SuperPage {
    constructor(shared, authService) {
        super(shared, authService);
        this.shared = shared;
        this.authService = authService;
    }
    ngOnInit() {
        this.shared.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe((user) => {
            if (user) {
                this.rootPage();
            }
            else {
                this.rootPage('login');
            }
        });
    }
};
LoadingPage.ctorParameters = () => [
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
LoadingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-loading',
        template: _loading_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loading_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoadingPage);



/***/ }),

/***/ 5505:
/*!************************************************************!*\
  !*** ./src/app/pages/loading/loading.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-content .container-center {\n  text-align: center;\n  height: 100%;\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: calc(50vh - 3em);\n}\nion-content h1 {\n  color: gray;\n  font-size: 1em;\n}\nion-content ion-spinner {\n  color: gray;\n  width: 2em;\n  height: 2em;\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBQVI7QUFFSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBQVI7QUFFSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBUiIsImZpbGUiOiJsb2FkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC5jb250YWluZXItY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogY2FsYyg1MHZoIC0gM2VtKTtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuICAgIGlvbi1zcGlubmVyIHtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICB3aWR0aDogMmVtO1xyXG4gICAgICAgIGhlaWdodDogMmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 9838:
/*!************************************************************!*\
  !*** ./src/app/pages/loading/loading.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n  <div class=\"container-center\">\n    <h1>Carregando. Por favor, aguarde um instante...</h1>\n    <ion-spinner></ion-spinner>\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_loading_loading_module_ts.js.map