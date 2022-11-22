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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apiClient */ \"./services/apiClient.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nlet signOutChannel;\nconst instanceId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)();\nfunction signOut() {\n    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;\n    console.log(a);\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n    if (!a) {\n        signOutChannel.postMessage(\"signOut.\".concat(instanceId));\n    }\n    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n}\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider(param) {\n    let { children  } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        signOutChannel = new BroadcastChannel(\"signOut\");\n        signOutChannel.onmessage = (object)=>{\n            const [message, senderId] = object.data.split(\".\");\n            if (senderId === instanceId) return;\n            console.log(12312321);\n            switch(message){\n                case \"signOut\":\n                    signOut(true);\n                    break;\n                default:\n                    break;\n            }\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/me\").then((response)=>{\n                const { email , permissions , roles  } = response.data;\n                setUser({\n                    email,\n                    permissions,\n                    roles\n                });\n            }).catch(()=>{\n                if (true) {\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n                    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n                }\n            });\n        }\n    }, []);\n    const isLogged = !!user;\n    async function signIn(credentials) {\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/sessions\", credentials);\n            const { token , refreshToken , permissions , roles  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.refreshToken\", refreshToken, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            setUser({\n                email: credentials.email,\n                permissions,\n                roles\n            });\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.common.Authorization = \"Bearer \".concat(token);\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n        } catch (e) {}\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLogged,\n            signIn,\n            signOut,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/joaomello/Desktop/session/contexts/authContext.tsx\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"QP9GMK65QdCPEapYPtd0YTBDr9Q=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL19OX0UvLi9jb250ZXh0cy9hdXRoQ29udGV4dC50c3g/NTYxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlDbGllbnRcIjtcbmltcG9ydCB7IHNldENvb2tpZSwgcGFyc2VDb29raWVzLCBkZXN0cm95Q29va2llIH0gZnJvbSAnbm9va2llcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnXG5cbnR5cGUgU2lnbkluQ3JlZGVudGlhbHMgPSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbnR5cGUgQXV0aENvbnRleHREYXRhID0ge1xuICBpc0xvZ2dlZDogYm9vbGVhbjtcbiAgc2lnbkluKGNyZWRlbnRpYWxzOiBTaWduSW5DcmVkZW50aWFscyk6IFByb21pc2U8dm9pZD47XG4gIHNpZ25PdXQoKTogdm9pZDtcbiAgdXNlcjogVXNlciB8IHVuZGVmaW5lZDtcbn1cblxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxudHlwZSBVc2VyID0ge1xuICBlbWFpbDogc3RyaW5nO1xuICBwZXJtaXNzaW9uczogc3RyaW5nW107XG4gIHJvbGVzOiBzdHJpbmdbXTtcbn1cblxubGV0IHNpZ25PdXRDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuY29uc3QgaW5zdGFuY2VJZCA9IHY0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KGE6Ym9vbGVhbiA9IGZhbHNlKXtcbiAgY29uc29sZS5sb2coYSlcbiAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC50b2tlbicpO1xuICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicpO1xuICBpZighYSl7c2lnbk91dENoYW5uZWwucG9zdE1lc3NhZ2UoYHNpZ25PdXQuJHtpbnN0YW5jZUlkfWApO31cbiAgUm91dGVyLnB1c2goJy8nKTtcbn1cblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dERhdGEpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogQXV0aFByb3ZpZGVyUHJvcHMgKXtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlcj4oKTtcbiAgXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIHNpZ25PdXRDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ3NpZ25PdXQnKTtcbiAgICBzaWduT3V0Q2hhbm5lbC5vbm1lc3NhZ2UgPSAob2JqZWN0KSA9PiB7XG4gICAgICBjb25zdCBbbWVzc2FnZSxzZW5kZXJJZF0gPSBvYmplY3QuZGF0YS5zcGxpdCgnLicpO1xuICAgICAgaWYoc2VuZGVySWQgPT09IGluc3RhbmNlSWQpIHJldHVybjtcblxuICAgICAgY29uc29sZS5sb2coMTIzMTIzMjEpXG5cbiAgICAgIHN3aXRjaChtZXNzYWdlKXtcbiAgICAgICAgY2FzZSAnc2lnbk91dCc6XG4gICAgICAgICAgc2lnbk91dCh0cnVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LFtdKVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IHsgJ25leHRhdXRoLnRva2VuJzogdG9rZW4gfSA9IHBhcnNlQ29va2llcygpO1xuXG4gICAgaWYodG9rZW4pe1xuICAgICAgICBhcGkuZ2V0KCcvbWUnKS50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgICAgY29uc3QgeyBlbWFpbCwgcGVybWlzc2lvbnMsIHJvbGVzIH0gPSByZXNwb25zZS5kYXRhO1xuICBcbiAgICAgICAgICBzZXRVc2VyKHsgZW1haWwsIHBlcm1pc3Npb25zLCByb2xlcyB9KVxuICAgICAgICB9KS5jYXRjaCgoKT0+e1xuICAgICAgICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnRva2VuJyk7XG4gICAgICAgICAgICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicpO1xuICBcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxbXSk7XG5cbiAgY29uc3QgaXNMb2dnZWQgPSAhIXVzZXI7XG4gIFxuICBhc3luYyBmdW5jdGlvbiBzaWduSW4oY3JlZGVudGlhbHM6IFNpZ25JbkNyZWRlbnRpYWxzKXtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvc2Vzc2lvbnMnLCBjcmVkZW50aWFscyk7XG4gICAgICBcbiAgICAgIGNvbnN0IHsgdG9rZW4sIHJlZnJlc2hUb2tlbiwgcGVybWlzc2lvbnMsIHJvbGVzIH0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgXG4gICAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgudG9rZW4nLCB0b2tlbiwge1xuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgICAgICBwYXRoOiAnLydcbiAgICAgIH0pO1xuICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicsIHJlZnJlc2hUb2tlbiwge1xuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgICAgICBwYXRoOiAnLydcbiAgICAgIH0pO1xuXG4gICAgICBzZXRVc2VyKHtcbiAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICBwZXJtaXNzaW9ucyxcbiAgICAgICAgcm9sZXNcbiAgICAgIH0pO1xuXG4gICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuXG4gICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgIH0gY2F0Y2h7XG5cbiAgICB9XG4gIH1cblxuICByZXR1cm4oXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7aXNMb2dnZWQsIHNpZ25Jbiwgc2lnbk91dCwgdXNlcn19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcGkiLCJzZXRDb29raWUiLCJwYXJzZUNvb2tpZXMiLCJkZXN0cm95Q29va2llIiwiUm91dGVyIiwidjQiLCJzaWduT3V0Q2hhbm5lbCIsImluc3RhbmNlSWQiLCJzaWduT3V0IiwiYSIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJwb3N0TWVzc2FnZSIsInB1c2giLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJCcm9hZGNhc3RDaGFubmVsIiwib25tZXNzYWdlIiwib2JqZWN0IiwibWVzc2FnZSIsInNlbmRlcklkIiwiZGF0YSIsInNwbGl0IiwidG9rZW4iLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJlbWFpbCIsInBlcm1pc3Npb25zIiwicm9sZXMiLCJjYXRjaCIsImlzTG9nZ2VkIiwic2lnbkluIiwiY3JlZGVudGlhbHMiLCJwb3N0IiwicmVmcmVzaFRva2VuIiwibWF4QWdlIiwicGF0aCIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/authContext.tsx\n"));

/***/ })

});