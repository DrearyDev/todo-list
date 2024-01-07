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
    white-space: nowrap;
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
    cursor: pointer;

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
    
    display: none;

    border: 1px solid black;

    position: relative;
}
.main.all-list-view div > .expand.visible {
    display: inline-block;
}
.main.all-list-view div .expand > textarea {
    width: 100%;
    min-height: 200px;
    padding: 20px;
    word-wrap: break-word;

    background-color: rgba(255,255,255,0.5);
    border: none;
    resize: none;
}
.main.all-list-view div .expand > .checklist {
    font-size: 1rem;
    padding: 10px;
    margin: 20px 0px 50px 0px;

    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}
.main.all-list-view div .expand .checklist > .item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
.main.all-list-view div .expand button {
    padding: 10px;
    margin: 10px;

    border: none;
    border-radius: 0px;

    position: absolute;
    bottom: 0px;
    right: 0px;
}



/* FORM TO ADD TODO */

dialog {
    max-height: 650px;
    width: fit-content;
    padding: 25px;

    display: none;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    border: 5px solid var(--BG-COLOR);
    color: var(--BG-COLOR);
    background-color: var(--FG-COLOR);

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
dialog::backdrop {
    background-color: rgba(0,0,0,0.3);
}
dialog > img {
    height: 25px;
    width: 25px;
    user-select: none;
    cursor: pointer;

    position: absolute;
    top: 15px;
    right: 15px;

    /* --BG-COLOR */
    filter: invert(18%) sepia(1%) saturate(4281%) hue-rotate(45deg) brightness(104%) contrast(93%);
}
dialog > img:hover {
    /* --HOVER-COLOR */
    filter: invert(31%) sepia(0%) saturate(2188%) hue-rotate(134deg) brightness(95%) contrast(82%);
}
dialog > h2 {
    font-size: 2rem;
    margin-bottom: 25px;
}
dialog form {
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
}
dialog form > div {
    width: 100%;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
}
dialog form > button {
    width: 100%;
}
dialog form div > select,
dialog form div > input {
    width: 200px;
    padding: 5px;
}
dialog form div > label,
dialog form div > button {
    word-wrap: none;
    white-space: nowrap;
}
dialog form button {
    font-weight: bolder;
    padding: 10px;
    border: none;
    border-radius: 0px;
    cursor: pointer;

    color: var(--FG-COLOR);
    background-color: var(--BG-COLOR);
}
dialog button:hover {
    background-color: var(--HOVER-COLOR);
}
dialog .created-checks {
    font-size: 1rem;
    width: 100%;
    padding: 5px;
    background-color: #fff;

    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
}
dialog .created-checks .item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
dialog .created-checks input {
    width: min-content;
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

    dialog {
        min-width: 90%;
        min-height: 90%;
        align-items: flex-start;
    }
    dialog form > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 5px;
    }
    dialog div > label {
        font-size: 1rem;
    }
    .checklist-create label {
        width: 100%;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n\n\n/* UTILITY */\n\n:root {\n    --BG-COLOR: #333;\n    --FG-COLOR: #ccc;\n\n    --HOVER-COLOR: #555;\n\n    --LOW-PRIORITY-COLOR: hsl(100, 100%, 80%);\n    --LOW-MEDIUM-PRIORITY-COLOR: hsl(200, 100%, 80%);\n    --MEDIUM-PRIORITY-COLOR: hsl(50, 100%, 80%);\n    --MEDIUM-HIGH-PRIORITY-COLOR: hsl(300, 100%, 80%);\n    --HIGH-PRIORITY-COLOR: hsl(0, 100%, 80%);\n}\n\nbody {\n    height: 100vh;\n    font-size: 2rem;\n    font-weight: bolder;\n\n    display: grid;\n    grid-template-rows: min-content 1fr;\n\n    color: var(--FG-COLOR);\n    background-color: var(--BG-COLOR);\n}\n\n\n\n/* PRIORITY COLOR CLASSES */\n\n.low {\n    background-color: var(--LOW-PRIORITY-COLOR);\n}\n.low-medium {\n    background-color: var(--LOW-MEDIUM-PRIORITY-COLOR);\n}\n.medium {\n    background-color: var(--MEDIUM-PRIORITY-COLOR);\n}\n.medium-high {\n    background-color: var(--MEDIUM-HIGH-PRIORITY-COLOR);\n}\n.high {\n    background-color: var(--HIGH-PRIORITY-COLOR);\n}\n\n\n\n/* HEADER SECTION */\n\n.header {\n    height: 100px;\n    padding: 10px;\n\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 10px;\n\n    border: 5px solid var(--FG-COLOR);\n}\n.header > .project {\n    padding: 0px 20px 0px 20px;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    background-color: var(--FG-COLOR);\n}\n.header .project .title {\n    position: relative;\n}\n.header .project .title > h2 {\n    cursor: pointer;\n    font-size: 2.5rem;\n\n    color: var(--BG-COLOR);\n}\n.header .project .title > h2:hover {\n    color: var(--HOVER-COLOR);\n}\n.header .project .title > .drop-down {\n    user-select: none;\n    display: none;\n    position: absolute;\n    float: left;\n    left: 0;\n\n    color: var(--BG-COLOR);\n    border: 5px solid var(--BG-COLOR);\n    background-color: var(--FG-COLOR);\n}\n.header .project .title .drop-down.visible {\n    display: inline-block;\n}\n.header .project .title .drop-down > div {\n    width: 100%;\n    font-size: 1.5rem;\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.header .project .title .drop-down > div:hover {\n    cursor: pointer;\n    color: var(--FG-COLOR);\n    background-color: var(--HOVER-COLOR);\n}\n.header .project > .actions {\n    height: 100%;\n    padding: 10px 0px;\n\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 10px;\n}\n.header .project .actions > div {\n    position: relative;\n    display: inline-block;\n}\n.header .project .actions .down-arrow,\n.header .project .actions .settings {\n    display: inline-block;\n    position: relative;\n}\n.header .project .actions .down-arrow > img,\n.header .project .actions .settings > img {\n    height: 35px;\n    width: 35px;\n    user-select: none;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n\n    /* make black icon color #333 ( --BG-COLOR ) */\n    filter: invert(18%) sepia(1%) saturate(4281%) hue-rotate(45deg) brightness(104%) contrast(93%);\n}\n.header .project .actions .down-arrow > img:hover, \n.header .project .actions .settings > img:hover {\n    /* make icon color #555 ( --HOVER-COLOR ) */\n    filter: invert(31%) sepia(0%) saturate(2188%) hue-rotate(134deg) brightness(95%) contrast(82%);\n}\n.header .project .actions .down-arrow .drop-down,\n.header .project .actions .settings .drop-down {\n    user-select: none;\n    display: none;\n    position: absolute;\n    float: right;\n    right: 0;\n\n    color: var(--BG-COLOR);\n    border: 5px solid var(--BG-COLOR);\n    background-color: var(--FG-COLOR);\n}\n.header .project .actions .down-arrow .drop-down.visible,\n.header .project .actions .settings .drop-down.visible {\n    display: inline-block;\n    white-space: nowrap;\n}\n.header .project .actions .down-arrow .drop-down > div,\n.header .project .actions .settings .drop-down > div {\n    width: 100%;\n    padding: 10px;\n    font-size: 1.5rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.header .project .actions .down-arrow .drop-down > div:hover,\n.header .project .actions .settings .drop-down > div:hover {\n    cursor: pointer;\n    color: var(--FG-COLOR);\n    background-color: var(--HOVER-COLOR);\n}\n\n\n\n/* CONTENT SECTION */\n\n.content {\n    margin: 15px 0px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.main {\n    height: 100%;\n    width: 100%;\n\n    border: 5px solid var(--FG-COLOR);\n}\n.main.all-list-view {\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.main.all-list-view > div {\n    width: 100%;\n    padding: 10px;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n\n    color: var(--BG-COLOR);\n}\n.main.all-list-view div > h2 {\n    font-size: 2rem;\n}\n.main.all-list-view div > .expand {\n    width: 100%;\n    min-height: 500px;\n    margin-top: 10px;\n    \n    display: none;\n\n    border: 1px solid black;\n\n    position: relative;\n}\n.main.all-list-view div > .expand.visible {\n    display: inline-block;\n}\n.main.all-list-view div .expand > textarea {\n    width: 100%;\n    min-height: 200px;\n    padding: 20px;\n    word-wrap: break-word;\n\n    background-color: rgba(255,255,255,0.5);\n    border: none;\n    resize: none;\n}\n.main.all-list-view div .expand > .checklist {\n    font-size: 1rem;\n    padding: 10px;\n    margin: 20px 0px 50px 0px;\n\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    flex-wrap: wrap;\n}\n.main.all-list-view div .expand .checklist > .item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n.main.all-list-view div .expand button {\n    padding: 10px;\n    margin: 10px;\n\n    border: none;\n    border-radius: 0px;\n\n    position: absolute;\n    bottom: 0px;\n    right: 0px;\n}\n\n\n\n/* FORM TO ADD TODO */\n\ndialog {\n    max-height: 650px;\n    width: fit-content;\n    padding: 25px;\n\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n\n    border: 5px solid var(--BG-COLOR);\n    color: var(--BG-COLOR);\n    background-color: var(--FG-COLOR);\n\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\ndialog::backdrop {\n    background-color: rgba(0,0,0,0.3);\n}\ndialog > img {\n    height: 25px;\n    width: 25px;\n    user-select: none;\n    cursor: pointer;\n\n    position: absolute;\n    top: 15px;\n    right: 15px;\n\n    /* --BG-COLOR */\n    filter: invert(18%) sepia(1%) saturate(4281%) hue-rotate(45deg) brightness(104%) contrast(93%);\n}\ndialog > img:hover {\n    /* --HOVER-COLOR */\n    filter: invert(31%) sepia(0%) saturate(2188%) hue-rotate(134deg) brightness(95%) contrast(82%);\n}\ndialog > h2 {\n    font-size: 2rem;\n    margin-bottom: 25px;\n}\ndialog form {\n    font-size: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 15px;\n}\ndialog form > div {\n    width: 100%;\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 25px;\n}\ndialog form > button {\n    width: 100%;\n}\ndialog form div > select,\ndialog form div > input {\n    width: 200px;\n    padding: 5px;\n}\ndialog form div > label,\ndialog form div > button {\n    word-wrap: none;\n    white-space: nowrap;\n}\ndialog form button {\n    font-weight: bolder;\n    padding: 10px;\n    border: none;\n    border-radius: 0px;\n    cursor: pointer;\n\n    color: var(--FG-COLOR);\n    background-color: var(--BG-COLOR);\n}\ndialog button:hover {\n    background-color: var(--HOVER-COLOR);\n}\ndialog .created-checks {\n    font-size: 1rem;\n    width: 100%;\n    padding: 5px;\n    background-color: #fff;\n\n    flex-wrap: wrap;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 50px;\n}\ndialog .created-checks .item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\ndialog .created-checks input {\n    width: min-content;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* RESPONSIVENESS */\n\n@media only screen and (max-width: 460px) {\n    /* body {\n        background-color: red;\n    } */\n\n    .header .project .title > h2 {\n        font-size: 2rem;\n    }\n    .header .project .title .drop-down > div {\n        font-size: 1.3rem;\n    }\n    .header .project .actions .down-arrow > img,\n    .header .project .actions .settings > img {\n        height: 30px;\n        width: 30px;\n    }\n\n    .main.all-list-view div > h2 {\n        font-size: 1.5rem;\n    }\n\n    dialog {\n        min-width: 90%;\n        min-height: 90%;\n        align-items: flex-start;\n    }\n    dialog form > div {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: center;\n        gap: 5px;\n    }\n    dialog div > label {\n        font-size: 1rem;\n    }\n    .checklist-create label {\n        width: 100%;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _cancel_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cancel.svg */ "./src/cancel.svg");





const handleDOM = (() => {

    const body = document.querySelector('body');
    const content = document.querySelector('.content');
    let header, project, projectTitle, actions, downArrow, arrowMenu, settings, settingsMenu;
    let h2, projectMenu;
    let main;
    let arrowMenuItems = ['Add-Todo'];
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
        projectMenuItems = _trackAllProjects__WEBPACK_IMPORTED_MODULE_2__.allProjects.map(o => o.name);
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

        // add checklist on expand element
        let checkList = document.createElement('div');
        checkList.classList.add('checklist');

        todo.checklist.forEach(object => {//array of objects
            for (let key in object) {

                let check = document.createElement('input');
                check.type = 'checkbox';
                check.id = key;
                check.name = key;
                check.value = key;
                if (object[key]) { check.setAttribute('checked', 'true') };

                let label = document.createElement('label');
                label.setAttribute('for', key);
                label.innerText = key.replace(/_/g, ' ');

                let item = document.createElement('div');
                item.classList.add('item');
                item.todo = object;
                item.appendChild(check);
                item.appendChild(label);

                checkList.appendChild(item);
            };
            expand.appendChild(checkList);
        });

        // add delete todo button
        let btn = document.createElement('button');
        btn.innerText = 'Delete Todo';
        btn.todo = todo;
        btn.delTodo = () => {
            //search allProjects array for todo and remove it
            _trackAllProjects__WEBPACK_IMPORTED_MODULE_2__.allProjects.filter(project => {
                for (let key in project) {
                    if (key === btn.todo.title) {
                        delete project[key];
                    };
                };
            });
        };
        expand.appendChild(btn);

        div.appendChild(expand);
    };

    const addTodoForm = () => {
        const dialog = document.querySelector('dialog');

        const form = document.createElement('form');
        form.method = 'dialog';
        createIcon(_cancel_svg__WEBPACK_IMPORTED_MODULE_3__, dialog);

        const h2 = document.createElement('h2');
        h2.innerText = 'Add Todo';
        dialog.appendChild(h2);

        const projectSelectDiv = document.createElement('div');
        projectSelectDiv.classList.add('project-select');
        const projectLabel = document.createElement('label');
        projectLabel.innerText = 'Project:'
        const projectSelect = document.createElement('select');
        projectSelect.required = true;
        for (let key in _trackAllProjects__WEBPACK_IMPORTED_MODULE_2__.allProjects) {
            let option = document.createElement('option');
            option.innerText = _trackAllProjects__WEBPACK_IMPORTED_MODULE_2__.allProjects[key].name.replace(/-/g, ' ');
            projectSelect.appendChild(option);
        };
        projectSelectDiv.appendChild(projectLabel);
        projectSelectDiv.appendChild(projectSelect);
        form.appendChild(projectSelectDiv);

        const titleInputDiv = document.createElement('div');
        titleInputDiv.classList.add('title-input');
        const titleLabel = document.createElement('label');
        titleLabel.innerText = 'Title:';
        const titleInput = document.createElement('input');
        titleInput.required = true;
        titleInputDiv.appendChild(titleLabel);
        titleInputDiv.appendChild(titleInput);
        form.appendChild(titleInputDiv);

        const descInputDiv = document.createElement('div');
        descInputDiv.classList.add('desc-input');
        const descLabel = document.createElement('label');
        descLabel.innerText = 'Description:';
        const descInput = document.createElement('input');
        descInput.required = true;
        descInputDiv.appendChild(descLabel);
        descInputDiv.appendChild(descInput);
        form.appendChild(descInputDiv);

        const dateInputDiv = document.createElement('div');
        dateInputDiv.classList.add('date-input');
        const dateLabel = document.createElement('label');
        dateLabel.innerText = 'Due Date:';
        const dateInput = document.createElement('input');
        dateInput.required = true;
        dateInput.type = 'date';
        dateInputDiv.appendChild(dateLabel);
        dateInputDiv.appendChild(dateInput);
        form.appendChild(dateInputDiv);

        const priorityInputDiv = document.createElement('div');
        priorityInputDiv.classList.add('priority-input');
        const priorityLabel = document.createElement('label');
        priorityLabel.innerText = 'Priority Level:';
        const priorityInput = document.createElement('input');
        priorityInput.required = true;
        priorityInput.type = 'number';
        priorityInput.min = 0
        priorityInput.max = 10
        priorityInputDiv.appendChild(priorityLabel);
        priorityInputDiv.appendChild(priorityInput);
        form.appendChild(priorityInputDiv);

        const checklistCreateDiv = document.createElement('div');
        checklistCreateDiv.classList.add('checklist-create');
        const checklistCreateLabel = document.createElement('label');
        checklistCreateLabel.innerText = 'Create Checklist:';
        checklistCreateLabel.setAttribute('for', 'checkInput');
        const checklistCreateInput = document.createElement('input');
        checklistCreateInput.id = 'checkInput';
        checklistCreateInput.maxLength = 30;
        const checklistCreateBtn = document.createElement('button');
        checklistCreateBtn.type = 'button';
        checklistCreateBtn.innerText = 'New Check';
        checklistCreateDiv.appendChild(checklistCreateLabel);
        checklistCreateDiv.appendChild(checklistCreateInput);
        checklistCreateDiv.appendChild(checklistCreateBtn);
        form.appendChild(checklistCreateDiv);
        const checklistCreated = document.createElement('div');
        checklistCreated.classList.add('created-checks');
        form.appendChild(checklistCreated);

        const submitBtn = document.createElement('button');
        submitBtn.classList.add('submit');
        submitBtn.innerText = 'Submit';
        form.appendChild(submitBtn);



        dialog.appendChild(form);
        body.appendChild(dialog);
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
                if (key !== 'name' && key !== 'addTodo') {
                    renderTodo(object[key]);
                };
            };
        });

        if (document.body.querySelector('dialog') === null) {
            document.body.appendChild(document.createElement('dialog'));
        };
    };

    const projectView = (projectName) => {
        main.innerText = '';

        h2.innerText = projectName.replace(/-/g, ' ');

        //filter allProjects for project that was clicked
        let result = _trackAllProjects__WEBPACK_IMPORTED_MODULE_2__.allProjects.filter(object => {
            return object.name === projectName;
        });

        //render all todos from the selected project
        result.filter(object => {
            for (let key in object) {
                if (key !== 'name' && key !== 'addTodo') {
                    renderTodo(object[key]);
                };
            };
        });
    };





    


    return { allListView, projectView, addTodoForm };
})();




