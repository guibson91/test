"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["stencil_dist_esm_my-component_entry_js"],{

/***/ 9984:
/*!*************************************************!*\
  !*** ../stencil/dist/esm/my-component.entry.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "my_component": () => (/* binding */ MyComponent)
/* harmony export */ });
/* harmony import */ var _index_6e81fcb6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-6e81fcb6.js */ 1999);


function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";
const MyComponent = class {
  constructor(hostRef) {
    (0,_index_6e81fcb6_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }

  getText() {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (0,_index_6e81fcb6_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "Hello, World! I'm ", this.getText());
  }

};
MyComponent.style = myComponentCss;


/***/ })

}]);
//# sourceMappingURL=stencil_dist_esm_my-component_entry_js.js.map