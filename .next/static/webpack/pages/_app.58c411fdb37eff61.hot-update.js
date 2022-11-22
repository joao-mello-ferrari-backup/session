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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apiClient */ \"./services/apiClient.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nlet signOutChannel;\nconst instanceId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)();\nfunction signOut() {\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n    // Router.push('/');\n    signOutChannel.postMessage(\"signOut.\".concat(instanceId));\n}\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider(param) {\n    let { children  } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(instanceId);\n        signOutChannel = new BroadcastChannel(\"signOut\");\n        signOutChannel.onmessage = (object)=>{\n            const message = object.data.spit(\".\")[0];\n            // console.log(message.data)\n            // return\n            switch(message.data){\n                case \"signOut\":\n                    // Router.push('/')\n                    console.log(312312321);\n                    signOut();\n                    break;\n                default:\n                    break;\n            }\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/me\").then((response)=>{\n                const { email , permissions , roles  } = response.data;\n                setUser({\n                    email,\n                    permissions,\n                    roles\n                });\n            }).catch(()=>{\n                if (true) {\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n                    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n                }\n            });\n        }\n    }, []);\n    const isLogged = !!user;\n    async function signIn(credentials) {\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/sessions\", credentials);\n            const { token , refreshToken , permissions , roles  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.refreshToken\", refreshToken, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            setUser({\n                email: credentials.email,\n                permissions,\n                roles\n            });\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.common.Authorization = \"Bearer \".concat(token);\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n        } catch (e) {}\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLogged,\n            signIn,\n            signOut,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/joaomello/Desktop/session/contexts/authContext.tsx\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"QP9GMK65QdCPEapYPtd0YTBDr9Q=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hdXRoQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFzRTtBQUMxQjtBQUNvQjtBQUNoQztBQUNQO0FBd0J6QixJQUFJUztBQUNKLE1BQU1DLGFBQWFGLHdDQUFFQTtBQUVkLFNBQVNHLFVBQVM7SUFDdkJMLHNEQUFhQSxDQUFDTSxXQUFXO0lBQ3pCTixzREFBYUEsQ0FBQ00sV0FBVztJQUN6QixvQkFBb0I7SUFDcEJILGVBQWVJLFdBQVcsQ0FBQyxXQUFzQixPQUFYSDtBQUN4QyxDQUFDO0FBRU0sTUFBTUksNEJBQWNkLG9EQUFhQSxDQUFDLENBQUMsR0FBc0I7QUFFekQsU0FBU2UsYUFBYSxLQUErQixFQUFFO1FBQWpDLEVBQUVDLFNBQVEsRUFBcUIsR0FBL0I7O0lBQzNCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHaEIsK0NBQVFBO0lBRWhDRCxnREFBU0EsQ0FBQyxJQUFJO1FBQ1prQixRQUFRQyxHQUFHLENBQUNWO1FBQ1pELGlCQUFpQixJQUFJWSxpQkFBaUI7UUFDdENaLGVBQWVhLFNBQVMsR0FBRyxDQUFDQyxTQUFXO1lBQ3JDLE1BQU1DLFVBQVVELE9BQU9FLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hDLDRCQUE0QjtZQUM1QixTQUFTO1lBQ1QsT0FBT0YsUUFBUUMsSUFBSTtnQkFDakIsS0FBSztvQkFDSCxtQkFBbUI7b0JBQ25CTixRQUFRQyxHQUFHLENBQUM7b0JBQ1pUO29CQUNBLEtBQU07Z0JBQ1I7b0JBQ0UsS0FBTTtZQUNWO1FBQ0Y7SUFDRixHQUFFLEVBQUU7SUFFSlYsZ0RBQVNBLENBQUMsSUFBSTtRQUNaLE1BQU0sRUFBRSxrQkFBa0IwQixNQUFLLEVBQUUsR0FBR3RCLHFEQUFZQTtRQUVoRCxJQUFHc0IsT0FBTTtZQUNMeEIsd0RBQU8sQ0FBQyxPQUFPMEIsSUFBSSxDQUFDQyxDQUFBQSxXQUFVO2dCQUM1QixNQUFNLEVBQUVDLE1BQUssRUFBRUMsWUFBVyxFQUFFQyxNQUFLLEVBQUUsR0FBR0gsU0FBU0wsSUFBSTtnQkFFbkRQLFFBQVE7b0JBQUVhO29CQUFPQztvQkFBYUM7Z0JBQU07WUFDdEMsR0FBR0MsS0FBSyxDQUFDLElBQUk7Z0JBQ1gsSUFBRyxJQUEyQnRCLEVBQUM7b0JBQzdCTixzREFBYUEsQ0FBQ00sV0FBVztvQkFDekJOLHNEQUFhQSxDQUFDTSxXQUFXO29CQUV6QkwsdURBQVcsQ0FBQztnQkFDZCxDQUFDO1lBQ0g7UUFDSixDQUFDO0lBQ0gsR0FBRSxFQUFFO0lBRUosTUFBTTZCLFdBQVcsQ0FBQyxDQUFDbkI7SUFFbkIsZUFBZW9CLE9BQU9DLFdBQThCLEVBQUM7UUFDbkQsSUFBRztZQUNELE1BQU1SLFdBQVcsTUFBTTNCLHlEQUFRLENBQUMsYUFBYW1DO1lBRTdDLE1BQU0sRUFBRVgsTUFBSyxFQUFFYSxhQUFZLEVBQUVSLFlBQVcsRUFBRUMsTUFBSyxFQUFFLEdBQUdILFNBQVNMLElBQUk7WUFFakVyQixrREFBU0EsQ0FBQ1EsV0FBVyxrQkFBa0JlLE9BQU87Z0JBQzVDYyxRQUFRLEtBQUssS0FBSyxLQUFLO2dCQUN2QkMsTUFBTTtZQUNSO1lBQ0F0QyxrREFBU0EsQ0FBQ1EsV0FBVyx5QkFBeUI0QixjQUFjO2dCQUMxREMsUUFBUSxLQUFLLEtBQUssS0FBSztnQkFDdkJDLE1BQU07WUFDUjtZQUVBeEIsUUFBUTtnQkFDTmEsT0FBT08sWUFBWVAsS0FBSztnQkFDeEJDO2dCQUNBQztZQUNGO1lBRUE5QiwwRkFBNEMsR0FBRyxVQUFnQixPQUFOd0I7WUFFekRwQix1REFBVyxDQUFDO1FBQ2QsRUFBRSxVQUFLLENBRVA7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTyxZQUFZZ0MsUUFBUTtRQUFDQyxPQUFPO1lBQUNYO1lBQVVDO1lBQVExQjtZQUFTTTtRQUFJO2tCQUMxREQ7Ozs7OztBQUdQLENBQUM7R0E3RWVEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHRzL2F1dGhDb250ZXh0LnRzeD81NjE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaUNsaWVudFwiO1xuaW1wb3J0IHsgc2V0Q29va2llLCBwYXJzZUNvb2tpZXMsIGRlc3Ryb3lDb29raWUgfSBmcm9tICdub29raWVzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCdcblxudHlwZSBTaWduSW5DcmVkZW50aWFscyA9IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxudHlwZSBBdXRoQ29udGV4dERhdGEgPSB7XG4gIGlzTG9nZ2VkOiBib29sZWFuO1xuICBzaWduSW4oY3JlZGVudGlhbHM6IFNpZ25JbkNyZWRlbnRpYWxzKTogUHJvbWlzZTx2b2lkPjtcbiAgc2lnbk91dCgpOiB2b2lkO1xuICB1c2VyOiBVc2VyIHwgdW5kZWZpbmVkO1xufVxuXG50eXBlIEF1dGhQcm92aWRlclByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG50eXBlIFVzZXIgPSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBlcm1pc3Npb25zOiBzdHJpbmdbXTtcbiAgcm9sZXM6IHN0cmluZ1tdO1xufVxuXG5sZXQgc2lnbk91dENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5jb25zdCBpbnN0YW5jZUlkID0gdjQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoKXtcbiAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC50b2tlbicpO1xuICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicpO1xuICAvLyBSb3V0ZXIucHVzaCgnLycpO1xuICBzaWduT3V0Q2hhbm5lbC5wb3N0TWVzc2FnZShgc2lnbk91dC4ke2luc3RhbmNlSWR9YCk7XG59XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IEF1dGhQcm92aWRlclByb3BzICl7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXI+KCk7XG4gIFxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zb2xlLmxvZyhpbnN0YW5jZUlkKVxuICAgIHNpZ25PdXRDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ3NpZ25PdXQnKTtcbiAgICBzaWduT3V0Q2hhbm5lbC5vbm1lc3NhZ2UgPSAob2JqZWN0KSA9PiB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gb2JqZWN0LmRhdGEuc3BpdCgnLicpWzBdO1xuICAgICAgLy8gY29uc29sZS5sb2cobWVzc2FnZS5kYXRhKVxuICAgICAgLy8gcmV0dXJuXG4gICAgICBzd2l0Y2gobWVzc2FnZS5kYXRhKXtcbiAgICAgICAgY2FzZSAnc2lnbk91dCc6XG4gICAgICAgICAgLy8gUm91dGVyLnB1c2goJy8nKVxuICAgICAgICAgIGNvbnNvbGUubG9nKDMxMjMxMjMyMSlcbiAgICAgICAgICBzaWduT3V0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSxbXSlcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCB7ICduZXh0YXV0aC50b2tlbic6IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoKTtcblxuICAgIGlmKHRva2VuKXtcbiAgICAgICAgYXBpLmdldCgnL21lJykudGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgIGNvbnN0IHsgZW1haWwsIHBlcm1pc3Npb25zLCByb2xlcyB9ID0gcmVzcG9uc2UuZGF0YTtcbiAgXG4gICAgICAgICAgc2V0VXNlcih7IGVtYWlsLCBwZXJtaXNzaW9ucywgcm9sZXMgfSlcbiAgICAgICAgfSkuY2F0Y2goKCk9PntcbiAgICAgICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC50b2tlbicpO1xuICAgICAgICAgICAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nKTtcbiAgXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sW10pO1xuXG4gIGNvbnN0IGlzTG9nZ2VkID0gISF1c2VyO1xuICBcbiAgYXN5bmMgZnVuY3Rpb24gc2lnbkluKGNyZWRlbnRpYWxzOiBTaWduSW5DcmVkZW50aWFscyl7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnL3Nlc3Npb25zJywgY3JlZGVudGlhbHMpO1xuICAgICAgXG4gICAgICBjb25zdCB7IHRva2VuLCByZWZyZXNoVG9rZW4sIHBlcm1pc3Npb25zLCByb2xlcyB9ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIFxuICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnRva2VuJywgdG9rZW4sIHtcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICAgICAgcGF0aDogJy8nXG4gICAgICB9KTtcbiAgICAgIHNldENvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nLCByZWZyZXNoVG9rZW4sIHtcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICAgICAgcGF0aDogJy8nXG4gICAgICB9KTtcblxuICAgICAgc2V0VXNlcih7XG4gICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgcGVybWlzc2lvbnMsXG4gICAgICAgIHJvbGVzXG4gICAgICB9KTtcblxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcblxuICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICB9IGNhdGNoe1xuXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2lzTG9nZ2VkLCBzaWduSW4sIHNpZ25PdXQsIHVzZXJ9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwic2V0Q29va2llIiwicGFyc2VDb29raWVzIiwiZGVzdHJveUNvb2tpZSIsIlJvdXRlciIsInY0Iiwic2lnbk91dENoYW5uZWwiLCJpbnN0YW5jZUlkIiwic2lnbk91dCIsInVuZGVmaW5lZCIsInBvc3RNZXNzYWdlIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiY29uc29sZSIsImxvZyIsIkJyb2FkY2FzdENoYW5uZWwiLCJvbm1lc3NhZ2UiLCJvYmplY3QiLCJtZXNzYWdlIiwiZGF0YSIsInNwaXQiLCJ0b2tlbiIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImVtYWlsIiwicGVybWlzc2lvbnMiLCJyb2xlcyIsImNhdGNoIiwicHVzaCIsImlzTG9nZ2VkIiwic2lnbkluIiwiY3JlZGVudGlhbHMiLCJwb3N0IiwicmVmcmVzaFRva2VuIiwibWF4QWdlIiwicGF0aCIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/authContext.tsx\n"));

/***/ })

});