/***/ }),

/***/ "./src/handleForms.js":
/*!****************************!*\
  !*** ./src/handleForms.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrowClick: () => (/* binding */ arrowClick),
/* harmony export */   removeDialog: () => (/* binding */ removeDialog)
/* harmony export */ });
/* harmony import */ var _handleDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleDOM */ "./src/handleDOM.js");
/* harmony import */ var _trackAllProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trackAllProjects */ "./src/trackAllProjects.js");



let newCheckBtn = document.querySelector('.checklist-create button');

function submitForm(e) {
    let form = e.target.parentElement;
    let createdChecks = document.querySelectorAll('form > .created-checks .item');
    let h2 = document.querySelector('dialog > h2');


    if (h2.innerText === 'Add Todo') {
        let select = form[0].value;
        let title = form[1].value;
        let desc = form[2].value;
        let due = form[3].value;
        let priority = form[4].value;
        let checklist = [];

        console.log(title, desc, due, priority);
        // if all required fields arent empty
        if (title !== '' && desc !== '' && due !== '' && priority !== '') {
            removeDialog();

            createdChecks.forEach(item => {
                let check = item.children[0].checked;
                let label = item.children[1].innerText;
                checklist.push({[label]: check});
            });

            _trackAllProjects__WEBPACK_IMPORTED_MODULE_1__.allProjects.forEach(object => {
                if (object.name === select.replace(/ /g, '-')) {
                    object.addTodo(title, desc, due, priority, checklist);
                };
            });
        };
   };
};

