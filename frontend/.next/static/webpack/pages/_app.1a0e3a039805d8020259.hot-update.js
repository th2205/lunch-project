/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/userSlice.ts":
/*!****************************!*\
  !*** ./store/userSlice.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userSlice\": function() { return /* binding */ userSlice; },\n/* harmony export */   \"setUserInfo\": function() { return /* binding */ setUserInfo; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar initialState = {\n  isLoggedIn: false,\n  userImg: \"\",\n  name: \"\"\n};\nvar userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"user\",\n  initialState: initialState,\n  reducers: {\n    setUserInfo: function setUserInfo(state, action) {\n      state.isLoggedIn = action.payload.isLoggedIn;\n      state.userImg = action.payload.userImg;\n      state.name = action.payload.name;\n    }\n  }\n});\nvar setUserInfo = userSlice.actions.setUserInfo;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userSlice.reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvdXNlclNsaWNlLnRzP2M1NGEiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsInVzZXJJbWciLCJuYW1lIiwidXNlclNsaWNlIiwiY3JlYXRlU2xpY2UiLCJyZWR1Y2VycyIsInNldFVzZXJJbmZvIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQVFBLElBQU1BLFlBQXVCLEdBQUc7QUFDOUJDLFlBQVUsRUFBRSxLQURrQjtBQUU5QkMsU0FBTyxFQUFFLEVBRnFCO0FBRzlCQyxNQUFJLEVBQUU7QUFId0IsQ0FBaEM7QUFNTyxJQUFNQyxTQUFTLEdBQUdDLDZEQUFXLENBQUM7QUFDbkNGLE1BQUksRUFBRSxNQUQ2QjtBQUVuQ0gsY0FBWSxFQUFaQSxZQUZtQztBQUduQ00sVUFBUSxFQUFFO0FBQ1JDLGVBQVcsRUFBRSxxQkFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQTZDO0FBQ3hERCxXQUFLLENBQUNQLFVBQU4sR0FBbUJRLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlVCxVQUFsQztBQUNBTyxXQUFLLENBQUNOLE9BQU4sR0FBZ0JPLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlUixPQUEvQjtBQUNBTSxXQUFLLENBQUNMLElBQU4sR0FBYU0sTUFBTSxDQUFDQyxPQUFQLENBQWVQLElBQTVCO0FBQ0Q7QUFMTztBQUh5QixDQUFELENBQTdCO0lBWVFJLFcsR0FBZ0JILFNBQVMsQ0FBQ08sTyxDQUExQkosVzs7QUFDZiwrREFBZUgsU0FBUyxDQUFDUSxPQUF6QiIsImZpbGUiOiIuL3N0b3JlL3VzZXJTbGljZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxudHlwZSBVc2VyU3RhdGUgPSB7XG4gIGlzTG9nZ2VkSW46IGJvb2xlYW47XG4gIHVzZXJJbWc6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyU3RhdGUgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICB1c2VySW1nOiBcIlwiLFxuICBuYW1lOiBcIlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJ1c2VyXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRVc2VySW5mbzogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248VXNlclN0YXRlPikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2dnZWRJbiA9IGFjdGlvbi5wYXlsb2FkLmlzTG9nZ2VkSW47XG4gICAgICBzdGF0ZS51c2VySW1nID0gYWN0aW9uLnBheWxvYWQudXNlckltZztcbiAgICAgIHN0YXRlLm5hbWUgPSBhY3Rpb24ucGF5bG9hZC5uYW1lO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0VXNlckluZm8gfSA9IHVzZXJTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/userSlice.ts\n");

/***/ })

});