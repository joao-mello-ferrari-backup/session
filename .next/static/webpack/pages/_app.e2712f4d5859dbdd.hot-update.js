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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apiClient */ \"./services/apiClient.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nlet authChannel;\nconst instanceId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)();\nfunction signOut() {\n    let shouldAllowBroadcast = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n    if (shouldAllowBroadcast) authChannel.postMessage(\"signOut.\".concat(instanceId));\n    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n}\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider(param) {\n    let { children  } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        authChannel = new BroadcastChannel(\"signOut\");\n        authChannel.onmessage = (object)=>{\n            const [message, senderId] = object.data.split(\".\");\n            if (senderId === instanceId) return;\n            switch(message){\n                case \"signOut\":\n                    signOut(false);\n                    break;\n                default:\n                    break;\n            }\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/me\").then((response)=>{\n                const { email , permissions , roles  } = response.data;\n                setUser({\n                    email,\n                    permissions,\n                    roles\n                });\n            }).catch(()=>{\n                if (true) {\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n                    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n                }\n            });\n        }\n    }, []);\n    const isLogged = !!user;\n    async function signIn(credentials) {\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/sessions\", credentials);\n            const { token , refreshToken , permissions , roles  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.refreshToken\", refreshToken, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            setUser({\n                email: credentials.email,\n                permissions,\n                roles\n            });\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.common.Authorization = \"Bearer \".concat(token);\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n        } catch (e) {}\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLogged,\n            signIn,\n            signOut,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/joaomello/Desktop/session/contexts/authContext.tsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"QP9GMK65QdCPEapYPtd0YTBDr9Q=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hdXRoQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFzRTtBQUMxQjtBQUNvQjtBQUNoQztBQUNQO0FBd0J6QixJQUFJUztBQUNKLE1BQU1DLGFBQWFGLHdDQUFFQTtBQUVkLFNBQVNHLFVBQW9DO1FBQTVCQyx1QkFBQUEsaUVBQXVCLElBQUk7SUFDakROLHNEQUFhQSxDQUFDTyxXQUFXO0lBQ3pCUCxzREFBYUEsQ0FBQ08sV0FBVztJQUV6QixJQUFHRCxzQkFDREgsWUFBWUssV0FBVyxDQUFDLFdBQXNCLE9BQVhKO0lBRXJDSCx1REFBVyxDQUFDO0FBQ2QsQ0FBQztBQUVNLE1BQU1TLDRCQUFjaEIsb0RBQWFBLENBQUMsQ0FBQyxHQUFzQjtBQUV6RCxTQUFTaUIsYUFBYSxLQUErQixFQUFFO1FBQWpDLEVBQUVDLFNBQVEsRUFBcUIsR0FBL0I7O0lBQzNCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHbEIsK0NBQVFBO0lBRWhDRCxnREFBU0EsQ0FBQyxJQUFJO1FBQ1pRLGNBQWMsSUFBSVksaUJBQWlCO1FBQ25DWixZQUFZYSxTQUFTLEdBQUcsQ0FBQ0MsU0FBVztZQUNsQyxNQUFNLENBQUNDLFNBQVFDLFNBQVMsR0FBR0YsT0FBT0csSUFBSSxDQUFDQyxLQUFLLENBQUM7WUFFN0MsSUFBR0YsYUFBYWYsWUFBWTtZQUU1QixPQUFPYztnQkFDTCxLQUFLO29CQUNIYixRQUFRLEtBQUs7b0JBQ2IsS0FBTTtnQkFDUjtvQkFDRSxLQUFNO1lBQ1Y7UUFDRjtJQUNGLEdBQUUsRUFBRTtJQUVKVixnREFBU0EsQ0FBQyxJQUFJO1FBQ1osTUFBTSxFQUFFLGtCQUFrQjJCLE1BQUssRUFBRSxHQUFHdkIscURBQVlBO1FBRWhELElBQUd1QixPQUFNO1lBQ1B6Qix3REFBTyxDQUFDLE9BQU8yQixJQUFJLENBQUNDLENBQUFBLFdBQVU7Z0JBQzVCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxZQUFXLEVBQUVDLE1BQUssRUFBRSxHQUFHSCxTQUFTTCxJQUFJO2dCQUVuRE4sUUFBUTtvQkFBRVk7b0JBQU9DO29CQUFhQztnQkFBTTtZQUN0QyxHQUFHQyxLQUFLLENBQUMsSUFBSTtnQkFDWCxJQUFHLElBQTJCdEIsRUFBQztvQkFDN0JQLHNEQUFhQSxDQUFDTyxXQUFXO29CQUN6QlAsc0RBQWFBLENBQUNPLFdBQVc7b0JBRXpCTix1REFBVyxDQUFDO2dCQUNkLENBQUM7WUFDSDtRQUNGLENBQUM7SUFDSCxHQUFFLEVBQUU7SUFFSixNQUFNNkIsV0FBVyxDQUFDLENBQUNqQjtJQUVuQixlQUFla0IsT0FBT0MsV0FBOEIsRUFBQztRQUNuRCxJQUFHO1lBQ0QsTUFBTVAsV0FBVyxNQUFNNUIseURBQVEsQ0FBQyxhQUFhbUM7WUFFN0MsTUFBTSxFQUFFVixNQUFLLEVBQUVZLGFBQVksRUFBRVAsWUFBVyxFQUFFQyxNQUFLLEVBQUUsR0FBR0gsU0FBU0wsSUFBSTtZQUVqRXRCLGtEQUFTQSxDQUFDUyxXQUFXLGtCQUFrQmUsT0FBTztnQkFDNUNhLFFBQVEsS0FBSyxLQUFLLEtBQUs7Z0JBQ3ZCQyxNQUFNO1lBQ1I7WUFDQXRDLGtEQUFTQSxDQUFDUyxXQUFXLHlCQUF5QjJCLGNBQWM7Z0JBQzFEQyxRQUFRLEtBQUssS0FBSyxLQUFLO2dCQUN2QkMsTUFBTTtZQUNSO1lBRUF0QixRQUFRO2dCQUNOWSxPQUFPTSxZQUFZTixLQUFLO2dCQUN4QkM7Z0JBQ0FDO1lBQ0Y7WUFFQS9CLDBGQUE0QyxHQUFHLFVBQWdCLE9BQU55QjtZQUV6RHJCLHVEQUFXLENBQUM7UUFDZCxFQUFFLFVBQUssQ0FFUDtJQUNGO0lBRUEscUJBQ0UsOERBQUNTLFlBQVk4QixRQUFRO1FBQUNDLE9BQU87WUFBQ1g7WUFBVUM7WUFBUTFCO1lBQVNRO1FBQUk7a0JBQzFERDs7Ozs7O0FBR1AsQ0FBQztHQTNFZUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvYXV0aENvbnRleHQudHN4PzU2MTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpQ2xpZW50XCI7XG5pbXBvcnQgeyBzZXRDb29raWUsIHBhcnNlQ29va2llcywgZGVzdHJveUNvb2tpZSB9IGZyb20gJ25vb2tpZXMnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJ1xuXG50eXBlIFNpZ25JbkNyZWRlbnRpYWxzID0ge1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG50eXBlIEF1dGhDb250ZXh0RGF0YSA9IHtcbiAgaXNMb2dnZWQ6IGJvb2xlYW47XG4gIHNpZ25JbihjcmVkZW50aWFsczogU2lnbkluQ3JlZGVudGlhbHMpOiBQcm9taXNlPHZvaWQ+O1xuICBzaWduT3V0KHNob3VsZEFsbG93QnJvYWRjYXN0PzogYm9vbGVhbik6IHZvaWQ7XG4gIHVzZXI6IFVzZXIgfCB1bmRlZmluZWQ7XG59XG5cbnR5cGUgQXV0aFByb3ZpZGVyUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbnR5cGUgVXNlciA9IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGVybWlzc2lvbnM6IHN0cmluZ1tdO1xuICByb2xlczogc3RyaW5nW107XG59XG5cbmxldCBhdXRoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcbmNvbnN0IGluc3RhbmNlSWQgPSB2NCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dChzaG91bGRBbGxvd0Jyb2FkY2FzdCA9IHRydWUpe1xuICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnRva2VuJyk7XG4gIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgucmVmcmVzaFRva2VuJyk7XG5cbiAgaWYoc2hvdWxkQWxsb3dCcm9hZGNhc3QpXG4gICAgYXV0aENoYW5uZWwucG9zdE1lc3NhZ2UoYHNpZ25PdXQuJHtpbnN0YW5jZUlkfWApO1xuXG4gIFJvdXRlci5wdXNoKCcvJyk7XG59XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IEF1dGhQcm92aWRlclByb3BzICl7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXI+KCk7XG4gIFxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBhdXRoQ2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKCdzaWduT3V0Jyk7XG4gICAgYXV0aENoYW5uZWwub25tZXNzYWdlID0gKG9iamVjdCkgPT4ge1xuICAgICAgY29uc3QgW21lc3NhZ2Usc2VuZGVySWRdID0gb2JqZWN0LmRhdGEuc3BsaXQoJy4nKTtcblxuICAgICAgaWYoc2VuZGVySWQgPT09IGluc3RhbmNlSWQpIHJldHVybjtcblxuICAgICAgc3dpdGNoKG1lc3NhZ2Upe1xuICAgICAgICBjYXNlICdzaWduT3V0JzpcbiAgICAgICAgICBzaWduT3V0KGZhbHNlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LFtdKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCB7ICduZXh0YXV0aC50b2tlbic6IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoKTtcblxuICAgIGlmKHRva2VuKXtcbiAgICAgIGFwaS5nZXQoJy9tZScpLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGVybWlzc2lvbnMsIHJvbGVzIH0gPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgIHNldFVzZXIoeyBlbWFpbCwgcGVybWlzc2lvbnMsIHJvbGVzIH0pXG4gICAgICB9KS5jYXRjaCgoKT0+e1xuICAgICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgudG9rZW4nKTtcbiAgICAgICAgICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicpO1xuXG4gICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sW10pO1xuXG4gIGNvbnN0IGlzTG9nZ2VkID0gISF1c2VyO1xuICBcbiAgYXN5bmMgZnVuY3Rpb24gc2lnbkluKGNyZWRlbnRpYWxzOiBTaWduSW5DcmVkZW50aWFscyl7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnL3Nlc3Npb25zJywgY3JlZGVudGlhbHMpO1xuICAgICAgXG4gICAgICBjb25zdCB7IHRva2VuLCByZWZyZXNoVG9rZW4sIHBlcm1pc3Npb25zLCByb2xlcyB9ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIFxuICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnRva2VuJywgdG9rZW4sIHtcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICAgICAgcGF0aDogJy8nXG4gICAgICB9KTtcbiAgICAgIHNldENvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nLCByZWZyZXNoVG9rZW4sIHtcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICAgICAgcGF0aDogJy8nXG4gICAgICB9KTtcblxuICAgICAgc2V0VXNlcih7XG4gICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgcGVybWlzc2lvbnMsXG4gICAgICAgIHJvbGVzXG4gICAgICB9KTtcblxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcblxuICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICB9IGNhdGNoe1xuXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2lzTG9nZ2VkLCBzaWduSW4sIHNpZ25PdXQsIHVzZXJ9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwic2V0Q29va2llIiwicGFyc2VDb29raWVzIiwiZGVzdHJveUNvb2tpZSIsIlJvdXRlciIsInY0IiwiYXV0aENoYW5uZWwiLCJpbnN0YW5jZUlkIiwic2lnbk91dCIsInNob3VsZEFsbG93QnJvYWRjYXN0IiwidW5kZWZpbmVkIiwicG9zdE1lc3NhZ2UiLCJwdXNoIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiQnJvYWRjYXN0Q2hhbm5lbCIsIm9ubWVzc2FnZSIsIm9iamVjdCIsIm1lc3NhZ2UiLCJzZW5kZXJJZCIsImRhdGEiLCJzcGxpdCIsInRva2VuIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZW1haWwiLCJwZXJtaXNzaW9ucyIsInJvbGVzIiwiY2F0Y2giLCJpc0xvZ2dlZCIsInNpZ25JbiIsImNyZWRlbnRpYWxzIiwicG9zdCIsInJlZnJlc2hUb2tlbiIsIm1heEFnZSIsInBhdGgiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/authContext.tsx\n"));

/***/ })

});