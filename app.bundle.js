/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}



/* UTILITY */

:root {
    --BG-COLOR: #333;
    --FG-COLOR: #ccc;

    --HOVER-COLOR: #555;

    --LOW-PRIORITY-COLOR: hsl(100, 100%, 80%);
    --LOW-MEDIUM-PRIORITY-COLOR: hsl(200, 100%, 80%);
    --MEDIUM-PRIORITY-COLOR: hsl(50, 100%, 80%);
    --MEDIUM-HIGH-PRIORITY-COLOR: hsl(300, 100%, 80%);
    --HIGH-PRIORITY-COLOR: hsl(0, 100%, 80%);
}

body {
    height: 100vh;
    font-size: 2rem;
    font-weight: bolder;

    display: grid;
    grid-template-rows: min-content 1fr;

    color: var(--FG-COLOR);
    background-color: var(--BG-COLOR);
}



/* PRIORITY COLOR CLASSES */

.low {
    background-color: var(--LOW-PRIORITY-COLOR);
}
.low-medium {
    background-color: var(--LOW-MEDIUM-PRIORITY-COLOR);
}
.medium {
    background-color: var(--MEDIUM-PRIORITY-COLOR);
}
.medium-high {
    background-color: var(--MEDIUM-HIGH-PRIORITY-COLOR);
}
.high {
    background-color: var(--HIGH-PRIORITY-COLOR);
}



/* HEADER SECTION */

