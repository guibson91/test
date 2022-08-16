(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var gl_ionic_background_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-ionic-background-video */ 9666);









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginPageRoutingModule],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA],
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/link.service */ 9581);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ 9082);
/* harmony import */ var src_app_util_super__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/util/super */ 8126);








let LoginPage = class LoginPage extends src_app_util_super__WEBPACK_IMPORTED_MODULE_5__.SuperPage {
    constructor(shared, ref, linkService, authService) {
        super(shared, authService);
        this.shared = shared;
        this.ref = ref;
        this.linkService = linkService;
        this.authService = authService;
        this.visiblePassword = false;
        this.now = new Date();
    }
    ngOnInit() { }
    toggleVisibility() {
        this.visiblePassword = !this.visiblePassword;
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: src_app_services_link_service__WEBPACK_IMPORTED_MODULE_3__.LinkService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 9581:
/*!******************************************!*\
  !*** ./src/app/services/link.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkService": () => (/* binding */ LinkService)
/* harmony export */ });
/* harmony import */ var C_Users_Guibson_Workspace_challenges_test_fast_cash_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 9048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ 9936);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.service */ 9082);






/**
 * Escolher a melhor forma de abrir links ou arquivos em cada plataforma (Android, iOS ou WEB)
 */

let LinkService = class LinkService {
  constructor(shared, previewAnyFile, iab) {
    this.shared = shared;
    this.previewAnyFile = previewAnyFile;
    this.iab = iab;
  }

  openLink(link) {
    if (!link) {
      return;
    } //ANDROID


    if (this.shared.platform.is('android')) {
      const ref = this.iab.create(link, '_blank', {
        hidenavigationbuttons: 'yes',
        hideurlbar: 'yes',
        hidden: 'yes',
        location: 'no',
        toolbar: 'no',
        zoom: 'no',
        fullscreen: 'yes'
      });
      ref.show();
    } //iOS
    else if (this.shared.platform.is('ios')) {
      const ref = this.iab.create(link, '_blank', {
        hidenavigationbuttons: 'yes',
        hideurlbar: 'no',
        hidden: 'yes',
        location: 'yes',
        toolbar: 'yes',
        zoom: 'no',
        fullscreen: 'yes'
      });
      ref.show();
    } //BROWSER
    else {
      this.openBrowserLink(link);
    }
  }

  openPDF(url) {
    if (this.shared.platform.is('cordova') || this.shared.platform.is('capacitor')) {
      this.openNativePDF(url);
    } else {
      this.openBrowserPDF(url);
    }
  }

  openBrowserLink(url) {
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = url;
    link.setAttribute('visibility', 'hidden');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  openBrowserPDF(url) {
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = url;
    link.setAttribute('visibility', 'hidden');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  openNativePDF(url) {
    var _this = this;

    return (0,C_Users_Guibson_Workspace_challenges_test_fast_cash_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.shared.loadingCtrl.create({});
      loading.present();

      _this.previewAnyFile.preview(url).then(() => {
        loading.dismiss();
      }).catch(error => {
        console.error('Error: ', error);
        loading.dismiss();
      });
    })();
  }

};

LinkService.ctorParameters = () => [{
  type: _shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService
}, {
  type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_2__.PreviewAnyFile
}, {
  type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__.InAppBrowser
}];

LinkService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], LinkService);


/***/ }),

/***/ 4601:
/*!**********************************************************************!*\
  !*** ./node_modules/gl-ionic-background-video/dist/esm/es5/index.js ***!
  \**********************************************************************/
/***/ (() => {

// GlBackgroundVideo: ES Module

/***/ }),

/***/ 9666:
/*!******************************************************************!*\
  !*** ./node_modules/gl-ionic-background-video/dist/esm/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _es5_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./es5/index.js */ 4601);