function newCheck(e) {
    let value = e.target.previousSibling.value;
    let createdChecksDiv = document.querySelector('.created-checks');
    let labels = document.querySelectorAll('.created-checks label');

    // make sure no duplicate labels and checkboxes
    labels.forEach(label => {
        if (label.innerText === value) {
            value = '';
        };
    });

    if (value !== '') {
        let item = document.createElement('div');
        item.classList.add('item');
        let check = document.createElement('input');
        check.type = 'checkbox';
        check.id = `${value.replace(/ /g, '_')}`;
        let label = document.createElement('label');
        label.setAttribute('for', `${value.replace(/ /g, '_')}`);
        label.innerText = value;

        item.appendChild(check);
        item.appendChild(label);
        createdChecksDiv.appendChild(item);

        e.target.previousSibling.value = '';
    };
};

function removeDialog() {
    let dialog = document.querySelector('dialog');
    dialog.close();
    dialog.style.display = 'none';
    dialog.innerHTML = '';
    newCheckBtn.removeEventListener('click', newCheck);
};

function arrowClick(e) {
    if (e.target.classList.contains('Add-Todo')) {
        let dialog = document.querySelector('dialog');
        dialog.style.display = 'flex';
        _handleDOM__WEBPACK_IMPORTED_MODULE_0__.handleDOM.addTodoForm();
        dialog.showModal();

        newCheckBtn = document.querySelector('.checklist-create button');
        newCheckBtn.addEventListener('click', newCheck);

        let submitBtn = document.querySelector('form .submit');
        submitBtn.addEventListener('click', submitForm);
    } else {
        // if add project is clicked
    };

    let exitBtn = document.querySelector('dialog > img');
    exitBtn.addEventListener('click', removeDialog);
};



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
    allProjects.push( project );
};

function addTodoToAllProjects(projectName, todoName, todoObject) {
    allProjects.filter(object => {
        if (object.project === projectName) {
            object[todoName] = todoObject;
        };
    });
};



/***/ }),

/***/ "./src/cancel.svg":
/*!************************!*\
  !*** ./src/cancel.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b54916e513d8c6a2dc2.svg";

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
/* harmony import */ var _handleForms_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleForms.js */ "./src/handleForms.js");







// // create new project object to store all todos
// // all spaces in name must be replaced with dashes
// let test = createProject('Project-Name');

// // add todo to the project object using addTodo method and createTodo module
// test.addTodo('title', 'description', 'duedate', 'priority', 'checklist');

// // result is the project object with all todos stored as objects
// console.log(test);


/*
***need to fix how dialogs work idk how they work but will come back***
*/



let test = (0,_createProject_js__WEBPACK_IMPORTED_MODULE_1__.createProject)('Test-Project');// store names with dashes add space later
(0,_trackAllProjects_js__WEBPACK_IMPORTED_MODULE_3__.trackAllProjects)(test);

// store checklist keys with underscores instead of spaces and add them later
let exampleChecklist = [
    {Step_One: true},
    {Step_Two: false},
    {Testing_Longer_name_to_See_What_Happens: false},
    {Step_Four: true},
    {Step_Five: false},
    {Step_Six: false},
    {Step_Seven: false},
    {Step_Eight: false},
    {Step_Nine: false},
    {Step_Ten: false}
]; // make sure form requires input and doesnt let you submit undefined stuff

test.addTodo('title1', 'example text', 'due', 2, exampleChecklist);
test.addTodo('title2', 'desc', 'due', 6, [{abcd: false}]);
test.addTodo('title3', 'desc', 'due', 0, [{efgh: false}]);

let testtwo = (0,_createProject_js__WEBPACK_IMPORTED_MODULE_1__.createProject)('Another-Project');
(0,_trackAllProjects_js__WEBPACK_IMPORTED_MODULE_3__.trackAllProjects)(testtwo);

testtwo.addTodo('title4', 'desc', 'due', 5, [{ijkl: false}]);
testtwo.addTodo('title5', 'desc', 'due', 10, [{mnop: false}]);
testtwo.addTodo('title6', 'desc', 'due', 3, [{qrst: false}]);

_handleDOM_js__WEBPACK_IMPORTED_MODULE_2__.handleDOM.allListView();

const content = document.querySelector('.content');

const downArrowImg = document.querySelector('.down-arrow > img');
const settingsImg = document.querySelector('.settings > img');

const title = document.querySelector('.title > h2');
const titleDropDown = document.querySelector('.title > .drop-down');

let textarea = [...document.querySelectorAll('textarea')];
let expand = [...document.querySelectorAll('.main > div > .expand')];
let items = [...document.querySelectorAll('.checklist > .item')];
let delBtns = [...document.querySelectorAll('.expand > button')];
let arrowOptions = [...document.querySelectorAll('.down-arrow .drop-down > div')];
let settingsOptions = [...document.querySelectorAll('.settings .drop-down > div')];

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

textarea.forEach(area => {
    area.addEventListener('input', (e) => {
        e.target.todo.desc = e.target.value;
    });
});

function stopPropagation(e) { e.stopPropagation() };
function toggleVisible(e) {
    //if e.target.children[2] is undefined then i mustve clicked an h2 child of the todo element
    if (e.target.children[2]) { e.target.children[2].classList.toggle('visible') }
    else { e.target.parentElement.children[2].classList.toggle('visible') };
};
expand.forEach(expanded => {
    expanded.addEventListener('click', stopPropagation);
    expanded.parentElement.addEventListener('click', toggleVisible);
});

items.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.type === 'checkbox') {
            for (let key in item.todo) {
                if (item.todo[key]) {
                    item.todo[key] = false;
                } else {
                    item.todo[key] = true;
                };
            };
        };
    });
});

function deleteTodo(e) {
    e.target.delTodo();
    let main = document.querySelector('.main');
    main.removeChild(e.target.parentElement.parentElement);
};
delBtns.forEach(btn => { btn.addEventListener('click', deleteTodo) });




arrowOptions.forEach(option => { option.addEventListener('click', _handleForms_js__WEBPACK_IMPORTED_MODULE_4__.arrowClick) });


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

    expand.forEach(expanded => {
        //get the h2 children of each todo so i can expand todo while clicking the h2 aswell
        let h2 = [...expanded.parentElement.children].splice(0, 2);

        if (e.target !== expanded.parentElement && e.target !== h2[0] && e.target !== h2[1]) {
            expanded.classList.remove('visible');
        };
    });
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { _handleForms_js__WEBPACK_IMPORTED_MODULE_4__.removeDialog() };
});

const observer = new MutationObserver(() => {
    textarea = [...document.querySelectorAll('textarea')];
    expand = [...document.querySelectorAll('.main > div > .expand')];
    items = [...document.querySelectorAll('.checklist > .item')];
    delBtns = [...document.querySelectorAll('.expand > button')];
    
    textarea.forEach(area => {
        area.addEventListener('input', (e) => {
            e.target.todo.desc = e.target.value;
        });
    });

    expand.forEach(expanded => {
        expanded.removeEventListener('click', stopPropagation);
        expanded.addEventListener('click', stopPropagation);
        
        expanded.parentElement.removeEventListener('click', toggleVisible);
        expanded.parentElement.addEventListener('click', toggleVisible);
    });

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.type === 'checkbox') {
                for (let key in item.todo) {
                    if (item.todo[key]) {
                        item.todo[key] = false;
                    } else {
                        item.todo[key] = true;
                    };
                };
            };
        });
    });

    delBtns.forEach(btn => {
        btn.removeEventListener('click', deleteTodo);
        btn.addEventListener('click', deleteTodo);
    });
});

const config = {
    subtree: true,
    childList: true,
};