.header {
    height: 100px;
    padding: 10px;

    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;

    border: 5px solid var(--FG-COLOR);
}
.header > .project {
    padding: 0px 20px 0px 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--FG-COLOR);
}
.header .project .title {
    position: relative;
}
.header .project .title > h2 {
    cursor: pointer;
    font-size: 2.5rem;

    color: var(--BG-COLOR);
}
.header .project .title > h2:hover {
    color: var(--HOVER-COLOR);
}
.header .project .title > .drop-down {
    user-select: none;
    display: none;
    position: absolute;
    float: left;
    left: 0;

    color: var(--BG-COLOR);
    border: 5px solid var(--BG-COLOR);
    background-color: var(--FG-COLOR);
}
.header .project .title .drop-down.visible {
    display: inline-block;
}
.header .project .title .drop-down > div {
    width: 100%;
    font-size: 1.5rem;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.header .project .title .drop-down > div:hover {
    cursor: pointer;
    color: var(--FG-COLOR);
    background-color: var(--HOVER-COLOR);
}
.header .project > .actions {
    height: 100%;
    padding: 10px 0px;

    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
}
.header .project .actions > div {
    position: relative;
    display: inline-block;
}
.header .project .actions .down-arrow,
.header .project .actions .settings {
    display: inline-block;
    position: relative;
}
.header .project .actions .down-arrow > img,
.header .project .actions .settings > img {
    height: 35px;
    width: 35px;
    user-select: none;
    cursor: pointer;

    display: flex;
    align-items: center;

    /* make black icon color #333 ( --BG-COLOR ) */
    filter: invert(18%) sepia(1%) saturate(4281%) hue-rotate(45deg) brightness(104%) contrast(93%);
}
.header .project .actions .down-arrow > img:hover, 
.header .project .actions .settings > img:hover {
    /* make icon color #555 ( --HOVER-COLOR ) */
    filter: invert(31%) sepia(0%) saturate(2188%) hue-rotate(134deg) brightness(95%) contrast(82%);
}
.header .project .actions .down-arrow .drop-down,
.header .project .actions .settings .drop-down {
    user-select: none;
    display: none;
    position: absolute;
    float: right;
    right: 0;

    color: var(--BG-COLOR);
    border: 5px solid var(--BG-COLOR);
    background-color: var(--FG-COLOR);
}
.header .project .actions .down-arrow .drop-down.visible,
.header .project .actions .settings .drop-down.visible {
    display: inline-block;
}
.header .project .actions .down-arrow .drop-down > div,
.header .project .actions .settings .drop-down > div {
    width: 100%;
    padding: 10px;
    font-size: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.header .project .actions .down-arrow .drop-down > div:hover,
.header .project .actions .settings .drop-down > div:hover {
    cursor: pointer;
    color: var(--FG-COLOR);
    background-color: var(--HOVER-COLOR);
}



/* CONTENT SECTION */

.content {
    margin: 15px 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.main {
    height: 100%;
    width: 100%;

    border: 5px solid var(--FG-COLOR);
}
.main.all-list-view {
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
.main.all-list-view > div {
    width: 100%;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    color: var(--BG-COLOR);
}
.main.all-list-view div > h2 {
    font-size: 2rem;
}
.main.all-list-view div > .expand {
    width: 100%;
    min-height: 500px;
    margin-top: 10px;

    border: 1px solid black;
}
.main.all-list-view div .expand > textarea {
    width: 100%;
    max-height: 50%;
    padding: 20px;
    word-wrap: break-word;

    background-color: rgba(255,255,255,0.5);
    border: none;
    resize: none;
}















/* RESPONSIVENESS */

@media only screen and (max-width: 460px) {
    /* body {
        background-color: red;
    } */

    .header .project .title > h2 {
        font-size: 2rem;
    }
    .header .project .title .drop-down > div {
        font-size: 1.3rem;
    }

    .header .project .actions .down-arrow > img,
    .header .project .actions .settings > img {
        height: 30px;
        width: 30px;
    }

    .main.all-list-view div > h2 {
        font-size: 1.5rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n\n\n/* UTILITY */\n\n:root {\n    --BG-COLOR: #333;\n    --FG-COLOR: #ccc;\n\n    --HOVER-COLOR: #555;\n\n    --LOW-PRIORITY-COLOR: hsl(100, 100%, 80%);\n    --LOW-MEDIUM-PRIORITY-COLOR: hsl(200, 100%, 80%);\n    --MEDIUM-PRIORITY-COLOR: hsl(50, 100%, 80%);\n    --MEDIUM-HIGH-PRIORITY-COLOR: hsl(300, 100%, 80%);\n    --HIGH-PRIORITY-COLOR: hsl(0, 100%, 80%);\n}\n\nbody {\n    height: 100vh;\n    font-size: 2rem;\n    font-weight: bolder;\n\n    display: grid;\n    grid-template-rows: min-content 1fr;\n\n    color: var(--FG-COLOR);\n    background-color: var(--BG-COLOR);\n}\n\n\n\n/* PRIORITY COLOR CLASSES */\n\n.low {\n    background-color: var(--LOW-PRIORITY-COLOR);\n}\n.low-medium {\n    background-color: var(--LOW-MEDIUM-PRIORITY-COLOR);\n}\n.medium {\n    background-color: var(--MEDIUM-PRIORITY-COLOR);\n}\n.medium-high {\n    background-color: var(--MEDIUM-HIGH-PRIORITY-COLOR);\n}\n.high {\n    background-color: var(--HIGH-PRIORITY-COLOR);\n}\n\n\n\n/* HEADER SECTION */\n\n.header {\n    height: 100px;\n    padding: 10px;\n\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 10px;\n\n    border: 5px solid var(--FG-COLOR);\n}\n.header > .project {\n    padding: 0px 20px 0px 20px;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    background-color: var(--FG-COLOR);\n}\n.header .project .title {\n    position: relative;\n}\n.header .project .title > h2 {\n    cursor: pointer;\n    font-size: 2.5rem;\n\n    color: var(--BG-COLOR);\n}\n.header .project .title > h2:hover {\n    color: var(--HOVER-COLOR);\n}\n.header .project .title > .drop-down {\n    user-select: none;\n    display: none;\n    position: absolute;\n    float: left;\n    left: 0;\n\n    color: var(--BG-COLOR);\n    border: 5px solid var(--BG-COLOR);\n    background-color: var(--FG-COLOR);\n}\n.header .project .title .drop-down.visible {\n    display: inline-block;\n}\n.header .project .title .drop-down > div {\n    width: 100%;\n    font-size: 1.5rem;\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.header .project .title .drop-down > div:hover {\n    cursor: pointer;\n    color: var(--FG-COLOR);\n    background-color: var(--HOVER-COLOR);\n}\n.header .project > .actions {\n    height: 100%;\n    padding: 10px 0px;\n\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 10px;\n}\n.header .project .actions > div {\n    position: relative;\n    display: inline-block;\n}\n.header .project .actions .down-arrow,\n.header .project .actions .settings {\n    display: inline-block;\n    position: relative;\n}\n.header .project .actions .down-arrow > img,\n.header .project .actions .settings > img {\n    height: 35px;\n    width: 35px;\n    user-select: none;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n\n    /* make black icon color #333 ( --BG-COLOR ) */\n    filter: invert(18%) sepia(1%) saturate(4281%) hue-rotate(45deg) brightness(104%) contrast(93%);\n}\n.header .project .actions .down-arrow > img:hover, \n.header .project .actions .settings > img:hover {\n    /* make icon color #555 ( --HOVER-COLOR ) */\n    filter: invert(31%) sepia(0%) saturate(2188%) hue-rotate(134deg) brightness(95%) contrast(82%);\n}\n.header .project .actions .down-arrow .drop-down,\n.header .project .actions .settings .drop-down {\n    user-select: none;\n    display: none;\n    position: absolute;\n    float: right;\n    right: 0;\n\n    color: var(--BG-COLOR);\n    border: 5px solid var(--BG-COLOR);\n    background-color: var(--FG-COLOR);\n}\n.header .project .actions .down-arrow .drop-down.visible,\n.header .project .actions .settings .drop-down.visible {\n    display: inline-block;\n}\n.header .project .actions .down-arrow .drop-down > div,\n.header .project .actions .settings .drop-down > div {\n    width: 100%;\n    padding: 10px;\n    font-size: 1.5rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.header .project .actions .down-arrow .drop-down > div:hover,\n.header .project .actions .settings .drop-down > div:hover {\n    cursor: pointer;\n    color: var(--FG-COLOR);\n    background-color: var(--HOVER-COLOR);\n}\n\n\n\n/* CONTENT SECTION */\n\n.content {\n    margin: 15px 0px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.main {\n    height: 100%;\n    width: 100%;\n\n    border: 5px solid var(--FG-COLOR);\n}\n.main.all-list-view {\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.main.all-list-view > div {\n    width: 100%;\n    padding: 10px;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n\n    color: var(--BG-COLOR);\n}\n.main.all-list-view div > h2 {\n    font-size: 2rem;\n}\n.main.all-list-view div > .expand {\n    width: 100%;\n    min-height: 500px;\n    margin-top: 10px;\n\n    border: 1px solid black;\n}\n.main.all-list-view div .expand > textarea {\n    width: 100%;\n    max-height: 50%;\n    padding: 20px;\n    word-wrap: break-word;\n\n    background-color: rgba(255,255,255,0.5);\n    border: none;\n    resize: none;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* RESPONSIVENESS */\n\n@media only screen and (max-width: 460px) {\n    /* body {\n        background-color: red;\n    } */\n\n    .header .project .title > h2 {\n        font-size: 2rem;\n    }\n    .header .project .title .drop-down > div {\n        font-size: 1.3rem;\n    }\n\n    .header .project .actions .down-arrow > img,\n    .header .project .actions .settings > img {\n        height: 30px;\n        width: 30px;\n    }\n\n    .main.all-list-view div > h2 {\n        font-size: 1.5rem;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _trackAllProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trackAllProjects.js */ "./src/trackAllProjects.js");



function createProject(name="Project") {

    (0,_trackAllProjects_js__WEBPACK_IMPORTED_MODULE_0__.trackAllProjects)(name);

    function addTodo(title, desc, dueDate, priority, checklist) {
        let todoObject = {
            title,
            desc,
            dueDate,
            priority,
            checklist
        };

        (0,_trackAllProjects_js__WEBPACK_IMPORTED_MODULE_0__.addTodoToAllProjects)(this.name, title, todoObject);
        this[title] = todoObject;
    };


    return { name, addTodo };
};



/***/ }),

/***/ "./src/handleDOM.js":
/*!**************************!*\
  !*** ./src/handleDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleDOM: () => (/* binding */ handleDOM)
/* harmony export */ });
/* harmony import */ var _down_arrow_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./down-arrow.svg */ "./src/down-arrow.svg");
/* harmony import */ var _settings_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-icon.svg */ "./src/settings-icon.svg");
/* harmony import */ var _trackAllProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trackAllProjects */ "./src/trackAllProjects.js");




