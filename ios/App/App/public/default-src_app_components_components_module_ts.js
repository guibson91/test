"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! br-mask */ 6833);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _directives_image_preloader_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/image-preloader.directive */ 5808);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _nano_header_nano_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nano-header/nano-header.component */ 6938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/pipes.module */ 5503);
/* harmony import */ var _nano_title_nano_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nano-title/nano-title.component */ 2875);
/* harmony import */ var _nano_address_nano_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nano-address/nano-address.component */ 4487);
/* harmony import */ var _nano_form_nano_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nano-form/nano-form.component */ 7577);
/* harmony import */ var _nano_form_nano_buttons_nano_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nano-form/nano-buttons/nano-buttons.component */ 3409);
/* harmony import */ var _nano_loading_nano_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nano-loading/nano-loading.component */ 17);
/* harmony import */ var _preview_next_footer_preview_next_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview-next-footer/preview-next-footer.component */ 7311);















let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [
            _directives_image_preloader_directive__WEBPACK_IMPORTED_MODULE_1__.ImagePreLoaderDirective,
            _nano_header_nano_header_component__WEBPACK_IMPORTED_MODULE_2__.NanoHeaderComponent,
            _nano_title_nano_title_component__WEBPACK_IMPORTED_MODULE_4__.NanoTitleComponent,
            _nano_address_nano_address_component__WEBPACK_IMPORTED_MODULE_5__.NanoAddressComponent,
            _nano_form_nano_form_component__WEBPACK_IMPORTED_MODULE_6__.NanoFormComponent,
            _nano_form_nano_buttons_nano_buttons_component__WEBPACK_IMPORTED_MODULE_7__.NanoButtonsComponent,
            _nano_loading_nano_loading_component__WEBPACK_IMPORTED_MODULE_8__.NanoLoadingComponent,
            _nano_title_nano_title_component__WEBPACK_IMPORTED_MODULE_4__.NanoTitleComponent,
            _preview_next_footer_preview_next_footer_component__WEBPACK_IMPORTED_MODULE_9__.PreviewNextFooterComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            br_mask__WEBPACK_IMPORTED_MODULE_0__.BrMaskerModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule,
        ],
        exports: [
            _directives_image_preloader_directive__WEBPACK_IMPORTED_MODULE_1__.ImagePreLoaderDirective,
            _nano_header_nano_header_component__WEBPACK_IMPORTED_MODULE_2__.NanoHeaderComponent,
            br_mask__WEBPACK_IMPORTED_MODULE_0__.BrMaskerModule,
            _nano_title_nano_title_component__WEBPACK_IMPORTED_MODULE_4__.NanoTitleComponent,
            _nano_address_nano_address_component__WEBPACK_IMPORTED_MODULE_5__.NanoAddressComponent,
            _nano_form_nano_form_component__WEBPACK_IMPORTED_MODULE_6__.NanoFormComponent,
            _nano_form_nano_buttons_nano_buttons_component__WEBPACK_IMPORTED_MODULE_7__.NanoButtonsComponent,
            _nano_loading_nano_loading_component__WEBPACK_IMPORTED_MODULE_8__.NanoLoadingComponent,
            _nano_title_nano_title_component__WEBPACK_IMPORTED_MODULE_4__.NanoTitleComponent,
            _preview_next_footer_preview_next_footer_component__WEBPACK_IMPORTED_MODULE_9__.PreviewNextFooterComponent,
        ],
    })
], ComponentsModule);



/***/ }),

/***/ 4487:
/*!*******************************************************************!*\
  !*** ./src/app/components/nano-address/nano-address.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NanoAddressComponent": () => (/* binding */ NanoAddressComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nano_address_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nano-address.component.html?ngResource */ 8567);
/* harmony import */ var _nano_address_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nano-address.component.scss?ngResource */ 925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ 9082);
/* harmony import */ var src_app_util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/util/util */ 5983);







/**
 * Formulário de endereço definido no control 'address' de um form qualquer
 */
let NanoAddressComponent = class NanoAddressComponent {
    constructor(shared) {
        this.shared = shared;
        this.errorCep = false;
    }
    ngOnInit() {
        this.form.addControl('address', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            cep: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10),
            ]),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            complement: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            streetNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
        }));
    }
    handleCepChange(e) {
        let cep = e.target.value;
        cep = (0,src_app_util_util__WEBPACK_IMPORTED_MODULE_3__.removeSymbol)(cep);
        console.log('CEP: ', cep);
        if (cep.length === 8) {
            this.shared.getAddressByCep(cep).subscribe((res) => {
                if (res) {
                    this.errorCep = false;
                    this.form.patchValue({
                        address: res,
                    });
                }
                else {
                    this.errorCep = true;
                    this.form.patchValue({
                        address: {
                            city: '',
                            state: '',
                            street: '',
                        },
                    });
                }
            });
        }
        else {
            this.form.patchValue({
                address: {
                    city: '',
                    state: '',
                    street: '',
                },
            });
        }
    }
};
NanoAddressComponent.ctorParameters = () => [
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService }
];
NanoAddressComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
NanoAddressComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-nano-address',
        template: _nano_address_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nano_address_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NanoAddressComponent);



/***/ }),

/***/ 3409:
/*!*****************************************************************************!*\
  !*** ./src/app/components/nano-form/nano-buttons/nano-buttons.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NanoButtonsComponent": () => (/* binding */ NanoButtonsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Guibson_Workspace_challenges_test_fast_cash_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nano_buttons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nano-buttons.component.html?ngResource */ 8222);
/* harmony import */ var _nano_buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nano-buttons.component.scss?ngResource */ 9429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ 9082);






/**
 * Componente responsável por controlar ações do FORM
 * Salvar, atualizar, cancelar, adicionar ou excluir
 */

let NanoButtonsComponent = class NanoButtonsComponent {
  constructor(shared) {
    this.shared = shared;
    this.canRemove = true;
    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }

  clickSave() {
    this.save.emit(null);
  }

  clickBack() {
    this.shared.navCtrl.back();
  }

  clickRemove() {
    var _this = this;

    return (0,C_Users_Guibson_Workspace_challenges_test_fast_cash_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.shared.alertCtrl.create({
        header: 'Remover',
        message: 'Você tem certeza que deseja remover esse registro no banco de dados?',
        buttons: [{
          text: 'Nao'
        }, {
          text: 'Sim',
          handler: () => {
            _this.remove.emit(null);
          }
        }]
      });
      alert.present();
    })();
  }

};

NanoButtonsComponent.ctorParameters = () => [{
  type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService
}];

NanoButtonsComponent.propDecorators = {
  formGroup: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  canRemove: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  save: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }],
  back: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }],
  remove: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }]
};
NanoButtonsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-nano-buttons',
  template: _nano_buttons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_nano_buttons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], NanoButtonsComponent);


/***/ }),

