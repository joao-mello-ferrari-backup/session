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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apiClient */ \"./services/apiClient.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nlet authChannel;\nconst instanceId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)();\nfunction signOut() {\n    let shouldAllowBroadcast = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n    if (shouldAllowBroadcast) authChannel.postMessage(\"signOut\\xdf\".concat(instanceId));\n    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n}\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider(param) {\n    let { children  } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        authChannel = new BroadcastChannel(\"signOut\");\n        authChannel.onmessage = (object)=>{\n            const [message, senderId, payload] = object.data.split(\"\\xdf\");\n            if (senderId === instanceId) return;\n            switch(message){\n                case \"signOut\":\n                    signOut(false);\n                    break;\n                case \"signIn\":\n                    const { \"nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)(undefined);\n                    _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.common.Authorization = \"Bearer \".concat(token);\n                    setUser(JSON.parse(payload));\n                    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n                    break;\n                default:\n                    break;\n            }\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/me\").then((response)=>{\n                const { email , permissions , roles  } = response.data;\n                setUser({\n                    email,\n                    permissions,\n                    roles\n                });\n            }).catch(()=>{\n                if (true) {\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n                    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n                }\n            });\n        }\n    }, []);\n    const isLogged = !!user;\n    async function signIn(credentials) {\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/sessions\", credentials);\n            const { token , refreshToken , permissions , roles  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.refreshToken\", refreshToken, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            const freshUser = {\n                email: credentials.email,\n                permissions,\n                roles\n            };\n            setUser(freshUser);\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.common.Authorization = \"Bearer \".concat(token);\n            authChannel.postMessage(\"signIn\\xdf\".concat(instanceId, \"\\xdf\").concat(JSON.stringify(freshUser)));\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n        } catch (e) {}\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLogged,\n            signIn,\n            signOut,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/joaomello/Desktop/session/contexts/authContext.tsx\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"QP9GMK65QdCPEapYPtd0YTBDr9Q=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkIsWUFBVyxRQUE2QixPQUExQnVCLEtBQUtpQixTQUFTLENBQUNEO1lBRS9EMUMsdURBQVcsQ0FBQztRQUNkLEVBQUUsVUFBSyxDQUVQO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1MsWUFBWW1DLFFBQVE7UUFBQ0MsT0FBTztZQUFDVjtZQUFVQztZQUFRaEM7WUFBU1E7UUFBSTtrQkFDMUREOzs7Ozs7QUFHUCxDQUFDO0dBckZlRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0cy9hdXRoQ29udGV4dC50c3g/NTYxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlDbGllbnRcIjtcbmltcG9ydCB7IHNldENvb2tpZSwgcGFyc2VDb29raWVzLCBkZXN0cm95Q29va2llIH0gZnJvbSAnbm9va2llcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XG5cbnR5cGUgU2lnbkluQ3JlZGVudGlhbHMgPSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbnR5cGUgQXV0aENvbnRleHREYXRhID0ge1xuICBpc0xvZ2dlZDogYm9vbGVhbjtcbiAgc2lnbkluKGNyZWRlbnRpYWxzOiBTaWduSW5DcmVkZW50aWFscyk6IFByb21pc2U8dm9pZD47XG4gIHNpZ25PdXQoc2hvdWxkQWxsb3dCcm9hZGNhc3Q/OiBib29sZWFuKTogdm9pZDtcbiAgdXNlcjogVXNlciB8IHVuZGVmaW5lZDtcbn1cblxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxudHlwZSBVc2VyID0ge1xuICBlbWFpbDogc3RyaW5nO1xuICBwZXJtaXNzaW9uczogc3RyaW5nW107XG4gIHJvbGVzOiBzdHJpbmdbXTtcbn1cblxubGV0IGF1dGhDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuY29uc3QgaW5zdGFuY2VJZCA9IHY0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KHNob3VsZEFsbG93QnJvYWRjYXN0ID0gdHJ1ZSl7XG4gIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgudG9rZW4nKTtcbiAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nKTtcblxuICBpZihzaG91bGRBbGxvd0Jyb2FkY2FzdClcbiAgICBhdXRoQ2hhbm5lbC5wb3N0TWVzc2FnZShgc2lnbk91dMOfJHtpbnN0YW5jZUlkfWApO1xuXG4gIFJvdXRlci5wdXNoKCcvJyk7XG59XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IEF1dGhQcm92aWRlclByb3BzICl7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXI+KCk7XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgYXV0aENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnc2lnbk91dCcpO1xuICAgIGF1dGhDaGFubmVsLm9ubWVzc2FnZSA9IChvYmplY3QpID0+IHtcbiAgICAgIGNvbnN0IFttZXNzYWdlLHNlbmRlcklkLHBheWxvYWRdID0gb2JqZWN0LmRhdGEuc3BsaXQoJ8OfJyk7XG5cbiAgICAgIGlmKHNlbmRlcklkID09PSBpbnN0YW5jZUlkKSByZXR1cm47XG5cbiAgICAgIHN3aXRjaChtZXNzYWdlKXtcbiAgICAgICAgY2FzZSAnc2lnbk91dCc6XG4gICAgICAgICAgc2lnbk91dChmYWxzZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NpZ25Jbic6XG4gICAgICAgICAgY29uc3QgeyAnbmV4dGF1dGgudG9rZW4nOiB0b2tlbiB9ID0gcGFyc2VDb29raWVzKHVuZGVmaW5lZCk7XG4gICAgICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcbiAgICAgICAgICBzZXRVc2VyKEpTT04ucGFyc2UocGF5bG9hZCkpO1xuICAgICAgICAgIFJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJylcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LFtdKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCB7ICduZXh0YXV0aC50b2tlbic6IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoKTtcblxuICAgIGlmKHRva2VuKXtcbiAgICAgIGFwaS5nZXQoJy9tZScpLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGVybWlzc2lvbnMsIHJvbGVzIH0gPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgIHNldFVzZXIoeyBlbWFpbCwgcGVybWlzc2lvbnMsIHJvbGVzIH0pXG4gICAgICB9KS5jYXRjaCgoKT0+e1xuICAgICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgudG9rZW4nKTtcbiAgICAgICAgICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicpO1xuXG4gICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sW10pO1xuXG4gIGNvbnN0IGlzTG9nZ2VkID0gISF1c2VyO1xuICBcbiAgYXN5bmMgZnVuY3Rpb24gc2lnbkluKGNyZWRlbnRpYWxzOiBTaWduSW5DcmVkZW50aWFscyl7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnL3Nlc3Npb25zJywgY3JlZGVudGlhbHMpO1xuICAgICAgXG4gICAgICBjb25zdCB7IHRva2VuLCByZWZyZXNoVG9rZW4sIHBlcm1pc3Npb25zLCByb2xlcyB9ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIFxuICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnRva2VuJywgdG9rZW4sIHtcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICAgICAgcGF0aDogJy8nXG4gICAgICB9KTtcbiAgICAgIHNldENvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nLCByZWZyZXNoVG9rZW4sIHtcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICAgICAgcGF0aDogJy8nXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgY29uc3QgZnJlc2hVc2VyID0ge1xuICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwsXG4gICAgICAgIHBlcm1pc3Npb25zLFxuICAgICAgICByb2xlc1xuICAgICAgfTtcblxuICAgICAgc2V0VXNlcihmcmVzaFVzZXIpO1xuXG4gICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuICAgICAgXG4gICAgICBhdXRoQ2hhbm5lbC5wb3N0TWVzc2FnZShgc2lnbkluw58ke2luc3RhbmNlSWR9w58ke0pTT04uc3RyaW5naWZ5KGZyZXNoVXNlcil9YCk7XG5cbiAgICAgIFJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XG4gICAgfSBjYXRjaHtcblxuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tpc0xvZ2dlZCwgc2lnbkluLCBzaWduT3V0LCB1c2VyfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwaSIsInNldENvb2tpZSIsInBhcnNlQ29va2llcyIsImRlc3Ryb3lDb29raWUiLCJSb3V0ZXIiLCJ2NCIsImF1dGhDaGFubmVsIiwiaW5zdGFuY2VJZCIsInNpZ25PdXQiLCJzaG91bGRBbGxvd0Jyb2FkY2FzdCIsInVuZGVmaW5lZCIsInBvc3RNZXNzYWdlIiwicHVzaCIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsIkJyb2FkY2FzdENoYW5uZWwiLCJvbm1lc3NhZ2UiLCJvYmplY3QiLCJtZXNzYWdlIiwic2VuZGVySWQiLCJwYXlsb2FkIiwiZGF0YSIsInNwbGl0IiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJKU09OIiwicGFyc2UiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJlbWFpbCIsInBlcm1pc3Npb25zIiwicm9sZXMiLCJjYXRjaCIsImlzTG9nZ2VkIiwic2lnbkluIiwiY3JlZGVudGlhbHMiLCJwb3N0IiwicmVmcmVzaFRva2VuIiwibWF4QWdlIiwicGF0aCIsImZyZXNoVXNlciIsInN0cmluZ2lmeSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/authContext.tsx\n"));

/***/ })

});