const handleDOM = (() => {

    const body = document.querySelector('body');
    const content = document.querySelector('.content');
    let header, project, projectTitle, actions, downArrow, arrowMenu, settings, settingsMenu;
    let h2, projectMenu;
    let main;
    let arrowMenuItems = ['arrow', 'menu', 'options'];
    let settingsMenuItems = ['settings', 'menu', 'options'];
    let projectMenuItems = [];

    let priorityClasses = [
        'low',
        'low',
        'low-medium',
        'low-medium',
        'low-medium',
        'medium',
        'medium-high',
        'medium-high',
        'medium-high',
        'high'
    ];

    const addOptionsToMenu = (appendTo, arr) => {
        console.log(arr);
        for (let i in arr) {
            let tmp = document.createElement('div');
            tmp.classList.add(`${arr[i]}`);
            tmp.innerText = `${arr[i].replace(/-/g, ' ')}`;
            appendTo.appendChild(tmp);
        };
    };

    const createIcon = (img, appendto) => {
        let tmp = new Image();
        tmp.src = img;
        tmp.classList.add('icon');
        tmp.setAttribute('draggable', false);
        appendto.appendChild(tmp);
    };

    const updatePriorityLevel = (ele, priority) => {
        if (priority === 10) { priority-- };
        ele.classList.add(priorityClasses[priority]);
    };

    const createProjectDiv = () => {
        project = document.createElement('div');
        project.classList.add('project');
        header.appendChild(project);
        projectTitle = document.createElement('div');
        projectTitle.classList.add('title');
        h2 = document.createElement('h2');
        projectTitle.appendChild(h2);
        projectMenu = document.createElement('div');
        projectMenu.classList.add('drop-down');
        projectMenuItems = _trackAllProjects__WEBPACK_IMPORTED_MODULE_2__.allProjects.map(o => o.project);
        projectMenuItems.push('All-List-View');
        addOptionsToMenu(projectMenu, projectMenuItems);
        projectTitle.appendChild(projectMenu);
        project.appendChild(projectTitle);
    };

    const createActionsDiv = () => {
        actions = document.createElement('div');
        actions.classList.add('actions');
        project.appendChild(actions);
    };

    const createDownArrowMenu = (appendTo) => {
        downArrow = document.createElement('div');
        createIcon(_down_arrow_svg__WEBPACK_IMPORTED_MODULE_0__, downArrow);
        downArrow.classList.add('down-arrow');
        arrowMenu = document.createElement('div');
        arrowMenu.classList.add('drop-down');
        addOptionsToMenu(arrowMenu, arrowMenuItems);
        downArrow.appendChild(arrowMenu);
        appendTo.appendChild(downArrow);
    };

    const createSettingsMenu = (appendTo) => {
        settings = document.createElement('div');
        createIcon(_settings_icon_svg__WEBPACK_IMPORTED_MODULE_1__, settings);
        settings.classList.add('settings');
        settingsMenu = document.createElement('div');
        settingsMenu.classList.add('drop-down');
        addOptionsToMenu(settingsMenu, settingsMenuItems);
        settings.appendChild(settingsMenu);
        appendTo.appendChild(settings);
    };

    const createHeader = () => {
        header = document.createElement('div');
        header.classList.add('header');
        body.insertBefore(header, content);

        createProjectDiv();

        createActionsDiv();
        createDownArrowMenu(actions);
        createSettingsMenu(actions);
    };

    const createMainDiv = () => {
        // create main div ( div with all content )
        main = document.createElement('div');
        main.classList.add('main');
        content.appendChild(main);
    };

    const renderTodo = (todo) => {
        // main todo element with title and due date
        let div = document.createElement('div');
        console.log(todo);
        let divTitle = document.createElement('h2');
        divTitle.innerText = todo.title;
        let divDueDate = document.createElement('h2');
        divDueDate.innerText = todo.dueDate;
        div.appendChild(divTitle);
        div.appendChild(divDueDate);
        updatePriorityLevel(div, todo.priority);
        main.appendChild(div);

        // expand element for when todo clicked
        let expand = document.createElement('div');
        expand.classList.add('expand')
        updatePriorityLevel(expand, todo.priority);

        // add description on expand element
        let desc = document.createElement('textarea');
        desc.todo = todo; //this assocciates the element with the todo object
        desc.innerText = todo.desc;
        expand.appendChild(desc);
        div.appendChild(expand);
    };

    const updateTodos = () => {
        let textarea = document.querySelectorAll('textarea');

        textarea.forEach(area => {
            area.addEventListener('input', (e) => {
                e.target.todo.desc = e.target.value;
            });
        });
    };

    const allListView = () => {
        if (!header) { createHeader() }
        else { content.innerText = '' };

        h2.innerText = 'All List View';

        createMainDiv();
        main.classList.add('all-list-view');

        // render all todos from all projects on screen
        _trackAllProjects__WEBPACK_IMPORTED_MODULE_2__.allProjects.filter(object => {
            for (let key in object) {
                if (key !== 'project') {
                    renderTodo(object[key]);
                };
            };
        });

       updateTodos();
    };

    const projectView = (projectName) => {
        main.innerText = '';

        //filter allProjects for project that was clicked
        let result = _trackAllProjects__WEBPACK_IMPORTED_MODULE_2__.allProjects.filter(object => {
            return object.project === projectName;
        });

        //render all todos from the selected project
        result.filter(object => {
            for (let key in object) {
                if (key !== 'project') {
                    console.log(object[key]);
                    renderTodo(object[key]);
                };
            };
        });

        updateTodos();
    };


    


    return { allListView, projectView };
})();




/***/ }),

/***/ "./src/trackAllProjects.js":
/*!*********************************!*\
  !*** ./src/trackAllProjects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodoToAllProjects: () => (/* binding */ addTodoToAllProjects),
/* harmony export */   allProjects: () => (/* binding */ allProjects),
/* harmony export */   trackAllProjects: () => (/* binding */ trackAllProjects)
/* harmony export */ });

let allProjects = [];

function trackAllProjects(project) {
    allProjects.push({ project });
};

function addTodoToAllProjects(projectName, todoName, todoObject) {
    allProjects.filter(object => {
        if (object.project === projectName) {
            object[todoName] = todoObject;
        };
    });
};



/***/ }),

/***/ "./src/down-arrow.svg":
/*!****************************!*\
  !*** ./src/down-arrow.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "691e4fb860486bc958df.svg";

/***/ }),