/***/ 7577:
/*!*************************************************************!*\
  !*** ./src/app/components/nano-form/nano-form.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NanoFormComponent": () => (/* binding */ NanoFormComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Guibson_Workspace_challenges_test_fast_cash_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nano_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nano-form.component.html?ngResource */ 3727);
/* harmony import */ var _nano_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nano-form.component.scss?ngResource */ 1915);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var src_app_models_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/collection */ 5242);
/* harmony import */ var src_app_models_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/util */ 846);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared.service */ 9082);










/**
 * Componente responsável por criar um CRUD completo no Firestore bastando passar um FORM
 */

let NanoFormComponent = class NanoFormComponent {
  constructor(shared, authService) {
    this.shared = shared;
    this.authService = authService;
    this.allowButtons = true;
  }

  ngOnInit() {}
  /**
   * Validações e tratamentos gerais
   */


  prepareDatabaseObject() {
    const form = this.formGroup.value; //Help address content

    if (form.address) {
      form.address = (0,src_app_models_util__WEBPACK_IMPORTED_MODULE_4__.improveAddress)(form.address);
    }

    return form;
  }

  save() {
    var _this = this;

    return (0,C_Users_Guibson_Workspace_challenges_test_fast_cash_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('save', _this.formGroup.value);

      const entity = _this.getEntity();

      const obj = _this.prepareDatabaseObject();

      if (!obj || !entity) {
        return;
      }

      const loading = yield _this.shared.loadingCtrl.create({});
      loading.present(); //Atualizar

      if (_this.formGroup.value.id) {
        console.log('Atualizar');
        entity.update(obj.id, obj).subscribe(() => {
          loading.dismiss();
          console.log('Entidade atualizada com sucesso');

          _this.handleSuccess('update');
        }, error => {
          loading.dismiss();
          console.error('Error update entity: ', error);

          _this.shared.system.showErrorAlert(error);
        });
      } //Salvar
      else {
        delete obj.id;
        console.log('Salvar');
        const auth$ = obj.email && obj.password ? _this.authService.register(obj.email, obj.password) : (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
        auth$.subscribe(userCredential => {
          delete obj.password;

          if (userCredential) {
            entity.set(userCredential.user.uid, obj).subscribe(() => {
              loading.dismiss();
              console.log('Usuário criado com autenticação com sucesso');

              _this.handleSuccess('create');
            }, error => {
              loading.dismiss();
              console.error('Error ao cadastrar usuário: ', error);

              _this.shared.system.showErrorAlert(error);
            });
          } else {
            entity.add(obj).subscribe(() => {
              loading.dismiss();
              console.log('Entidade atualizada com sucesso');

              _this.handleSuccess('create');
            }, error => {
              loading.dismiss();
              console.error('Error update entity: ', error);

              _this.shared.system.showErrorAlert(error);
            });
          }
        }, error => {
          loading.dismiss();
          console.error('Error: ', error);
          error = _this.shared.system.getAuthenticationError(error);

          _this.shared.system.showErrorAlert(error);
        });
      }
    })();
  }

  remove() {
    console.log('remove');

    if (this.formGroup.value.id) {
      const entity = this.getEntity();
      entity.remove(this.formGroup.value.id).subscribe(() => {
        console.log('removido com sucesso');
        this.handleSuccess('delete');
      });
    } else {
      console.error('Obrigatório ID para remover');
    }
  }

  handleSuccess(type = 'create') {
    this.shared.system.showToast(`Registro ${type === 'create' ? 'criado' : type === 'update' ? 'atualizado' : 'removido'} com sucesso`, 2500);
    this.formGroup.reset();
    this.shared.navCtrl.back();
  }

  getEntity() {
    if (!this.path) {
      console.error('Obrigatório instanciar o path');
      return null;
    }

    class Entity extends src_app_models_collection__WEBPACK_IMPORTED_MODULE_3__.NanoCollection {}

    Entity.path = this.path;
    return Entity;
  }

};

NanoFormComponent.ctorParameters = () => [{
  type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__.SharedService
}, {
  type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService
}];

NanoFormComponent.propDecorators = {
  formGroup: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  path: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  allowButtons: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
NanoFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-nano-form',
  template: _nano_form_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_nano_form_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], NanoFormComponent);


/***/ }),

/***/ 6938:
/*!*****************************************************************!*\
  !*** ./src/app/components/nano-header/nano-header.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NanoHeaderComponent": () => (/* binding */ NanoHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nano_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nano-header.component.html?ngResource */ 529);
/* harmony import */ var _nano_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nano-header.component.scss?ngResource */ 8445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ 9082);
/* harmony import */ var src_app_util_super__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/util/super */ 8126);







let NanoHeaderComponent = class NanoHeaderComponent extends src_app_util_super__WEBPACK_IMPORTED_MODULE_3__.SuperPage {
    constructor(navCtrl, shared) {
        super(shared);
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.back = false;
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.leftClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.backClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() { }
    backClicked() {
        if (this.backClick.observers && this.backClick.observers.length > 0) {
            this.backClick.emit();
        }
        else {
            this.goBack();
        }
    }
    clickRight() {
        this.rightClick.emit();
    }
    clickLeft() {
        this.leftClick.emit();
    }
};
NanoHeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService }
];
NanoHeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    back: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    iconLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    iconRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    badgeRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    rightClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    leftClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    backClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
NanoHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-nano-header',
        template: _nano_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nano_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NanoHeaderComponent);



/***/ }),

/***/ 17:
/*!*******************************************************************!*\
  !*** ./src/app/components/nano-loading/nano-loading.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NanoLoadingComponent": () => (/* binding */ NanoLoadingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nano_loading_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nano-loading.component.html?ngResource */ 9034);
/* harmony import */ var _nano_loading_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nano-loading.component.scss?ngResource */ 9677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let NanoLoadingComponent = class NanoLoadingComponent {
    constructor() { }
    ngOnInit() { }
};
NanoLoadingComponent.ctorParameters = () => [];
NanoLoadingComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
NanoLoadingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-nano-loading',
        template: _nano_loading_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nano_loading_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NanoLoadingComponent);



/***/ }),

/***/ 2875:
/*!***************************************************************!*\
  !*** ./src/app/components/nano-title/nano-title.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NanoTitleComponent": () => (/* binding */ NanoTitleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nano_title_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nano-title.component.html?ngResource */ 7534);
/* harmony import */ var _nano_title_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nano-title.component.scss?ngResource */ 1375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let NanoTitleComponent = class NanoTitleComponent {
    constructor() { }
    ngOnInit() { }
};
NanoTitleComponent.ctorParameters = () => [];
NanoTitleComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
NanoTitleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-nano-title',
        template: _nano_title_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nano_title_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NanoTitleComponent);



/***/ }),

