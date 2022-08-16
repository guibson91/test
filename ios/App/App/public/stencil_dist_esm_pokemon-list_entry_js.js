"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["stencil_dist_esm_pokemon-list_entry_js"],{

/***/ 6706:
/*!*************************************************!*\
  !*** ../stencil/dist/esm/pokemon-list.entry.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pokemon_list": () => (/* binding */ PokemonList)
/* harmony export */ });
/* harmony import */ var _index_6e81fcb6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-6e81fcb6.js */ 1999);

const pokemonListCss = ":host{display:block}.item{display:flex;border-bottom:1px solid lightgray;padding-top:0.5em;padding-bottom:0.5em}h1{margin:0;font-size:1.1em;margin-bottom:5px;margin-top:5px;text-transform:uppercase}p{font-size:0.9em;color:gray;margin:0;margin-right:0.5em;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;line-clamp:4;-webkit-box-orient:vertical}img{width:100px;height:100px;box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2);margin-right:1em;margin-top:0.5em;margin-bottom:0.5em}";
const PokemonList = class {
  constructor(hostRef) {
    (0,_index_6e81fcb6_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }

  render() {
    var _a;

    return (0,_index_6e81fcb6_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6e81fcb6_js__WEBPACK_IMPORTED_MODULE_0__.H, null, ((_a = this.list) === null || _a === void 0 ? void 0 : _a.length) > 0 ? (0,_index_6e81fcb6_js__WEBPACK_IMPORTED_MODULE_0__.h)("section", {
      class: 'list'
    }, this.list.map(item => {
      return (0,_index_6e81fcb6_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        class: 'item'
      }, (0,_index_6e81fcb6_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
        src: item.image ? item.image : "assets/images/placeholder.jpg"
      }), (0,_index_6e81fcb6_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_6e81fcb6_js__WEBPACK_IMPORTED_MODULE_0__.h)("h1", {
        style: {
          color: this.color ? this.color : '#a4b740'
        }
      }, item.name), (0,_index_6e81fcb6_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")));
    })) : (0,_index_6e81fcb6_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", {
      style: {
        textAlign: 'center',
        marginTop: '30px'
      }
    }, "N\u00E3o h\u00E1 mais pokemons"));
  }

};
PokemonList.style = pokemonListCss;


/***/ })

}]);
//# sourceMappingURL=stencil_dist_esm_pokemon-list_entry_js.js.map