/***/ "./src/settings-icon.svg":
/*!*******************************!*\
  !*** ./src/settings-icon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e0b4e4a9ddaf1c49b18.svg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");
/* harmony import */ var _handleDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleDOM.js */ "./src/handleDOM.js");
/* harmony import */ var _trackAllProjects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trackAllProjects.js */ "./src/trackAllProjects.js");





// // create new project object to store all todos
// let test = createProject('Project-Name');

// // add todo to the project object using addTodo method and createTodo module
// test.addTodo('title', 'description', 'duedate', 'priority', 'checklist');

// // result is the project object with all todos stored as objects
// console.log(test);





let test = (0,_createProject_js__WEBPACK_IMPORTED_MODULE_1__.createProject)('Test-Project');// store names with dashes add space later

test.addTodo('title1', 'Write why youre doing this task or how to do it.. You can edit this text', 'due', 2, 'check');
test.addTodo('title2', 'desc', 'due', 6, 'check');
test.addTodo('title3', 'desc', 'due', 0, 'check');

let testtwo = (0,_createProject_js__WEBPACK_IMPORTED_MODULE_1__.createProject)('Another-Project');

testtwo.addTodo('title4', 'desc', 'due', 5, 'check');
testtwo.addTodo('title5', 'desc', 'due', 10, 'check');
testtwo.addTodo('title6', 'desc', 'due', 3, 'check');




_handleDOM_js__WEBPACK_IMPORTED_MODULE_2__.handleDOM.allListView();




const downArrowImg = document.querySelector('.down-arrow > img');
const settingsImg = document.querySelector('.settings > img');

const title = document.querySelector('.title > h2');
const titleDropDown = document.querySelector('.title > .drop-down');


downArrowImg.addEventListener('click', (e) => {
    e.target.nextSibling.classList.toggle('visible');
});

settingsImg.addEventListener('click', (e) => {
    e.target.nextSibling.classList.toggle('visible');
});

title.addEventListener('click', (e) => {
    e.target.nextSibling.classList.toggle('visible');
});

titleDropDown.addEventListener('click', (e) => {
    
    if (e.target.className === 'All-List-View') {
        _handleDOM_js__WEBPACK_IMPORTED_MODULE_2__.handleDOM.allListView();
    } else {
        _handleDOM_js__WEBPACK_IMPORTED_MODULE_2__.handleDOM.projectView(e.target.className);
    };

});

window.addEventListener('click', (e) => {
    if (e.target !== downArrowImg) { 
        downArrowImg.nextSibling.classList.remove('visible');
    };

    if (e.target !== settingsImg) { 
        settingsImg.nextSibling.classList.remove('visible');
    };

    if (e.target !== title) {
        title.nextSibling.classList.remove('visible');
    };
});