/***/ 7311:
/*!*********************************************************************************!*\
  !*** ./src/app/components/preview-next-footer/preview-next-footer.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewNextFooterComponent": () => (/* binding */ PreviewNextFooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _preview_next_footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview-next-footer.component.html?ngResource */ 4313);
/* harmony import */ var _preview_next_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview-next-footer.component.scss?ngResource */ 8486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let PreviewNextFooterComponent = class PreviewNextFooterComponent {
    constructor() {
        this.showPrevious = false;
        this.showNext = false;
        this.previous = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    clickPrevious() {
        this.previous.emit();
    }
    clickNext() {
        this.next.emit();
    }
};
PreviewNextFooterComponent.ctorParameters = () => [];
PreviewNextFooterComponent.propDecorators = {
    showPrevious: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    showNext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    previous: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    next: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
PreviewNextFooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-preview-next-footer',
        template: _preview_next_footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_preview_next_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PreviewNextFooterComponent);



/***/ }),

/***/ 5808:
/*!*********************************************************!*\
  !*** ./src/app/directives/image-preloader.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePreLoaderDirective": () => (/* binding */ ImagePreLoaderDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/directive-selector */

/**
 * Diretiva responsável por mostrar gif de carregando enquanto a imagem não é renderizada
 * Basta trocar "src" por "img" nas tags de img
 *
 * @example: <img img="assets/images/example.png" />
 */
let ImagePreLoaderDirective = class ImagePreLoaderDirective {
    constructor(ref) {
        this.ref = ref;
        this.defaultImage = 'assets/gifs/loading.gif';
    }
    ngOnInit() {
        this.handleImage();
    }
    handleImage() {
        this.finalImage = this.defaultImage;
        if (!this.targetSource) {
            this.finalImage = 'assets/images/placeholder.png';
            this.oldImage = this.finalImage;
            this.ref.detectChanges();
        }
        this.downloadingImage = new Image();
        this.downloadingImage.onload = () => {
            this.finalImage = this.targetSource;
            this.oldImage = this.finalImage;
            this.ref.detectChanges();
        };
        this.downloadingImage.onerror = (err) => {
            console.error('Error: ', err);
            this.finalImage = 'assets/images/placeholder.png';
            this.oldImage = this.finalImage;
            this.ref.detectChanges();
        };
        this.downloadingImage.src = this.targetSource;
    }
};
ImagePreLoaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
ImagePreLoaderDirective.propDecorators = {
    targetSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['img',] }]
};
ImagePreLoaderDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[img]',
        host: {
            '[attr.src]': 'finalImage',
        },
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appImagePreloader]',
    })
], ImagePreLoaderDirective);



/***/ }),

/***/ 5503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
        exports: [],
    })
], PipesModule);



/***/ }),

/***/ 5983:
/*!******************************!*\
  !*** ./src/app/util/util.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertDate": () => (/* binding */ convertDate),
/* harmony export */   "getItemsNames": () => (/* binding */ getItemsNames),
/* harmony export */   "getMimeType": () => (/* binding */ getMimeType),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "paginate": () => (/* binding */ paginate),
/* harmony export */   "removeSymbol": () => (/* binding */ removeSymbol),
/* harmony export */   "validateCpfCnpj": () => (/* binding */ validateCpfCnpj)
/* harmony export */ });
/* harmony import */ var cpf_cnpj_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cpf-cnpj-validator */ 3904);

/**
 * Remover caracteres especiais de uma string
 */
const removeSymbol = (doc) => doc
    .replace(/\s/g, '')
    .replace(/\./g, '')
    .replace('-', '')
    .replace('/', '')
    .replace('(', '')
    .replace(')', '');
const isFunction = (functionToCheck) => functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
const getMimeType = (name) => {
    if (name.indexOf('pdf') >= 0) {
        return 'application/pdf';
    }
    else if (name.indexOf('png') >= 0) {
        return 'image/png';
    }
    else if (name.indexOf('jpg') >= 0) {
        return 'image/jpg';
    }
    else if (name.indexOf('jpeg') >= 0) {
        return 'image/jpeg';
    }
    else if (name.indexOf('mp4') >= 0) {
        return 'video/mp4';
    }
    else if (name.indexOf('avi') >= 0) {
        return 'video/avi';
    }
};
/**
 * Convert date (dd/mm/yyyy) to ISO DATE (yyyy-mm-dd)
 */
const convertDate = (databaseDate) => {
    const [day, month, year] = databaseDate.split('/');
    return [year, month, day].join('-');
};
const validateCpfCnpj = (control) => {
    const doc = control.value;
    let error = false;
    if (!doc) {
        return { invalidCpfCnpj: true };
    }
    else if (doc.length <= 14) {
        error = cpf_cnpj_validator__WEBPACK_IMPORTED_MODULE_0__.cpf.isValid(doc) ? false : true;
    }
    else {
        error = cpf_cnpj_validator__WEBPACK_IMPORTED_MODULE_0__.cnpj.isValid(doc) ? false : true;
    }
    if (error) {
        return { invalidCpfCnpj: true };
    }
    return null;
};
/**
 * Separar array de nomes por vírgula
 */
const getItemsNames = (namesArray) => {
    if (!namesArray || namesArray.length === 0) {
        return '';
    }
    if (namesArray.length === 1) {
        return namesArray[0];
    }
    let namesString = '';
    const lastIndex = namesArray.length - 1;
    namesArray.forEach((name, index) => {
        namesString += name;
        if (index !== lastIndex) {
            namesString += ', ';
        }
    });
    return namesString;
};
const paginate = (arr, size) => arr.reduce((acc, val, i) => {
    const idx = Math.floor(i / size);
    const page = acc[idx] || (acc[idx] = []);
    page.push(val);
    return acc;
}, []);


/***/ }),

/***/ 6611:
/*!**************************************************************!*\
  !*** ./node_modules/br-mask/__ivy_ngcc__/dist/app.module.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrMaskerModule": () => (/* binding */ BrMaskerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _directives_br_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/br-mask */ 2978);





var BrMaskerModule = function () {
  function BrMaskerModule() {}

  BrMaskerModule.ɵfac = function BrMaskerModule_Factory(t) {
    return new (t || BrMaskerModule)();
  };

  BrMaskerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: BrMaskerModule
  });
  BrMaskerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrMaskerModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
      args: [{
        declarations: [_directives_br_mask__WEBPACK_IMPORTED_MODULE_0__.BrMaskDirective],
        exports: [_directives_br_mask__WEBPACK_IMPORTED_MODULE_0__.BrMaskDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.CUSTOM_ELEMENTS_SCHEMA]
      }]
    }], function () {
      return [];
    }, null);
  })();

  (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BrMaskerModule, {
      declarations: function () {
        return [_directives_br_mask__WEBPACK_IMPORTED_MODULE_0__.BrMaskDirective];
      },
      imports: function () {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule];
      },
      exports: function () {
        return [_directives_br_mask__WEBPACK_IMPORTED_MODULE_0__.BrMaskDirective];
      }
    });
  })();

  return BrMaskerModule;
}();