/* harmony import */ var _es5_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_es5_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _es5_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _es5_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: white;\n}\nion-content section.top {\n  background-color: var(--ion-color-primary);\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  position: relative;\n}\nion-content section.top h1.title {\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n  color: white;\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\nion-content section.top h1.description {\n  color: white;\n  font-weight: 500;\n  font-size: 1.2em;\n  margin-right: 0.5em;\n  padding-bottom: 1em;\n  font-style: italic;\n  text-align: center;\n}\nion-content section.bottom {\n  padding: 0.5em;\n}\nion-content section.bottom .item {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\nion-content section.bottom .container-password {\n  position: relative;\n}\nion-content section.bottom .container-password ion-icon {\n  position: absolute;\n  font-size: 1.5em;\n  right: 0.5em;\n  top: 0.5em;\n  z-index: 100;\n}\nion-content section.bottom .container-terms {\n  margin-top: 1em;\n}\nion-content section.bottom .container-terms ion-checkbox {\n  margin-right: 1em;\n}\nion-content section.bottom .container-terms ion-label {\n  margin: 0;\n  padding: 0;\n}\nion-content section.bottom .forgot-password {\n  color: var(--ion-color-primary);\n  text-align: right;\n  margin: 2em !important;\n  text-decoration: underline;\n  text-shadow: 0px 0.1px 0.1px #919191;\n}\nion-content section.bottom .container-buttons {\n  padding-left: 1em;\n  padding-right: 1em;\n  margin-top: 1em;\n}\nion-content section.bottom .container-buttons p {\n  color: gray;\n  text-align: center;\n  font-size: 0.9em;\n  margin: 1em;\n}\nion-content section.bottom .container-buttons ion-button {\n  min-height: 3em;\n}\nion-content section.bottom .container-buttons ion-button.register {\n  --border-width: 0.7px;\n}\nion-footer {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5em;\n  margin-top: 0.5em;\n  margin-left: 5%;\n  margin-right: 5%;\n  width: 90%;\n}\nion-footer ion-button ion-icon {\n  font-size: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVSO0FBRFE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQURRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUdaO0FBQUk7RUFDSSxjQUFBO0FBRVI7QUFEUTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFHWjtBQURRO0VBQ0ksa0JBQUE7QUFHWjtBQUZZO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUloQjtBQURRO0VBQ0ksZUFBQTtBQUdaO0FBRlk7RUFDSSxpQkFBQTtBQUloQjtBQUZZO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFJaEI7QUFEUTtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7QUFHWjtBQURRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFHWjtBQUZZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSWhCO0FBRlk7RUFDSSxlQUFBO0FBSWhCO0FBRlk7RUFDSSxxQkFBQTtBQUloQjtBQUNBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFFSjtBQUFRO0VBQ0ksY0FBQTtBQUVaIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBzZWN0aW9uLnRvcCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGgxLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uLmJvdHRvbSB7XHJcbiAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXItcGFzc3dvcmQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICByaWdodDogMC41ZW07XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXItdGVybXMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgICAgIGlvbi1jaGVja2JveCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9yZ290LXBhc3N3b3JkIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMmVtIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMC4xcHggMC4xcHggIzkxOTE5MTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lci1idXR0b25zIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogM2VtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1idXR0b24ucmVnaXN0ZXIge1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAuN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n\n  <!-- Stencil Integration Test -->\n  <!-- <gl-background-video src=\"https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4\"\n    poster=\"https://sample-videos.com/img/Sample-png-image-500kb.png\"></gl-background-video> -->\n\n  <section class=\"top\">\n    <h1 class=\"title\">Fast Cash Project</h1>\n    <h1 class=\"description\">Projeto teste para empresa Fast Cash</h1>\n  </section>\n  \n  <section class=\"bottom form-default\">\n    <time-ago [time]=\"now\" seconds=\"true\"></time-ago>\n    <div no-lines lines=\"none\" class=\"item\">\n      <ion-label position=\"stacked\" mode=\"md\">E-mail</ion-label>\n      <ion-input type=\"text\" inputmode=\"email\" [autocomplete]=\"false\" [pattern]=\"'email'\"\n        [(ngModel)]=\"email\">\n      </ion-input>\n    </div>\n    <div lines=\"none\" class=\"item\">\n      <ion-label position=\"stacked\" mode=\"md\">Senha</ion-label>\n      <div class=\"container-password\">\n        <ion-input [type]=\"visiblePassword ? 'text' : 'password'\" inputmode=\"password\"\n          [autocomplete]=\"false\" [pattern]=\"'password'\" [(ngModel)]=\"password\"></ion-input>\n        <ion-icon name=\"eye\" (click)=\"toggleVisibility()\" tappable *ngIf=\"visiblePassword\">\n        </ion-icon>\n        <ion-icon name=\"eye-off-outline\" (click)=\"toggleVisibility()\" tappable\n          *ngIf=\"!visiblePassword\"></ion-icon>\n      </div>\n    </div>\n\n    <div class=\"container-buttons\">\n      <ion-button expand=\"block\" (click)=\"login(email, password)\" class=\"enter\">Entrar</ion-button>\n      <p class=\"forgot-password\" tappable (click)=\"openForgotPassword(email)\">\n        Esqueci minha senha\n      </p>\n      <p>Ainda não é usuário?</p>\n      <ion-button class=\"register\" expand=\"block\" fill=\"outline\"\n        (click)=\"pushPage('register')\">Cadastre-se agora\n      </ion-button>\n    </div>\n  </section>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-button (click)=\"linkService.openLink('https://www.linkedin.com/in/guibson91/')\" fill=\"clear\">\n    <ion-icon name=\"logo-linkedin\"></ion-icon>\n  </ion-button>\n  <ion-button\n    (click)=\"linkService.openPDF('https://firebasestorage.googleapis.com/v0/b/fast-cash-70922.appspot.com/o/files%2FGuibson_Martins_CV__PT_.pdf?alt=media&token=713b694c-7c23-44ec-bdac-15d86e3cf2ab')\"\n    fill=\"clear\">\n    <ion-icon name=\"document-text-outline\"></ion-icon>\n  </ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map