webpackJsonp([11],{

/***/ 1176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
  data: function data() {
    return {};
  }
};

/***/ }),

/***/ 1377:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1434:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc"
  }, [_c('h2', [_vm._v("Tag 标签")]), _vm._v(" "), _c('h3', [_vm._v("基本展示")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/tag1"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("类型标签")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/tag2"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("背景色")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/tag3"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("类型标签")]), _vm._v(" "), _c('example', {
    attrs: {
      "demo": "view/tag4"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1f98f534", module.exports)
  }
}

/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1377)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(1176),
  /* template */
  __webpack_require__(1434),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/doc/components/component/view/tag.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tag.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f98f534", Component.options)
  } else {
    hotAPI.reload("data-v-1f98f534", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});