/** @nocollapse */

BrMaskerModule.ctorParameters = function () {
  return [];
};

/***/ }),

/***/ 2978:
/*!**********************************************************************!*\
  !*** ./node_modules/br-mask/__ivy_ngcc__/dist/directives/br-mask.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrMaskDirective": () => (/* binding */ BrMaskDirective),
/* harmony export */   "BrMaskModel": () => (/* binding */ BrMaskModel)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);





var BrMaskModel = function () {
  function BrMaskModel() {
    this.type = 'alfa';
    this.decimal = 2;
    this.decimalCaracter = ",";
    this.userCaracters = false;
    this.numberAndTousand = false;
    this.moneyInitHasInt = true;
  }

  return BrMaskModel;
}();



var BrMaskDirective = function () {
  function BrMaskDirective(controlContainer, elementRef) {
    this.controlContainer = controlContainer;
    this.elementRef = elementRef;
    this.brmasker = new BrMaskModel();
  }
  /**
  * Event key up in directive
  * @author Antonio Marques <tmowna@gmail.com>
  * @constant {string} value
  */


  BrMaskDirective.prototype.inputKeyup = function (event) {
    var value = this.returnValue(event.target.value);
    this.setValueInFormControl(value);
  };

  BrMaskDirective.prototype.onNgModelChange = function (e) {
    var value = this.returnValue(e);

    if (value) {
      this.setValueInFormControl(value, false);
    }
  };

  BrMaskDirective.prototype.ngOnInit = function () {
    if (!this.brmasker.type) {
      this.brmasker.type = 'all';
    }

    if (!this.brmasker.decimal) {
      this.brmasker.decimal = 2;
    }

    if (this.brmasker.moneyInitHasInt === undefined) {
      this.brmasker.moneyInitHasInt = true;
    }

    if (!this.brmasker.decimalCaracter) {
      this.brmasker.decimalCaracter = ',';
    }

    if (this.controlContainer) {
      if (this.formControlName) {
        this.brmasker.form = this.controlContainer.control.get(this.formControlName);
      } else {
        console.warn('Missing FormControlName directive from host element of the component');
      }
    } else {
      console.warn('Can\'t find parent FormGroup directive');
    }

    this.initialValue();
  };

  BrMaskDirective.prototype.initialValue = function () {
    var value = this.returnValue(this.elementRef.nativeElement.value);
    this.setValueInFormControl(value);
  };
  /**
  * The verification of form
  * @author Antonio Marques <tmowna@gmail.com>
  * @example <caption>this.verifyFormControl()</caption>
  * @returns {boolean} return a boolean value
  */


  BrMaskDirective.prototype.verifyFormControl = function () {
    if (this.brmasker.form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl) {
      return true;
    } else {
      return false;
    }
  };
  /**
  * Set Value em FormControl
  * @author Antonio Marques <tmowna@gmail.com>
  * @example <caption>this.setValueInFormControl(string)</caption>
  */


  BrMaskDirective.prototype.setValueInFormControl = function (value, emitViewToModelChange) {
    if (!this.verifyFormControl()) {
      this.elementRef.nativeElement.value = value;
      return;
    }

    this.brmasker.form.setValue(value, {
      emitViewToModelChange: emitViewToModelChange
    });
    this.brmasker.form.updateValueAndValidity();
  };
  /**
  * For initial value
  * @author Antonio Marques <tmowna@gmail.com>
  * @example <caption>this.setValueInFormControl(string, model)</caption>
  * @param {string} value
  * @param {BrMaskModel} config
  * @returns {string} mask intial value
  */


  BrMaskDirective.prototype.writeCreateValue = function (value, config) {
    if (config === void 0) {
      config = new BrMaskModel();
    }

    if (value && config.phone) {
      return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
    }

    if (value && config.phoneNotDDD) {
      return this.phoneNotDDDMask(value);
    }

    if (value && config.money) {
      return this.writeValueMoney(value, config);
    }

    if (value && config.person) {
      return this.writeValuePerson(value);
    }

    if (value && config.percent) {
      return this.writeValuePercent(value);
    }

    if (this.brmasker.userCaracters) {
      return this.usingSpecialCharacters(value, this.brmasker.mask, this.brmasker.len);
    }

    if (value && config.mask) {
      this.brmasker.mask = config.mask;

      if (config.len) {
        this.brmasker.len = config.len;
      }

      return this.onInput(value);
    }

    return value;
  };
  /**
  * For initial value percent
  * @author Antonio Marques <tmowna@gmail.com>
  * @example <caption>this.writeValuePercent(string)</caption>
  * @param {string} value
  * @returns {string} mask intial value
  */


  BrMaskDirective.prototype.writeValuePercent = function (value) {
    value.replace(/\D/gi, '');
    value.replace(/%/gi, '');
    return value.replace(/([0-9]{0})$/gi, '%$1');
  };
  /**
  * For initial value person
  * @author Antonio Marques <tmowna@gmail.com>
  * @example <caption>this.writeValuePerson(string)</caption>
  * @param {string} value
  * @returns {string} mask intial value
  */


  BrMaskDirective.prototype.writeValuePerson = function (value) {
    if (value.length <= 11) {
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
    } else {
      return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
    }
  };
  /**
  * For initial value money
  * @author Antonio Marques <tmowna@gmail.com>
  * @example <caption>this.writeValueMoney(string, model)</caption>
  * @param {string} value
  * @param {BrMaskModel} value
  * @returns {string} mask intial value
  */


  BrMaskDirective.prototype.writeValueMoney = function (value, config) {
    if (config === void 0) {
      config = new BrMaskModel();
    }

    return this.moneyMask(value, config);
  };
  /**
  * Here is one of the main functions
  * responsible for identifying the type of mask
  * @author Antonio Marques <tmowna@gmail.com>
  * @example <caption>this.returnValue(string)</caption>
  * @param {string} value
  * @returns {string} mask value
  */


  BrMaskDirective.prototype.returnValue = function (value) {
    if (!this.brmasker.mask) {
      this.brmasker.mask = '';
    }

    if (value) {
      var formValue = value;

      if (this.brmasker.type === 'alfa') {
        formValue = formValue.replace(/\d/gi, '');
      }

      if (this.brmasker.type === 'num') {
        formValue = formValue.replace(/\D/gi, '');
      }

      if (this.brmasker.money) {
        return this.moneyMask(this.onInput(formValue), this.brmasker);
      }

      if (this.brmasker.phone) {
        return this.phoneMask(formValue);
      }

      if (this.brmasker.phoneNotDDD) {
        return this.phoneNotDDDMask(formValue);
      }

      if (this.brmasker.person) {
        return this.peapollMask(formValue);
      }

      if (this.brmasker.percent) {
        return this.percentMask(formValue);
      }

      if (this.brmasker.numberAndTousand) {
        return this.thousand(formValue);
      }

      if (this.brmasker.userCaracters) {
        return this.usingSpecialCharacters(formValue, this.brmasker.mask, this.brmasker.len);
      }

      return this.onInput(formValue);
    } else {
      return '';
    }
  };

  BrMaskDirective.prototype.applyCpfMask = function (formValue) {
    formValue = formValue.replace(/\D/gi, '');
    formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
    formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
    formValue = formValue.replace(/(\d{3})(\d{1,2})$/gi, '$1-$2');
    return formValue;
  };

  BrMaskDirective.prototype.applyCnpjMask = function (formValue) {
    formValue = formValue.replace(/\D/gi, '');
    formValue = formValue.replace(/(\d{2})(\d)/gi, '$1.$2');
    formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
    formValue = formValue.replace(/(\d{3})(\d)/gi, '$1/$2');
    formValue = formValue.replace(/(\d{4})(\d{1,4})$/gi, '$1-$2');
    formValue = formValue.replace(/(\d{2})(\d{1,2})$/gi, '$1$2');
    return formValue;
  };
  /**
  * Here we have a mask for percentage
  * @author Antonio Marques <tmowna@gmail.com>
  * @example <caption>this.percentMask(string)</caption>
  * @param {string} value
  * @returns {string} string percentage
  */


  BrMaskDirective.prototype.percentMask = function (value) {
    var tmp = value;
    tmp = tmp.replace(/\D/gi, '');
    tmp = tmp.replace(/%/gi, '');
    tmp = tmp.replace(/([0-9]{0})$/gi, '%$1');
    return tmp;
  };
  /**
  * Here we have a mask for phone in 8 digits or 9 digits
  * @author Antonio Marques <tmowna@gmail.com>
  * @example <caption>this.phoneMask(string)</caption>
  * @param {string} value
  * @returns {string} string phone
  */


  BrMaskDirective.prototype.phoneMask = function (value) {
    var formValue = value;

    if (formValue.length > 14 || formValue.length === 11) {
      this.brmasker.len = 15;
      this.brmasker.mask = '(99) 99999-9999';
      formValue = formValue.replace(/\D/gi, '');
      formValue = formValue.replace(/(\d{2})(\d)/gi, '$1 $2');
      formValue = formValue.replace(/(\d{5})(\d)/gi, '$1-$2');
      formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
    } else {
      this.brmasker.len = 14;
      this.brmasker.mask = '(99) 9999-9999';
      formValue = formValue.replace(/\D/gi, '');
      formValue = formValue.replace(/(\d{2})(\d)/gi, '$1 $2');
      formValue = formValue.replace(/(\d{4})(\d)/gi, '$1-$2');
      formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
    }

    return this.onInput(formValue);
  };
  /**
  * Here we have a mask for phone in 8 digits or 9 digits not ddd
  * @author Antonio Marques <tmowna@gmail.com>
  * @example <caption>this.phoneMask(string)</caption>
  * @param {string} value
  * @returns {string} string phone
  */


  BrMaskDirective.prototype.phoneNotDDDMask = function (value) {
    var formValue = value;

    if (formValue.length > 9) {
      this.brmasker.len = 10;
      this.brmasker.mask = '99999-9999';
      formValue = formValue.replace(/\D/gi, '');
      formValue = formValue.replace(/(\d{5})(\d)/gi, '$1-$2');
      formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
    } else {
      this.brmasker.len = 9;
      this.brmasker.mask = '9999-9999';
      formValue = formValue.replace(/\D/gi, '');
      formValue = formValue.replace(/(\d{4})(\d)/gi, '$1-$2');
      formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
    }

    return this.onInput(formValue);
  };
  /**
  * Here we have a mask for peapoll ID
  * @author Antonio Marques <tmowna@gmail.com>
  * @example <caption>this.peapollMask(string)</caption>
  * @param {string} value
  * @returns {string} string ID
  */


  BrMaskDirective.prototype.peapollMask = function (value) {
    var formValue = value;

    if (formValue.length >= 14) {
      if (formValue.length === 14 && formValue.indexOf('-') > 0) {
        this.brmasker.len = 14;
        this.brmasker.mask = '999.999.999-99';
        formValue = this.applyCpfMask(formValue);
      } else {
        this.brmasker.len = 18;
        this.brmasker.mask = '99.999.999/9999-99';
        formValue = this.applyCnpjMask(formValue);
      }
    } else {
      this.brmasker.len = 14;
      this.brmasker.mask = '999.999.999-99';
      formValue = this.applyCpfMask(formValue);
    }

    return this.onInput(formValue);
  };
  /**
  * Here we have a mask for money mask
  * @author Antonio Marques <tmowna@gmail.com>
  * @example <caption>this.moneyMask(string)</caption>
  * @param {string} value
  * @param {BrMaskModel} config
  * @returns {string} string money
  */


  BrMaskDirective.prototype.moneyMask = function (value, config) {
    var decimal = config.decimal || this.brmasker.decimal;
    value = value.replace(/\D/gi, '').replace(new RegExp('([0-9]{' + decimal + '})$', 'g'), config.decimalCaracter + '$1');

    if (value.length === 1 && !this.brmasker.moneyInitHasInt) {
      var dec = Array(decimal - 1).fill(0);
      return "0" + config.decimalCaracter + dec.join('') + value;
    }

    if (value.length === decimal + 1) {
      return '0' + value;
    } else if (value.length > decimal + 2 && value.charAt(0) === '0') {
      return value.substr(1);
    }

    if (config.thousand && value.length > Number(4) + Number(config.decimal)) {
      var valueOne = "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)";
      value = value.replace(new RegExp("" + valueOne, "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
    }

    if (config.thousand && value.length > Number(8) + Number(config.decimal)) {
      var valueTwo = "([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)";
      value = value.replace(new RegExp("" + valueTwo, "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
    }

    return value;
  };
  /**
  * Responsible for returning the empty mask
  * @author Antonio Marques <tmowna@gmail.com>
  * @example <caption>this.onInput(string)</caption>
  * @param {string} value
  * @returns {string} value
  */


  BrMaskDirective.prototype.onInput = function (value) {
    return this.formatField(value, this.brmasker.mask, this.brmasker.len);
  };
  /**
  * Responsible for special characters
  * @author Antonio Marques <tmowna@gmail.com>
  * @example <caption>this.usingSpecialCharacters(string)</caption>
  * @param {string} field
  * @param {string} mask
  * @param {number} size
  * @returns {string} value
  */


  BrMaskDirective.prototype.usingSpecialCharacters = function (field, mask, size) {
    if (!size) {
      size = 99999999999;
    }

    var boleanoMascara;
    var exp = /\-|\.|\,| /gi;
    var campoSoNumeros = field.toString().replace(exp, '');
    var posicaoCampo = 0;
    var NovoValorCampo = '';
    var sizeMascara = campoSoNumeros.length;

    for (var i = 0; i < sizeMascara; i++) {
      if (i < size) {
        boleanoMascara = mask.charAt(i) === '-' || mask.charAt(i) === '.' || mask.charAt(i) === ',';

        if (boleanoMascara) {
          NovoValorCampo += mask.charAt(i);
          sizeMascara++;
        } else {
          NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
          posicaoCampo++;
        }
      }
    }

    return NovoValorCampo;
  };
  /**
  * Responsible formating number
  * @author Antonio Marques <tmowna@gmail.com>
  * @example <caption>this.thousand(string)</caption>
  * @param {string} value
  */


  BrMaskDirective.prototype.thousand = function (value) {
    var val = value.replace(/\D/gi, '');
    var reverse = val.toString().split('').reverse().join('');
    var thousands = reverse.match(/\d{1,3}/g);

    if (thousands) {
      return thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
    }
  };
  /**
  * Responsible for removing special characters
  * @author Antonio Marques <tmowna@gmail.com>
  * @example <caption>this.formatField(string)</caption>
  * @param {string} field
  * @param {string} mask
  * @param {number} size
  * @returns {string} value
  */


  BrMaskDirective.prototype.formatField = function (field, mask, size) {
    if (!size) {
      size = 99999999999;
    }

    var boleanoMascara;
    var exp = /\_|\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
    var campoSoNumeros = field.toString().replace(exp, '');
    var posicaoCampo = 0;
    var NovoValorCampo = '';
    var TamanhoMascara = campoSoNumeros.length;

    for (var i = 0; i < TamanhoMascara; i++) {
      if (i < size) {
        boleanoMascara = mask.charAt(i) === '-' || mask.charAt(i) === '.' || mask.charAt(i) === '/';
        boleanoMascara = boleanoMascara || mask.charAt(i) === '_';
        boleanoMascara = boleanoMascara || mask.charAt(i) === '(' || mask.charAt(i) === ')' || mask.charAt(i) === ' ';
        boleanoMascara = boleanoMascara || mask.charAt(i) === ',' || mask.charAt(i) === '*' || mask.charAt(i) === '+';
        boleanoMascara = boleanoMascara || mask.charAt(i) === '@' || mask.charAt(i) === '#' || mask.charAt(i) === ':';
        boleanoMascara = boleanoMascara || mask.charAt(i) === '$' || mask.charAt(i) === '&' || mask.charAt(i) === '%';

        if (boleanoMascara) {
          NovoValorCampo += mask.charAt(i);
          TamanhoMascara++;
        } else {
          NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
          posicaoCampo++;
        }
      }
    }

    return NovoValorCampo;
  };

  BrMaskDirective.ɵfac = function BrMaskDirective_Factory(t) {
    return new (t || BrMaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, 13), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };

  BrMaskDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: BrMaskDirective,
    selectors: [["", "brmasker", ""]],
    hostBindings: function BrMaskDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function BrMaskDirective_keyup_HostBindingHandler($event) {
          return ctx.inputKeyup($event);
        })("ngModelChange", function BrMaskDirective_ngModelChange_HostBindingHandler($event) {
          return ctx.onNgModelChange($event);
        });
      }
    },
    inputs: {
      brmasker: "brmasker",
      formControlName: "formControlName"
    }
  });
  BrMaskDirective.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: BrMaskDirective,
    factory: function (t) {
      return BrMaskDirective.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrMaskDirective, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
      args: [{
        selector: '[brmasker]'
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
    }], function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
      }];
    }, {
      brmasker: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
      }],
      inputKeyup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ['keyup', ['$event']]
      }],
      onNgModelChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ['ngModelChange', ['$event']]
      }],
      formControlName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
      }]
    });
  })();

  return BrMaskDirective;
}();


