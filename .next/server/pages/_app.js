/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__.createClient)(\"https://muckyytxwzfrtlkiydjf.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11Y2t5eXR4d3pmcnRsa2l5ZGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1NzI3ODEsImV4cCI6MjA0OTE0ODc4MX0.CQU74shD5wWhayd3LsVCRcEeI4rajGqYephPM0Odu_4\");\nfunction MyApp({ Component, pageProps }) {\n    const [session, setSession] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            const s = supabase.auth.getSession().then({\n                \"MyApp.useEffect.s\": ({ data })=>{\n                    setSession(data.session);\n                }\n            }[\"MyApp.useEffect.s\"]);\n            const { subscription } = supabase.auth.onAuthStateChange({\n                \"MyApp.useEffect\": (_event, session)=>{\n                    setSession(session);\n                }\n            }[\"MyApp.useEffect\"]);\n            return ({\n                \"MyApp.useEffect\": ()=>{\n                    subscription?.unsubscribe();\n                }\n            })[\"MyApp.useEffect\"];\n        }\n    }[\"MyApp.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        session: session,\n        supabase: supabase\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Abstract\\\\construction-calculator-app\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 28,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNhO0FBQ1M7QUFDYjtBQUV4QyxNQUFNSSxXQUFXRixtRUFBWUEsQ0FDM0JHLDBDQUFvQyxFQUNwQ0Esa05BQXlDO0FBRzNDLFNBQVNJLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDO0lBRXZDQyxnREFBU0E7MkJBQUM7WUFDUixNQUFNYSxJQUFJVixTQUFTVyxJQUFJLENBQUNDLFVBQVUsR0FBR0MsSUFBSTtxQ0FBQyxDQUFDLEVBQUVDLElBQUksRUFBRTtvQkFDakRMLFdBQVdLLEtBQUtOLE9BQU87Z0JBQ3pCOztZQUVBLE1BQU0sRUFBRU8sWUFBWSxFQUFFLEdBQUdmLFNBQVNXLElBQUksQ0FBQ0ssaUJBQWlCO21DQUFDLENBQUNDLFFBQVFUO29CQUNoRUMsV0FBV0Q7Z0JBQ2I7O1lBRUE7bUNBQU87b0JBQ0xPLGNBQWNHO2dCQUNoQjs7UUFDRjswQkFBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNaO1FBQVcsR0FBR0MsU0FBUztRQUFFQyxTQUFTQTtRQUFTUixVQUFVQTs7Ozs7O0FBQy9EO0FBRUEsaUVBQWVLLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWJzdHJhY3RcXGNvbnN0cnVjdGlvbi1jYWxjdWxhdG9yLWFwcFxcZnJvbnRlbmRcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoXHJcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxyXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZXHJcbik7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHMgPSBzdXBhYmFzZS5hdXRoLmdldFNlc3Npb24oKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICBzZXRTZXNzaW9uKGRhdGEuc2Vzc2lvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IHN1YnNjcmlwdGlvbiB9ID0gc3VwYWJhc2UuYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZSgoX2V2ZW50LCBzZXNzaW9uKSA9PiB7XHJcbiAgICAgIHNldFNlc3Npb24oc2Vzc2lvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBzZXNzaW9uPXtzZXNzaW9ufSBzdXBhYmFzZT17c3VwYWJhc2V9IC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlQ2xpZW50IiwidXNlUm91dGVyIiwic3VwYWJhc2UiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJzZXRTZXNzaW9uIiwicyIsImF1dGgiLCJnZXRTZXNzaW9uIiwidGhlbiIsImRhdGEiLCJzdWJzY3JpcHRpb24iLCJvbkF1dGhTdGF0ZUNoYW5nZSIsIl9ldmVudCIsInVuc3Vic2NyaWJlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();