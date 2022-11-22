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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apiClient */ \"./services/apiClient.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nlet authChannel;\nconst instanceId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)();\nfunction signOut() {\n    let shouldAllowBroadcast = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n    if (shouldAllowBroadcast) authChannel.postMessage(\"signOut\\xdf\".concat(instanceId));\n    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n}\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider(param) {\n    let { children  } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        authChannel = new BroadcastChannel(\"signOut\");\n        authChannel.onmessage = (object)=>{\n            const [message, senderId, payload] = object.data.split(\"\\xdf\");\n            if (senderId === instanceId) return;\n            switch(message){\n                case \"signOut\":\n                    signOut(false);\n                    break;\n                case \"signIn\":\n                    console.log(payload);\n                    setUser(JSON.parse(payload));\n                    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n                    break;\n                default:\n                    break;\n            }\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/me\").then((response)=>{\n                const { email , permissions , roles  } = response.data;\n                setUser({\n                    email,\n                    permissions,\n                    roles\n                });\n            }).catch(()=>{\n                if (true) {\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n                    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n                }\n            });\n        }\n    }, []);\n    const isLogged = !!user;\n    async function signIn(credentials) {\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/sessions\", credentials);\n            const { token , refreshToken , permissions , roles  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.refreshToken\", refreshToken, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            const freshUser = {\n                email: credentials.email,\n                permissions,\n                roles\n            };\n            setUser(freshUser);\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.common.Authorization = \"Bearer \".concat(token);\n            authChannel.postMessage(\"signIn\\xdf\".concat(instanceId, \"\\xdf\").concat(JSON.stringify(freshUser)));\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n        } catch (e) {}\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLogged,\n            signIn,\n            signOut,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/joaomello/Desktop/session/contexts/authContext.tsx\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"QP9GMK65QdCPEapYPtd0YTBDr9Q=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsVUFBSyxDQUVQO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1MsWUFBWXFDLFFBQVE7UUFBQ0MsT0FBTztZQUFDYjtZQUFVQztZQUFRL0I7WUFBU1E7UUFBSTtrQkFDMUREOzs7Ozs7QUFHUCxDQUFDO0dBcEZlRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0cy9hdXRoQ29udGV4dC50c3g/NTYxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlDbGllbnRcIjtcbmltcG9ydCB7IHNldENvb2tpZSwgcGFyc2VDb29raWVzLCBkZXN0cm95Q29va2llIH0gZnJvbSAnbm9va2llcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnXG5cbnR5cGUgU2lnbkluQ3JlZGVudGlhbHMgPSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbnR5cGUgQXV0aENvbnRleHREYXRhID0ge1xuICBpc0xvZ2dlZDogYm9vbGVhbjtcbiAgc2lnbkluKGNyZWRlbnRpYWxzOiBTaWduSW5DcmVkZW50aWFscyk6IFByb21pc2U8dm9pZD47XG4gIHNpZ25PdXQoc2hvdWxkQWxsb3dCcm9hZGNhc3Q/OiBib29sZWFuKTogdm9pZDtcbiAgdXNlcjogVXNlciB8IHVuZGVmaW5lZDtcbn1cblxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxudHlwZSBVc2VyID0ge1xuICBlbWFpbDogc3RyaW5nO1xuICBwZXJtaXNzaW9uczogc3RyaW5nW107XG4gIHJvbGVzOiBzdHJpbmdbXTtcbn1cblxubGV0IGF1dGhDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuY29uc3QgaW5zdGFuY2VJZCA9IHY0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KHNob3VsZEFsbG93QnJvYWRjYXN0ID0gdHJ1ZSl7XG4gIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgudG9rZW4nKTtcbiAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nKTtcblxuICBpZihzaG91bGRBbGxvd0Jyb2FkY2FzdClcbiAgICBhdXRoQ2hhbm5lbC5wb3N0TWVzc2FnZShgc2lnbk91dMOfJHtpbnN0YW5jZUlkfWApO1xuXG4gIFJvdXRlci5wdXNoKCcvJyk7XG59XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IEF1dGhQcm92aWRlclByb3BzICl7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXI+KCk7XG4gIFxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBhdXRoQ2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKCdzaWduT3V0Jyk7XG4gICAgYXV0aENoYW5uZWwub25tZXNzYWdlID0gKG9iamVjdCkgPT4ge1xuICAgICAgY29uc3QgW21lc3NhZ2Usc2VuZGVySWQscGF5bG9hZF0gPSBvYmplY3QuZGF0YS5zcGxpdCgnw58nKTtcblxuICAgICAgaWYoc2VuZGVySWQgPT09IGluc3RhbmNlSWQpIHJldHVybjtcblxuICAgICAgc3dpdGNoKG1lc3NhZ2Upe1xuICAgICAgICBjYXNlICdzaWduT3V0JzpcbiAgICAgICAgICBzaWduT3V0KGZhbHNlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2lnbkluJzpcbiAgICAgICAgICBjb25zb2xlLmxvZyhwYXlsb2FkKVxuICAgICAgICAgIHNldFVzZXIoSlNPTi5wYXJzZShwYXlsb2FkKSk7XG4gICAgICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sW10pO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IHsgJ25leHRhdXRoLnRva2VuJzogdG9rZW4gfSA9IHBhcnNlQ29va2llcygpO1xuXG4gICAgaWYodG9rZW4pe1xuICAgICAgYXBpLmdldCgnL21lJykudGhlbihyZXNwb25zZT0+e1xuICAgICAgICBjb25zdCB7IGVtYWlsLCBwZXJtaXNzaW9ucywgcm9sZXMgfSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgc2V0VXNlcih7IGVtYWlsLCBwZXJtaXNzaW9ucywgcm9sZXMgfSlcbiAgICAgIH0pLmNhdGNoKCgpPT57XG4gICAgICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC50b2tlbicpO1xuICAgICAgICAgIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgucmVmcmVzaFRva2VuJyk7XG5cbiAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxbXSk7XG5cbiAgY29uc3QgaXNMb2dnZWQgPSAhIXVzZXI7XG4gIFxuICBhc3luYyBmdW5jdGlvbiBzaWduSW4oY3JlZGVudGlhbHM6IFNpZ25JbkNyZWRlbnRpYWxzKXtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvc2Vzc2lvbnMnLCBjcmVkZW50aWFscyk7XG4gICAgICBcbiAgICAgIGNvbnN0IHsgdG9rZW4sIHJlZnJlc2hUb2tlbiwgcGVybWlzc2lvbnMsIHJvbGVzIH0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgXG4gICAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgudG9rZW4nLCB0b2tlbiwge1xuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgICAgICBwYXRoOiAnLydcbiAgICAgIH0pO1xuICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicsIHJlZnJlc2hUb2tlbiwge1xuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgICAgICBwYXRoOiAnLydcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBjb25zdCBmcmVzaFVzZXIgPSB7XG4gICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgcGVybWlzc2lvbnMsXG4gICAgICAgIHJvbGVzXG4gICAgICB9O1xuXG4gICAgICBzZXRVc2VyKGZyZXNoVXNlcik7XG5cbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgICBcbiAgICAgIGF1dGhDaGFubmVsLnBvc3RNZXNzYWdlKGBzaWduSW7DnyR7aW5zdGFuY2VJZH3DnyR7SlNPTi5zdHJpbmdpZnkoZnJlc2hVc2VyKX1gKTtcblxuICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICB9IGNhdGNoe1xuXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2lzTG9nZ2VkLCBzaWduSW4sIHNpZ25PdXQsIHVzZXJ9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwic2V0Q29va2llIiwicGFyc2VDb29raWVzIiwiZGVzdHJveUNvb2tpZSIsIlJvdXRlciIsInY0IiwiYXV0aENoYW5uZWwiLCJpbnN0YW5jZUlkIiwic2lnbk91dCIsInNob3VsZEFsbG93QnJvYWRjYXN0IiwidW5kZWZpbmVkIiwicG9zdE1lc3NhZ2UiLCJwdXNoIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiQnJvYWRjYXN0Q2hhbm5lbCIsIm9ubWVzc2FnZSIsIm9iamVjdCIsIm1lc3NhZ2UiLCJzZW5kZXJJZCIsInBheWxvYWQiLCJkYXRhIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIiwidG9rZW4iLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJlbWFpbCIsInBlcm1pc3Npb25zIiwicm9sZXMiLCJjYXRjaCIsImlzTG9nZ2VkIiwic2lnbkluIiwiY3JlZGVudGlhbHMiLCJwb3N0IiwicmVmcmVzaFRva2VuIiwibWF4QWdlIiwicGF0aCIsImZyZXNoVXNlciIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsInN0cmluZ2lmeSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/authContext.tsx\n"));

/***/ })

});