/** @nocollapse */

BrMaskDirective.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Host
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
  }];
};

BrMaskDirective.propDecorators = {
  'brmasker': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  'formControlName': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
  }],
  'inputKeyup': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
    args: ['keyup', ['$event']]
  }],
  'onNgModelChange': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
    args: ['ngModelChange', ['$event']]
  }]
};

/***/ }),

/***/ 6646:
/*!********************************************************************!*\
  !*** ./node_modules/br-mask/__ivy_ngcc__/dist/directives/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrMaskDirective": () => (/* reexport safe */ _br_mask__WEBPACK_IMPORTED_MODULE_0__.BrMaskDirective),
/* harmony export */   "BrMaskModel": () => (/* reexport safe */ _br_mask__WEBPACK_IMPORTED_MODULE_0__.BrMaskModel)
/* harmony export */ });
/* harmony import */ var _br_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./br-mask */ 2978);


/***/ }),

/***/ 6833:
/*!*********************************************************!*\
  !*** ./node_modules/br-mask/__ivy_ngcc__/dist/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrMaskDirective": () => (/* reexport safe */ _directives__WEBPACK_IMPORTED_MODULE_1__.BrMaskDirective),
/* harmony export */   "BrMaskModel": () => (/* reexport safe */ _directives__WEBPACK_IMPORTED_MODULE_1__.BrMaskModel),
/* harmony export */   "BrMaskerModule": () => (/* reexport safe */ _app_module__WEBPACK_IMPORTED_MODULE_0__.BrMaskerModule)
/* harmony export */ });
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ 6611);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives */ 6646);