/*

All 'Projects' are Objects that Hold 'Todos'
All 'Todos' are Objects
'Todos' can only be made on a 'Project' but there is an 'All List View'

- You can't have 2 'Projects' with the same name
- Priority must be from 0-10 (inclusive)

*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsU0FBUyxXQUFXLEtBQUssWUFBWSxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxXQUFXLGFBQWEsYUFBYSxhQUFhLFNBQVMsYUFBYSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksU0FBUyxhQUFhLE1BQU0sVUFBVSxXQUFXLFVBQVUsWUFBWSxZQUFZLFlBQVksTUFBTSxLQUFLLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZ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Q0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFTO0FBQ2pCLE1BQU07QUFDTixRQUFRLG9EQUFTO0FBQ2pCOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7O0FBS0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90cmFja0FsbFByb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG5cblxuLyogVVRJTElUWSAqL1xuXG46cm9vdCB7XG4gICAgLS1CRy1DT0xPUjogIzMzMztcbiAgICAtLUZHLUNPTE9SOiAjY2NjO1xuXG4gICAgLS1IT1ZFUi1DT0xPUjogIzU1NTtcblxuICAgIC0tTE9XLVBSSU9SSVRZLUNPTE9SOiBoc2woMTAwLCAxMDAlLCA4MCUpO1xuICAgIC0tTE9XLU1FRElVTS1QUklPUklUWS1DT0xPUjogaHNsKDIwMCwgMTAwJSwgODAlKTtcbiAgICAtLU1FRElVTS1QUklPUklUWS1DT0xPUjogaHNsKDUwLCAxMDAlLCA4MCUpO1xuICAgIC0tTUVESVVNLUhJR0gtUFJJT1JJVFktQ09MT1I6IGhzbCgzMDAsIDEwMCUsIDgwJSk7XG4gICAgLS1ISUdILVBSSU9SSVRZLUNPTE9SOiBoc2woMCwgMTAwJSwgODAlKTtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG5cbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbn1cblxuXG5cbi8qIFBSSU9SSVRZIENPTE9SIENMQVNTRVMgKi9cblxuLmxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTE9XLVBSSU9SSVRZLUNPTE9SKTtcbn1cbi5sb3ctbWVkaXVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MT1ctTUVESVVNLVBSSU9SSVRZLUNPTE9SKTtcbn1cbi5tZWRpdW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU1FRElVTS1QUklPUklUWS1DT0xPUik7XG59XG4ubWVkaXVtLWhpZ2gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU1FRElVTS1ISUdILVBSSU9SSVRZLUNPTE9SKTtcbn1cbi5oaWdoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ISUdILVBSSU9SSVRZLUNPTE9SKTtcbn1cblxuXG5cbi8qIEhFQURFUiBTRUNUSU9OICovXG5cbi5oZWFkZXIge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tRkctQ09MT1IpO1xufVxuLmhlYWRlciA+IC5wcm9qZWN0IHtcbiAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgPiBoMiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbn1cbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlID4gaDI6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1IT1ZFUi1DT0xPUik7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSA+IC5kcm9wLWRvd24ge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGxlZnQ6IDA7XG5cbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLUJHLUNPTE9SKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSAuZHJvcC1kb3duLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlIC5kcm9wLWRvd24gPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlIC5kcm9wLWRvd24gPiBkaXY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhPVkVSLUNPTE9SKTtcbn1cbi5oZWFkZXIgLnByb2plY3QgPiAuYWN0aW9ucyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGdhcDogMTBweDtcbn1cbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgPiBkaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93LFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3Mge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93ID4gaW1nLFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgPiBpbWcge1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAvKiBtYWtlIGJsYWNrIGljb24gY29sb3IgIzMzMyAoIC0tQkctQ09MT1IgKSAqL1xuICAgIGZpbHRlcjogaW52ZXJ0KDE4JSkgc2VwaWEoMSUpIHNhdHVyYXRlKDQyODElKSBodWUtcm90YXRlKDQ1ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDkzJSk7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93ID4gaW1nOmhvdmVyLCBcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzID4gaW1nOmhvdmVyIHtcbiAgICAvKiBtYWtlIGljb24gY29sb3IgIzU1NSAoIC0tSE9WRVItQ09MT1IgKSAqL1xuICAgIGZpbHRlcjogaW52ZXJ0KDMxJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIxODglKSBodWUtcm90YXRlKDEzNGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDgyJSk7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93IC5kcm9wLWRvd24sXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyAuZHJvcC1kb3duIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLUJHLUNPTE9SKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93IC5kcm9wLWRvd24udmlzaWJsZSxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIC5kcm9wLWRvd24udmlzaWJsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duID4gZGl2LFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93biA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duID4gZGl2OmhvdmVyLFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93biA+IGRpdjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSE9WRVItQ09MT1IpO1xufVxuXG5cblxuLyogQ09OVEVOVCBTRUNUSU9OICovXG5cbi5jb250ZW50IHtcbiAgICBtYXJnaW46IDE1cHggMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1GRy1DT0xPUik7XG59XG4ubWFpbi5hbGwtbGlzdC12aWV3IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuLm1haW4uYWxsLWxpc3QtdmlldyA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbn1cbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gLmV4cGFuZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgLmV4cGFuZCA+IHRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qIFJFU1BPTlNJVkVORVNTICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgICAvKiBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIH0gKi9cblxuICAgIC5oZWFkZXIgLnByb2plY3QgLnRpdGxlID4gaDIge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICAgIC5oZWFkZXIgLnByb2plY3QgLnRpdGxlIC5kcm9wLWRvd24gPiBkaXYge1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG5cbiAgICAuaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93ID4gaW1nLFxuICAgIC5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzID4gaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICB9XG5cbiAgICAubWFpbi5hbGwtbGlzdC12aWV3IGRpdiA+IGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5h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OUIsZUFBZTs7SUFFZixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCOztJQUVoQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHFCQUFxQjs7SUFFckIsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixZQUFZO0FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLG1CQUFtQjs7QUFFbkI7SUFDSTs7T0FFRzs7SUFFSDtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTs7UUFFSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5cXG4vKiBVVElMSVRZICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLUJHLUNPTE9SOiAjMzMzO1xcbiAgICAtLUZHLUNPTE9SOiAjY2NjO1xcblxcbiAgICAtLUhPVkVSLUNPTE9SOiAjNTU1O1xcblxcbiAgICAtLUxPVy1QUklPUklUWS1DT0xPUjogaHNsKDEwMCwgMTAwJSwgODAlKTtcXG4gICAgLS1MT1ctTUVESVVNLVBSSU9SSVRZLUNPTE9SOiBoc2woMjAwLCAxMDAlLCA4MCUpO1xcbiAgICAtLU1FRElVTS1QUklPUklUWS1DT0xPUjogaHNsKDUwLCAxMDAlLCA4MCUpO1xcbiAgICAtLU1FRElVTS1ISUdILVBSSU9SSVRZLUNPTE9SOiBoc2woMzAwLCAxMDAlLCA4MCUpO1xcbiAgICAtLUhJR0gtUFJJT1JJVFktQ09MT1I6IGhzbCgwLCAxMDAlLCA4MCUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG5cXG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkctQ09MT1IpO1xcbn1cXG5cXG5cXG5cXG4vKiBQUklPUklUWSBDT0xPUiBDTEFTU0VTICovXFxuXFxuLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUxPVy1QUklPUklUWS1DT0xPUik7XFxufVxcbi5sb3ctbWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTE9XLU1FRElVTS1QUklPUklUWS1DT0xPUik7XFxufVxcbi5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NRURJVU0tUFJJT1JJVFktQ09MT1IpO1xcbn1cXG4ubWVkaXVtLWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NRURJVU0tSElHSC1QUklPUklUWS1DT0xPUik7XFxufVxcbi5oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSElHSC1QUklPUklUWS1DT0xPUik7XFxufVxcblxcblxcblxcbi8qIEhFQURFUiBTRUNUSU9OICovXFxuXFxuLmhlYWRlciB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLUZHLUNPTE9SKTtcXG59XFxuLmhlYWRlciA+IC5wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgPiBoMiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlID4gaDI6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tSE9WRVItQ09MT1IpO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSA+IC5kcm9wLWRvd24ge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tQkctQ09MT1IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlIC5kcm9wLWRvd24udmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgLmRyb3AtZG93biA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlIC5kcm9wLWRvd24gPiBkaXY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhPVkVSLUNPTE9SKTtcXG59XFxuLmhlYWRlciAucHJvamVjdCA+IC5hY3Rpb25zIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyA+IGRpdiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93LFxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgPiBpbWcsXFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAvKiBtYWtlIGJsYWNrIGljb24gY29sb3IgIzMzMyAoIC0tQkctQ09MT1IgKSAqL1xcbiAgICBmaWx0ZXI6IGludmVydCgxOCUpIHNlcGlhKDElKSBzYXR1cmF0ZSg0MjgxJSkgaHVlLXJvdGF0ZSg0NWRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCg5MyUpO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93ID4gaW1nOmhvdmVyLCBcXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyA+IGltZzpob3ZlciB7XFxuICAgIC8qIG1ha2UgaWNvbiBjb2xvciAjNTU1ICggLS1IT1ZFUi1DT0xPUiApICovXFxuICAgIGZpbHRlcjogaW52ZXJ0KDMxJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIxODglKSBodWUtcm90YXRlKDEzNGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDgyJSk7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgLmRyb3AtZG93bixcXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyAuZHJvcC1kb3duIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICByaWdodDogMDtcXG5cXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tQkctQ09MT1IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgLmRyb3AtZG93bi52aXNpYmxlLFxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIC5kcm9wLWRvd24udmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duID4gZGl2LFxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIC5kcm9wLWRvd24gPiBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93IC5kcm9wLWRvd24gPiBkaXY6aG92ZXIsXFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93biA+IGRpdjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSE9WRVItQ09MT1IpO1xcbn1cXG5cXG5cXG5cXG4vKiBDT05URU5UIFNFQ1RJT04gKi9cXG5cXG4uY29udGVudCB7XFxuICAgIG1hcmdpbjogMTVweCAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLUZHLUNPTE9SKTtcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgPiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgPiAuZXhwYW5kIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgLmV4cGFuZCA+IHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDUwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBSRVNQT05TSVZFTkVTUyAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcXG4gICAgLyogYm9keSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIH0gKi9cXG5cXG4gICAgLmhlYWRlciAucHJvamVjdCAudGl0bGUgPiBoMiB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG4gICAgLmhlYWRlciAucHJvamVjdCAudGl0bGUgLmRyb3AtZG93biA+IGRpdiB7XFxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93ID4gaW1nLFxcbiAgICAuaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyA+IGltZyB7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgfVxcblxcbiAgICAubWFpbi5hbGwtbGlzdC12aWV3IGRpdiA+IGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0cmFja0FsbFByb2plY3RzIH0gZnJvbSAnLi90cmFja0FsbFByb2plY3RzLmpzJztcbmltcG9ydCB7IGFkZFRvZG9Ub0FsbFByb2plY3RzIH0gZnJvbSAnLi90cmFja0FsbFByb2plY3RzLmpzJztcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lPVwiUHJvamVjdFwiKSB7XG5cbiAgICB0cmFja0FsbFByb2plY3RzKG5hbWUpO1xuXG4gICAgZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCkge1xuICAgICAgICBsZXQgdG9kb09iamVjdCA9IHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzYyxcbiAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIGNoZWNrbGlzdFxuICAgICAgICB9O1xuXG4gICAgICAgIGFkZFRvZG9Ub0FsbFByb2plY3RzKHRoaXMubmFtZSwgdGl0bGUsIHRvZG9PYmplY3QpO1xuICAgICAgICB0aGlzW3RpdGxlXSA9IHRvZG9PYmplY3Q7XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIHsgbmFtZSwgYWRkVG9kbyB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCB9OyIsImltcG9ydCBkb3duQXJyb3dQbmcgZnJvbSAnLi9kb3duLWFycm93LnN2Zyc7XG5pbXBvcnQgc2V0dGluZ3NQbmcgZnJvbSAnLi9zZXR0aW5ncy1pY29uLnN2Zyc7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gJy4vdHJhY2tBbGxQcm9qZWN0cyc7XG5cbmNvbnN0IGhhbmRsZURPTSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGxldCBoZWFkZXIsIHByb2plY3QsIHByb2plY3RUaXRsZSwgYWN0aW9ucywgZG93bkFycm93LCBhcnJvd01lbnUsIHNldHRpbmdzLCBzZXR0aW5nc01lbnU7XG4gICAgbGV0IGgyLCBwcm9qZWN0TWVudTtcbiAgICBsZXQgbWFpbjtcbiAgICBsZXQgYXJyb3dNZW51SXRlbXMgPSBbJ2Fycm93JywgJ21lbnUnLCAnb3B0aW9ucyddO1xuICAgIGxldCBzZXR0aW5nc01lbnVJdGVtcyA9IFsnc2V0dGluZ3MnLCAnbWVudScsICdvcHRpb25zJ107XG4gICAgbGV0IHByb2plY3RNZW51SXRlbXMgPSBbXTtcblxuICAgIGxldCBwcmlvcml0eUNsYXNzZXMgPSBbXG4gICAgICAgICdsb3cnLFxuICAgICAgICAnbG93JyxcbiAgICAgICAgJ2xvdy1tZWRpdW0nLFxuICAgICAgICAnbG93LW1lZGl1bScsXG4gICAgICAgICdsb3ctbWVkaXVtJyxcbiAgICAgICAgJ21lZGl1bScsXG4gICAgICAgICdtZWRpdW0taGlnaCcsXG4gICAgICAgICdtZWRpdW0taGlnaCcsXG4gICAgICAgICdtZWRpdW0taGlnaCcsXG4gICAgICAgICdoaWdoJ1xuICAgIF07XG5cbiAgICBjb25zdCBhZGRPcHRpb25zVG9NZW51ID0gKGFwcGVuZFRvLCBhcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYXJyKTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhcnIpIHtcbiAgICAgICAgICAgIGxldCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRtcC5jbGFzc0xpc3QuYWRkKGAke2FycltpXX1gKTtcbiAgICAgICAgICAgIHRtcC5pbm5lclRleHQgPSBgJHthcnJbaV0ucmVwbGFjZSgvLS9nLCAnICcpfWA7XG4gICAgICAgICAgICBhcHBlbmRUby5hcHBlbmRDaGlsZCh0bXApO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVJY29uID0gKGltZywgYXBwZW5kdG8pID0+IHtcbiAgICAgICAgbGV0IHRtcCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0bXAuc3JjID0gaW1nO1xuICAgICAgICB0bXAuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICB0bXAuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCBmYWxzZSk7XG4gICAgICAgIGFwcGVuZHRvLmFwcGVuZENoaWxkKHRtcCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZVByaW9yaXR5TGV2ZWwgPSAoZWxlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09IDEwKSB7IHByaW9yaXR5LS0gfTtcbiAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQocHJpb3JpdHlDbGFzc2VzW3ByaW9yaXR5XSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3REaXYgPSAoKSA9PiB7XG4gICAgICAgIHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChoMik7XG4gICAgICAgIHByb2plY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RNZW51LmNsYXNzTGlzdC5hZGQoJ2Ryb3AtZG93bicpO1xuICAgICAgICBwcm9qZWN0TWVudUl0ZW1zID0gYWxsUHJvamVjdHMubWFwKG8gPT4gby5wcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdE1lbnVJdGVtcy5wdXNoKCdBbGwtTGlzdC1WaWV3Jyk7XG4gICAgICAgIGFkZE9wdGlvbnNUb01lbnUocHJvamVjdE1lbnUsIHByb2plY3RNZW51SXRlbXMpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQocHJvamVjdE1lbnUpO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUFjdGlvbnNEaXYgPSAoKSA9PiB7XG4gICAgICAgIGFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdhY3Rpb25zJyk7XG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZURvd25BcnJvd01lbnUgPSAoYXBwZW5kVG8pID0+IHtcbiAgICAgICAgZG93bkFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNyZWF0ZUljb24oZG93bkFycm93UG5nLCBkb3duQXJyb3cpO1xuICAgICAgICBkb3duQXJyb3cuY2xhc3NMaXN0LmFkZCgnZG93bi1hcnJvdycpO1xuICAgICAgICBhcnJvd01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYXJyb3dNZW51LmNsYXNzTGlzdC5hZGQoJ2Ryb3AtZG93bicpO1xuICAgICAgICBhZGRPcHRpb25zVG9NZW51KGFycm93TWVudSwgYXJyb3dNZW51SXRlbXMpO1xuICAgICAgICBkb3duQXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dNZW51KTtcbiAgICAgICAgYXBwZW5kVG8uYXBwZW5kQ2hpbGQoZG93bkFycm93KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlU2V0dGluZ3NNZW51ID0gKGFwcGVuZFRvKSA9PiB7XG4gICAgICAgIHNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNyZWF0ZUljb24oc2V0dGluZ3NQbmcsIHNldHRpbmdzKTtcbiAgICAgICAgc2V0dGluZ3MuY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3MnKTtcbiAgICAgICAgc2V0dGluZ3NNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNldHRpbmdzTWVudS5jbGFzc0xpc3QuYWRkKCdkcm9wLWRvd24nKTtcbiAgICAgICAgYWRkT3B0aW9uc1RvTWVudShzZXR0aW5nc01lbnUsIHNldHRpbmdzTWVudUl0ZW1zKTtcbiAgICAgICAgc2V0dGluZ3MuYXBwZW5kQ2hpbGQoc2V0dGluZ3NNZW51KTtcbiAgICAgICAgYXBwZW5kVG8uYXBwZW5kQ2hpbGQoc2V0dGluZ3MpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGhlYWRlciwgY29udGVudCk7XG5cbiAgICAgICAgY3JlYXRlUHJvamVjdERpdigpO1xuXG4gICAgICAgIGNyZWF0ZUFjdGlvbnNEaXYoKTtcbiAgICAgICAgY3JlYXRlRG93bkFycm93TWVudShhY3Rpb25zKTtcbiAgICAgICAgY3JlYXRlU2V0dGluZ3NNZW51KGFjdGlvbnMpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVNYWluRGl2ID0gKCkgPT4ge1xuICAgICAgICAvLyBjcmVhdGUgbWFpbiBkaXYgKCBkaXYgd2l0aCBhbGwgY29udGVudCApXG4gICAgICAgIG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlclRvZG8gPSAodG9kbykgPT4ge1xuICAgICAgICAvLyBtYWluIHRvZG8gZWxlbWVudCB3aXRoIHRpdGxlIGFuZCBkdWUgZGF0ZVxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgICAgICBsZXQgZGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBkaXZUaXRsZS5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xuICAgICAgICBsZXQgZGl2RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGRpdkR1ZURhdGUuaW5uZXJUZXh0ID0gdG9kby5kdWVEYXRlO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2RHVlRGF0ZSk7XG4gICAgICAgIHVwZGF0ZVByaW9yaXR5TGV2ZWwoZGl2LCB0b2RvLnByaW9yaXR5KTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgIC8vIGV4cGFuZCBlbGVtZW50IGZvciB3aGVuIHRvZG8gY2xpY2tlZFxuICAgICAgICBsZXQgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKVxuICAgICAgICB1cGRhdGVQcmlvcml0eUxldmVsKGV4cGFuZCwgdG9kby5wcmlvcml0eSk7XG5cbiAgICAgICAgLy8gYWRkIGRlc2NyaXB0aW9uIG9uIGV4cGFuZCBlbGVtZW50XG4gICAgICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgZGVzYy50b2RvID0gdG9kbzsgLy90aGlzIGFzc29jY2lhdGVzIHRoZSBlbGVtZW50IHdpdGggdGhlIHRvZG8gb2JqZWN0XG4gICAgICAgIGRlc2MuaW5uZXJUZXh0ID0gdG9kby5kZXNjO1xuICAgICAgICBleHBhbmQuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChleHBhbmQpO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVUb2RvcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEnKTtcblxuICAgICAgICB0ZXh0YXJlYS5mb3JFYWNoKGFyZWEgPT4ge1xuICAgICAgICAgICAgYXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQudG9kby5kZXNjID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFsbExpc3RWaWV3ID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWhlYWRlcikgeyBjcmVhdGVIZWFkZXIoKSB9XG4gICAgICAgIGVsc2UgeyBjb250ZW50LmlubmVyVGV4dCA9ICcnIH07XG5cbiAgICAgICAgaDIuaW5uZXJUZXh0ID0gJ0FsbCBMaXN0IFZpZXcnO1xuXG4gICAgICAgIGNyZWF0ZU1haW5EaXYoKTtcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdhbGwtbGlzdC12aWV3Jyk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGFsbCB0b2RvcyBmcm9tIGFsbCBwcm9qZWN0cyBvbiBzY3JlZW5cbiAgICAgICAgYWxsUHJvamVjdHMuZmlsdGVyKG9iamVjdCA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclRvZG8ob2JqZWN0W2tleV0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgIHVwZGF0ZVRvZG9zKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3RWaWV3ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIG1haW4uaW5uZXJUZXh0ID0gJyc7XG5cbiAgICAgICAgLy9maWx0ZXIgYWxsUHJvamVjdHMgZm9yIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZFxuICAgICAgICBsZXQgcmVzdWx0ID0gYWxsUHJvamVjdHMuZmlsdGVyKG9iamVjdCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0LnByb2plY3QgPT09IHByb2plY3ROYW1lO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL3JlbmRlciBhbGwgdG9kb3MgZnJvbSB0aGUgc2VsZWN0ZWQgcHJvamVjdFxuICAgICAgICByZXN1bHQuZmlsdGVyKG9iamVjdCA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iamVjdFtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVG9kbyhvYmplY3Rba2V5XSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVwZGF0ZVRvZG9zKCk7XG4gICAgfTtcblxuXG4gICAgXG5cblxuICAgIHJldHVybiB7IGFsbExpc3RWaWV3LCBwcm9qZWN0VmlldyB9O1xufSkoKTtcblxuZXhwb3J0IHsgaGFuZGxlRE9NIH07XG4iLCJcbmxldCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5mdW5jdGlvbiB0cmFja0FsbFByb2plY3RzKHByb2plY3QpIHtcbiAgICBhbGxQcm9qZWN0cy5wdXNoKHsgcHJvamVjdCB9KTtcbn07XG5cbmZ1bmN0aW9uIGFkZFRvZG9Ub0FsbFByb2plY3RzKHByb2plY3ROYW1lLCB0b2RvTmFtZSwgdG9kb09iamVjdCkge1xuICAgIGFsbFByb2plY3RzLmZpbHRlcihvYmplY3QgPT4ge1xuICAgICAgICBpZiAob2JqZWN0LnByb2plY3QgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBvYmplY3RbdG9kb05hbWVdID0gdG9kb09iamVjdDtcbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7IHRyYWNrQWxsUHJvamVjdHMsIGFsbFByb2plY3RzLCBhZGRUb2RvVG9BbGxQcm9qZWN0cyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0LmpzJztcbmltcG9ydCB7IGhhbmRsZURPTSB9IGZyb20gJy4vaGFuZGxlRE9NLmpzJztcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSAnLi90cmFja0FsbFByb2plY3RzLmpzJztcblxuLy8gLy8gY3JlYXRlIG5ldyBwcm9qZWN0IG9iamVjdCB0byBzdG9yZSBhbGwgdG9kb3Ncbi8vIGxldCB0ZXN0ID0gY3JlYXRlUHJvamVjdCgnUHJvamVjdC1OYW1lJyk7XG5cbi8vIC8vIGFkZCB0b2RvIHRvIHRoZSBwcm9qZWN0IG9iamVjdCB1c2luZyBhZGRUb2RvIG1ldGhvZCBhbmQgY3JlYXRlVG9kbyBtb2R1bGVcbi8vIHRlc3QuYWRkVG9kbygndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnZHVlZGF0ZScsICdwcmlvcml0eScsICdjaGVja2xpc3QnKTtcblxuLy8gLy8gcmVzdWx0IGlzIHRoZSBwcm9qZWN0IG9iamVjdCB3aXRoIGFsbCB0b2RvcyBzdG9yZWQgYXMgb2JqZWN0c1xuLy8gY29uc29sZS5sb2codGVzdCk7XG5cblxuXG5cblxubGV0IHRlc3QgPSBjcmVhdGVQcm9qZWN0KCdUZXN0LVByb2plY3QnKTsvLyBzdG9yZSBuYW1lcyB3aXRoIGRhc2hlcyBhZGQgc3BhY2UgbGF0ZXJcblxudGVzdC5hZGRUb2RvKCd0aXRsZTEnLCAnV3JpdGUgd2h5IHlvdXJlIGRvaW5nIHRoaXMgdGFzayBvciBob3cgdG8gZG8gaXQuLiBZb3UgY2FuIGVkaXQgdGhpcyB0ZXh0JywgJ2R1ZScsIDIsICdjaGVjaycpO1xudGVzdC5hZGRUb2RvKCd0aXRsZTInLCAnZGVzYycsICdkdWUnLCA2LCAnY2hlY2snKTtcbnRlc3QuYWRkVG9kbygndGl0bGUzJywgJ2Rlc2MnLCAnZHVlJywgMCwgJ2NoZWNrJyk7XG5cbmxldCB0ZXN0dHdvID0gY3JlYXRlUHJvamVjdCgnQW5vdGhlci1Qcm9qZWN0Jyk7XG5cbnRlc3R0d28uYWRkVG9kbygndGl0bGU0JywgJ2Rlc2MnLCAnZHVlJywgNSwgJ2NoZWNrJyk7XG50ZXN0dHdvLmFkZFRvZG8oJ3RpdGxlNScsICdkZXNjJywgJ2R1ZScsIDEwLCAnY2hlY2snKTtcbnRlc3R0d28uYWRkVG9kbygndGl0bGU2JywgJ2Rlc2MnLCAnZHVlJywgMywgJ2NoZWNrJyk7XG5cblxuXG5cbmhhbmRsZURPTS5hbGxMaXN0VmlldygpO1xuXG5cblxuXG5jb25zdCBkb3duQXJyb3dJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93bi1hcnJvdyA+IGltZycpO1xuY29uc3Qgc2V0dGluZ3NJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MgPiBpbWcnKTtcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUgPiBoMicpO1xuY29uc3QgdGl0bGVEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZSA+IC5kcm9wLWRvd24nKTtcblxuXG5kb3duQXJyb3dJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbn0pO1xuXG5zZXR0aW5nc0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xufSk7XG5cbnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC5uZXh0U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XG59KTtcblxudGl0bGVEcm9wRG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ0FsbC1MaXN0LVZpZXcnKSB7XG4gICAgICAgIGhhbmRsZURPTS5hbGxMaXN0VmlldygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRsZURPTS5wcm9qZWN0VmlldyhlLnRhcmdldC5jbGFzc05hbWUpO1xuICAgIH07XG5cbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCAhPT0gZG93bkFycm93SW1nKSB7IFxuICAgICAgICBkb3duQXJyb3dJbWcubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH07XG5cbiAgICBpZiAoZS50YXJnZXQgIT09IHNldHRpbmdzSW1nKSB7IFxuICAgICAgICBzZXR0aW5nc0ltZy5uZXh0U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfTtcblxuICAgIGlmIChlLnRhcmdldCAhPT0gdGl0bGUpIHtcbiAgICAgICAgdGl0bGUubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH07XG59KTtcblxuXG5cblxuLypcblxuQWxsICdQcm9qZWN0cycgYXJlIE9iamVjdHMgdGhhdCBIb2xkICdUb2RvcydcbkFsbCAnVG9kb3MnIGFyZSBPYmplY3RzXG4nVG9kb3MnIGNhbiBvbmx5IGJlIG1hZGUgb24gYSAnUHJvamVjdCcgYnV0IHRoZXJlIGlzIGFuICdBbGwgTGlzdCBWaWV3J1xuXG4tIFlvdSBjYW4ndCBoYXZlIDIgJ1Byb2plY3RzJyB3aXRoIHRoZSBzYW1lIG5hbWVcbi0gUHJpb3JpdHkgbXVzdCBiZSBmcm9tIDAtMTAgKGluY2x1c2l2ZSlcblxuKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=