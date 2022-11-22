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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apiClient */ \"./services/apiClient.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nlet authChannel;\nconst instanceId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)();\nfunction signOut() {\n    let shouldAllowBroadcast = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n    if (shouldAllowBroadcast) authChannel.postMessage(\"signOut.\".concat(instanceId));\n    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n}\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider(param) {\n    let { children  } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        authChannel = new BroadcastChannel(\"signOut\");\n        authChannel.onmessage = (object)=>{\n            const [message, senderId, payload] = object.data.split(\".\");\n            if (senderId === instanceId) return;\n            switch(message){\n                case \"signOut\":\n                    signOut(false);\n                    break;\n                case \"signIn\":\n                    setUser(JSON.parse(payload));\n                    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n                    break;\n                default:\n                    break;\n            }\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/me\").then((response)=>{\n                const { email , permissions , roles  } = response.data;\n                setUser({\n                    email,\n                    permissions,\n                    roles\n                });\n            }).catch(()=>{\n                if (true) {\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n                    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n                }\n            });\n        }\n    }, []);\n    const isLogged = !!user;\n    async function signIn(credentials) {\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/sessions\", credentials);\n            const { token , refreshToken , permissions , roles  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.refreshToken\", refreshToken, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            const freshUser = {\n                email: credentials.email,\n                permissions,\n                roles\n            };\n            setUser(freshUser);\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.common.Authorization = \"Bearer \".concat(token);\n            authChannel.postMessage(\"signIn.\".concat(instanceId, \".\").concat(JSON.stringify(freshUser)));\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n        } catch (e) {}\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLogged,\n            signIn,\n            signOut,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/joaomello/Desktop/session/contexts/authContext.tsx\",\n        lineNumber: 123,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"QP9GMK65QdCPEapYPtd0YTBDr9Q=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSw4REFBQ1MsWUFBWW1DLFFBQVE7UUFBQ0MsT0FBTztZQUFDYjtZQUFVQztZQUFRN0I7WUFBU1E7UUFBSTtrQkFDMUREOzs7Ozs7QUFHUCxDQUFDO0dBbkZlRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0cy9hdXRoQ29udGV4dC50c3g/NTYxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlDbGllbnRcIjtcbmltcG9ydCB7IHNldENvb2tpZSwgcGFyc2VDb29raWVzLCBkZXN0cm95Q29va2llIH0gZnJvbSAnbm9va2llcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnXG5cbnR5cGUgU2lnbkluQ3JlZGVudGlhbHMgPSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbnR5cGUgQXV0aENvbnRleHREYXRhID0ge1xuICBpc0xvZ2dlZDogYm9vbGVhbjtcbiAgc2lnbkluKGNyZWRlbnRpYWxzOiBTaWduSW5DcmVkZW50aWFscyk6IFByb21pc2U8dm9pZD47XG4gIHNpZ25PdXQoc2hvdWxkQWxsb3dCcm9hZGNhc3Q/OiBib29sZWFuKTogdm9pZDtcbiAgdXNlcjogVXNlciB8IHVuZGVmaW5lZDtcbn1cblxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxudHlwZSBVc2VyID0ge1xuICBlbWFpbDogc3RyaW5nO1xuICBwZXJtaXNzaW9uczogc3RyaW5nW107XG4gIHJvbGVzOiBzdHJpbmdbXTtcbn1cblxubGV0IGF1dGhDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuY29uc3QgaW5zdGFuY2VJZCA9IHY0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KHNob3VsZEFsbG93QnJvYWRjYXN0ID0gdHJ1ZSl7XG4gIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgudG9rZW4nKTtcbiAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nKTtcblxuICBpZihzaG91bGRBbGxvd0Jyb2FkY2FzdClcbiAgICBhdXRoQ2hhbm5lbC5wb3N0TWVzc2FnZShgc2lnbk91dC4ke2luc3RhbmNlSWR9YCk7XG5cbiAgUm91dGVyLnB1c2goJy8nKTtcbn1cblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dERhdGEpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogQXV0aFByb3ZpZGVyUHJvcHMgKXtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlcj4oKTtcbiAgXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGF1dGhDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ3NpZ25PdXQnKTtcbiAgICBhdXRoQ2hhbm5lbC5vbm1lc3NhZ2UgPSAob2JqZWN0KSA9PiB7XG4gICAgICBjb25zdCBbbWVzc2FnZSxzZW5kZXJJZCxwYXlsb2FkXSA9IG9iamVjdC5kYXRhLnNwbGl0KCcuJyk7XG5cbiAgICAgIGlmKHNlbmRlcklkID09PSBpbnN0YW5jZUlkKSByZXR1cm47XG5cbiAgICAgIHN3aXRjaChtZXNzYWdlKXtcbiAgICAgICAgY2FzZSAnc2lnbk91dCc6XG4gICAgICAgICAgc2lnbk91dChmYWxzZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NpZ25Jbic6XG4gICAgICAgICAgc2V0VXNlcihKU09OLnBhcnNlKHBheWxvYWQpKTtcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSxbXSk7XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc3QgeyAnbmV4dGF1dGgudG9rZW4nOiB0b2tlbiB9ID0gcGFyc2VDb29raWVzKCk7XG5cbiAgICBpZih0b2tlbil7XG4gICAgICBhcGkuZ2V0KCcvbWUnKS50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBlcm1pc3Npb25zLCByb2xlcyB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICBzZXRVc2VyKHsgZW1haWwsIHBlcm1pc3Npb25zLCByb2xlcyB9KVxuICAgICAgfSkuY2F0Y2goKCk9PntcbiAgICAgICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnRva2VuJyk7XG4gICAgICAgICAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nKTtcblxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFtdKTtcblxuICBjb25zdCBpc0xvZ2dlZCA9ICEhdXNlcjtcbiAgXG4gIGFzeW5jIGZ1bmN0aW9uIHNpZ25JbihjcmVkZW50aWFsczogU2lnbkluQ3JlZGVudGlhbHMpe1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJy9zZXNzaW9ucycsIGNyZWRlbnRpYWxzKTtcbiAgICAgIFxuICAgICAgY29uc3QgeyB0b2tlbiwgcmVmcmVzaFRva2VuLCBwZXJtaXNzaW9ucywgcm9sZXMgfSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICBcbiAgICAgIHNldENvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC50b2tlbicsIHRva2VuLCB7XG4gICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgICAgIHBhdGg6ICcvJ1xuICAgICAgfSk7XG4gICAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgucmVmcmVzaFRva2VuJywgcmVmcmVzaFRva2VuLCB7XG4gICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgICAgIHBhdGg6ICcvJ1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGNvbnN0IGZyZXNoVXNlciA9IHtcbiAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICBwZXJtaXNzaW9ucyxcbiAgICAgICAgcm9sZXNcbiAgICAgIH07XG5cbiAgICAgIHNldFVzZXIoZnJlc2hVc2VyKTtcblxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcbiAgICAgIFxuICAgICAgYXV0aENoYW5uZWwucG9zdE1lc3NhZ2UoYHNpZ25Jbi4ke2luc3RhbmNlSWR9LiR7SlNPTi5zdHJpbmdpZnkoZnJlc2hVc2VyKX1gKTtcblxuICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICB9IGNhdGNoe1xuXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2lzTG9nZ2VkLCBzaWduSW4sIHNpZ25PdXQsIHVzZXJ9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwic2V0Q29va2llIiwicGFyc2VDb29raWVzIiwiZGVzdHJveUNvb2tpZSIsIlJvdXRlciIsInY0IiwiYXV0aENoYW5uZWwiLCJpbnN0YW5jZUlkIiwic2lnbk91dCIsInNob3VsZEFsbG93QnJvYWRjYXN0IiwidW5kZWZpbmVkIiwicG9zdE1lc3NhZ2UiLCJwdXNoIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiQnJvYWRjYXN0Q2hhbm5lbCIsIm9ubWVzc2FnZSIsIm9iamVjdCIsIm1lc3NhZ2UiLCJzZW5kZXJJZCIsInBheWxvYWQiLCJkYXRhIiwic3BsaXQiLCJKU09OIiwicGFyc2UiLCJ0b2tlbiIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImVtYWlsIiwicGVybWlzc2lvbnMiLCJyb2xlcyIsImNhdGNoIiwiaXNMb2dnZWQiLCJzaWduSW4iLCJjcmVkZW50aWFscyIsInBvc3QiLCJyZWZyZXNoVG9rZW4iLCJtYXhBZ2UiLCJwYXRoIiwiZnJlc2hVc2VyIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwic3RyaW5naWZ5IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/authContext.tsx\n"));

/***/ })

});