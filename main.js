/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/The Fabulous Mr. Poop.ttf */ \"./src/fonts/The Fabulous Mr. Poop.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n    font-family: 'MrPoop';\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('ttf');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n\r\nh2 {\r\n    font-family: 'MrPoop';\r\n    font-size: 2rem;\r\n    font-weight: 400;\r\n    margin: 0;\r\n}\r\n\r\n.p1-title {\r\n  grid-row: 1 / 2; /* Updated grid row values */\r\n  grid-column: 1 / 2; /* Updated grid column values */\r\n}\r\n\r\n.p2-title {\r\n  grid-row: 1 / 2; /* Updated grid row values */\r\n  grid-column: 2 / 3; /* Updated grid column values */\r\n}\r\n\r\n#game-container {\r\n  justify-items: center;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 10vh 90vh; /* Use specific vh values */\r\n  gap: 10px; /* Adjust the gap between elements as needed */\r\n}\r\n\r\n#gameboard1 {\r\n  grid-column: 1 / 2; /* Updated grid column values */\r\n  grid-row: 2 / 3; /* Updated grid row values */\r\n  cursor: not-allowed;\r\n\r\n}\r\n\r\n#gameboard2 {\r\n  grid-column: 2 / 3; /* Updated grid column values */\r\n  grid-row: 2 / 3; /* Updated grid row values */\r\n}\r\n\r\n.gameboard {\r\n  max-width: 300px;\r\n  max-height: 300px;\r\n  display: grid;\r\n  grid-template-columns: repeat(\r\n    10,\r\n    minmax(35px, 1fr)\r\n  ); /* Adjust column sizing */\r\n  grid-template-rows: repeat(10, minmax(35px, 1fr)); /* Adjust row sizing */\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n#gameboard1 .cell {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.cell {\r\n  min-width: 35px; /* Minimum width */\r\n  min-height: 35px; /* Minimum height */\r\n  width: 35px; /* Set width to 35px (square) */\r\n  height: 35px; /* Set height to 35px (square) */\r\n  border: 1px solid black;\r\n  display: inline-block;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-size: 16px; /* Adjust font size */\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n/* Keep ship class */\r\n.ship {\r\n  background-color: rgba(106, 57, 196, 0.589);\r\n  z-index: 0;\r\n}\r\n\r\n/* Move hit class below ship class to override it */\r\n.hit {\r\n  background-color: rgba(255, 0, 0, 0.521);\r\n  z-index: 10;\r\n  cursor: not-allowed;\r\n}\r\n\r\n/* Miss class remains the same */\r\n.miss {\r\n  background-color: rgba(17, 17, 17, 0.678);\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleshits/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleshits/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleshits/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleshits/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleshits/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleshits/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleshits/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleshits/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleshits/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleshits/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleshits/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _fleet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fleet */ \"./src/fleet.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n\r\n\r\n\r\nclass Gameboard {\r\n  constructor() {\r\n    this.board = this.createBoard();\r\n    this.missedShots = [];\r\n  }\r\n\r\n  createBoard() {\r\n    let board = [];\r\n    for (let i = 0; i < 10; i++) {\r\n      let row = [];\r\n      for (let j = 0; j < 10; j++) {\r\n        const cell = { hasShip: false, hit: false, row: i, col: j };\r\n        row.push(cell);\r\n      }\r\n      board.push(row);\r\n    }\r\n    return board;\r\n  }\r\n\r\n  randomlyPlaceShips() {\r\n    // create ships from fleet\r\n    let ships = [];\r\n    for (let ship of _fleet__WEBPACK_IMPORTED_MODULE_0__.fleet) {\r\n      ships.push(new _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ship.name, ship.length));\r\n    }\r\n    console.log(`i'm logging ships: ${ships}`);\r\n    // randomly place ships\r\n    for (let ship of ships) {\r\n      console.log(`Placing ship: ${ship.name}, Length: ${ship.length}`);\r\n      let x, y, direction;\r\n      do {\r\n        x = Math.floor(Math.random() * 10);\r\n        y = Math.floor(Math.random() * 10);\r\n        direction = Math.random() < 0.5 ? \"horizontal\" : \"vertical\";\r\n      } while (!this.isValidPlacement(ship, x, y, direction));\r\n\r\n      this.placeShip(ship, x, y, direction);\r\n    }\r\n  }\r\n\r\n  placeShip(ship, x, y, direction) {\r\n    // Check if ship placement is valid\r\n    if (!this.isValidPlacement(ship, x, y, direction)) {\r\n      return false;\r\n    }\r\n\r\n    if (direction === \"horizontal\") {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        const cell = this.board[x][y + i];\r\n        cell.ship = ship; // Assign the ship object to the cell\r\n        cell.hasShip = true;\r\n      }\r\n    } else {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        const cell = this.board[x + i][y];\r\n        cell.ship = ship; // Assign the ship object to the cell\r\n        cell.hasShip = true;\r\n      }\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  isValidPlacement(ship, x, y, direction) {\r\n    // Check if ship is within bounds\r\n    if (direction === \"horizontal\") {\r\n      if (y + ship.length > 9) return false;\r\n    } else {\r\n      if (x + ship.length > 9) return false;\r\n    }\r\n\r\n    // Check if ship overlaps another ship\r\n    if (direction === \"horizontal\") {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (this.board[x][y + i].hasShip) return false;\r\n      }\r\n    } else {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (this.board[x + i][y].hasShip) return false;\r\n      }\r\n    }\r\n\r\n    // Return true when all checks pass\r\n    return true;\r\n  }\r\n\r\n  receiveAttack(x, y) {\r\n    this.board[x][y].hit = true;\r\n    if (this.board[x][y].hasShip) {\r\n      this.board[x][y].ship.hit();\r\n    } else {\r\n      this.missedShots.push({ row: x, col: y });\r\n    }\r\n  }\r\n\r\n  receiveRandomAttack() {\r\n    let x, y;\r\n    do {\r\n      x = Math.floor(Math.random() * 10);\r\n      y = Math.floor(Math.random() * 10);\r\n    } while (this.board[x][y].hit); // Check if the cell has already been hit\r\n\r\n    this.receiveAttack(x, y);\r\n  }\r\n\r\n  isAllSunk() {\r\n    for (let row of this.board) {\r\n      for (let cell of row) {\r\n        if (cell.hasShip && !cell.ship.sunk) return false;\r\n      }\r\n    }\r\n    return true;\r\n  }\r\n\r\n  getBoard() {\r\n    return this.board;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleshits/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\r\n    constructor(name, board) {\r\n        this.name = name;\r\n        this.board = board;\r\n        this.turn = false;\r\n    }\r\n}\n\n//# sourceURL=webpack://battleshits/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n  constructor(name, length, hits = 0, sunk = false) {\r\n    this.name = name; // Fix: Use the name parameter\r\n    this.length = length;\r\n    this.hits = hits;\r\n    this.sunk = sunk;\r\n  }\r\n\r\n  hit() {\r\n    this.hits++;\r\n    if (this.hits >= this.length) {\r\n      this.sunk = true;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://battleshits/./src/Ship.js?");