/***/ }),

/***/ 3904:
/*!***********************************************************************!*\
  !*** ./node_modules/cpf-cnpj-validator/dist/cpf-cnpj-validator.es.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cnpj": () => (/* binding */ cnpj),
/* harmony export */   "cpf": () => (/* binding */ cpf),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "validator": () => (/* binding */ validator)
/* harmony export */ });
/*!
 * cpf-cnpj-validator v1.0.3
 * (c) 2020-present Carvalho, Vinicius Luiz <carvalho.viniciusluiz@gmail.com>
 * Released under the MIT License.
 */
const BLACKLIST = ['00000000000', '11111111111', '22222222222', '33333333333', '44444444444', '55555555555', '66666666666', '77777777777', '88888888888', '99999999999', '12345678909'];
const STRICT_STRIP_REGEX = /[.-]/g;
const LOOSE_STRIP_REGEX = /[^\d]/g;

const verifierDigit = digits => {
  const numbers = digits.split('').map(number => {
    return parseInt(number, 10);
  });
  const modulus = numbers.length + 1;
  const multiplied = numbers.map((number, index) => number * (modulus - index));
  const mod = multiplied.reduce((buffer, number) => buffer + number) % 11;
  return mod < 2 ? 0 : 11 - mod;
};

const strip = (number, strict) => {
  const regex = strict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;
  return (number || '').replace(regex, '');
};

const format = number => {
  return strip(number).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
};

