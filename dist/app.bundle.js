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
.header .project > h1 {
    font-size: 2.5rem;

    color: var(--BG-COLOR);
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

    color: var(--BG-COLOR);
}
.main.all-list-view div > h2 {
    font-size: 2rem;
}















/* RESPONSIVENESS */

@media only screen and (max-width: 460px) {
    /* body {
        background-color: red;
    } */

    .header .project > h1 {
        font-size: 2rem;
    }

    .header .project .actions .down-arrow > img,
    .header .project .actions .settings > img {
        height: 30px;
        width: 30px;
    }

    .main.all-list-view div > h2 {
        font-size: 1.5rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,mJAAmJ;AACvJ;;;;AAIA,YAAY;;AAEZ;IACI,gBAAgB;IAChB,gBAAgB;;IAEhB,mBAAmB;;IAEnB,yCAAyC;IACzC,gDAAgD;IAChD,2CAA2C;IAC3C,iDAAiD;IACjD,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,eAAe;IACf,mBAAmB;;IAEnB,aAAa;IACb,mCAAmC;;IAEnC,sBAAsB;IACtB,iCAAiC;AACrC;;;;AAIA,2BAA2B;;AAE3B;IACI,2CAA2C;AAC/C;AACA;IACI,kDAAkD;AACtD;AACA;IACI,8CAA8C;AAClD;AACA;IACI,mDAAmD;AACvD;AACA;IACI,4CAA4C;AAChD;;;;AAIA,mBAAmB;;AAEnB;IACI,aAAa;IACb,aAAa;;IAEb,aAAa;IACb,0BAA0B;IAC1B,SAAS;;IAET,iCAAiC;AACrC;AACA;IACI,0BAA0B;;IAE1B,aAAa;IACb,mBAAmB;IACnB,8BAA8B;;IAE9B,iCAAiC;AACrC;AACA;IACI,iBAAiB;;IAEjB,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,iBAAiB;;IAEjB,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;AACA;;IAEI,qBAAqB;IACrB,kBAAkB;AACtB;AACA;;IAEI,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,eAAe;;IAEf,aAAa;IACb,mBAAmB;;IAEnB,8CAA8C;IAC9C,8FAA8F;AAClG;AACA;;IAEI,2CAA2C;IAC3C,8FAA8F;AAClG;AACA;;IAEI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,QAAQ;;IAER,sBAAsB;IACtB,iCAAiC;IACjC,iCAAiC;AACrC;AACA;;IAEI,qBAAqB;AACzB;AACA;;IAEI,WAAW;IACX,aAAa;IACb,iBAAiB;;IAEjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;;IAEI,eAAe;IACf,sBAAsB;IACtB,oCAAoC;AACxC;;;;AAIA,oBAAoB;;AAEpB;IACI,gBAAgB;;IAEhB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;;IAEX,iCAAiC;AACrC;AACA;IACI,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,WAAW;IACX,aAAa;;IAEb,aAAa;IACb,mBAAmB;IACnB,8BAA8B;;IAE9B,sBAAsB;AAC1B;AACA;IACI,eAAe;AACnB;;;;;;;;;;;;;;;;AAgBA,mBAAmB;;AAEnB;IACI;;OAEG;;IAEH;QACI,eAAe;IACnB;;IAEA;;QAEI,YAAY;QACZ,WAAW;IACf;;IAEA;QACI,iBAAiB;IACrB;AACJ","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n\n\n/* UTILITY */\n\n:root {\n    --BG-COLOR: #333;\n    --FG-COLOR: #ccc;\n\n    --HOVER-COLOR: #555;\n\n    --LOW-PRIORITY-COLOR: hsl(100, 100%, 80%);\n    --LOW-MEDIUM-PRIORITY-COLOR: hsl(200, 100%, 80%);\n    --MEDIUM-PRIORITY-COLOR: hsl(50, 100%, 80%);\n    --MEDIUM-HIGH-PRIORITY-COLOR: hsl(300, 100%, 80%);\n    --HIGH-PRIORITY-COLOR: hsl(0, 100%, 80%);\n}\n\nbody {\n    height: 100vh;\n    font-size: 2rem;\n    font-weight: bolder;\n\n    display: grid;\n    grid-template-rows: min-content 1fr;\n\n    color: var(--FG-COLOR);\n    background-color: var(--BG-COLOR);\n}\n\n\n\n/* PRIORITY COLOR CLASSES */\n\n.low {\n    background-color: var(--LOW-PRIORITY-COLOR);\n}\n.low-medium {\n    background-color: var(--LOW-MEDIUM-PRIORITY-COLOR);\n}\n.medium {\n    background-color: var(--MEDIUM-PRIORITY-COLOR);\n}\n.medium-high {\n    background-color: var(--MEDIUM-HIGH-PRIORITY-COLOR);\n}\n.high {\n    background-color: var(--HIGH-PRIORITY-COLOR);\n}\n\n\n\n/* HEADER SECTION */\n\n.header {\n    height: 100px;\n    padding: 10px;\n\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 10px;\n\n    border: 5px solid var(--FG-COLOR);\n}\n.header > .project {\n    padding: 0px 20px 0px 20px;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    background-color: var(--FG-COLOR);\n}\n.header .project > h1 {\n    font-size: 2.5rem;\n\n    color: var(--BG-COLOR);\n}\n.header .project > .actions {\n    height: 100%;\n    padding: 10px 0px;\n\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 10px;\n}\n.header .project .actions > div {\n    position: relative;\n    display: inline-block;\n}\n.header .project .actions .down-arrow,\n.header .project .actions .settings {\n    display: inline-block;\n    position: relative;\n}\n.header .project .actions .down-arrow > img,\n.header .project .actions .settings > img {\n    height: 35px;\n    width: 35px;\n    user-select: none;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n\n    /* make black icon color #333 ( --BG-COLOR ) */\n    filter: invert(18%) sepia(1%) saturate(4281%) hue-rotate(45deg) brightness(104%) contrast(93%);\n}\n.header .project .actions .down-arrow > img:hover, \n.header .project .actions .settings > img:hover {\n    /* make icon color #555 ( --HOVER-COLOR ) */\n    filter: invert(31%) sepia(0%) saturate(2188%) hue-rotate(134deg) brightness(95%) contrast(82%);\n}\n.header .project .actions .down-arrow .drop-down,\n.header .project .actions .settings .drop-down {\n    display: none;\n    position: absolute;\n    float: right;\n    right: 0;\n\n    color: var(--BG-COLOR);\n    border: 5px solid var(--BG-COLOR);\n    background-color: var(--FG-COLOR);\n}\n.header .project .actions .down-arrow .drop-down.visible,\n.header .project .actions .settings .drop-down.visible {\n    display: inline-block;\n}\n.header .project .actions .down-arrow .drop-down > div,\n.header .project .actions .settings .drop-down > div {\n    width: 100%;\n    padding: 10px;\n    font-size: 1.5rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.header .project .actions .down-arrow .drop-down > div:hover,\n.header .project .actions .settings .drop-down > div:hover {\n    cursor: pointer;\n    color: var(--FG-COLOR);\n    background-color: var(--HOVER-COLOR);\n}\n\n\n\n/* CONTENT SECTION */\n\n.content {\n    margin: 15px 0px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.main {\n    height: 100%;\n    width: 100%;\n\n    border: 5px solid var(--FG-COLOR);\n}\n.main.all-list-view {\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.main.all-list-view > div {\n    width: 100%;\n    padding: 10px;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    color: var(--BG-COLOR);\n}\n.main.all-list-view div > h2 {\n    font-size: 2rem;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* RESPONSIVENESS */\n\n@media only screen and (max-width: 460px) {\n    /* body {\n        background-color: red;\n    } */\n\n    .header .project > h1 {\n        font-size: 2rem;\n    }\n\n    .header .project .actions .down-arrow > img,\n    .header .project .actions .settings > img {\n        height: 30px;\n        width: 30px;\n    }\n\n    .main.all-list-view div > h2 {\n        font-size: 1.5rem;\n    }\n}"],"sourceRoot":""}]);
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
    let main;
    let arrowMenuItems = ['arrow', 'menu', 'options'];
    let settingsMenuItems = ['settings', 'menu', 'options'];

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

    const addClass = (ele, addClass) => {
        ele.classList.add(addClass);
    };

    const addOptionsToMenu = (appendTo, arr) => {
        for (let i in arr) {
            let tmp = document.createElement('div');
            addClass(tmp, `option${i}`);
            changeInnerText(tmp, arr[i]);
            appendTo.appendChild(tmp);
        };

    };

    const changeInnerText = (ele, changeText) => {
        ele.innerText = changeText;
    };

    const createIcon = (img, appendto) => {
        let tmp = new Image();
        tmp.src = img;
        addClass(tmp, 'icon');
        tmp.setAttribute('draggable', false);
        appendto.appendChild(tmp);
    };

    const updatePriorityLevel = (ele, priority) => {
        if (priority === 10) { priority-- };
        addClass(ele, priorityClasses[priority]);
    };

    const createActionsDiv = (appendTo) => {
        actions = document.createElement('div');
        addClass(actions, 'actions');
        appendTo.appendChild(actions);
        createDownArrowMenu(actions);
        createSettingsMenu(actions);
    };

    const createDownArrowMenu = (appendTo) => {
        downArrow = document.createElement('div');
        createIcon(_down_arrow_svg__WEBPACK_IMPORTED_MODULE_0__, downArrow);
        addClass(downArrow, 'down-arrow');
        arrowMenu = document.createElement('div');
        addClass(arrowMenu, 'drop-down');
        addOptionsToMenu(arrowMenu, arrowMenuItems);
        downArrow.appendChild(arrowMenu);
        appendTo.appendChild(downArrow);
    };

    const createSettingsMenu = (appendTo) => {
        settings = document.createElement('div');
        createIcon(_settings_icon_svg__WEBPACK_IMPORTED_MODULE_1__, settings);
        addClass(settings, 'settings');
        settingsMenu = document.createElement('div');
        addClass(settingsMenu, 'drop-down');
        addOptionsToMenu(settingsMenu, settingsMenuItems);
        settings.appendChild(settingsMenu);
        appendTo.appendChild(settings);
    };

    const createHeader = () => {
        // create header div
        header = document.createElement('div');
        addClass(header, 'header');
        body.insertBefore(header, content);

        // create project div ( div within header )
        project = document.createElement('div');
        addClass(project, 'project');
        header.appendChild(project);
        projectTitle = document.createElement('h1');
        project.appendChild(projectTitle);

        // create actions div ( div that contains menus )
        createActionsDiv(project);
    };

    const createMainDiv = () => {
        // create main div ( div with all content )
        main = document.createElement('div');
        addClass(main, 'main');
        content.appendChild(main);
    };

    const renderTodo = (todo) => {
        let div = document.createElement('div');
        let divTitle = document.createElement('h2');
        divTitle.innerText = todo.title;
        let divDueDate = document.createElement('h2');
        divDueDate.innerText = todo.dueDate;
        div.appendChild(divTitle);
        div.appendChild(divDueDate);
        updatePriorityLevel(div, todo.priority);
        main.appendChild(div);
    };

    const allListView = () => {

        createHeader();
        changeInnerText(projectTitle, 'All List View');

        console.log(arrowMenu, settingsMenu);

        createMainDiv();
        addClass(main, 'all-list-view');

        // render all todos from all projects on screen
        _trackAllProjects__WEBPACK_IMPORTED_MODULE_2__.allProjects.filter(object => {
            for (let key in object) {
                if (key !== 'project') {
                    renderTodo(object[key]);
                };
            };
        });
    };


    


    return { allListView };
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
// let test = createProject('ProjectName');

// // add todo to the project object using addTodo method and createTodo module
// test.addTodo('nameOfTodo', createTodo('title', 'description', 'duedate', 'priority', 'checklist'));
// test.addTodo('anotherTodo', createTodo('0', '0', '0', '0', '0'));

// // result is the project object with all todos stored as objects
// console.log(test);





let test = (0,_createProject_js__WEBPACK_IMPORTED_MODULE_1__.createProject)('TestProject');

test.addTodo('title1', 'desc', 'due', 2, 'check');
test.addTodo('title2', 'desc', 'due', 6, 'check');
test.addTodo('title3', 'desc', 'due', 0, 'check');

let testtwo = (0,_createProject_js__WEBPACK_IMPORTED_MODULE_1__.createProject)('AnotherProject');

testtwo.addTodo('title4', 'desc', 'due', 5, 'check');
testtwo.addTodo('title5', 'desc', 'due', 10, 'check');
testtwo.addTodo('title6', 'desc', 'due', 3, 'check');

_handleDOM_js__WEBPACK_IMPORTED_MODULE_2__.handleDOM.allListView();

const downArrowImg = document.querySelector('.down-arrow > img');
const settingsImg = document.querySelector('.settings > img');

downArrowImg.addEventListener('click', (e) => {
    e.target.nextSibling.classList.toggle('visible');
});

settingsImg.addEventListener('click', (e) => {
    e.target.nextSibling.classList.toggle('visible');
});

window.addEventListener('click', (e) => {
    if (e.target !== downArrowImg) { 
        downArrowImg.nextSibling.classList.remove('visible');
    };

    if (e.target !== settingsImg) { 
        settingsImg.nextSibling.classList.remove('visible');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksYUFBYSxTQUFTLFdBQVcsS0FBSyxZQUFZLGNBQWMsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLFdBQVcsYUFBYSxhQUFhLGFBQWEsU0FBUyxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxTQUFTLGFBQWEsTUFBTSxVQUFVLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLE1BQU0sS0FBSyxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksWUFBWSxVQUFVLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFNBQVMsYUFBYSxNQUFNLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxjQUFjLGFBQWEsTUFBTSxLQUFLLFVBQVUs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VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDOEI7QUFDUjtBQUNTOztBQUVwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7QUFNQSxXQUFXLGdFQUFhOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxnRUFBYTs7QUFFM0I7QUFDQTtBQUNBOztBQUVBLG9EQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7OztBQU9EOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZURPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdHJhY2tBbGxQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxuXG5cbi8qIFVUSUxJVFkgKi9cblxuOnJvb3Qge1xuICAgIC0tQkctQ09MT1I6ICMzMzM7XG4gICAgLS1GRy1DT0xPUjogI2NjYztcblxuICAgIC0tSE9WRVItQ09MT1I6ICM1NTU7XG5cbiAgICAtLUxPVy1QUklPUklUWS1DT0xPUjogaHNsKDEwMCwgMTAwJSwgODAlKTtcbiAgICAtLUxPVy1NRURJVU0tUFJJT1JJVFktQ09MT1I6IGhzbCgyMDAsIDEwMCUsIDgwJSk7XG4gICAgLS1NRURJVU0tUFJJT1JJVFktQ09MT1I6IGhzbCg1MCwgMTAwJSwgODAlKTtcbiAgICAtLU1FRElVTS1ISUdILVBSSU9SSVRZLUNPTE9SOiBoc2woMzAwLCAxMDAlLCA4MCUpO1xuICAgIC0tSElHSC1QUklPUklUWS1DT0xPUjogaHNsKDAsIDEwMCUsIDgwJSk7XG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xuXG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG59XG5cblxuXG4vKiBQUklPUklUWSBDT0xPUiBDTEFTU0VTICovXG5cbi5sb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUxPVy1QUklPUklUWS1DT0xPUik7XG59XG4ubG93LW1lZGl1bSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTE9XLU1FRElVTS1QUklPUklUWS1DT0xPUik7XG59XG4ubWVkaXVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NRURJVU0tUFJJT1JJVFktQ09MT1IpO1xufVxuLm1lZGl1bS1oaWdoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NRURJVU0tSElHSC1QUklPUklUWS1DT0xPUik7XG59XG4uaGlnaCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSElHSC1QUklPUklUWS1DT0xPUik7XG59XG5cblxuXG4vKiBIRUFERVIgU0VDVElPTiAqL1xuXG4uaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMTBweDtcblxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLUZHLUNPTE9SKTtcbn1cbi5oZWFkZXIgPiAucHJvamVjdCB7XG4gICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xufVxuLmhlYWRlciAucHJvamVjdCA+IGgxIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcblxuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG59XG4uaGVhZGVyIC5wcm9qZWN0ID4gLmFjdGlvbnMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBnYXA6IDEwcHg7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zID4gZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyA+IGltZyxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzID4gaW1nIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLyogbWFrZSBibGFjayBpY29uIGNvbG9yICMzMzMgKCAtLUJHLUNPTE9SICkgKi9cbiAgICBmaWx0ZXI6IGludmVydCgxOCUpIHNlcGlhKDElKSBzYXR1cmF0ZSg0MjgxJSkgaHVlLXJvdGF0ZSg0NWRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCg5MyUpO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyA+IGltZzpob3ZlciwgXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyA+IGltZzpob3ZlciB7XG4gICAgLyogbWFrZSBpY29uIGNvbG9yICM1NTUgKCAtLUhPVkVSLUNPTE9SICkgKi9cbiAgICBmaWx0ZXI6IGludmVydCgzMSUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgyMTg4JSkgaHVlLXJvdGF0ZSgxMzRkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCg4MiUpO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duLFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1CRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duLnZpc2libGUsXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyAuZHJvcC1kb3duLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgLmRyb3AtZG93biA+IGRpdixcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIC5kcm9wLWRvd24gPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgLmRyb3AtZG93biA+IGRpdjpob3Zlcixcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIC5kcm9wLWRvd24gPiBkaXY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhPVkVSLUNPTE9SKTtcbn1cblxuXG5cbi8qIENPTlRFTlQgU0VDVElPTiAqL1xuXG4uY29udGVudCB7XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tRkctQ09MT1IpO1xufVxuLm1haW4uYWxsLWxpc3QtdmlldyB7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cbi5tYWluLmFsbC1saXN0LXZpZXcgPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbn1cbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qIFJFU1BPTlNJVkVORVNTICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgICAvKiBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIH0gKi9cblxuICAgIC5oZWFkZXIgLnByb2plY3QgPiBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG5cbiAgICAuaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93ID4gaW1nLFxuICAgIC5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzID4gaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICB9XG5cbiAgICAubWFpbi5hbGwtbGlzdC12aWV3IGRpdiA+IGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1KQUFtSjtBQUN2Sjs7OztBQUlBLFlBQVk7O0FBRVo7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCOztJQUVoQixtQkFBbUI7O0lBRW5CLHlDQUF5QztJQUN6QyxnREFBZ0Q7SUFDaEQsMkNBQTJDO0lBQzNDLGlEQUFpRDtJQUNqRCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLG1DQUFtQzs7SUFFbkMsc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQzs7OztBQUlBLDJCQUEyQjs7QUFFM0I7SUFDSSwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLGtEQUFrRDtBQUN0RDtBQUNBO0lBQ0ksOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxtREFBbUQ7QUFDdkQ7QUFDQTtJQUNJLDRDQUE0QztBQUNoRDs7OztBQUlBLG1CQUFtQjs7QUFFbkI7SUFDSSxhQUFhO0lBQ2IsYUFBYTs7SUFFYixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLFNBQVM7O0lBRVQsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSwwQkFBMEI7O0lBRTFCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCOztJQUU5QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGlCQUFpQjs7SUFFakIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCOztJQUVqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTs7SUFFSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTs7SUFFZixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQiw4Q0FBOEM7SUFDOUMsOEZBQThGO0FBQ2xHO0FBQ0E7O0lBRUksMkNBQTJDO0lBQzNDLDhGQUE4RjtBQUNsRztBQUNBOztJQUVJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFFBQVE7O0lBRVIsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyxpQ0FBaUM7QUFDckM7QUFDQTs7SUFFSSxxQkFBcUI7QUFDekI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjs7SUFFakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixvQ0FBb0M7QUFDeEM7Ozs7QUFJQSxvQkFBb0I7O0FBRXBCO0lBQ0ksZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVzs7SUFFWCxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTs7SUFFYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7SUFFOUIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLG1CQUFtQjs7QUFFbkI7SUFDSTs7T0FFRzs7SUFFSDtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7O1FBRUksWUFBWTtRQUNaLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuXFxuLyogVVRJTElUWSAqL1xcblxcbjpyb290IHtcXG4gICAgLS1CRy1DT0xPUjogIzMzMztcXG4gICAgLS1GRy1DT0xPUjogI2NjYztcXG5cXG4gICAgLS1IT1ZFUi1DT0xPUjogIzU1NTtcXG5cXG4gICAgLS1MT1ctUFJJT1JJVFktQ09MT1I6IGhzbCgxMDAsIDEwMCUsIDgwJSk7XFxuICAgIC0tTE9XLU1FRElVTS1QUklPUklUWS1DT0xPUjogaHNsKDIwMCwgMTAwJSwgODAlKTtcXG4gICAgLS1NRURJVU0tUFJJT1JJVFktQ09MT1I6IGhzbCg1MCwgMTAwJSwgODAlKTtcXG4gICAgLS1NRURJVU0tSElHSC1QUklPUklUWS1DT0xPUjogaHNsKDMwMCwgMTAwJSwgODAlKTtcXG4gICAgLS1ISUdILVBSSU9SSVRZLUNPTE9SOiBoc2woMCwgMTAwJSwgODAlKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG59XFxuXFxuXFxuXFxuLyogUFJJT1JJVFkgQ09MT1IgQ0xBU1NFUyAqL1xcblxcbi5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MT1ctUFJJT1JJVFktQ09MT1IpO1xcbn1cXG4ubG93LW1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUxPVy1NRURJVU0tUFJJT1JJVFktQ09MT1IpO1xcbn1cXG4ubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUVESVVNLVBSSU9SSVRZLUNPTE9SKTtcXG59XFxuLm1lZGl1bS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUVESVVNLUhJR0gtUFJJT1JJVFktQ09MT1IpO1xcbn1cXG4uaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhJR0gtUFJJT1JJVFktQ09MT1IpO1xcbn1cXG5cXG5cXG5cXG4vKiBIRUFERVIgU0VDVElPTiAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1GRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgPiAucHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG59XFxuLmhlYWRlciAucHJvamVjdCA+IGgxIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgPiAuYWN0aW9ucyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweCAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgPiBkaXYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyxcXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93ID4gaW1nLFxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLyogbWFrZSBibGFjayBpY29uIGNvbG9yICMzMzMgKCAtLUJHLUNPTE9SICkgKi9cXG4gICAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSgxJSkgc2F0dXJhdGUoNDI4MSUpIGh1ZS1yb3RhdGUoNDVkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoOTMlKTtcXG59XFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyA+IGltZzpob3ZlciwgXFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgPiBpbWc6aG92ZXIge1xcbiAgICAvKiBtYWtlIGljb24gY29sb3IgIzU1NSAoIC0tSE9WRVItQ09MT1IgKSAqL1xcbiAgICBmaWx0ZXI6IGludmVydCgzMSUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgyMTg4JSkgaHVlLXJvdGF0ZSgxMzRkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCg4MiUpO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93IC5kcm9wLWRvd24sXFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93biB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICByaWdodDogMDtcXG5cXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tQkctQ09MT1IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgLmRyb3AtZG93bi52aXNpYmxlLFxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIC5kcm9wLWRvd24udmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duID4gZGl2LFxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIC5kcm9wLWRvd24gPiBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93IC5kcm9wLWRvd24gPiBkaXY6aG92ZXIsXFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93biA+IGRpdjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSE9WRVItQ09MT1IpO1xcbn1cXG5cXG5cXG5cXG4vKiBDT05URU5UIFNFQ1RJT04gKi9cXG5cXG4uY29udGVudCB7XFxuICAgIG1hcmdpbjogMTVweCAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLUZHLUNPTE9SKTtcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxufVxcbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIFJFU1BPTlNJVkVORVNTICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xcbiAgICAvKiBib2R5IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgfSAqL1xcblxcbiAgICAuaGVhZGVyIC5wcm9qZWN0ID4gaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgPiBpbWcsXFxuICAgIC5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzID4gaW1nIHtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgIC5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRyYWNrQWxsUHJvamVjdHMgfSBmcm9tICcuL3RyYWNrQWxsUHJvamVjdHMuanMnO1xuaW1wb3J0IHsgYWRkVG9kb1RvQWxsUHJvamVjdHMgfSBmcm9tICcuL3RyYWNrQWxsUHJvamVjdHMuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWU9XCJQcm9qZWN0XCIpIHtcblxuICAgIHRyYWNrQWxsUHJvamVjdHMobmFtZSk7XG5cbiAgICBmdW5jdGlvbiBhZGRUb2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0KSB7XG4gICAgICAgIGxldCB0b2RvT2JqZWN0ID0ge1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkZXNjLFxuICAgICAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgICAgIHByaW9yaXR5LFxuICAgICAgICAgICAgY2hlY2tsaXN0XG4gICAgICAgIH07XG5cbiAgICAgICAgYWRkVG9kb1RvQWxsUHJvamVjdHModGhpcy5uYW1lLCB0aXRsZSwgdG9kb09iamVjdCk7XG4gICAgICAgIHRoaXNbdGl0bGVdID0gdG9kb09iamVjdDtcbiAgICB9O1xuXG5cbiAgICByZXR1cm4geyBuYW1lLCBhZGRUb2RvIH07XG59O1xuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0IH07IiwiaW1wb3J0IGRvd25BcnJvd1BuZyBmcm9tICcuL2Rvd24tYXJyb3cuc3ZnJztcbmltcG9ydCBzZXR0aW5nc1BuZyBmcm9tICcuL3NldHRpbmdzLWljb24uc3ZnJztcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSAnLi90cmFja0FsbFByb2plY3RzJztcblxuY29uc3QgaGFuZGxlRE9NID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgbGV0IGhlYWRlciwgcHJvamVjdCwgcHJvamVjdFRpdGxlLCBhY3Rpb25zLCBkb3duQXJyb3csIGFycm93TWVudSwgc2V0dGluZ3MsIHNldHRpbmdzTWVudTtcbiAgICBsZXQgbWFpbjtcbiAgICBsZXQgYXJyb3dNZW51SXRlbXMgPSBbJ2Fycm93JywgJ21lbnUnLCAnb3B0aW9ucyddO1xuICAgIGxldCBzZXR0aW5nc01lbnVJdGVtcyA9IFsnc2V0dGluZ3MnLCAnbWVudScsICdvcHRpb25zJ107XG5cbiAgICBsZXQgcHJpb3JpdHlDbGFzc2VzID0gW1xuICAgICAgICAnbG93JyxcbiAgICAgICAgJ2xvdycsXG4gICAgICAgICdsb3ctbWVkaXVtJyxcbiAgICAgICAgJ2xvdy1tZWRpdW0nLFxuICAgICAgICAnbG93LW1lZGl1bScsXG4gICAgICAgICdtZWRpdW0nLFxuICAgICAgICAnbWVkaXVtLWhpZ2gnLFxuICAgICAgICAnbWVkaXVtLWhpZ2gnLFxuICAgICAgICAnbWVkaXVtLWhpZ2gnLFxuICAgICAgICAnaGlnaCdcbiAgICBdO1xuXG4gICAgY29uc3QgYWRkQ2xhc3MgPSAoZWxlLCBhZGRDbGFzcykgPT4ge1xuICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChhZGRDbGFzcyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZE9wdGlvbnNUb01lbnUgPSAoYXBwZW5kVG8sIGFycikgPT4ge1xuICAgICAgICBmb3IgKGxldCBpIGluIGFycikge1xuICAgICAgICAgICAgbGV0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYWRkQ2xhc3ModG1wLCBgb3B0aW9uJHtpfWApO1xuICAgICAgICAgICAgY2hhbmdlSW5uZXJUZXh0KHRtcCwgYXJyW2ldKTtcbiAgICAgICAgICAgIGFwcGVuZFRvLmFwcGVuZENoaWxkKHRtcCk7XG4gICAgICAgIH07XG5cbiAgICB9O1xuXG4gICAgY29uc3QgY2hhbmdlSW5uZXJUZXh0ID0gKGVsZSwgY2hhbmdlVGV4dCkgPT4ge1xuICAgICAgICBlbGUuaW5uZXJUZXh0ID0gY2hhbmdlVGV4dDtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlSWNvbiA9IChpbWcsIGFwcGVuZHRvKSA9PiB7XG4gICAgICAgIGxldCB0bXAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdG1wLnNyYyA9IGltZztcbiAgICAgICAgYWRkQ2xhc3ModG1wLCAnaWNvbicpO1xuICAgICAgICB0bXAuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCBmYWxzZSk7XG4gICAgICAgIGFwcGVuZHRvLmFwcGVuZENoaWxkKHRtcCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZVByaW9yaXR5TGV2ZWwgPSAoZWxlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09IDEwKSB7IHByaW9yaXR5LS0gfTtcbiAgICAgICAgYWRkQ2xhc3MoZWxlLCBwcmlvcml0eUNsYXNzZXNbcHJpb3JpdHldKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlQWN0aW9uc0RpdiA9IChhcHBlbmRUbykgPT4ge1xuICAgICAgICBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZENsYXNzKGFjdGlvbnMsICdhY3Rpb25zJyk7XG4gICAgICAgIGFwcGVuZFRvLmFwcGVuZENoaWxkKGFjdGlvbnMpO1xuICAgICAgICBjcmVhdGVEb3duQXJyb3dNZW51KGFjdGlvbnMpO1xuICAgICAgICBjcmVhdGVTZXR0aW5nc01lbnUoYWN0aW9ucyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZURvd25BcnJvd01lbnUgPSAoYXBwZW5kVG8pID0+IHtcbiAgICAgICAgZG93bkFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNyZWF0ZUljb24oZG93bkFycm93UG5nLCBkb3duQXJyb3cpO1xuICAgICAgICBhZGRDbGFzcyhkb3duQXJyb3csICdkb3duLWFycm93Jyk7XG4gICAgICAgIGFycm93TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRDbGFzcyhhcnJvd01lbnUsICdkcm9wLWRvd24nKTtcbiAgICAgICAgYWRkT3B0aW9uc1RvTWVudShhcnJvd01lbnUsIGFycm93TWVudUl0ZW1zKTtcbiAgICAgICAgZG93bkFycm93LmFwcGVuZENoaWxkKGFycm93TWVudSk7XG4gICAgICAgIGFwcGVuZFRvLmFwcGVuZENoaWxkKGRvd25BcnJvdyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVNldHRpbmdzTWVudSA9IChhcHBlbmRUbykgPT4ge1xuICAgICAgICBzZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjcmVhdGVJY29uKHNldHRpbmdzUG5nLCBzZXR0aW5ncyk7XG4gICAgICAgIGFkZENsYXNzKHNldHRpbmdzLCAnc2V0dGluZ3MnKTtcbiAgICAgICAgc2V0dGluZ3NNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZENsYXNzKHNldHRpbmdzTWVudSwgJ2Ryb3AtZG93bicpO1xuICAgICAgICBhZGRPcHRpb25zVG9NZW51KHNldHRpbmdzTWVudSwgc2V0dGluZ3NNZW51SXRlbXMpO1xuICAgICAgICBzZXR0aW5ncy5hcHBlbmRDaGlsZChzZXR0aW5nc01lbnUpO1xuICAgICAgICBhcHBlbmRUby5hcHBlbmRDaGlsZChzZXR0aW5ncyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgLy8gY3JlYXRlIGhlYWRlciBkaXZcbiAgICAgICAgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZENsYXNzKGhlYWRlciwgJ2hlYWRlcicpO1xuICAgICAgICBib2R5Lmluc2VydEJlZm9yZShoZWFkZXIsIGNvbnRlbnQpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBwcm9qZWN0IGRpdiAoIGRpdiB3aXRoaW4gaGVhZGVyIClcbiAgICAgICAgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRDbGFzcyhwcm9qZWN0LCAncHJvamVjdCcpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgIHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgICAgICAvLyBjcmVhdGUgYWN0aW9ucyBkaXYgKCBkaXYgdGhhdCBjb250YWlucyBtZW51cyApXG4gICAgICAgIGNyZWF0ZUFjdGlvbnNEaXYocHJvamVjdCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZU1haW5EaXYgPSAoKSA9PiB7XG4gICAgICAgIC8vIGNyZWF0ZSBtYWluIGRpdiAoIGRpdiB3aXRoIGFsbCBjb250ZW50IClcbiAgICAgICAgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRDbGFzcyhtYWluLCAnbWFpbicpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgZGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBkaXZUaXRsZS5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xuICAgICAgICBsZXQgZGl2RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGRpdkR1ZURhdGUuaW5uZXJUZXh0ID0gdG9kby5kdWVEYXRlO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2RHVlRGF0ZSk7XG4gICAgICAgIHVwZGF0ZVByaW9yaXR5TGV2ZWwoZGl2LCB0b2RvLnByaW9yaXR5KTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH07XG5cbiAgICBjb25zdCBhbGxMaXN0VmlldyA9ICgpID0+IHtcblxuICAgICAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICAgICAgY2hhbmdlSW5uZXJUZXh0KHByb2plY3RUaXRsZSwgJ0FsbCBMaXN0IFZpZXcnKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhhcnJvd01lbnUsIHNldHRpbmdzTWVudSk7XG5cbiAgICAgICAgY3JlYXRlTWFpbkRpdigpO1xuICAgICAgICBhZGRDbGFzcyhtYWluLCAnYWxsLWxpc3QtdmlldycpO1xuXG4gICAgICAgIC8vIHJlbmRlciBhbGwgdG9kb3MgZnJvbSBhbGwgcHJvamVjdHMgb24gc2NyZWVuXG4gICAgICAgIGFsbFByb2plY3RzLmZpbHRlcihvYmplY3QgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdwcm9qZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2RvKG9iamVjdFtrZXldKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG4gICAgXG5cblxuICAgIHJldHVybiB7IGFsbExpc3RWaWV3IH07XG59KSgpO1xuXG5leHBvcnQgeyBoYW5kbGVET00gfTtcbiIsIlxubGV0IGFsbFByb2plY3RzID0gW107XG5cbmZ1bmN0aW9uIHRyYWNrQWxsUHJvamVjdHMocHJvamVjdCkge1xuICAgIGFsbFByb2plY3RzLnB1c2goeyBwcm9qZWN0IH0pO1xufTtcblxuZnVuY3Rpb24gYWRkVG9kb1RvQWxsUHJvamVjdHMocHJvamVjdE5hbWUsIHRvZG9OYW1lLCB0b2RvT2JqZWN0KSB7XG4gICAgYWxsUHJvamVjdHMuZmlsdGVyKG9iamVjdCA9PiB7XG4gICAgICAgIGlmIChvYmplY3QucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIG9iamVjdFt0b2RvTmFtZV0gPSB0b2RvT2JqZWN0O1xuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxuZXhwb3J0IHsgdHJhY2tBbGxQcm9qZWN0cywgYWxsUHJvamVjdHMsIGFkZFRvZG9Ub0FsbFByb2plY3RzIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tICcuL2NyZWF0ZVByb2plY3QuanMnO1xuaW1wb3J0IHsgaGFuZGxlRE9NIH0gZnJvbSAnLi9oYW5kbGVET00uanMnO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tICcuL3RyYWNrQWxsUHJvamVjdHMuanMnO1xuXG4vLyAvLyBjcmVhdGUgbmV3IHByb2plY3Qgb2JqZWN0IHRvIHN0b3JlIGFsbCB0b2Rvc1xuLy8gbGV0IHRlc3QgPSBjcmVhdGVQcm9qZWN0KCdQcm9qZWN0TmFtZScpO1xuXG4vLyAvLyBhZGQgdG9kbyB0byB0aGUgcHJvamVjdCBvYmplY3QgdXNpbmcgYWRkVG9kbyBtZXRob2QgYW5kIGNyZWF0ZVRvZG8gbW9kdWxlXG4vLyB0ZXN0LmFkZFRvZG8oJ25hbWVPZlRvZG8nLCBjcmVhdGVUb2RvKCd0aXRsZScsICdkZXNjcmlwdGlvbicsICdkdWVkYXRlJywgJ3ByaW9yaXR5JywgJ2NoZWNrbGlzdCcpKTtcbi8vIHRlc3QuYWRkVG9kbygnYW5vdGhlclRvZG8nLCBjcmVhdGVUb2RvKCcwJywgJzAnLCAnMCcsICcwJywgJzAnKSk7XG5cbi8vIC8vIHJlc3VsdCBpcyB0aGUgcHJvamVjdCBvYmplY3Qgd2l0aCBhbGwgdG9kb3Mgc3RvcmVkIGFzIG9iamVjdHNcbi8vIGNvbnNvbGUubG9nKHRlc3QpO1xuXG5cblxuXG5cbmxldCB0ZXN0ID0gY3JlYXRlUHJvamVjdCgnVGVzdFByb2plY3QnKTtcblxudGVzdC5hZGRUb2RvKCd0aXRsZTEnLCAnZGVzYycsICdkdWUnLCAyLCAnY2hlY2snKTtcbnRlc3QuYWRkVG9kbygndGl0bGUyJywgJ2Rlc2MnLCAnZHVlJywgNiwgJ2NoZWNrJyk7XG50ZXN0LmFkZFRvZG8oJ3RpdGxlMycsICdkZXNjJywgJ2R1ZScsIDAsICdjaGVjaycpO1xuXG5sZXQgdGVzdHR3byA9IGNyZWF0ZVByb2plY3QoJ0Fub3RoZXJQcm9qZWN0Jyk7XG5cbnRlc3R0d28uYWRkVG9kbygndGl0bGU0JywgJ2Rlc2MnLCAnZHVlJywgNSwgJ2NoZWNrJyk7XG50ZXN0dHdvLmFkZFRvZG8oJ3RpdGxlNScsICdkZXNjJywgJ2R1ZScsIDEwLCAnY2hlY2snKTtcbnRlc3R0d28uYWRkVG9kbygndGl0bGU2JywgJ2Rlc2MnLCAnZHVlJywgMywgJ2NoZWNrJyk7XG5cbmhhbmRsZURPTS5hbGxMaXN0VmlldygpO1xuXG5jb25zdCBkb3duQXJyb3dJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93bi1hcnJvdyA+IGltZycpO1xuY29uc3Qgc2V0dGluZ3NJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MgPiBpbWcnKTtcblxuZG93bkFycm93SW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC5uZXh0U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XG59KTtcblxuc2V0dGluZ3NJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCAhPT0gZG93bkFycm93SW1nKSB7IFxuICAgICAgICBkb3duQXJyb3dJbWcubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH07XG5cbiAgICBpZiAoZS50YXJnZXQgIT09IHNldHRpbmdzSW1nKSB7IFxuICAgICAgICBzZXR0aW5nc0ltZy5uZXh0U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfTtcbn0pO1xuXG5cblxuXG5cblxuLypcblxuQWxsICdQcm9qZWN0cycgYXJlIE9iamVjdHMgdGhhdCBIb2xkICdUb2RvcydcbkFsbCAnVG9kb3MnIGFyZSBPYmplY3RzXG4nVG9kb3MnIGNhbiBvbmx5IGJlIG1hZGUgb24gYSAnUHJvamVjdCcgYnV0IHRoZXJlIGlzIGFuICdBbGwgTGlzdCBWaWV3J1xuXG4tIFlvdSBjYW4ndCBoYXZlIDIgJ1Byb2plY3RzJyB3aXRoIHRoZSBzYW1lIG5hbWVcbi0gUHJpb3JpdHkgbXVzdCBiZSBmcm9tIDAtMTAgKGluY2x1c2l2ZSlcblxuKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=