/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/Storage/index.ts":
/*!******************************!*\
  !*** ./lib/Storage/index.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _usr_src_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _usr_src_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _usr_src_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar initialStorageData = {\n  accessToken: \"\"\n};\n\nvar Storage = /*#__PURE__*/function () {\n  function Storage() {\n    (0,_usr_src_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Storage);\n\n    (0,_usr_src_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"storageData\", initialStorageData);\n\n    (0,_usr_src_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(this, \"STORE_PREFIX\", void 0);\n  }\n\n  (0,_usr_src_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Storage, [{\n    key: \"set\",\n    value: function set(key, value) {\n      this.storageData[key] = value;\n      localStorage.setItem(this.STORE_PREFIX, JSON.stringify(this.storageData));\n    }\n  }, {\n    key: \"get\",\n    value: function get(key) {\n      var data = localStorage.getItem(this.STORE_PREFIX);\n      var storeData = JSON.parse(data);\n      return storeData[key];\n    }\n  }]);\n\n  return Storage;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Storage());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL1N0b3JhZ2UvaW5kZXgudHM/MDBiMiJdLCJuYW1lcyI6WyJpbml0aWFsU3RvcmFnZURhdGEiLCJhY2Nlc3NUb2tlbiIsIlN0b3JhZ2UiLCJrZXkiLCJ2YWx1ZSIsInN0b3JhZ2VEYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIlNUT1JFX1BSRUZJWCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiZ2V0SXRlbSIsInN0b3JlRGF0YSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLElBQU1BLGtCQUErQixHQUFHO0FBQ3RDQyxhQUFXLEVBQUU7QUFEeUIsQ0FBeEM7O0lBSU1DLE87QUFJSixxQkFBYztBQUFBOztBQUFBLDRKQUhxQkYsa0JBR3JCOztBQUFBO0FBQUU7Ozs7d0JBRVpHLEcsRUFBd0JDLEssRUFBZTtBQUN6QyxXQUFLQyxXQUFMLENBQWlCRixHQUFqQixJQUF3QkMsS0FBeEI7QUFFQUUsa0JBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFLQyxZQUExQixFQUF3Q0MsSUFBSSxDQUFDQyxTQUFMLENBQWUsS0FBS0wsV0FBcEIsQ0FBeEM7QUFDRDs7O3dCQUVHRixHLEVBQXdCO0FBQzFCLFVBQU1RLElBQUksR0FBR0wsWUFBWSxDQUFDTSxPQUFiLENBQXFCLEtBQUtKLFlBQTFCLENBQWI7QUFDQSxVQUFNSyxTQUFzQixHQUFHSixJQUFJLENBQUNLLEtBQUwsQ0FBV0gsSUFBWCxDQUEvQjtBQUVBLGFBQU9FLFNBQVMsQ0FBQ1YsR0FBRCxDQUFoQjtBQUNEOzs7Ozs7QUFHSCwrREFBZSxJQUFJRCxPQUFKLEVBQWYiLCJmaWxlIjoiLi9saWIvU3RvcmFnZS9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBTdG9yYWdlRGF0YSB7XG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG59XG5cbmNvbnN0IGluaXRpYWxTdG9yYWdlRGF0YTogU3RvcmFnZURhdGEgPSB7XG4gIGFjY2Vzc1Rva2VuOiBcIlwiLFxufTtcblxuY2xhc3MgU3RvcmFnZSB7XG4gIHByaXZhdGUgc3RvcmFnZURhdGE6IFN0b3JhZ2VEYXRhID0gaW5pdGlhbFN0b3JhZ2VEYXRhO1xuICBwcml2YXRlIFNUT1JFX1BSRUZJWDogXCJfX21hdFZpZXdfX1wiO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBzZXQoa2V5OiBrZXlvZiBTdG9yYWdlRGF0YSwgdmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmFnZURhdGFba2V5XSA9IHZhbHVlO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5TVE9SRV9QUkVGSVgsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcmFnZURhdGEpKTtcbiAgfVxuXG4gIGdldChrZXk6IGtleW9mIFN0b3JhZ2VEYXRhKSB7XG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuU1RPUkVfUFJFRklYKTtcbiAgICBjb25zdCBzdG9yZURhdGE6IFN0b3JhZ2VEYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcblxuICAgIHJldHVybiBzdG9yZURhdGFba2V5XTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RvcmFnZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/Storage/index.ts\n");

/***/ })

});