const isValid = (number, strict) => {
  const stripped = strip(number, strict);

  if (!stripped) {
    return false;
  }

  if (stripped.length !== 11) {
    return false;
  }

  if (BLACKLIST.includes(stripped)) {
    return false;
  }

  let numbers = stripped.substr(0, 9);
  numbers += verifierDigit(numbers);
  numbers += verifierDigit(numbers);
  return numbers.substr(-2) === stripped.substr(-2);
};

const generate = formatted => {
  let numbers = '';

  for (let i = 0; i < 9; i += 1) {
    numbers += Math.floor(Math.random() * 9);
  }

  numbers += verifierDigit(numbers);
  numbers += verifierDigit(numbers);
  return formatted ? format(numbers) : numbers;
};

var cpf = {
  verifierDigit,
  strip,
  format,
  isValid,
  generate
};
const BLACKLIST$1 = ['00000000000000', '11111111111111', '22222222222222', '33333333333333', '44444444444444', '55555555555555', '66666666666666', '77777777777777', '88888888888888', '99999999999999'];
const STRICT_STRIP_REGEX$1 = /[-\\/.]/g;
const LOOSE_STRIP_REGEX$1 = /[^\d]/g;

const verifierDigit$1 = digits => {
  let index = 2;
  const reverse = digits.split('').reduce((buffer, number) => {
    return [parseInt(number, 10)].concat(buffer);
  }, []);
  const sum = reverse.reduce((buffer, number) => {
    buffer += number * index;
    index = index === 9 ? 2 : index + 1;
    return buffer;
  }, 0);
  const mod = sum % 11;
  return mod < 2 ? 0 : 11 - mod;
};

const strip$1 = (number, strict) => {
  const regex = strict ? STRICT_STRIP_REGEX$1 : LOOSE_STRIP_REGEX$1;
  return (number || '').replace(regex, '');
};

const format$1 = number => {
  return strip$1(number).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
};

const isValid$1 = (number, strict) => {
  const stripped = strip$1(number, strict);

  if (!stripped) {
    return false;
  }

  if (stripped.length !== 14) {
    return false;
  }

  if (BLACKLIST$1.includes(stripped)) {
    return false;
  }

  let numbers = stripped.substr(0, 12);
  numbers += verifierDigit$1(numbers);
  numbers += verifierDigit$1(numbers);
  return numbers.substr(-2) === stripped.substr(-2);
};

const generate$1 = formatted => {
  let numbers = '';

  for (let i = 0; i < 12; i += 1) {
    numbers += Math.floor(Math.random() * 9);
  }

  numbers += verifierDigit$1(numbers);
  numbers += verifierDigit$1(numbers);
  return formatted ? format$1(numbers) : numbers;
};

var cnpj = {
  verifierDigit: verifierDigit$1,
  strip: strip$1,
  format: format$1,
  isValid: isValid$1,
  generate: generate$1
};

const validator = joi => ({
  type: 'document',
  base: joi.string(),
  messages: {
    'document.cpf': 'CPF inválido',
    'document.cnpj': 'CNPJ inválido'
  },
  rules: {
    cpf: {
      validate(value, helpers, args, options) {
        if (!cpf.isValid(value)) {
          return helpers.error('document.cpf');
        }

        return value;
      }

    },
    cnpj: {
      validate(value, helpers, args, options) {
        if (!cnpj.isValid(value)) {
          return helpers.error('document.cnpj');
        }

        return value;
      }

    }
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);


/***/ }),

/***/ 925:
/*!********************************************************************************!*\
  !*** ./src/app/components/nano-address/nano-address.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "section.address .container-address {\n  display: flex;\n  flex-wrap: wrap;\n}\nsection.address .container-address .item {\n  margin-right: 0.5em;\n}\nsection.address .container-address .item ion-input.error-input {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbm8tYWRkcmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBQVI7QUFDUTtFQUNJLG1CQUFBO0FBQ1o7QUFBWTtFQUNJLHFCQUFBO0FBRWhCIiwiZmlsZSI6Im5hbm8tYWRkcmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24uYWRkcmVzcyB7XHJcbiAgICAuY29udGFpbmVyLWFkZHJlc3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcclxuICAgICAgICAgICAgaW9uLWlucHV0LmVycm9yLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 9429:
/*!******************************************************************************************!*\
  !*** ./src/app/components/nano-form/nano-buttons/nano-buttons.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "div.container-buttons ion-button {\n  font-weight: bold;\n}\n@media (max-width: 436px) {\n  div.container-buttons {\n    flex-direction: column;\n    align-items: center;\n  }\n}\ndiv.container-buttons .button-clear-md-danger {\n  margin-left: -6px;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbm8tYnV0dG9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0FBQVI7QUFHSTtFQUxKO0lBTVEsc0JBQUE7SUFDQSxtQkFBQTtFQUFOO0FBQ0Y7QUFFSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFSIiwiZmlsZSI6Im5hbm8tYnV0dG9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jb250YWluZXItYnV0dG9ucyB7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDM2cHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi1jbGVhci1tZC1kYW5nZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 1915:
/*!**************************************************************************!*\
  !*** ./src/app/components/nano-form/nano-form.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYW5vLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 8445:
/*!******************************************************************************!*\
  !*** ./src/app/components/nano-header/nano-header.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar ion-title {\n  text-align: center;\n}\nion-header ion-toolbar ion-icon.left {\n  font-size: 2em;\n  margin-left: 4px;\n}\nion-header ion-toolbar ion-badge.right {\n  position: absolute;\n  top: 15px;\n  right: 6px;\n  border-radius: 50%;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbm8taGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksa0JBQUE7QUFEWjtBQUdRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBRFo7QUFHUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFEWiIsImZpbGUiOiJuYW5vLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb24ubGVmdCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYmFkZ2UucmlnaHQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNnB4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 9677:
/*!********************************************************************************!*\
  !*** ./src/app/components/nano-loading/nano-loading.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "section.loading {\n  padding: 0px !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1em;\n}\nsection.loading h1 {\n  font-size: 1em;\n  color: gray;\n  margin: 0;\n  margin-left: 1em;\n}\nsection.loading ion-spinner {\n  width: 20px !important;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbm8tbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBRVI7QUFBSTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtBQUVSIiwiZmlsZSI6Im5hbm8tbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ubG9hZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICB9XHJcbiAgICBpb24tc3Bpbm5lciB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 1375:
/*!****************************************************************************!*\
  !*** ./src/app/components/nano-title/nano-title.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-item-divider {\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbm8tdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoibmFuby10aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 8486:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/preview-next-footer/preview-next-footer.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "ion-footer {\n  margin-bottom: 0.5em;\n  margin-top: 0.5em;\n}\nion-footer ion-button ion-icon {\n  font-size: 2em;\n}\nion-footer ion-button.left {\n  float: left;\n}\nion-footer ion-button.right {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpZXctbmV4dC1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDUTtFQUNJLGNBQUE7QUFDWjtBQUNRO0VBQ0ksV0FBQTtBQUNaO0FBQ1E7RUFDSSxZQUFBO0FBQ1oiLCJmaWxlIjoicHJldmlldy1uZXh0LWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mb290ZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubGVmdCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnJpZ2h0IHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 8567:
/*!********************************************************************************!*\
  !*** ./src/app/components/nano-address/nano-address.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<section class=\"address\">\n  <app-nano-title title=\"Endereço\"></app-nano-title>\n  <div *ngIf=\"form && form.controls['address']\" [formGroup]=\"form\">\n    <div class=\"container-address\" formGroupName=\"address\">\n      <section class=\"item\"\n        [ngClass]=\"{'error': form.get('address').get('cep').touched && (form.get('address').get('cep').invalid || errorCep)}\">\n        <ion-label position=\"stacked\">CEP</ion-label>\n        <ion-input [brmasker]=\"{mask: '00.000-000', type:'num'}\" maxlength=\"10\" type=\"tel\"\n          formControlName=\"cep\" (input)=\"handleCepChange($event)\">\n        </ion-input>\n      </section>\n      <section class=\"item\"\n        [ngClass]=\"{'error': errorCep && form.get('address').get('city').invalid}\">\n        <ion-label position=\"stacked\">Cidade</ion-label>\n        <ion-input formControlName=\"city\" [readonly]=\"true\">\n        </ion-input>\n      </section>\n      <section class=\"item\"\n        [ngClass]=\"{'error': errorCep && form.get('address').get('state').invalid}\">\n        <ion-label position=\"stacked\">Estado</ion-label>\n        <ion-input formControlName=\"state\" [readonly]=\"true\">\n        </ion-input>\n      </section>\n      <section class=\"item\"\n        [ngClass]=\"{'error': form.get('address').get('street').touched && form.get('address').get('street').invalid}\">\n        <ion-label position=\"stacked\">Rua</ion-label>\n        <ion-input formControlName=\"street\">\n        </ion-input>\n      </section>\n      <section class=\"item\"\n        [ngClass]=\"{'error': form.get('address').get('streetNumber').touched && form.get('address').get('streetNumber').invalid}\">\n        <ion-label position=\"stacked\">Número</ion-label>\n        <ion-input formControlName=\"streetNumber\">\n        </ion-input>\n      </section>\n      <section class=\"item\">\n        <ion-label position=\"stacked\">Complemento</ion-label>\n        <ion-input formControlName=\"complement\">\n        </ion-input>\n      </section>\n    </div>\n  </div>\n</section>";

/***/ }),