/***/ }),

/***/ "./src/fleet.js":
/*!**********************!*\
  !*** ./src/fleet.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fleet: () => (/* binding */ fleet)\n/* harmony export */ });\nconst fleet = [\r\n    { name: \"Carrier\", length: 5, hits: 0, sunk: false },\r\n    { name: \"Battleship\", length: 4, hits: 0, sunk: false  },\r\n    { name: \"Cruiser\", length: 3, hits: 0, sunk: false  },\r\n    { name: \"Submarine\", length: 3, hits: 0, sunk: false  },\r\n    { name: \"Destroyer\", length: 2, hits: 0, sunk: false  },\r\n\r\n]\r\n\n\n//# sourceURL=webpack://battleshits/./src/fleet.js?");

/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ gameLoop)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\r\n\r\n\r\n\r\nasync function gameLoop() {\r\n  let player1board = new _Gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  let player2board = new _Gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\n  let player1 = new _Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Player 1', player1board);\r\n  let player2 = new _Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Player 2', player2board);\r\n  player1.turn = true;\r\n  let gameOver = false;\r\n  let winner = null;\r\n\r\n  player1board.randomlyPlaceShips();\r\n  player2board.randomlyPlaceShips();\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_2__.renderBoards)(player1board, player2board);\r\n\r\n  const playerBoard2 = document.getElementById('gameboard2');\r\n  let waitForPlayerMoveResolve;\r\n\r\n  const waitForPlayerMove = () => {\r\n    return new Promise((resolve) => {\r\n      waitForPlayerMoveResolve = resolve;\r\n    });\r\n  };\r\n\r\n  playerBoard2.addEventListener('click', async (e) => {\r\n    if (player1.turn) {\r\n      // Handle player 1's move based on the click event\r\n      const cell = e.target;\r\n      const row = cell.dataset.row;\r\n      const col = cell.dataset.col;\r\n      \r\n      if (!player2board.board[row][col].hit) {\r\n        // Check if the cell has not been hit before\r\n        console.log(`Player 1 attacks: ${row}, ${col}`);\r\n        \r\n        // Perform the attack logic here\r\n        player2board.receiveAttack(row, col);\r\n        \r\n        // Remove the event listener after the move\r\n        playerBoard2.removeEventListener('click', waitForPlayerMove);\r\n        \r\n        // Resolve the promise to continue the game loop\r\n        waitForPlayerMoveResolve();\r\n      } else {\r\n        console.log(\"You can't attack the same cell twice.\");\r\n      }\r\n    }\r\n  });\r\n\r\n  while (!gameOver) {\r\n    if (player1.turn) {\r\n      console.log(player2board.board);\r\n      await waitForPlayerMove(); // Wait for player 1's move\r\n\r\n      (0,_ui__WEBPACK_IMPORTED_MODULE_2__.updateBoards)(player1board, player2board);\r\n      player1.turn = false;\r\n      player2.turn = true;\r\n    } else {\r\n      player1board.receiveRandomAttack();\r\n      (0,_ui__WEBPACK_IMPORTED_MODULE_2__.updateBoards)(player1board, player2board);\r\n      player2.turn = false;\r\n      player1.turn = true;\r\n    }\r\n    if (player1board.isAllSunk()) {\r\n      gameOver = true;\r\n      winner = player2;\r\n    } else if (player2board.isAllSunk()) {\r\n      gameOver = true;\r\n      winner = player1;\r\n    }\r\n  }\r\n  return console.log(`${winner.name} Wins!`);\r\n}\r\n\n\n//# sourceURL=webpack://battleshits/./src/gameLoop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLoop */ \"./src/gameLoop.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n(0,_gameLoop__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://battleshits/./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBoards: () => (/* binding */ renderBoards),\n/* harmony export */   updateBoards: () => (/* binding */ updateBoards)\n/* harmony export */ });\nfunction renderBoards(player1board, player2board) {\r\n  const gameContainer = document.getElementById(\"game-container\");\r\n  const gameBoard1 = document.createElement(\"div\");\r\n  const gameBoard2 = document.createElement(\"div\");\r\n  gameBoard1.classList.add(\"gameboard\");\r\n  gameBoard1.id = \"gameboard1\";\r\n  gameBoard2.classList.add(\"gameboard\");\r\n  gameBoard2.id = \"gameboard2\";\r\n  gameContainer.appendChild(gameBoard1);\r\n  gameContainer.appendChild(gameBoard2);\r\n\r\n  const gameBoard1Title = document.createElement(\"h2\");\r\n  gameBoard1Title.textContent = \"Player 1\";\r\n  gameContainer.appendChild(gameBoard1Title);\r\n  gameBoard1Title.classList.add(\"p1-title\");\r\n  const gameBoard2Title = document.createElement(\"h2\");\r\n  gameBoard2Title.textContent = \"Player 2\";\r\n  gameContainer.appendChild(gameBoard2Title);\r\n  gameBoard2Title.classList.add(\"p2-title\");\r\n\r\n  player1board.board.forEach((row, i) => {\r\n    row.forEach((cell, j) => {\r\n      const cellDiv = document.createElement(\"div\");\r\n      cellDiv.classList.add(\"cell\");\r\n      cellDiv.dataset.row = i;\r\n      cellDiv.dataset.col = j;\r\n      gameBoard1.appendChild(cellDiv);\r\n    });\r\n  });\r\n\r\n  player2board.board.forEach((row, i) => {\r\n    row.forEach((cell, j) => {\r\n      const cellDiv = document.createElement(\"div\");\r\n      cellDiv.classList.add(\"cell\");\r\n      cellDiv.dataset.row = i;\r\n      cellDiv.dataset.col = j;\r\n      gameBoard2.appendChild(cellDiv);\r\n    });\r\n  });\r\n}\r\n\r\nfunction updateBoards(player1board, player2board) {\r\n  const gameBoard1 = document.querySelector(\".gameboard:nth-child(1)\");\r\n  const gameBoard2 = document.querySelector(\".gameboard:nth-child(2)\");\r\n\r\n  player1board.board.forEach((row, i) => {\r\n    row.forEach((cell, j) => {\r\n      const cellDiv = gameBoard1.querySelector(\r\n        `.cell[data-row=\"${i}\"][data-col=\"${j}\"]`\r\n      );\r\n      if (cell.hasShip && cell.hit) {\r\n        cellDiv.classList.add(\"hit\");\r\n      } else if (cell.hasShip) {\r\n        cellDiv.classList.add(\"ship\");\r\n      } else if (cell.hit) {\r\n        cellDiv.classList.add(\"miss\");\r\n      }\r\n    });\r\n  });\r\n\r\n  player2board.board.forEach((row, i) => {\r\n    row.forEach((cell, j) => {\r\n      const cellDiv = gameBoard2.querySelector(\r\n        `.cell[data-row=\"${i}\"][data-col=\"${j}\"]`\r\n      );\r\n      if (cell.hasShip && cell.hit) {\r\n        cellDiv.classList.add(\"hit\");\r\n      } else if (cell.hasShip) { //  DON'T NEED THIS BECAUSE THAT WOULD BE WALLHACKS\r\n        cellDiv.classList.add(\"ship\");\r\n      } else if (cell.hit) {\r\n        cellDiv.classList.add(\"miss\");\r\n      }\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://battleshits/./src/ui.js?");

/***/ }),

/***/ "./src/fonts/The Fabulous Mr. Poop.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/The Fabulous Mr. Poop.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8952a1e8c6449decfc05.ttf\";\n\n//# sourceURL=webpack://battleshits/./src/fonts/The_Fabulous_Mr._Poop.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;