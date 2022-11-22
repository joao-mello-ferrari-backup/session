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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apiClient */ \"./services/apiClient.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nlet authChannel;\nconst instanceId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)();\nfunction signOut() {\n    let shouldAllowBroadcast = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n    if (shouldAllowBroadcast) authChannel.postMessage(\"signOut.\".concat(instanceId));\n    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n}\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider(param) {\n    let { children  } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        authChannel = new BroadcastChannel(\"signOut\");\n        authChannel.onmessage = (object)=>{\n            const [message, senderId] = object.data.split(\".\");\n            if (senderId === instanceId) return;\n            switch(message){\n                case \"signOut\":\n                    signOut(false);\n                    break;\n                default:\n                    break;\n            }\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/me\").then((response)=>{\n                const { email , permissions , roles  } = response.data;\n                setUser({\n                    email,\n                    permissions,\n                    roles\n                });\n            }).catch(()=>{\n                if (true) {\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n                    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n                }\n            });\n        }\n    }, []);\n    const isLogged = !!user;\n    async function signIn(credentials) {\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/sessions\", credentials);\n            const { token , refreshToken , permissions , roles  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.refreshToken\", refreshToken, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            setUser({\n                email: credentials.email,\n                permissions,\n                roles\n            });\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.common.Authorization = \"Bearer \".concat(token);\n            if (houldAllowBroadcast) authChannel.postMessage(\"signIn.\".concat(instanceId));\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n        } catch (e) {}\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLogged,\n            signIn,\n            signOut,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/joaomello/Desktop/session/contexts/authContext.tsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"QP9GMK65QdCPEapYPtd0YTBDr9Q=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vY29udGV4dHMvYXV0aENvbnRleHQudHN4PzU2MTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpQ2xpZW50XCI7XG5pbXBvcnQgeyBzZXRDb29raWUsIHBhcnNlQ29va2llcywgZGVzdHJveUNvb2tpZSB9IGZyb20gJ25vb2tpZXMnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJ1xuXG50eXBlIFNpZ25JbkNyZWRlbnRpYWxzID0ge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG50eXBlIEF1dGhDb250ZXh0RGF0YSA9IHtcbiAgaXNMb2dnZWQ6IGJvb2xlYW47XG4gIHNpZ25JbihjcmVkZW50aWFsczogU2lnbkluQ3JlZGVudGlhbHMsIHNob3VsZEFsbG93QnJvYWRjYXN0PzogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4gIHNpZ25PdXQoc2hvdWxkQWxsb3dCcm9hZGNhc3Q/OiBib29sZWFuKTogdm9pZDtcbiAgdXNlcjogVXNlciB8IHVuZGVmaW5lZDtcbn1cblxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxudHlwZSBVc2VyID0ge1xuICBlbWFpbDogc3RyaW5nO1xuICBwZXJtaXNzaW9uczogc3RyaW5nW107XG4gIHJvbGVzOiBzdHJpbmdbXTtcbn1cblxubGV0IGF1dGhDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuY29uc3QgaW5zdGFuY2VJZCA9IHY0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KHNob3VsZEFsbG93QnJvYWRjYXN0ID0gdHJ1ZSl7XG4gIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgudG9rZW4nKTtcbiAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nKTtcblxuICBpZihzaG91bGRBbGxvd0Jyb2FkY2FzdClcbiAgICBhdXRoQ2hhbm5lbC5wb3N0TWVzc2FnZShgc2lnbk91dC4ke2luc3RhbmNlSWR9YCk7XG5cbiAgUm91dGVyLnB1c2goJy8nKTtcbn1cblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dERhdGEpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogQXV0aFByb3ZpZGVyUHJvcHMgKXtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlcj4oKTtcbiAgXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGF1dGhDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ3NpZ25PdXQnKTtcbiAgICBhdXRoQ2hhbm5lbC5vbm1lc3NhZ2UgPSAob2JqZWN0KSA9PiB7XG4gICAgICBjb25zdCBbbWVzc2FnZSxzZW5kZXJJZF0gPSBvYmplY3QuZGF0YS5zcGxpdCgnLicpO1xuXG4gICAgICBpZihzZW5kZXJJZCA9PT0gaW5zdGFuY2VJZCkgcmV0dXJuO1xuXG4gICAgICBzd2l0Y2gobWVzc2FnZSl7XG4gICAgICAgIGNhc2UgJ3NpZ25PdXQnOlxuICAgICAgICAgIHNpZ25PdXQoZmFsc2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sW10pO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IHsgJ25leHRhdXRoLnRva2VuJzogdG9rZW4gfSA9IHBhcnNlQ29va2llcygpO1xuXG4gICAgaWYodG9rZW4pe1xuICAgICAgYXBpLmdldCgnL21lJykudGhlbihyZXNwb25zZT0+e1xuICAgICAgICBjb25zdCB7IGVtYWlsLCBwZXJtaXNzaW9ucywgcm9sZXMgfSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgc2V0VXNlcih7IGVtYWlsLCBwZXJtaXNzaW9ucywgcm9sZXMgfSlcbiAgICAgIH0pLmNhdGNoKCgpPT57XG4gICAgICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC50b2tlbicpO1xuICAgICAgICAgIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgucmVmcmVzaFRva2VuJyk7XG5cbiAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxbXSk7XG5cbiAgY29uc3QgaXNMb2dnZWQgPSAhIXVzZXI7XG4gIFxuICBhc3luYyBmdW5jdGlvbiBzaWduSW4oY3JlZGVudGlhbHM6IFNpZ25JbkNyZWRlbnRpYWxzKXtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvc2Vzc2lvbnMnLCBjcmVkZW50aWFscyk7XG4gICAgICBcbiAgICAgIGNvbnN0IHsgdG9rZW4sIHJlZnJlc2hUb2tlbiwgcGVybWlzc2lvbnMsIHJvbGVzIH0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgXG4gICAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgudG9rZW4nLCB0b2tlbiwge1xuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgICAgICBwYXRoOiAnLydcbiAgICAgIH0pO1xuICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicsIHJlZnJlc2hUb2tlbiwge1xuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgICAgICBwYXRoOiAnLydcbiAgICAgIH0pO1xuXG4gICAgICBzZXRVc2VyKHtcbiAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICBwZXJtaXNzaW9ucyxcbiAgICAgICAgcm9sZXNcbiAgICAgIH0pO1xuXG4gICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuICAgICAgXG4gICAgICBpZihob3VsZEFsbG93QnJvYWRjYXN0KVxuICAgICAgICBhdXRoQ2hhbm5lbC5wb3N0TWVzc2FnZShgc2lnbkluLiR7aW5zdGFuY2VJZH1gKTtcblxuICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICB9IGNhdGNoe1xuXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2lzTG9nZ2VkLCBzaWduSW4sIHNpZ25PdXQsIHVzZXJ9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwic2V0Q29va2llIiwicGFyc2VDb29raWVzIiwiZGVzdHJveUNvb2tpZSIsIlJvdXRlciIsInY0IiwiYXV0aENoYW5uZWwiLCJpbnN0YW5jZUlkIiwic2lnbk91dCIsInNob3VsZEFsbG93QnJvYWRjYXN0IiwidW5kZWZpbmVkIiwicG9zdE1lc3NhZ2UiLCJwdXNoIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiQnJvYWRjYXN0Q2hhbm5lbCIsIm9ubWVzc2FnZSIsIm9iamVjdCIsIm1lc3NhZ2UiLCJzZW5kZXJJZCIsImRhdGEiLCJzcGxpdCIsInRva2VuIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZW1haWwiLCJwZXJtaXNzaW9ucyIsInJvbGVzIiwiY2F0Y2giLCJpc0xvZ2dlZCIsInNpZ25JbiIsImNyZWRlbnRpYWxzIiwicG9zdCIsInJlZnJlc2hUb2tlbiIsIm1heEFnZSIsInBhdGgiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJob3VsZEFsbG93QnJvYWRjYXN0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/authContext.tsx\n"));

/***/ })

});