/***/ 8222:
/*!******************************************************************************************!*\
  !*** ./src/app/components/nano-form/nano-buttons/nano-buttons.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-buttons ion-padding\" style=\"display: flex\">\n  <div style=\"text-align: start; flex-grow: 1\">\n    <ion-button icon-left fill=\"clear\" (click)=\"clickRemove()\" color=\"danger\"\n      *ngIf=\"formGroup?.value?.id && canRemove\">\n      <ion-icon name=\"trash-outline\"></ion-icon>\n      Remover\n    </ion-button>\n  </div>\n  <div>\n    <ion-button icon-left fill=\"clear\" (click)=\"clickBack()\" color=\"medium\">\n      <ion-icon name=\"close\"></ion-icon>\n      Cancelar\n    </ion-button>\n    <ion-button icon-left (click)=\"clickSave()\" [disabled]=\"!formGroup.valid\" color=\"primary\">\n      <ion-icon name=\"checkmark-outline\"></ion-icon>\n      {{formGroup?.value?.id ? 'Atualizar' : 'Salvar'}}\n    </ion-button>\n  </div>\n</div>";

/***/ }),

/***/ 3727:
/*!**************************************************************************!*\
  !*** ./src/app/components/nano-form/nano-form.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"formGroup\" class=\"form-default\">\r\n    <ng-content></ng-content>\r\n    <app-nano-buttons (remove)=\"remove()\" (save)=\"save()\" [formGroup]=\"formGroup\" *ngIf=\"allowButtons\"></app-nano-buttons>\r\n</form>";

/***/ }),

/***/ 529:
/*!******************************************************************************!*\
  !*** ./src/app/components/nano-header/nano-header.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar [color]=\"'primary'\">\n\n    <ion-buttons *ngIf=\"back\" slot=\"start\" style=\"min-width: 42px;\">\n      <ion-button fill=\"clear\" (click)=\"backClicked()\" class=\"link\">\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons *ngIf=\"!back && iconLeft\" slot=\"start\" (click)=\"clickLeft()\" class=\"link\">\n      <ion-icon class=\"left\" [name]=\"iconLeft\" slot=\"icon-only\"></ion-icon>\n    </ion-buttons>\n\n\n    <ion-buttons *ngIf=\"!back && !iconLeft\" slot=\"start\" style=\"min-width: 42px;\">\n      &nbsp;\n    </ion-buttons>\n\n    <ion-title *ngIf=\"title\">{{title}}</ion-title>\n\n    <ion-buttons slot=\"end\" style=\"min-width: 42px;\" *ngIf=\"iconRight\" (click)=\"clickRight()\" class=\"link\">\n      <ion-icon [name]=\"iconRight\" slot=\"icon-only\"></ion-icon>\n      <ion-badge color=\"danger\" class=\"right\" *ngIf=\"badgeRight > 0\">{{badgeRight}}</ion-badge>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\" style=\"min-width: 42px;\" *ngIf=\"!iconRight\">\n      &nbsp;\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>";

/***/ }),

/***/ 9034:
/*!********************************************************************************!*\
  !*** ./src/app/components/nano-loading/nano-loading.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<section class=\"loading\" lines=\"none\" *ngIf=\"loading\">\n  <ion-spinner></ion-spinner>\n  <h1 color=\"medium\">{{title ? title : 'Carregando informações.. por favor, aguarde um instante.'}}\n  </h1>\n</section>";

/***/ }),

/***/ 7534:
/*!****************************************************************************!*\
  !*** ./src/app/components/nano-title/nano-title.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-item-divider *ngIf=\"title\" mode=\"md\">\n  <ion-label>\n    {{title}}\n  </ion-label>\n</ion-item-divider>";

/***/ }),

/***/ 4313:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/preview-next-footer/preview-next-footer.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-footer class=\"ion-no-border\">\n  <ion-button class=\"left\" (click)=\"clickPrevious()\" fill=\"clear\" *ngIf=\"showPrevious\">\n    <ion-icon name=\"chevron-back-outline\"></ion-icon>\n    Anterior\n  </ion-button>\n  <ion-button class=\"right\" (click)=\"clickNext()\" fill=\"clear\" *ngIf=\"showNext\">\n    Próximo\n    <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n  </ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map