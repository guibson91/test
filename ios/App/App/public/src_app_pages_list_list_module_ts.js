"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_list_list_module_ts"],{

/***/ 4290:
/*!***************************************************!*\
  !*** ./src/app/pages/list/list-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPageRoutingModule": () => (/* binding */ ListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.page */ 519);




const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_0__.ListPage
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListPageRoutingModule);



/***/ }),

/***/ 9388:
/*!*******************************************!*\
  !*** ./src/app/pages/list/list.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPageModule": () => (/* binding */ ListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page */ 519);
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-routing.module */ 4290);








let ListPageModule = class ListPageModule {
};
ListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _list_routing_module__WEBPACK_IMPORTED_MODULE_2__.ListPageRoutingModule,
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_1__.ListPage],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA],
    })
], ListPageModule);



/***/ }),

/***/ 519:
/*!*****************************************!*\
  !*** ./src/app/pages/list/list.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPage": () => (/* binding */ ListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.page.html?ngResource */ 8813);
/* harmony import */ var _list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page.scss?ngResource */ 6038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ 9082);
/* harmony import */ var src_app_util_super__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/util/super */ 8126);







let ListPage = class ListPage extends src_app_util_super__WEBPACK_IMPORTED_MODULE_4__.SuperPage {
    constructor(shared, authService) {
        super(shared, authService);
        this.shared = shared;
        this.authService = authService;
        this.loading = false;
    }
    ngOnInit() {
        this.loadServerPokemons();
    }
    loadServerPokemons(url) {
        this.loading = true;
        this.shared.getServerPokemons(url).subscribe((res) => {
            console.log('Res server pokemons: ', res);
            this.currentResponse = res;
            this.loading = false;
        }, (error) => {
            console.error('Error: ', error);
            this.loading = false;
            this.shared.system.showErrorAlert(error);
        });
    }
    changeList() {
        this.goBack();
    }
    next() {
        //just in case
        if (!this.currentResponse.next) {
            return this.shared.system.showAlert('Última página', 'Você já está na última página');
        }
        else {
            this.loadServerPokemons(this.currentResponse.next);
        }
    }
    previous() {
        //just in case
        if (!this.currentResponse.previous) {
            return this.shared.system.showAlert('Página inicial', 'Você está na primeira página');
        }
        else {
            this.loadServerPokemons(this.currentResponse.previous);
        }
    }
};
ListPage.ctorParameters = () => [
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
ListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-list',
        template: _list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListPage);



/***/ }),

/***/ 6038:
/*!******************************************************!*\
  !*** ./src/app/pages/list/list.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8813:
/*!******************************************************!*\
  !*** ./src/app/pages/list/list.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<app-nano-header iconLeft=\"sync-outline\" (leftClick)=\"changeList()\" title=\"Listagem\"\n  iconRight=\"log-out-outline\" (rightClick)=\"logout()\"></app-nano-header>\n\n<ion-content>\n\n  <app-nano-loading title=\"Carregando pokemons\" [loading]=\"loading\"></app-nano-loading>\n\n  <pokemon-list [list]=\"currentResponse?.results\"></pokemon-list>\n\n</ion-content>\n\n<app-preview-next-footer [showPrevious]=\"currentResponse?.previous ? true : false\"\n  [showNext]=\"currentResponse?.next ? true : false\" (previous)=\"previous()\" (next)=\"next()\">\n</app-preview-next-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_list_list_module_ts.js.map