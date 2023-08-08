/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/users/[id]";
exports.ids = ["pages/users/[id]"];
exports.modules = {

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ User; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_user_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/user.module.scss */ \"./styles/user.module.scss\");\n/* harmony import */ var _styles_user_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n\nvar _jsxFileName = \"/home/rocketjet/Dev/Projects/React_Practice/Next.js/next-course/pages/users/[id].js\";\n\n\n\nfunction User({\n  user\n}) {\n  const {\n    query\n  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_2__.default, {\n    keywords: user.name,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_3___default().user),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: [\"\\u041F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044C c id \", query.id]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\"\\u0418\\u043C\\u044F \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F - \", user.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n}\n;\nasync function getServerSideProps({\n  params\n}) {\n  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);\n  const user = await response.json();\n  return {\n    props: {\n      user\n    } // will be passed to the page component as props\n\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWZ1bGwvLi9wYWdlcy91c2Vycy9baWRdLmpzPzJjZWIiXSwibmFtZXMiOlsiVXNlciIsInVzZXIiLCJxdWVyeSIsInVzZVJvdXRlciIsIm5hbWUiLCJzdHlsZXMiLCJpZCIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxDQUFjO0FBQUNDO0FBQUQsQ0FBZCxFQUFzQjtBQUNqQyxRQUFNO0FBQUNDO0FBQUQsTUFBVUMsc0RBQVMsRUFBekI7QUFDQSxzQkFDSSw4REFBQyw4REFBRDtBQUFlLFlBQVEsRUFBRUYsSUFBSSxDQUFDRyxJQUE5QjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFQyxzRUFBaEI7QUFBQSw4QkFDSTtBQUFBLHFHQUF1QkgsS0FBSyxDQUFDSSxFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEscUhBQXlCTCxJQUFJLENBQUNHLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIO0FBQUE7QUFFTSxlQUFlRyxrQkFBZixDQUFrQztBQUFDQztBQUFELENBQWxDLEVBQTRDO0FBQy9DLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsOENBQTZDRixNQUFNLENBQUNGLEVBQUcsRUFBekQsQ0FBNUI7QUFDQSxRQUFNTCxJQUFJLEdBQUcsTUFBTVEsUUFBUSxDQUFDRSxJQUFULEVBQW5CO0FBQ0EsU0FBTztBQUNIQyxTQUFLLEVBQUU7QUFBQ1g7QUFBRCxLQURKLENBQ1k7O0FBRFosR0FBUDtBQUdIIiwiZmlsZSI6Ii4vcGFnZXMvdXNlcnMvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3VzZXIubW9kdWxlLnNjc3MnXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIoe3VzZXJ9KSB7XG4gICAgY29uc3Qge3F1ZXJ5fSA9IHVzZVJvdXRlcigpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1haW5Db250YWluZXIga2V5d29yZHM9e3VzZXIubmFtZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJ9PlxuICAgICAgICAgICAgICAgIDxoMT7Qn9C+0LvRjNC30L7QstCw0YLQtdC70YwgYyBpZCB7cXVlcnkuaWR9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PtCY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8gLSB7dXNlci5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTWFpbkNvbnRhaW5lcj5cbiAgICApXG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXN9KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLyR7cGFyYW1zLmlkfWApXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7dXNlcn0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ }),

/***/ "./styles/user.module.scss":
/*!*********************************!*\
  !*** ./styles/user.module.scss ***!
  \*********************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"user\": \"user_user__rg29t\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWZ1bGwvLi9zdHlsZXMvdXNlci5tb2R1bGUuc2Nzcz81YTdiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL3VzZXIubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ1c2VyXCI6IFwidXNlcl91c2VyX19yZzI5dFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/user.module.scss\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_MainContainer_js"], function() { return __webpack_exec__("./pages/users/[id].js"); });
module.exports = __webpack_exports__;

})();