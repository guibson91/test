"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 1557:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 6690);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 207:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 1557);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 6690);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 6690:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 6325);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 7863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ 5783);
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/util/util */ 5983);








let RegisterPage = class RegisterPage {
    constructor(route) {
        this.route = route;
        this.path = src_app_models_user__WEBPACK_IMPORTED_MODULE_2__.User.path;
        this.errorEmail = false;
        this.errorCpfCnpj = false;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            cpfCnpj: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, src_app_util_util__WEBPACK_IMPORTED_MODULE_3__.validateCpfCnpj]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('client', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6),
            ]),
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 7863:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 6325:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<app-nano-header [back]=\"true\" title=\"Cadastro\"></app-nano-header>\n\n<ion-content>\n\n  <app-nano-form [formGroup]=\"form\" [path]=\"path\">\n\n    <app-nano-title title=\"Informações Gerais\"></app-nano-title>\n    <section class=\"item\">\n      <ion-label position=\"stacked\">Nome</ion-label>\n      <ion-input formControlName=\"name\"></ion-input>\n    </section>\n    <section class=\"item\" [ngClass]=\"{'error': form.controls.cpfCnpj.touched &&\n    form.controls.cpfCnpj.invalid}\">\n      <ion-label position=\"stacked\" for=\"cpfCnpj\">CPF/CNPJ</ion-label>\n      <ion-input type=\"tel\" name=\"cpfCnpj\" formControlName=\"cpfCnpj\" [brmasker]=\"{person: true}\">\n      </ion-input>\n    </section>\n\n    <app-nano-address [form]=\"form\"></app-nano-address>\n\n    <app-nano-title title=\"Autenticação\"></app-nano-title>\n    <section class=\"item\" [ngClass]=\"{'error': form.controls.email.touched &&\n    form.controls.email.invalid}\">\n      <ion-label position=\"stacked\">E-mail</ion-label>\n      <ion-input formControlName=\"email\" type=\"email\" [readonly]=\"!!form.value.id\" [email]=\"true\">\n      </ion-input>\n    </section>\n    <section class=\"item\" [ngClass]=\"{'error': form.controls.password.touched &&\n    form.controls.password.invalid}\">\n      <ion-label position=\"stacked\">Senha</ion-label>\n      <ion-input formControlName=\"password\" type=\"password\" [readonly]=\"!!form.value.id\">\n      </ion-input>\n    </section>\n\n  </app-nano-form>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map