observer.observe(content, config)




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksYUFBYSxTQUFTLFdBQVcsS0FBSyxZQUFZLGNBQWMsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLFdBQVcsYUFBYSxhQUFhLGFBQWEsU0FBUyxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxTQUFTLGFBQWEsTUFBTSxVQUFVLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxZQUFZLFVBQVUsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFNBQVMsYUFBYSxNQUFNLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsYUFBYSxhQUFhLFdBQVcsVUFBVSxRQUFRLGFBQWEsTUFBTSxZQUFZLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxjQUFjLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxh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QSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZURPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlRm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RyYWNrQWxsUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG5cblxuXG4vKiBVVElMSVRZICovXG5cbjpyb290IHtcbiAgICAtLUJHLUNPTE9SOiAjMzMzO1xuICAgIC0tRkctQ09MT1I6ICNjY2M7XG5cbiAgICAtLUhPVkVSLUNPTE9SOiAjNTU1O1xuXG4gICAgLS1MT1ctUFJJT1JJVFktQ09MT1I6IGhzbCgxMDAsIDEwMCUsIDgwJSk7XG4gICAgLS1MT1ctTUVESVVNLVBSSU9SSVRZLUNPTE9SOiBoc2woMjAwLCAxMDAlLCA4MCUpO1xuICAgIC0tTUVESVVNLVBSSU9SSVRZLUNPTE9SOiBoc2woNTAsIDEwMCUsIDgwJSk7XG4gICAgLS1NRURJVU0tSElHSC1QUklPUklUWS1DT0xPUjogaHNsKDMwMCwgMTAwJSwgODAlKTtcbiAgICAtLUhJR0gtUFJJT1JJVFktQ09MT1I6IGhzbCgwLCAxMDAlLCA4MCUpO1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcblxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkctQ09MT1IpO1xufVxuXG5cblxuLyogUFJJT1JJVFkgQ09MT1IgQ0xBU1NFUyAqL1xuXG4ubG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MT1ctUFJJT1JJVFktQ09MT1IpO1xufVxuLmxvdy1tZWRpdW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUxPVy1NRURJVU0tUFJJT1JJVFktQ09MT1IpO1xufVxuLm1lZGl1bSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUVESVVNLVBSSU9SSVRZLUNPTE9SKTtcbn1cbi5tZWRpdW0taGlnaCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUVESVVNLUhJR0gtUFJJT1JJVFktQ09MT1IpO1xufVxuLmhpZ2gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhJR0gtUFJJT1JJVFktQ09MT1IpO1xufVxuXG5cblxuLyogSEVBREVSIFNFQ1RJT04gKi9cblxuLmhlYWRlciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1GRy1DT0xPUik7XG59XG4uaGVhZGVyID4gLnByb2plY3Qge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcbn1cbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSA+IGgyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG5cbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xufVxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgPiBoMjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLUhPVkVSLUNPTE9SKTtcbn1cbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlID4gLmRyb3AtZG93biB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbGVmdDogMDtcblxuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tQkctQ09MT1IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcbn1cbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlIC5kcm9wLWRvd24udmlzaWJsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgLmRyb3AtZG93biA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgLmRyb3AtZG93biA+IGRpdjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSE9WRVItQ09MT1IpO1xufVxuLmhlYWRlciAucHJvamVjdCA+IC5hY3Rpb25zIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyA+IGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3csXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgPiBpbWcsXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyA+IGltZyB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC8qIG1ha2UgYmxhY2sgaWNvbiBjb2xvciAjMzMzICggLS1CRy1DT0xPUiApICovXG4gICAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSgxJSkgc2F0dXJhdGUoNDI4MSUpIGh1ZS1yb3RhdGUoNDVkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoOTMlKTtcbn1cbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgPiBpbWc6aG92ZXIsIFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgPiBpbWc6aG92ZXIge1xuICAgIC8qIG1ha2UgaWNvbiBjb2xvciAjNTU1ICggLS1IT1ZFUi1DT0xPUiApICovXG4gICAgZmlsdGVyOiBpbnZlcnQoMzElKSBzZXBpYSgwJSkgc2F0dXJhdGUoMjE4OCUpIGh1ZS1yb3RhdGUoMTM0ZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoODIlKTtcbn1cbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgLmRyb3AtZG93bixcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIC5kcm9wLWRvd24ge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICByaWdodDogMDtcblxuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tQkctQ09MT1IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcbn1cbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgLmRyb3AtZG93bi52aXNpYmxlLFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93bi52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgLmRyb3AtZG93biA+IGRpdixcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIC5kcm9wLWRvd24gPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgLmRyb3AtZG93biA+IGRpdjpob3Zlcixcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIC5kcm9wLWRvd24gPiBkaXY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhPVkVSLUNPTE9SKTtcbn1cblxuXG5cbi8qIENPTlRFTlQgU0VDVElPTiAqL1xuXG4uY29udGVudCB7XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tRkctQ09MT1IpO1xufVxuLm1haW4uYWxsLWxpc3QtdmlldyB7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cbi5tYWluLmFsbC1saXN0LXZpZXcgPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xufVxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgPiBoMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgPiAuZXhwYW5kIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIFxuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gLmV4cGFuZC52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiAuZXhwYW5kID4gdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICByZXNpemU6IG5vbmU7XG59XG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiAuZXhwYW5kID4gLmNoZWNrbGlzdCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDBweCA1MHB4IDBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgLmV4cGFuZCAuY2hlY2tsaXN0ID4gLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbn1cbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2IC5leHBhbmQgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweDtcblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbn1cblxuXG5cbi8qIEZPUk0gVE8gQUREIFRPRE8gKi9cblxuZGlhbG9nIHtcbiAgICBtYXgtaGVpZ2h0OiA2NTBweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMjVweDtcblxuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNTBweDtcblxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLUJHLUNPTE9SKTtcbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcblxuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcbn1cbmRpYWxvZyA+IGltZyB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG5cbiAgICAvKiAtLUJHLUNPTE9SICovXG4gICAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSgxJSkgc2F0dXJhdGUoNDI4MSUpIGh1ZS1yb3RhdGUoNDVkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoOTMlKTtcbn1cbmRpYWxvZyA+IGltZzpob3ZlciB7XG4gICAgLyogLS1IT1ZFUi1DT0xPUiAqL1xuICAgIGZpbHRlcjogaW52ZXJ0KDMxJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIxODglKSBodWUtcm90YXRlKDEzNGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDgyJSk7XG59XG5kaWFsb2cgPiBoMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5kaWFsb2cgZm9ybSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTVweDtcbn1cbmRpYWxvZyBmb3JtID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMjVweDtcbn1cbmRpYWxvZyBmb3JtID4gYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbmRpYWxvZyBmb3JtIGRpdiA+IHNlbGVjdCxcbmRpYWxvZyBmb3JtIGRpdiA+IGlucHV0IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgcGFkZGluZzogNXB4O1xufVxuZGlhbG9nIGZvcm0gZGl2ID4gbGFiZWwsXG5kaWFsb2cgZm9ybSBkaXYgPiBidXR0b24ge1xuICAgIHdvcmQtd3JhcDogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuZGlhbG9nIGZvcm0gYnV0dG9uIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbn1cbmRpYWxvZyBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhPVkVSLUNPTE9SKTtcbn1cbmRpYWxvZyAuY3JlYXRlZC1jaGVja3Mge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogNTBweDtcbn1cbmRpYWxvZyAuY3JlYXRlZC1jaGVja3MgLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5kaWFsb2cgLmNyZWF0ZWQtY2hlY2tzIGlucHV0IHtcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKiBSRVNQT05TSVZFTkVTUyAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gICAgLyogYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB9ICovXG5cbiAgICAuaGVhZGVyIC5wcm9qZWN0IC50aXRsZSA+IGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgICAuaGVhZGVyIC5wcm9qZWN0IC50aXRsZSAuZHJvcC1kb3duID4gZGl2IHtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxuICAgIC5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgPiBpbWcsXG4gICAgLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgPiBpbWcge1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgIH1cblxuICAgIC5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gaDIge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG5cbiAgICBkaWFsb2cge1xuICAgICAgICBtaW4td2lkdGg6IDkwJTtcbiAgICAgICAgbWluLWhlaWdodDogOTAlO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG4gICAgZGlhbG9nIGZvcm0gPiBkaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogNXB4O1xuICAgIH1cbiAgICBkaWFsb2cgZGl2ID4gbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC5jaGVja2xpc3QtY3JlYXRlIGxhYmVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1KQUFtSjtBQUN2Sjs7OztBQUlBLFlBQVk7O0FBRVo7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCOztJQUVoQixtQkFBbUI7O0lBRW5CLHlDQUF5QztJQUN6QyxnREFBZ0Q7SUFDaEQsMkNBQTJDO0lB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QVk7QUFDaEI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjs7SUFFdEIsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsbUJBQW1COztBQUVuQjtJQUNJOztPQUVHOztJQUVIO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7O1FBRUksWUFBWTtRQUNaLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2YsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsUUFBUTtJQUNaO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcblxcbi8qIFVUSUxJVFkgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tQkctQ09MT1I6ICMzMzM7XFxuICAgIC0tRkctQ09MT1I6ICNjY2M7XFxuXFxuICAgIC0tSE9WRVItQ09MT1I6ICM1NTU7XFxuXFxuICAgIC0tTE9XLVBSSU9SSVRZLUNPTE9SOiBoc2woMTAwLCAxMDAlLCA4MCUpO1xcbiAgICAtLUxPVy1NRURJVU0tUFJJT1JJVFktQ09MT1I6IGhzbCgyMDAsIDEwMCUsIDgwJSk7XFxuICAgIC0tTUVESVVNLVBSSU9SSVRZLUNPTE9SOiBoc2woNTAsIDEwMCUsIDgwJSk7XFxuICAgIC0tTUVESVVNLUhJR0gtUFJJT1JJVFktQ09MT1I6IGhzbCgzMDAsIDEwMCUsIDgwJSk7XFxuICAgIC0tSElHSC1QUklPUklUWS1DT0xPUjogaHNsKDAsIDEwMCUsIDgwJSk7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcblxcbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxufVxcblxcblxcblxcbi8qIFBSSU9SSVRZIENPTE9SIENMQVNTRVMgKi9cXG5cXG4ubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTE9XLVBSSU9SSVRZLUNPTE9SKTtcXG59XFxuLmxvdy1tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MT1ctTUVESVVNLVBSSU9SSVRZLUNPTE9SKTtcXG59XFxuLm1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU1FRElVTS1QUklPUklUWS1DT0xPUik7XFxufVxcbi5tZWRpdW0taGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU1FRElVTS1ISUdILVBSSU9SSVRZLUNPTE9SKTtcXG59XFxuLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ISUdILVBSSU9SSVRZLUNPTE9SKTtcXG59XFxuXFxuXFxuXFxuLyogSEVBREVSIFNFQ1RJT04gKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tRkctQ09MT1IpO1xcbn1cXG4uaGVhZGVyID4gLnByb2plY3Qge1xcbiAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSA+IGgyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG5cXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG59XFxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgPiBoMjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1IT1ZFUi1DT0xPUik7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlID4gLmRyb3AtZG93biB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBsZWZ0OiAwO1xcblxcbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1CRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG59XFxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgLmRyb3AtZG93bi52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSAuZHJvcC1kb3duID4gZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgLmRyb3AtZG93biA+IGRpdjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSE9WRVItQ09MT1IpO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0ID4gLmFjdGlvbnMge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zID4gZGl2IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3csXFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3Mge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyA+IGltZyxcXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyA+IGltZyB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC8qIG1ha2UgYmxhY2sgaWNvbiBjb2xvciAjMzMzICggLS1CRy1DT0xPUiApICovXFxuICAgIGZpbHRlcjogaW52ZXJ0KDE4JSkgc2VwaWEoMSUpIHNhdHVyYXRlKDQyODElKSBodWUtcm90YXRlKDQ1ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDkzJSk7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgPiBpbWc6aG92ZXIsIFxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzID4gaW1nOmhvdmVyIHtcXG4gICAgLyogbWFrZSBpY29uIGNvbG9yICM1NTUgKCAtLUhPVkVSLUNPTE9SICkgKi9cXG4gICAgZmlsdGVyOiBpbnZlcnQoMzElKSBzZXBpYSgwJSkgc2F0dXJhdGUoMjE4OCUpIGh1ZS1yb3RhdGUoMTM0ZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoODIlKTtcXG59XFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duLFxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIC5kcm9wLWRvd24ge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHJpZ2h0OiAwO1xcblxcbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1CRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG59XFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duLnZpc2libGUsXFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93bi52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93IC5kcm9wLWRvd24gPiBkaXYsXFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93biA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgLmRyb3AtZG93biA+IGRpdjpob3ZlcixcXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyAuZHJvcC1kb3duID4gZGl2OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IT1ZFUi1DT0xPUik7XFxufVxcblxcblxcblxcbi8qIENPTlRFTlQgU0VDVElPTiAqL1xcblxcbi5jb250ZW50IHtcXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tRkctQ09MT1IpO1xcbn1cXG4ubWFpbi5hbGwtbGlzdC12aWV3IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4ubWFpbi5hbGwtbGlzdC12aWV3ID4gZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxufVxcbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gLmV4cGFuZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gLmV4cGFuZC52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiAuZXhwYW5kID4gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgLmV4cGFuZCA+IC5jaGVja2xpc3Qge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMjBweCAwcHggNTBweCAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiAuZXhwYW5kIC5jaGVja2xpc3QgPiAuaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgLmV4cGFuZCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICByaWdodDogMHB4O1xcbn1cXG5cXG5cXG5cXG4vKiBGT1JNIFRPIEFERCBUT0RPICovXFxuXFxuZGlhbG9nIHtcXG4gICAgbWF4LWhlaWdodDogNjUwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMjVweDtcXG5cXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcblxcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1CRy1DT0xPUik7XFxuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG5cXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XFxufVxcbmRpYWxvZyA+IGltZyB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICByaWdodDogMTVweDtcXG5cXG4gICAgLyogLS1CRy1DT0xPUiAqL1xcbiAgICBmaWx0ZXI6IGludmVydCgxOCUpIHNlcGlhKDElKSBzYXR1cmF0ZSg0MjgxJSkgaHVlLXJvdGF0ZSg0NWRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCg5MyUpO1xcbn1cXG5kaWFsb2cgPiBpbWc6aG92ZXIge1xcbiAgICAvKiAtLUhPVkVSLUNPTE9SICovXFxuICAgIGZpbHRlcjogaW52ZXJ0KDMxJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIxODglKSBodWUtcm90YXRlKDEzNGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDgyJSk7XFxufVxcbmRpYWxvZyA+IGgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG5kaWFsb2cgZm9ybSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5kaWFsb2cgZm9ybSA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcbmRpYWxvZyBmb3JtID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbmRpYWxvZyBmb3JtIGRpdiA+IHNlbGVjdCxcXG5kaWFsb2cgZm9ybSBkaXYgPiBpbnB1dCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5kaWFsb2cgZm9ybSBkaXYgPiBsYWJlbCxcXG5kaWFsb2cgZm9ybSBkaXYgPiBidXR0b24ge1xcbiAgICB3b3JkLXdyYXA6IG5vbmU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbmRpYWxvZyBmb3JtIGJ1dHRvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG59XFxuZGlhbG9nIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhPVkVSLUNPTE9SKTtcXG59XFxuZGlhbG9nIC5jcmVhdGVkLWNoZWNrcyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogNTBweDtcXG59XFxuZGlhbG9nIC5jcmVhdGVkLWNoZWNrcyAuaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmRpYWxvZyAuY3JlYXRlZC1jaGVja3MgaW5wdXQge1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIFJFU1BPTlNJVkVORVNTICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xcbiAgICAvKiBib2R5IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgfSAqL1xcblxcbiAgICAuaGVhZGVyIC5wcm9qZWN0IC50aXRsZSA+IGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcbiAgICAuaGVhZGVyIC5wcm9qZWN0IC50aXRsZSAuZHJvcC1kb3duID4gZGl2IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB9XFxuICAgIC5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgPiBpbWcsXFxuICAgIC5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzID4gaW1nIHtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgIC5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgZGlhbG9nIHtcXG4gICAgICAgIG1pbi13aWR0aDogOTAlO1xcbiAgICAgICAgbWluLWhlaWdodDogOTAlO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG4gICAgZGlhbG9nIGZvcm0gPiBkaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG4gICAgZGlhbG9nIGRpdiA+IGxhYmVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcbiAgICAuY2hlY2tsaXN0LWNyZWF0ZSBsYWJlbCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWRkVG9kb1RvQWxsUHJvamVjdHMgfSBmcm9tICcuL3RyYWNrQWxsUHJvamVjdHMuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWU9XCJQcm9qZWN0XCIpIHtcblxuICAgIGZ1bmN0aW9uIGFkZFRvZG8odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QpIHtcbiAgICAgICAgbGV0IHRvZG9PYmplY3QgPSB7XG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGRlc2MsXG4gICAgICAgICAgICBkdWVEYXRlLFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBjaGVja2xpc3RcbiAgICAgICAgfTtcblxuICAgICAgICBhZGRUb2RvVG9BbGxQcm9qZWN0cyh0aGlzLm5hbWUsIHRpdGxlLCB0b2RvT2JqZWN0KTtcbiAgICAgICAgdGhpc1t0aXRsZV0gPSB0b2RvT2JqZWN0O1xuICAgIH07XG5cblxuICAgIHJldHVybiB7IG5hbWUsIGFkZFRvZG8gfTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QgfTsiLCJpbXBvcnQgZG93bkFycm93UG5nIGZyb20gJy4vZG93bi1hcnJvdy5zdmcnO1xuaW1wb3J0IHNldHRpbmdzUG5nIGZyb20gJy4vc2V0dGluZ3MtaWNvbi5zdmcnO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tICcuL3RyYWNrQWxsUHJvamVjdHMnO1xuaW1wb3J0IENhbmNlbFN2ZyBmcm9tICcuL2NhbmNlbC5zdmcnO1xuXG5jb25zdCBoYW5kbGVET00gPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBsZXQgaGVhZGVyLCBwcm9qZWN0LCBwcm9qZWN0VGl0bGUsIGFjdGlvbnMsIGRvd25BcnJvdywgYXJyb3dNZW51LCBzZXR0aW5ncywgc2V0dGluZ3NNZW51O1xuICAgIGxldCBoMiwgcHJvamVjdE1lbnU7XG4gICAgbGV0IG1haW47XG4gICAgbGV0IGFycm93TWVudUl0ZW1zID0gWydBZGQtVG9kbyddO1xuICAgIGxldCBzZXR0aW5nc01lbnVJdGVtcyA9IFsnc2V0dGluZ3MnLCAnbWVudScsICdvcHRpb25zJ107XG4gICAgbGV0IHByb2plY3RNZW51SXRlbXMgPSBbXTtcblxuICAgIGxldCBwcmlvcml0eUNsYXNzZXMgPSBbXG4gICAgICAgICdsb3cnLFxuICAgICAgICAnbG93JyxcbiAgICAgICAgJ2xvdy1tZWRpdW0nLFxuICAgICAgICAnbG93LW1lZGl1bScsXG4gICAgICAgICdsb3ctbWVkaXVtJyxcbiAgICAgICAgJ21lZGl1bScsXG4gICAgICAgICdtZWRpdW0taGlnaCcsXG4gICAgICAgICdtZWRpdW0taGlnaCcsXG4gICAgICAgICdtZWRpdW0taGlnaCcsXG4gICAgICAgICdoaWdoJ1xuICAgIF07XG5cbiAgICBjb25zdCBhZGRPcHRpb25zVG9NZW51ID0gKGFwcGVuZFRvLCBhcnIpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhcnIpIHtcbiAgICAgICAgICAgIGxldCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRtcC5jbGFzc0xpc3QuYWRkKGAke2FycltpXX1gKTtcbiAgICAgICAgICAgIHRtcC5pbm5lclRleHQgPSBgJHthcnJbaV0ucmVwbGFjZSgvLS9nLCAnICcpfWA7XG4gICAgICAgICAgICBhcHBlbmRUby5hcHBlbmRDaGlsZCh0bXApO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVJY29uID0gKGltZywgYXBwZW5kdG8pID0+IHtcbiAgICAgICAgbGV0IHRtcCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0bXAuc3JjID0gaW1nO1xuICAgICAgICB0bXAuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICB0bXAuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCBmYWxzZSk7XG4gICAgICAgIGFwcGVuZHRvLmFwcGVuZENoaWxkKHRtcCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZVByaW9yaXR5TGV2ZWwgPSAoZWxlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09IDEwKSB7IHByaW9yaXR5LS0gfTtcbiAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQocHJpb3JpdHlDbGFzc2VzW3ByaW9yaXR5XSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3REaXYgPSAoKSA9PiB7XG4gICAgICAgIHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChoMik7XG4gICAgICAgIHByb2plY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RNZW51LmNsYXNzTGlzdC5hZGQoJ2Ryb3AtZG93bicpO1xuICAgICAgICBwcm9qZWN0TWVudUl0ZW1zID0gYWxsUHJvamVjdHMubWFwKG8gPT4gby5uYW1lKTtcbiAgICAgICAgcHJvamVjdE1lbnVJdGVtcy5wdXNoKCdBbGwtTGlzdC1WaWV3Jyk7XG4gICAgICAgIGFkZE9wdGlvbnNUb01lbnUocHJvamVjdE1lbnUsIHByb2plY3RNZW51SXRlbXMpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQocHJvamVjdE1lbnUpO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUFjdGlvbnNEaXYgPSAoKSA9PiB7XG4gICAgICAgIGFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdhY3Rpb25zJyk7XG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZURvd25BcnJvd01lbnUgPSAoYXBwZW5kVG8pID0+IHtcbiAgICAgICAgZG93bkFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNyZWF0ZUljb24oZG93bkFycm93UG5nLCBkb3duQXJyb3cpO1xuICAgICAgICBkb3duQXJyb3cuY2xhc3NMaXN0LmFkZCgnZG93bi1hcnJvdycpO1xuICAgICAgICBhcnJvd01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYXJyb3dNZW51LmNsYXNzTGlzdC5hZGQoJ2Ryb3AtZG93bicpO1xuICAgICAgICBhZGRPcHRpb25zVG9NZW51KGFycm93TWVudSwgYXJyb3dNZW51SXRlbXMpO1xuICAgICAgICBkb3duQXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dNZW51KTtcbiAgICAgICAgYXBwZW5kVG8uYXBwZW5kQ2hpbGQoZG93bkFycm93KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlU2V0dGluZ3NNZW51ID0gKGFwcGVuZFRvKSA9PiB7XG4gICAgICAgIHNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNyZWF0ZUljb24oc2V0dGluZ3NQbmcsIHNldHRpbmdzKTtcbiAgICAgICAgc2V0dGluZ3MuY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3MnKTtcbiAgICAgICAgc2V0dGluZ3NNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNldHRpbmdzTWVudS5jbGFzc0xpc3QuYWRkKCdkcm9wLWRvd24nKTtcbiAgICAgICAgYWRkT3B0aW9uc1RvTWVudShzZXR0aW5nc01lbnUsIHNldHRpbmdzTWVudUl0ZW1zKTtcbiAgICAgICAgc2V0dGluZ3MuYXBwZW5kQ2hpbGQoc2V0dGluZ3NNZW51KTtcbiAgICAgICAgYXBwZW5kVG8uYXBwZW5kQ2hpbGQoc2V0dGluZ3MpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGhlYWRlciwgY29udGVudCk7XG5cbiAgICAgICAgY3JlYXRlUHJvamVjdERpdigpO1xuXG4gICAgICAgIGNyZWF0ZUFjdGlvbnNEaXYoKTtcbiAgICAgICAgY3JlYXRlRG93bkFycm93TWVudShhY3Rpb25zKTtcbiAgICAgICAgY3JlYXRlU2V0dGluZ3NNZW51KGFjdGlvbnMpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVNYWluRGl2ID0gKCkgPT4ge1xuICAgICAgICAvLyBjcmVhdGUgbWFpbiBkaXYgKCBkaXYgd2l0aCBhbGwgY29udGVudCApXG4gICAgICAgIG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlclRvZG8gPSAodG9kbykgPT4ge1xuICAgICAgICAvLyBtYWluIHRvZG8gZWxlbWVudCB3aXRoIHRpdGxlIGFuZCBkdWUgZGF0ZVxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGRpdlRpdGxlLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XG4gICAgICAgIGxldCBkaXZEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgZGl2RHVlRGF0ZS5pbm5lclRleHQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkaXZEdWVEYXRlKTtcbiAgICAgICAgdXBkYXRlUHJpb3JpdHlMZXZlbChkaXYsIHRvZG8ucHJpb3JpdHkpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgICAgLy8gZXhwYW5kIGVsZW1lbnQgZm9yIHdoZW4gdG9kbyBjbGlja2VkXG4gICAgICAgIGxldCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZXhwYW5kLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZCcpXG4gICAgICAgIHVwZGF0ZVByaW9yaXR5TGV2ZWwoZXhwYW5kLCB0b2RvLnByaW9yaXR5KTtcblxuICAgICAgICAvLyBhZGQgZGVzY3JpcHRpb24gb24gZXhwYW5kIGVsZW1lbnRcbiAgICAgICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBkZXNjLnRvZG8gPSB0b2RvOyAvL3RoaXMgYXNzb2NjaWF0ZXMgdGhlIGVsZW1lbnQgd2l0aCB0aGUgdG9kbyBvYmplY3RcbiAgICAgICAgZGVzYy5pbm5lclRleHQgPSB0b2RvLmRlc2M7XG4gICAgICAgIGV4cGFuZC5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgICAgICAvLyBhZGQgY2hlY2tsaXN0IG9uIGV4cGFuZCBlbGVtZW50XG4gICAgICAgIGxldCBjaGVja0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlY2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrbGlzdCcpO1xuXG4gICAgICAgIHRvZG8uY2hlY2tsaXN0LmZvckVhY2gob2JqZWN0ID0+IHsvL2FycmF5IG9mIG9iamVjdHNcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBvYmplY3QpIHtcblxuICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2sudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgY2hlY2suaWQgPSBrZXk7XG4gICAgICAgICAgICAgICAgY2hlY2submFtZSA9IGtleTtcbiAgICAgICAgICAgICAgICBjaGVjay52YWx1ZSA9IGtleTtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0W2tleV0pIHsgY2hlY2suc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ3RydWUnKSB9O1xuXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGtleSk7XG4gICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0ga2V5LnJlcGxhY2UoL18vZywgJyAnKTtcblxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgICAgICAgICAgICAgaXRlbS50b2RvID0gb2JqZWN0O1xuICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2spO1xuICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgY2hlY2tMaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGV4cGFuZC5hcHBlbmRDaGlsZChjaGVja0xpc3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgZGVsZXRlIHRvZG8gYnV0dG9uXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnRuLmlubmVyVGV4dCA9ICdEZWxldGUgVG9kbyc7XG4gICAgICAgIGJ0bi50b2RvID0gdG9kbztcbiAgICAgICAgYnRuLmRlbFRvZG8gPSAoKSA9PiB7XG4gICAgICAgICAgICAvL3NlYXJjaCBhbGxQcm9qZWN0cyBhcnJheSBmb3IgdG9kbyBhbmQgcmVtb3ZlIGl0XG4gICAgICAgICAgICBhbGxQcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gYnRuLnRvZG8udGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcm9qZWN0W2tleV07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBleHBhbmQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZXhwYW5kKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkVG9kb0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0ubWV0aG9kID0gJ2RpYWxvZyc7XG4gICAgICAgIGNyZWF0ZUljb24oQ2FuY2VsU3ZnLCBkaWFsb2cpO1xuXG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaDIuaW5uZXJUZXh0ID0gJ0FkZCBUb2RvJztcbiAgICAgICAgZGlhbG9nLmFwcGVuZENoaWxkKGgyKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RTZWxlY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1zZWxlY3QnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJvamVjdExhYmVsLmlubmVyVGV4dCA9ICdQcm9qZWN0OidcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGFsbFByb2plY3RzKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gYWxsUHJvamVjdHNba2V5XS5uYW1lLnJlcGxhY2UoLy0vZywgJyAnKTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfTtcbiAgICAgICAgcHJvamVjdFNlbGVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3REaXYpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGVJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZS1pbnB1dCcpO1xuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSAnVGl0bGU6JztcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICB0aXRsZUlucHV0RGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICB0aXRsZUlucHV0RGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXREaXYpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjSW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnZGVzYy1pbnB1dCcpO1xuICAgICAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkZXNjTGFiZWwuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOic7XG4gICAgICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRlc2NJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGRlc2NJbnB1dERpdi5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuICAgICAgICBkZXNjSW5wdXREaXYuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjSW5wdXREaXYpO1xuXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRlSW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnZGF0ZS1pbnB1dCcpO1xuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlOic7XG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICBkYXRlSW5wdXREaXYuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICAgICAgZGF0ZUlucHV0RGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0RGl2KTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaW9yaXR5SW5wdXREaXYuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktaW5wdXQnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5IExldmVsOic7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwcmlvcml0eUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC50eXBlID0gJ251bWJlcic7XG4gICAgICAgIHByaW9yaXR5SW5wdXQubWluID0gMFxuICAgICAgICBwcmlvcml0eUlucHV0Lm1heCA9IDEwXG4gICAgICAgIHByaW9yaXR5SW5wdXREaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIHByaW9yaXR5SW5wdXREaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dERpdik7XG5cbiAgICAgICAgY29uc3QgY2hlY2tsaXN0Q3JlYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrbGlzdENyZWF0ZURpdi5jbGFzc0xpc3QuYWRkKCdjaGVja2xpc3QtY3JlYXRlJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdENyZWF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0NyZWF0ZSBDaGVja2xpc3Q6JztcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY2hlY2tJbnB1dCcpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RDcmVhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrbGlzdENyZWF0ZUlucHV0LmlkID0gJ2NoZWNrSW5wdXQnO1xuICAgICAgICBjaGVja2xpc3RDcmVhdGVJbnB1dC5tYXhMZW5ndGggPSAzMDtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0Q3JlYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNoZWNrbGlzdENyZWF0ZUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGNoZWNrbGlzdENyZWF0ZUJ0bi5pbm5lclRleHQgPSAnTmV3IENoZWNrJztcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlRGl2LmFwcGVuZENoaWxkKGNoZWNrbGlzdENyZWF0ZUxhYmVsKTtcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlRGl2LmFwcGVuZENoaWxkKGNoZWNrbGlzdENyZWF0ZUlucHV0KTtcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlRGl2LmFwcGVuZENoaWxkKGNoZWNrbGlzdENyZWF0ZUJ0bik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2hlY2tsaXN0Q3JlYXRlRGl2KTtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0Q3JlYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGVja2xpc3RDcmVhdGVkLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZWQtY2hlY2tzJyk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2hlY2tsaXN0Q3JlYXRlZCk7XG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQnKTtcbiAgICAgICAgc3VibWl0QnRuLmlubmVyVGV4dCA9ICdTdWJtaXQnO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cblxuXG4gICAgICAgIGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChkaWFsb2cpO1xuICAgIH07XG5cbiAgICBjb25zdCBhbGxMaXN0VmlldyA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFoZWFkZXIpIHsgY3JlYXRlSGVhZGVyKCkgfVxuICAgICAgICBlbHNlIHsgY29udGVudC5pbm5lclRleHQgPSAnJyB9O1xuXG4gICAgICAgIGgyLmlubmVyVGV4dCA9ICdBbGwgTGlzdCBWaWV3JztcblxuICAgICAgICBjcmVhdGVNYWluRGl2KCk7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnYWxsLWxpc3QtdmlldycpO1xuXG4gICAgICAgIC8vIHJlbmRlciBhbGwgdG9kb3MgZnJvbSBhbGwgcHJvamVjdHMgb24gc2NyZWVuXG4gICAgICAgIGFsbFByb2plY3RzLmZpbHRlcihvYmplY3QgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICduYW1lJyAmJiBrZXkgIT09ICdhZGRUb2RvJykge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2RvKG9iamVjdFtrZXldKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignZGlhbG9nJykgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJykpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0VmlldyA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBtYWluLmlubmVyVGV4dCA9ICcnO1xuXG4gICAgICAgIGgyLmlubmVyVGV4dCA9IHByb2plY3ROYW1lLnJlcGxhY2UoLy0vZywgJyAnKTtcblxuICAgICAgICAvL2ZpbHRlciBhbGxQcm9qZWN0cyBmb3IgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkXG4gICAgICAgIGxldCByZXN1bHQgPSBhbGxQcm9qZWN0cy5maWx0ZXIob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PT0gcHJvamVjdE5hbWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vcmVuZGVyIGFsbCB0b2RvcyBmcm9tIHRoZSBzZWxlY3RlZCBwcm9qZWN0XG4gICAgICAgIHJlc3VsdC5maWx0ZXIob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnbmFtZScgJiYga2V5ICE9PSAnYWRkVG9kbycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVG9kbyhvYmplY3Rba2V5XSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG5cblxuXG5cblxuICAgIFxuXG5cbiAgICByZXR1cm4geyBhbGxMaXN0VmlldywgcHJvamVjdFZpZXcsIGFkZFRvZG9Gb3JtIH07XG59KSgpO1xuXG5leHBvcnQgeyBoYW5kbGVET00gfTtcbiIsImltcG9ydCB7IGhhbmRsZURPTSB9IGZyb20gXCIuL2hhbmRsZURPTVwiO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi90cmFja0FsbFByb2plY3RzXCI7XG5cbmxldCBuZXdDaGVja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3QtY3JlYXRlIGJ1dHRvbicpO1xuXG5mdW5jdGlvbiBzdWJtaXRGb3JtKGUpIHtcbiAgICBsZXQgZm9ybSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IGNyZWF0ZWRDaGVja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtID4gLmNyZWF0ZWQtY2hlY2tzIC5pdGVtJyk7XG4gICAgbGV0IGgyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nID4gaDInKTtcblxuXG4gICAgaWYgKGgyLmlubmVyVGV4dCA9PT0gJ0FkZCBUb2RvJykge1xuICAgICAgICBsZXQgc2VsZWN0ID0gZm9ybVswXS52YWx1ZTtcbiAgICAgICAgbGV0IHRpdGxlID0gZm9ybVsxXS52YWx1ZTtcbiAgICAgICAgbGV0IGRlc2MgPSBmb3JtWzJdLnZhbHVlO1xuICAgICAgICBsZXQgZHVlID0gZm9ybVszXS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZm9ybVs0XS52YWx1ZTtcbiAgICAgICAgbGV0IGNoZWNrbGlzdCA9IFtdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5KTtcbiAgICAgICAgLy8gaWYgYWxsIHJlcXVpcmVkIGZpZWxkcyBhcmVudCBlbXB0eVxuICAgICAgICBpZiAodGl0bGUgIT09ICcnICYmIGRlc2MgIT09ICcnICYmIGR1ZSAhPT0gJycgJiYgcHJpb3JpdHkgIT09ICcnKSB7XG4gICAgICAgICAgICByZW1vdmVEaWFsb2coKTtcblxuICAgICAgICAgICAgY3JlYXRlZENoZWNrcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IGl0ZW0uY2hpbGRyZW5bMF0uY2hlY2tlZDtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBpdGVtLmNoaWxkcmVuWzFdLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICBjaGVja2xpc3QucHVzaCh7W2xhYmVsXTogY2hlY2t9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lID09PSBzZWxlY3QucmVwbGFjZSgvIC9nLCAnLScpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5hZGRUb2RvKHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5LCBjaGVja2xpc3QpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgIH07XG59O1xuXG5mdW5jdGlvbiBuZXdDaGVjayhlKSB7XG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQucHJldmlvdXNTaWJsaW5nLnZhbHVlO1xuICAgIGxldCBjcmVhdGVkQ2hlY2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZWQtY2hlY2tzJyk7XG4gICAgbGV0IGxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcmVhdGVkLWNoZWNrcyBsYWJlbCcpO1xuXG4gICAgLy8gbWFrZSBzdXJlIG5vIGR1cGxpY2F0ZSBsYWJlbHMgYW5kIGNoZWNrYm94ZXNcbiAgICBsYWJlbHMuZm9yRWFjaChsYWJlbCA9PiB7XG4gICAgICAgIGlmIChsYWJlbC5pbm5lclRleHQgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgaWYgKHZhbHVlICE9PSAnJykge1xuICAgICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICAgICAgbGV0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2sudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgIGNoZWNrLmlkID0gYCR7dmFsdWUucmVwbGFjZSgvIC9nLCAnXycpfWA7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYCR7dmFsdWUucmVwbGFjZSgvIC9nLCAnXycpfWApO1xuICAgICAgICBsYWJlbC5pbm5lclRleHQgPSB2YWx1ZTtcblxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGNoZWNrKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGNyZWF0ZWRDaGVja3NEaXYuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cbiAgICAgICAgZS50YXJnZXQucHJldmlvdXNTaWJsaW5nLnZhbHVlID0gJyc7XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZURpYWxvZygpIHtcbiAgICBsZXQgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyk7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgZGlhbG9nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZGlhbG9nLmlubmVySFRNTCA9ICcnO1xuICAgIG5ld0NoZWNrQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3Q2hlY2spO1xufTtcblxuZnVuY3Rpb24gYXJyb3dDbGljayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnQWRkLVRvZG8nKSkge1xuICAgICAgICBsZXQgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyk7XG4gICAgICAgIGRpYWxvZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBoYW5kbGVET00uYWRkVG9kb0Zvcm0oKTtcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuXG4gICAgICAgIG5ld0NoZWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdC1jcmVhdGUgYnV0dG9uJyk7XG4gICAgICAgIG5ld0NoZWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3Q2hlY2spO1xuXG4gICAgICAgIGxldCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIC5zdWJtaXQnKTtcbiAgICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0Rm9ybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgYWRkIHByb2plY3QgaXMgY2xpY2tlZFxuICAgIH07XG5cbiAgICBsZXQgZXhpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZyA+IGltZycpO1xuICAgIGV4aXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVEaWFsb2cpO1xufTtcblxuZXhwb3J0IHsgYXJyb3dDbGljaywgcmVtb3ZlRGlhbG9nIH07IiwiXG5sZXQgYWxsUHJvamVjdHMgPSBbXTtcblxuZnVuY3Rpb24gdHJhY2tBbGxQcm9qZWN0cyhwcm9qZWN0KSB7XG4gICAgYWxsUHJvamVjdHMucHVzaCggcHJvamVjdCApO1xufTtcblxuZnVuY3Rpb24gYWRkVG9kb1RvQWxsUHJvamVjdHMocHJvamVjdE5hbWUsIHRvZG9OYW1lLCB0b2RvT2JqZWN0KSB7XG4gICAgYWxsUHJvamVjdHMuZmlsdGVyKG9iamVjdCA9PiB7XG4gICAgICAgIGlmIChvYmplY3QucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIG9iamVjdFt0b2RvTmFtZV0gPSB0b2RvT2JqZWN0O1xuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxuZXhwb3J0IHsgdHJhY2tBbGxQcm9qZWN0cywgYWxsUHJvamVjdHMsIGFkZFRvZG9Ub0FsbFByb2plY3RzIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tICcuL2NyZWF0ZVByb2plY3QuanMnO1xuaW1wb3J0IHsgaGFuZGxlRE9NIH0gZnJvbSAnLi9oYW5kbGVET00uanMnO1xuaW1wb3J0IHsgdHJhY2tBbGxQcm9qZWN0cyB9IGZyb20gJy4vdHJhY2tBbGxQcm9qZWN0cy5qcyc7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gJy4vdHJhY2tBbGxQcm9qZWN0cy5qcyc7XG5pbXBvcnQgKiBhcyBoYW5kbGVGb3JtcyBmcm9tICcuL2hhbmRsZUZvcm1zLmpzJztcblxuLy8gLy8gY3JlYXRlIG5ldyBwcm9qZWN0IG9iamVjdCB0byBzdG9yZSBhbGwgdG9kb3Ncbi8vIC8vIGFsbCBzcGFjZXMgaW4gbmFtZSBtdXN0IGJlIHJlcGxhY2VkIHdpdGggZGFzaGVzXG4vLyBsZXQgdGVzdCA9IGNyZWF0ZVByb2plY3QoJ1Byb2plY3QtTmFtZScpO1xuXG4vLyAvLyBhZGQgdG9kbyB0byB0aGUgcHJvamVjdCBvYmplY3QgdXNpbmcgYWRkVG9kbyBtZXRob2QgYW5kIGNyZWF0ZVRvZG8gbW9kdWxlXG4vLyB0ZXN0LmFkZFRvZG8oJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ2R1ZWRhdGUnLCAncHJpb3JpdHknLCAnY2hlY2tsaXN0Jyk7XG5cbi8vIC8vIHJlc3VsdCBpcyB0aGUgcHJvamVjdCBvYmplY3Qgd2l0aCBhbGwgdG9kb3Mgc3RvcmVkIGFzIG9iamVjdHNcbi8vIGNvbnNvbGUubG9nKHRlc3QpO1xuXG5cbi8qXG4qKipuZWVkIHRvIGZpeCBob3cgZGlhbG9ncyB3b3JrIGlkayBob3cgdGhleSB3b3JrIGJ1dCB3aWxsIGNvbWUgYmFjayoqKlxuKi9cblxuXG5cbmxldCB0ZXN0ID0gY3JlYXRlUHJvamVjdCgnVGVzdC1Qcm9qZWN0Jyk7Ly8gc3RvcmUgbmFtZXMgd2l0aCBkYXNoZXMgYWRkIHNwYWNlIGxhdGVyXG50cmFja0FsbFByb2plY3RzKHRlc3QpO1xuXG4vLyBzdG9yZSBjaGVja2xpc3Qga2V5cyB3aXRoIHVuZGVyc2NvcmVzIGluc3RlYWQgb2Ygc3BhY2VzIGFuZCBhZGQgdGhlbSBsYXRlclxubGV0IGV4YW1wbGVDaGVja2xpc3QgPSBbXG4gICAge1N0ZXBfT25lOiB0cnVlfSxcbiAgICB7U3RlcF9Ud286IGZhbHNlfSxcbiAgICB7VGVzdGluZ19Mb25nZXJfbmFtZV90b19TZWVfV2hhdF9IYXBwZW5zOiBmYWxzZX0sXG4gICAge1N0ZXBfRm91cjogdHJ1ZX0sXG4gICAge1N0ZXBfRml2ZTogZmFsc2V9LFxuICAgIHtTdGVwX1NpeDogZmFsc2V9LFxuICAgIHtTdGVwX1NldmVuOiBmYWxzZX0sXG4gICAge1N0ZXBfRWlnaHQ6IGZhbHNlfSxcbiAgICB7U3RlcF9OaW5lOiBmYWxzZX0sXG4gICAge1N0ZXBfVGVuOiBmYWxzZX1cbl07IC8vIG1ha2Ugc3VyZSBmb3JtIHJlcXVpcmVzIGlucHV0IGFuZCBkb2VzbnQgbGV0IHlvdSBzdWJtaXQgdW5kZWZpbmVkIHN0dWZmXG5cbnRlc3QuYWRkVG9kbygndGl0bGUxJywgJ2V4YW1wbGUgdGV4dCcsICdkdWUnLCAyLCBleGFtcGxlQ2hlY2tsaXN0KTtcbnRlc3QuYWRkVG9kbygndGl0bGUyJywgJ2Rlc2MnLCAnZHVlJywgNiwgW3thYmNkOiBmYWxzZX1dKTtcbnRlc3QuYWRkVG9kbygndGl0bGUzJywgJ2Rlc2MnLCAnZHVlJywgMCwgW3tlZmdoOiBmYWxzZX1dKTtcblxubGV0IHRlc3R0d28gPSBjcmVhdGVQcm9qZWN0KCdBbm90aGVyLVByb2plY3QnKTtcbnRyYWNrQWxsUHJvamVjdHModGVzdHR3byk7XG5cbnRlc3R0d28uYWRkVG9kbygndGl0bGU0JywgJ2Rlc2MnLCAnZHVlJywgNSwgW3tpamtsOiBmYWxzZX1dKTtcbnRlc3R0d28uYWRkVG9kbygndGl0bGU1JywgJ2Rlc2MnLCAnZHVlJywgMTAsIFt7bW5vcDogZmFsc2V9XSk7XG50ZXN0dHdvLmFkZFRvZG8oJ3RpdGxlNicsICdkZXNjJywgJ2R1ZScsIDMsIFt7cXJzdDogZmFsc2V9XSk7XG5cbmhhbmRsZURPTS5hbGxMaXN0VmlldygpO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuY29uc3QgZG93bkFycm93SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvd24tYXJyb3cgPiBpbWcnKTtcbmNvbnN0IHNldHRpbmdzSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHRpbmdzID4gaW1nJyk7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlID4gaDInKTtcbmNvbnN0IHRpdGxlRHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUgPiAuZHJvcC1kb3duJyk7XG5cbmxldCB0ZXh0YXJlYSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpXTtcbmxldCBleHBhbmQgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4gPiBkaXYgPiAuZXhwYW5kJyldO1xubGV0IGl0ZW1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2xpc3QgPiAuaXRlbScpXTtcbmxldCBkZWxCdG5zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHBhbmQgPiBidXR0b24nKV07XG5sZXQgYXJyb3dPcHRpb25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb3duLWFycm93IC5kcm9wLWRvd24gPiBkaXYnKV07XG5sZXQgc2V0dGluZ3NPcHRpb25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXR0aW5ncyAuZHJvcC1kb3duID4gZGl2JyldO1xuXG5kb3duQXJyb3dJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbn0pO1xuXG5zZXR0aW5nc0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xufSk7XG5cbnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC5uZXh0U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7IFxufSk7XG5cbnRpdGxlRHJvcERvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdBbGwtTGlzdC1WaWV3Jykge1xuICAgICAgICBoYW5kbGVET00uYWxsTGlzdFZpZXcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBoYW5kbGVET00ucHJvamVjdFZpZXcoZS50YXJnZXQuY2xhc3NOYW1lKTtcbiAgICB9O1xufSk7XG5cbnRleHRhcmVhLmZvckVhY2goYXJlYSA9PiB7XG4gICAgYXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnRvZG8uZGVzYyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbihlKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCkgfTtcbmZ1bmN0aW9uIHRvZ2dsZVZpc2libGUoZSkge1xuICAgIC8vaWYgZS50YXJnZXQuY2hpbGRyZW5bMl0gaXMgdW5kZWZpbmVkIHRoZW4gaSBtdXN0dmUgY2xpY2tlZCBhbiBoMiBjaGlsZCBvZiB0aGUgdG9kbyBlbGVtZW50XG4gICAgaWYgKGUudGFyZ2V0LmNoaWxkcmVuWzJdKSB7IGUudGFyZ2V0LmNoaWxkcmVuWzJdLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKSB9XG4gICAgZWxzZSB7IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMl0uY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpIH07XG59O1xuZXhwYW5kLmZvckVhY2goZXhwYW5kZWQgPT4ge1xuICAgIGV4cGFuZGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcFByb3BhZ2F0aW9uKTtcbiAgICBleHBhbmRlZC5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVmlzaWJsZSk7XG59KTtcblxuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBpdGVtLnRvZG8pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS50b2RvW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS50b2RvW2tleV0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnRvZG9ba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gZGVsZXRlVG9kbyhlKSB7XG4gICAgZS50YXJnZXQuZGVsVG9kbygpO1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLnJlbW92ZUNoaWxkKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG59O1xuZGVsQnRucy5mb3JFYWNoKGJ0biA9PiB7IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvZG8pIH0pO1xuXG5cblxuXG5hcnJvd09wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVGb3Jtcy5hcnJvd0NsaWNrKSB9KTtcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCAhPT0gZG93bkFycm93SW1nKSB7IFxuICAgICAgICBkb3duQXJyb3dJbWcubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH07XG5cbiAgICBpZiAoZS50YXJnZXQgIT09IHNldHRpbmdzSW1nKSB7IFxuICAgICAgICBzZXR0aW5nc0ltZy5uZXh0U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfTtcblxuICAgIGlmIChlLnRhcmdldCAhPT0gdGl0bGUpIHtcbiAgICAgICAgdGl0bGUubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH07XG5cbiAgICBleHBhbmQuZm9yRWFjaChleHBhbmRlZCA9PiB7XG4gICAgICAgIC8vZ2V0IHRoZSBoMiBjaGlsZHJlbiBvZiBlYWNoIHRvZG8gc28gaSBjYW4gZXhwYW5kIHRvZG8gd2hpbGUgY2xpY2tpbmcgdGhlIGgyIGFzd2VsbFxuICAgICAgICBsZXQgaDIgPSBbLi4uZXhwYW5kZWQucGFyZW50RWxlbWVudC5jaGlsZHJlbl0uc3BsaWNlKDAsIDIpO1xuXG4gICAgICAgIGlmIChlLnRhcmdldCAhPT0gZXhwYW5kZWQucGFyZW50RWxlbWVudCAmJiBlLnRhcmdldCAhPT0gaDJbMF0gJiYgZS50YXJnZXQgIT09IGgyWzFdKSB7XG4gICAgICAgICAgICBleHBhbmRlZC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgIH07XG4gICAgfSk7XG59KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7IGhhbmRsZUZvcm1zLnJlbW92ZURpYWxvZygpIH07XG59KTtcblxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgdGV4dGFyZWEgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEnKV07XG4gICAgZXhwYW5kID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluID4gZGl2ID4gLmV4cGFuZCcpXTtcbiAgICBpdGVtcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tsaXN0ID4gLml0ZW0nKV07XG4gICAgZGVsQnRucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwYW5kID4gYnV0dG9uJyldO1xuICAgIFxuICAgIHRleHRhcmVhLmZvckVhY2goYXJlYSA9PiB7XG4gICAgICAgIGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS50YXJnZXQudG9kby5kZXNjID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZXhwYW5kLmZvckVhY2goZXhwYW5kZWQgPT4ge1xuICAgICAgICBleHBhbmRlZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN0b3BQcm9wYWdhdGlvbik7XG4gICAgICAgIGV4cGFuZGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcFByb3BhZ2F0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIGV4cGFuZGVkLnBhcmVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVWaXNpYmxlKTtcbiAgICAgICAgZXhwYW5kZWQucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVZpc2libGUpO1xuICAgIH0pO1xuXG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBpdGVtLnRvZG8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udG9kb1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRvZG9ba2V5XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS50b2RvW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlbEJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUb2RvKTtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9kbyk7XG4gICAgfSk7XG59KTtcblxuY29uc3QgY29uZmlnID0ge1xuICAgIHN1YnRyZWU6IHRydWUsXG4gICAgY2hpbGRMaXN0OiB0cnVlLFxufTtcblxub2JzZXJ2ZXIub2JzZXJ2ZShjb250ZW50LCBjb25maWcpXG5cblxuXG5cbi8qXG5cbkFsbCAnUHJvamVjdHMnIGFyZSBPYmplY3RzIHRoYXQgSG9sZCAnVG9kb3MnXG5BbGwgJ1RvZG9zJyBhcmUgT2JqZWN0c1xuJ1RvZG9zJyBjYW4gb25seSBiZSBtYWRlIG9uIGEgJ1Byb2plY3QnIGJ1dCB0aGVyZSBpcyBhbiAnQWxsIExpc3QgVmlldydcblxuLSBZb3UgY2FuJ3QgaGF2ZSAyICdQcm9qZWN0cycgd2l0aCB0aGUgc2FtZSBuYW1lXG4tIFByaW9yaXR5IG11c3QgYmUgZnJvbSAwLTEwIChpbmNsdXNpdmUpXG5cbiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9