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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apiClient */ \"./services/apiClient.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nlet authChannel;\nconst instanceId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)();\nfunction signOut() {\n    let shouldAllowBroadcast = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n    if (shouldAllowBroadcast) authChannel.postMessage(\"signOut\\xdf\".concat(instanceId));\n    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n}\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider(param) {\n    let { children  } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    if (true) {\n        authChannel = new BroadcastChannel(\"signOut\");\n        authChannel.onmessage = (object)=>{\n            const [message, senderId, payload] = object.data.split(\"\\xdf\");\n            if (senderId === instanceId) return;\n            switch(message){\n                case \"signOut\":\n                    signOut(false);\n                    break;\n                case \"signIn\":\n                    const { \"nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)(undefined);\n                    _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.common.Authorization = \"Bearer \".concat(token);\n                    setUser(JSON.parse(payload));\n                    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n                    break;\n                default:\n                    break;\n            }\n        };\n    }\n    // useEffect(()=>{\n    // },[]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/me\").then((response)=>{\n                const { email , permissions , roles  } = response.data;\n                setUser({\n                    email,\n                    permissions,\n                    roles\n                });\n            }).catch(()=>{\n                if (true) {\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.token\");\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n                    next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n                }\n            });\n        }\n    }, []);\n    const isLogged = !!user;\n    async function signIn(credentials) {\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/sessions\", credentials);\n            const { token , refreshToken , permissions , roles  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"nextauth.refreshToken\", refreshToken, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            const freshUser = {\n                email: credentials.email,\n                permissions,\n                roles\n            };\n            setUser(freshUser);\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.common.Authorization = \"Bearer \".concat(token);\n            authChannel.postMessage(\"signIn\\xdf\".concat(instanceId, \"\\xdf\").concat(JSON.stringify(freshUser)));\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n        } catch (e) {}\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isLogged,\n            signIn,\n            signOut,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/joaomello/Desktop/session/contexts/authContext.tsx\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"hT6C72rcbfRUedrDq+TPaFfRI/M=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsQ0FBQyxhQUF3QnFCLE9BQWR6QixZQUFXLFFBQTZCLE9BQTFCeUIsS0FBS2lCLFNBQVMsQ0FBQ0Q7WUFFL0Q1Qyx1REFBVyxDQUFDO1FBQ2QsRUFBRSxVQUFLLENBRVA7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUyxZQUFZcUMsUUFBUTtRQUFDQyxPQUFPO1lBQUNWO1lBQVVDO1lBQVFsQztZQUFTUTtRQUFJO2tCQUMxREQ7Ozs7OztBQUdQLENBQUM7R0F6RmVEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHRzL2F1dGhDb250ZXh0LnRzeD81NjE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaUNsaWVudFwiO1xuaW1wb3J0IHsgc2V0Q29va2llLCBwYXJzZUNvb2tpZXMsIGRlc3Ryb3lDb29raWUgfSBmcm9tICdub29raWVzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCdcblxudHlwZSBTaWduSW5DcmVkZW50aWFscyA9IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxudHlwZSBBdXRoQ29udGV4dERhdGEgPSB7XG4gIGlzTG9nZ2VkOiBib29sZWFuO1xuICBzaWduSW4oY3JlZGVudGlhbHM6IFNpZ25JbkNyZWRlbnRpYWxzKTogUHJvbWlzZTx2b2lkPjtcbiAgc2lnbk91dChzaG91bGRBbGxvd0Jyb2FkY2FzdD86IGJvb2xlYW4pOiB2b2lkO1xuICB1c2VyOiBVc2VyIHwgdW5kZWZpbmVkO1xufVxuXG50eXBlIEF1dGhQcm92aWRlclByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG50eXBlIFVzZXIgPSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBlcm1pc3Npb25zOiBzdHJpbmdbXTtcbiAgcm9sZXM6IHN0cmluZ1tdO1xufVxuXG5sZXQgYXV0aENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5jb25zdCBpbnN0YW5jZUlkID0gdjQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoc2hvdWxkQWxsb3dCcm9hZGNhc3QgPSB0cnVlKXtcbiAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC50b2tlbicpO1xuICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicpO1xuXG4gIGlmKHNob3VsZEFsbG93QnJvYWRjYXN0KVxuICAgIGF1dGhDaGFubmVsLnBvc3RNZXNzYWdlKGBzaWduT3V0w58ke2luc3RhbmNlSWR9YCk7XG5cbiAgUm91dGVyLnB1c2goJy8nKTtcbn1cblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dERhdGEpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogQXV0aFByb3ZpZGVyUHJvcHMgKXtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlcj4oKTtcblxuICBpZihwcm9jZXNzLmJyb3dzZXIpe1xuICAgIGF1dGhDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ3NpZ25PdXQnKTtcbiAgICBhdXRoQ2hhbm5lbC5vbm1lc3NhZ2UgPSAob2JqZWN0KSA9PiB7XG4gICAgICBjb25zdCBbbWVzc2FnZSxzZW5kZXJJZCxwYXlsb2FkXSA9IG9iamVjdC5kYXRhLnNwbGl0KCfDnycpO1xuXG4gICAgICBpZihzZW5kZXJJZCA9PT0gaW5zdGFuY2VJZCkgcmV0dXJuO1xuXG4gICAgICBzd2l0Y2gobWVzc2FnZSl7XG4gICAgICAgIGNhc2UgJ3NpZ25PdXQnOlxuICAgICAgICAgIHNpZ25PdXQoZmFsc2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzaWduSW4nOlxuICAgICAgICAgIGNvbnN0IHsgJ25leHRhdXRoLnRva2VuJzogdG9rZW4gfSA9IHBhcnNlQ29va2llcyh1bmRlZmluZWQpO1xuICAgICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgICAgICAgc2V0VXNlcihKU09OLnBhcnNlKHBheWxvYWQpKTtcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLy8gdXNlRWZmZWN0KCgpPT57XG4gICAgXG4gIC8vIH0sW10pO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IHsgJ25leHRhdXRoLnRva2VuJzogdG9rZW4gfSA9IHBhcnNlQ29va2llcygpO1xuXG4gICAgaWYodG9rZW4pe1xuICAgICAgYXBpLmdldCgnL21lJykudGhlbihyZXNwb25zZT0+e1xuICAgICAgICBjb25zdCB7IGVtYWlsLCBwZXJtaXNzaW9ucywgcm9sZXMgfSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgc2V0VXNlcih7IGVtYWlsLCBwZXJtaXNzaW9ucywgcm9sZXMgfSlcbiAgICAgIH0pLmNhdGNoKCgpPT57XG4gICAgICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC50b2tlbicpO1xuICAgICAgICAgIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgucmVmcmVzaFRva2VuJyk7XG5cbiAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxbXSk7XG5cbiAgY29uc3QgaXNMb2dnZWQgPSAhIXVzZXI7XG4gIFxuICBhc3luYyBmdW5jdGlvbiBzaWduSW4oY3JlZGVudGlhbHM6IFNpZ25JbkNyZWRlbnRpYWxzKXtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvc2Vzc2lvbnMnLCBjcmVkZW50aWFscyk7XG4gICAgICBcbiAgICAgIGNvbnN0IHsgdG9rZW4sIHJlZnJlc2hUb2tlbiwgcGVybWlzc2lvbnMsIHJvbGVzIH0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgXG4gICAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgudG9rZW4nLCB0b2tlbiwge1xuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgICAgICBwYXRoOiAnLydcbiAgICAgIH0pO1xuICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicsIHJlZnJlc2hUb2tlbiwge1xuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgICAgICBwYXRoOiAnLydcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBjb25zdCBmcmVzaFVzZXIgPSB7XG4gICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgcGVybWlzc2lvbnMsXG4gICAgICAgIHJvbGVzXG4gICAgICB9O1xuXG4gICAgICBzZXRVc2VyKGZyZXNoVXNlcik7XG5cbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XG4gICAgICBcbiAgICAgIGF1dGhDaGFubmVsLnBvc3RNZXNzYWdlKGBzaWduSW7DnyR7aW5zdGFuY2VJZH3DnyR7SlNPTi5zdHJpbmdpZnkoZnJlc2hVc2VyKX1gKTtcblxuICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICB9IGNhdGNoe1xuXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2lzTG9nZ2VkLCBzaWduSW4sIHNpZ25PdXQsIHVzZXJ9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwic2V0Q29va2llIiwicGFyc2VDb29raWVzIiwiZGVzdHJveUNvb2tpZSIsIlJvdXRlciIsInY0IiwiYXV0aENoYW5uZWwiLCJpbnN0YW5jZUlkIiwic2lnbk91dCIsInNob3VsZEFsbG93QnJvYWRjYXN0IiwidW5kZWZpbmVkIiwicG9zdE1lc3NhZ2UiLCJwdXNoIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwicHJvY2VzcyIsImJyb3dzZXIiLCJCcm9hZGNhc3RDaGFubmVsIiwib25tZXNzYWdlIiwib2JqZWN0IiwibWVzc2FnZSIsInNlbmRlcklkIiwicGF5bG9hZCIsImRhdGEiLCJzcGxpdCIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiSlNPTiIsInBhcnNlIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZW1haWwiLCJwZXJtaXNzaW9ucyIsInJvbGVzIiwiY2F0Y2giLCJpc0xvZ2dlZCIsInNpZ25JbiIsImNyZWRlbnRpYWxzIiwicG9zdCIsInJlZnJlc2hUb2tlbiIsIm1heEFnZSIsInBhdGgiLCJmcmVzaFVzZXIiLCJzdHJpbmdpZnkiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/authContext.tsx\n"));

/***/ })

});