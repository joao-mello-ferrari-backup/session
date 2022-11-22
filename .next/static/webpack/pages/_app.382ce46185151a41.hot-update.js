"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./contexts/authContext.tsx":
/*!**********************************!*\
  !*** ./contexts/authContext.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apiClient */ \"./services/apiClient.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nlet signOutChannel;\nconst instanceId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)();\nfunction signOut() {\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n    // Router.push('/');\n    signOutChannel.postMessage(\"signOut.\".concat(instanceId));\n}\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider(param) {\n    let { children  } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(instanceId);\n        signOutChannel = new BroadcastChannel(\"signOut\");\n        signOutChannel.onmessage = (object)=>{\n            const [message, senderId] = object.data.spit(\".\");\n            console.log(message, senderId);\n        // switch(message.data){\n        //   case 'signOut':\n        //     // Router.push('/')\n        //     console.log(312312321)\n        //     signOut();\n        //     break;\n        //   default: \n        //     break;\n        // }\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/me\").then((response)=>{\n                const { email , permissions , roles  } = response.data;\n                setUser({\n                    email,\n                    permissions,\n                    roles\n                });\n            }).catch(()=>{\n                if (true) {\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n                    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n                }\n            });\n        }\n    }, []);\n    const isLogged = !!user;\n    async function signIn(credentials) {\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/sessions\", credentials);\n            const { token , refreshToken , permissions , roles  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.refreshToken\", refreshToken, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            setUser({\n                email: credentials.email,\n                permissions,\n                roles\n            });\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.common.Authorization = \"Bearer \".concat(token);\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n        } catch (e) {}\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLogged,\n            signIn,\n            signOut,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/joaomello/Desktop/session/contexts/authContext.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"QP9GMK65QdCPEapYPtd0YTBDr9Q=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3g/NTYxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlDbGllbnRcIjtcbmltcG9ydCB7IHNldENvb2tpZSwgcGFyc2VDb29raWVzLCBkZXN0cm95Q29va2llIH0gZnJvbSAnbm9va2llcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnXG5cbnR5cGUgU2lnbkluQ3JlZGVudGlhbHMgPSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbnR5cGUgQXV0aENvbnRleHREYXRhID0ge1xuICBpc0xvZ2dlZDogYm9vbGVhbjtcbiAgc2lnbkluKGNyZWRlbnRpYWxzOiBTaWduSW5DcmVkZW50aWFscyk6IFByb21pc2U8dm9pZD47XG4gIHNpZ25PdXQoKTogdm9pZDtcbiAgdXNlcjogVXNlciB8IHVuZGVmaW5lZDtcbn1cblxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxudHlwZSBVc2VyID0ge1xuICBlbWFpbDogc3RyaW5nO1xuICBwZXJtaXNzaW9uczogc3RyaW5nW107XG4gIHJvbGVzOiBzdHJpbmdbXTtcbn1cblxubGV0IHNpZ25PdXRDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuY29uc3QgaW5zdGFuY2VJZCA9IHY0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KCl7XG4gIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgudG9rZW4nKTtcbiAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nKTtcbiAgLy8gUm91dGVyLnB1c2goJy8nKTtcbiAgc2lnbk91dENoYW5uZWwucG9zdE1lc3NhZ2UoYHNpZ25PdXQuJHtpbnN0YW5jZUlkfWApO1xufVxuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIEF1dGhDb250ZXh0RGF0YSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBBdXRoUHJvdmlkZXJQcm9wcyApe1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyPigpO1xuICBcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc29sZS5sb2coaW5zdGFuY2VJZClcbiAgICBzaWduT3V0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKCdzaWduT3V0Jyk7XG4gICAgc2lnbk91dENoYW5uZWwub25tZXNzYWdlID0gKG9iamVjdCkgPT4ge1xuICAgICAgY29uc3QgW21lc3NhZ2Usc2VuZGVySWRdID0gb2JqZWN0LmRhdGEuc3BpdCgnLicpO1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSwgc2VuZGVySWQpXG4gICAgICAvLyBzd2l0Y2gobWVzc2FnZS5kYXRhKXtcbiAgICAgIC8vICAgY2FzZSAnc2lnbk91dCc6XG4gICAgICAvLyAgICAgLy8gUm91dGVyLnB1c2goJy8nKVxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKDMxMjMxMjMyMSlcbiAgICAgIC8vICAgICBzaWduT3V0KCk7XG4gICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAvLyAgIGRlZmF1bHQ6IFxuICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgLy8gfVxuICAgIH1cbiAgfSxbXSlcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCB7ICduZXh0YXV0aC50b2tlbic6IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoKTtcblxuICAgIGlmKHRva2VuKXtcbiAgICAgICAgYXBpLmdldCgnL21lJykudGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgIGNvbnN0IHsgZW1haWwsIHBlcm1pc3Npb25zLCByb2xlcyB9ID0gcmVzcG9uc2UuZGF0YTtcbiAgXG4gICAgICAgICAgc2V0VXNlcih7IGVtYWlsLCBwZXJtaXNzaW9ucywgcm9sZXMgfSlcbiAgICAgICAgfSkuY2F0Y2goKCk9PntcbiAgICAgICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC50b2tlbicpO1xuICAgICAgICAgICAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nKTtcbiAgXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sW10pO1xuXG4gIGNvbnN0IGlzTG9nZ2VkID0gISF1c2VyO1xuICBcbiAgYXN5bmMgZnVuY3Rpb24gc2lnbkluKGNyZWRlbnRpYWxzOiBTaWduSW5DcmVkZW50aWFscyl7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnL3Nlc3Npb25zJywgY3JlZGVudGlhbHMpO1xuICAgICAgXG4gICAgICBjb25zdCB7IHRva2VuLCByZWZyZXNoVG9rZW4sIHBlcm1pc3Npb25zLCByb2xlcyB9ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIFxuICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnRva2VuJywgdG9rZW4sIHtcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICAgICAgcGF0aDogJy8nXG4gICAgICB9KTtcbiAgICAgIHNldENvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nLCByZWZyZXNoVG9rZW4sIHtcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICAgICAgcGF0aDogJy8nXG4gICAgICB9KTtcblxuICAgICAgc2V0VXNlcih7XG4gICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgcGVybWlzc2lvbnMsXG4gICAgICAgIHJvbGVzXG4gICAgICB9KTtcblxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcblxuICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICB9IGNhdGNoe1xuXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2lzTG9nZ2VkLCBzaWduSW4sIHNpZ25PdXQsIHVzZXJ9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwic2V0Q29va2llIiwicGFyc2VDb29raWVzIiwiZGVzdHJveUNvb2tpZSIsIlJvdXRlciIsInY0Iiwic2lnbk91dENoYW5uZWwiLCJpbnN0YW5jZUlkIiwic2lnbk91dCIsInVuZGVmaW5lZCIsInBvc3RNZXNzYWdlIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiY29uc29sZSIsImxvZyIsIkJyb2FkY2FzdENoYW5uZWwiLCJvbm1lc3NhZ2UiLCJvYmplY3QiLCJtZXNzYWdlIiwic2VuZGVySWQiLCJkYXRhIiwic3BpdCIsInRva2VuIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZW1haWwiLCJwZXJtaXNzaW9ucyIsInJvbGVzIiwiY2F0Y2giLCJwdXNoIiwiaXNMb2dnZWQiLCJzaWduSW4iLCJjcmVkZW50aWFscyIsInBvc3QiLCJyZWZyZXNoVG9rZW4iLCJtYXhBZ2UiLCJwYXRoIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/authContext.tsx\n"));

/***/ })

});