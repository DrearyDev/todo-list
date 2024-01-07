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
        form.classList.add('Add-Todo');
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

    if (form.classList.contains('Add-Todo')) {
        let createdChecks = document.querySelectorAll('form > .created-checks .item');
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
};

function showDialog() {
    let dialog = document.querySelector('dialog');
    dialog.showModal();
    dialog.style.display = 'flex';
};

function arrowClick(e) {
    if (e.target.classList.contains('Add-Todo')) {
        _handleDOM__WEBPACK_IMPORTED_MODULE_0__.handleDOM.addTodoForm();
        showDialog();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksYUFBYSxTQUFTLFdBQVcsS0FBSyxZQUFZLGNBQWMsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLFdBQVcsYUFBYSxhQUFhLGFBQWEsU0FBUyxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxTQUFTLGFBQWEsTUFBTSxVQUFVLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxZQUFZLFVBQVUsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFNBQVMsYUFBYSxNQUFNLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsYUFBYSxhQUFhLFdBQVcsVUFBVSxRQUFRLGFBQWEsTUFBTSxZQUFZLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxjQUFjLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxxQkFBcUIsY0FBYyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLDRCQUE0QixpQkFBaUIsZ0JBQWdCLDZCQUE2QiwwSkFBMEosR0FBRyxnQ0FBZ0MsdUJBQXVCLHVCQUF1Qiw0QkFBNEIsa0RBQWtELHVEQUF1RCxrREFBa0Qsd0RBQXdELCtDQUErQyxHQUFHLFVBQVUsb0JBQW9CLHNCQUFzQiwwQkFBMEIsc0JBQXNCLDBDQUEwQywrQkFBK0Isd0NBQXdDLEdBQUcsOENBQThDLGtEQUFrRCxHQUFHLGVBQWUseURBQXlELEdBQUcsV0FBVyxxREFBcUQsR0FBRyxnQkFBZ0IsMERBQTBELEdBQUcsU0FBUyxtREFBbUQsR0FBRyx5Q0FBeUMsb0JBQW9CLG9CQUFvQixzQkFBc0IsaUNBQWlDLGdCQUFnQiwwQ0FBMEMsR0FBRyxzQkFBc0IsaUNBQWlDLHNCQUFzQiwwQkFBMEIscUNBQXFDLDBDQUEwQyxHQUFHLDJCQUEyQix5QkFBeUIsR0FBRyxnQ0FBZ0Msc0JBQXNCLHdCQUF3QiwrQkFBK0IsR0FBRyxzQ0FBc0MsZ0NBQWdDLEdBQUcsd0NBQXdDLHdCQUF3QixvQkFBb0IseUJBQXlCLGtCQUFrQixjQUFjLCtCQUErQix3Q0FBd0Msd0NBQXdDLEdBQUcsOENBQThDLDRCQUE0QixHQUFHLDRDQUE0QyxrQkFBa0Isd0JBQXdCLG9CQUFvQixzQkFBc0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsR0FBRyxrREFBa0Qsc0JBQXNCLDZCQUE2QiwyQ0FBMkMsR0FBRywrQkFBK0IsbUJBQW1CLHdCQUF3QixzQkFBc0IsMEJBQTBCLDJCQUEyQixnQkFBZ0IsR0FBRyxtQ0FBbUMseUJBQXlCLDRCQUE0QixHQUFHLCtFQUErRSw0QkFBNEIseUJBQXlCLEdBQUcsMkZBQTJGLG1CQUFtQixrQkFBa0Isd0JBQXdCLHNCQUFzQixzQkFBc0IsMEJBQTBCLDRKQUE0SixHQUFHLHdHQUF3Ryx1SkFBdUosR0FBRyxxR0FBcUcsd0JBQXdCLG9CQUFvQix5QkFBeUIsbUJBQW1CLGVBQWUsK0JBQStCLHdDQUF3Qyx3Q0FBd0MsR0FBRyxxSEFBcUgsNEJBQTRCLDBCQUEwQixHQUFHLGlIQUFpSCxrQkFBa0Isb0JBQW9CLHdCQUF3QixzQkFBc0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsR0FBRyw2SEFBNkgsc0JBQXNCLDZCQUE2QiwyQ0FBMkMsR0FBRywyQ0FBMkMsdUJBQXVCLHNCQUFzQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixHQUFHLFdBQVcsbUJBQW1CLGtCQUFrQiwwQ0FBMEMsR0FBRyx1QkFBdUIsb0JBQW9CLHNCQUFzQiw2QkFBNkIsMEJBQTBCLGdCQUFnQixHQUFHLDZCQUE2QixrQkFBa0Isb0JBQW9CLHNCQUFzQixzQkFBc0IsMEJBQTBCLHFDQUFxQyxzQkFBc0IsK0JBQStCLEdBQUcsZ0NBQWdDLHNCQUFzQixHQUFHLHFDQUFxQyxrQkFBa0Isd0JBQXdCLHVCQUF1QiwwQkFBMEIsZ0NBQWdDLDJCQUEyQixHQUFHLDZDQUE2Qyw0QkFBNEIsR0FBRyw4Q0FBOEMsa0JBQWtCLHdCQUF3QixvQkFBb0IsNEJBQTRCLGdEQUFnRCxtQkFBbUIsbUJBQW1CLEdBQUcsZ0RBQWdELHNCQUFzQixvQkFBb0IsZ0NBQWdDLHNCQUFzQiwwQkFBMEIsZ0JBQWdCLHNCQUFzQixHQUFHLHNEQUFzRCxvQkFBb0IsMEJBQTBCLDhCQUE4QixlQUFlLEdBQUcsMENBQTBDLG9CQUFvQixtQkFBbUIscUJBQXFCLHlCQUF5QiwyQkFBMkIsa0JBQWtCLGlCQUFpQixHQUFHLDBDQUEwQyx3QkFBd0IseUJBQXlCLG9CQUFvQixzQkFBc0IsNkJBQTZCLDBCQUEwQixnQkFBZ0IsMENBQTBDLDZCQUE2Qix3Q0FBd0MsaUJBQWlCLGdCQUFnQix1Q0FBdUMsR0FBRyxvQkFBb0Isd0NBQXdDLEdBQUcsZ0JBQWdCLG1CQUFtQixrQkFBa0Isd0JBQXdCLHNCQUFzQiwyQkFBMkIsZ0JBQWdCLGtCQUFrQiw2SEFBNkgsR0FBRyxzQkFBc0IsOEhBQThILEdBQUcsZUFBZSxzQkFBc0IsMEJBQTBCLEdBQUcsZUFBZSx3QkFBd0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsZ0JBQWdCLEdBQUcscUJBQXFCLGtCQUFrQix3QkFBd0Isb0JBQW9CLDBCQUEwQixxQ0FBcUMsZ0JBQWdCLEdBQUcsd0JBQXdCLGtCQUFrQixHQUFHLHNEQUFzRCxtQkFBbUIsbUJBQW1CLEdBQUcsc0RBQXNELHNCQUFzQiwwQkFBMEIsR0FBRyxzQkFBc0IsMEJBQTBCLG9CQUFvQixtQkFBbUIseUJBQXlCLHNCQUFzQiwrQkFBK0Isd0NBQXdDLEdBQUcsdUJBQXVCLDJDQUEyQyxHQUFHLDBCQUEwQixzQkFBc0Isa0JBQWtCLG1CQUFtQiw2QkFBNkIsd0JBQXdCLG9CQUFvQiwwQkFBMEIsa0NBQWtDLGdCQUFnQixHQUFHLGdDQUFnQyxvQkFBb0IsMEJBQTBCLDhCQUE4QixnQkFBZ0IsR0FBRyxnQ0FBZ0MseUJBQXlCLEdBQUcsbUdBQW1HLGVBQWUsZ0NBQWdDLFFBQVEsd0NBQXdDLDBCQUEwQixPQUFPLGdEQUFnRCw0QkFBNEIsT0FBTyxtR0FBbUcsdUJBQXVCLHNCQUFzQixPQUFPLHNDQUFzQyw0QkFBNEIsT0FBTyxnQkFBZ0IseUJBQXlCLDBCQUEwQixrQ0FBa0MsT0FBTyx5QkFBeUIsd0JBQXdCLGlDQUFpQyxrQ0FBa0Msa0NBQWtDLG1CQUFtQixPQUFPLDBCQUEwQiwwQkFBMEIsT0FBTywrQkFBK0Isc0JBQXNCLE9BQU8sR0FBRyxtQkFBbUI7QUFDenZaO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDeGMxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYjZEOztBQUU3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsMEVBQW9CO0FBQzVCO0FBQ0E7OztBQUdBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjRDO0FBQ0U7QUFDRztBQUNaOztBQUVyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTztBQUN4QywrQkFBK0IsMEJBQTBCO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBEQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsK0NBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdDQUFTOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBEQUFXO0FBQ25DO0FBQ0EsK0JBQStCLDBEQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLGVBQWU7O0FBRWY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQVEsMERBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQiwwREFBVztBQUNoQztBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7Ozs7OztBQU1BOzs7QUFHQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BWbUI7QUFDUzs7QUFFakQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxlQUFlO0FBQy9DLGFBQWE7O0FBRWIsWUFBWSwwREFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseUJBQXlCO0FBQy9DO0FBQ0EscUNBQXFDLHlCQUF5QjtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLGlEQUFTO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDOEI7QUFDUjtBQUNjO0FBQ0w7QUFDSjs7QUFFaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUEsV0FBVyxnRUFBYSxpQkFBaUI7QUFDekMsc0VBQWdCOztBQUVoQjtBQUNBO0FBQ0EsS0FBSyxlQUFlO0FBQ3BCLEtBQUssZ0JBQWdCO0FBQ3JCLEtBQUssK0NBQStDO0FBQ3BELEtBQUssZ0JBQWdCO0FBQ3JCLEtBQUssaUJBQWlCO0FBQ3RCLEtBQUssZ0JBQWdCO0FBQ3JCLEtBQUssa0JBQWtCO0FBQ3ZCLEtBQUssa0JBQWtCO0FBQ3ZCLEtBQUssaUJBQWlCO0FBQ3RCLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0EsMkNBQTJDLFlBQVk7QUFDdkQsMkNBQTJDLFlBQVk7O0FBRXZELGNBQWMsZ0VBQWE7QUFDM0Isc0VBQWdCOztBQUVoQiw4Q0FBOEMsWUFBWTtBQUMxRCwrQ0FBK0MsWUFBWTtBQUMzRCw4Q0FBOEMsWUFBWTs7QUFFMUQsb0RBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsUUFBUSxvREFBUztBQUNqQixNQUFNO0FBQ04sUUFBUSxvREFBUztBQUNqQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJDQUEyQzs7Ozs7QUFLcEUsaUNBQWlDLGlDQUFpQyx1REFBc0IsR0FBRzs7O0FBRzNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQSw4QkFBOEIseURBQXdCO0FBQ3RELENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZUZvcm1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90cmFja0FsbFByb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG5cblxuLyogVVRJTElUWSAqL1xuXG46cm9vdCB7XG4gICAgLS1CRy1DT0xPUjogIzMzMztcbiAgICAtLUZHLUNPTE9SOiAjY2NjO1xuXG4gICAgLS1IT1ZFUi1DT0xPUjogIzU1NTtcblxuICAgIC0tTE9XLVBSSU9SSVRZLUNPTE9SOiBoc2woMTAwLCAxMDAlLCA4MCUpO1xuICAgIC0tTE9XLU1FRElVTS1QUklPUklUWS1DT0xPUjogaHNsKDIwMCwgMTAwJSwgODAlKTtcbiAgICAtLU1FRElVTS1QUklPUklUWS1DT0xPUjogaHNsKDUwLCAxMDAlLCA4MCUpO1xuICAgIC0tTUVESVVNLUhJR0gtUFJJT1JJVFktQ09MT1I6IGhzbCgzMDAsIDEwMCUsIDgwJSk7XG4gICAgLS1ISUdILVBSSU9SSVRZLUNPTE9SOiBoc2woMCwgMTAwJSwgODAlKTtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG5cbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbn1cblxuXG5cbi8qIFBSSU9SSVRZIENPTE9SIENMQVNTRVMgKi9cblxuLmxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTE9XLVBSSU9SSVRZLUNPTE9SKTtcbn1cbi5sb3ctbWVkaXVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MT1ctTUVESVVNLVBSSU9SSVRZLUNPTE9SKTtcbn1cbi5tZWRpdW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU1FRElVTS1QUklPUklUWS1DT0xPUik7XG59XG4ubWVkaXVtLWhpZ2gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU1FRElVTS1ISUdILVBSSU9SSVRZLUNPTE9SKTtcbn1cbi5oaWdoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ISUdILVBSSU9SSVRZLUNPTE9SKTtcbn1cblxuXG5cbi8qIEhFQURFUiBTRUNUSU9OICovXG5cbi5oZWFkZXIge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tRkctQ09MT1IpO1xufVxuLmhlYWRlciA+IC5wcm9qZWN0IHtcbiAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgPiBoMiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbn1cbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlID4gaDI6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1IT1ZFUi1DT0xPUik7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSA+IC5kcm9wLWRvd24ge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGxlZnQ6IDA7XG5cbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLUJHLUNPTE9SKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSAuZHJvcC1kb3duLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlIC5kcm9wLWRvd24gPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlIC5kcm9wLWRvd24gPiBkaXY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhPVkVSLUNPTE9SKTtcbn1cbi5oZWFkZXIgLnByb2plY3QgPiAuYWN0aW9ucyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGdhcDogMTBweDtcbn1cbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgPiBkaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93LFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3Mge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93ID4gaW1nLFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgPiBpbWcge1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAvKiBtYWtlIGJsYWNrIGljb24gY29sb3IgIzMzMyAoIC0tQkctQ09MT1IgKSAqL1xuICAgIGZpbHRlcjogaW52ZXJ0KDE4JSkgc2VwaWEoMSUpIHNhdHVyYXRlKDQyODElKSBodWUtcm90YXRlKDQ1ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDkzJSk7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93ID4gaW1nOmhvdmVyLCBcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzID4gaW1nOmhvdmVyIHtcbiAgICAvKiBtYWtlIGljb24gY29sb3IgIzU1NSAoIC0tSE9WRVItQ09MT1IgKSAqL1xuICAgIGZpbHRlcjogaW52ZXJ0KDMxJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIxODglKSBodWUtcm90YXRlKDEzNGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDgyJSk7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93IC5kcm9wLWRvd24sXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyAuZHJvcC1kb3duIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLUJHLUNPTE9SKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93IC5kcm9wLWRvd24udmlzaWJsZSxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIC5kcm9wLWRvd24udmlzaWJsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93IC5kcm9wLWRvd24gPiBkaXYsXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyAuZHJvcC1kb3duID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93IC5kcm9wLWRvd24gPiBkaXY6aG92ZXIsXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyAuZHJvcC1kb3duID4gZGl2OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IT1ZFUi1DT0xPUik7XG59XG5cblxuXG4vKiBDT05URU5UIFNFQ1RJT04gKi9cblxuLmNvbnRlbnQge1xuICAgIG1hcmdpbjogMTVweCAwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1haW4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLUZHLUNPTE9SKTtcbn1cbi5tYWluLmFsbC1saXN0LXZpZXcge1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG4ubWFpbi5hbGwtbGlzdC12aWV3ID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbn1cbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gLmV4cGFuZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiA+IC5leHBhbmQudmlzaWJsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgLmV4cGFuZCA+IHRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcmVzaXplOiBub25lO1xufVxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgLmV4cGFuZCA+IC5jaGVja2xpc3Qge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMjBweCAwcHggNTBweCAwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2IC5leHBhbmQgLmNoZWNrbGlzdCA+IC5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG59XG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiAuZXhwYW5kIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG5cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG59XG5cblxuXG4vKiBGT1JNIFRPIEFERCBUT0RPICovXG5cbmRpYWxvZyB7XG4gICAgbWF4LWhlaWdodDogNjUwcHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDI1cHg7XG5cbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDUwcHg7XG5cbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1CRy1DT0xPUik7XG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG5cbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5kaWFsb2c6OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XG59XG5kaWFsb2cgPiBpbWcge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuXG4gICAgLyogLS1CRy1DT0xPUiAqL1xuICAgIGZpbHRlcjogaW52ZXJ0KDE4JSkgc2VwaWEoMSUpIHNhdHVyYXRlKDQyODElKSBodWUtcm90YXRlKDQ1ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDkzJSk7XG59XG5kaWFsb2cgPiBpbWc6aG92ZXIge1xuICAgIC8qIC0tSE9WRVItQ09MT1IgKi9cbiAgICBmaWx0ZXI6IGludmVydCgzMSUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgyMTg4JSkgaHVlLXJvdGF0ZSgxMzRkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCg4MiUpO1xufVxuZGlhbG9nID4gaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuZGlhbG9nIGZvcm0ge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDE1cHg7XG59XG5kaWFsb2cgZm9ybSA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDI1cHg7XG59XG5kaWFsb2cgZm9ybSA+IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5kaWFsb2cgZm9ybSBkaXYgPiBzZWxlY3QsXG5kaWFsb2cgZm9ybSBkaXYgPiBpbnB1dCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbmRpYWxvZyBmb3JtIGRpdiA+IGxhYmVsLFxuZGlhbG9nIGZvcm0gZGl2ID4gYnV0dG9uIHtcbiAgICB3b3JkLXdyYXA6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbmRpYWxvZyBmb3JtIGJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG59XG5kaWFsb2cgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IT1ZFUi1DT0xPUik7XG59XG5kaWFsb2cgLmNyZWF0ZWQtY2hlY2tzIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBnYXA6IDUwcHg7XG59XG5kaWFsb2cgLmNyZWF0ZWQtY2hlY2tzIC5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuZGlhbG9nIC5jcmVhdGVkLWNoZWNrcyBpbnB1dCB7XG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLyogUkVTUE9OU0lWRU5FU1MgKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICAgIC8qIGJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgfSAqL1xuXG4gICAgLmhlYWRlciAucHJvamVjdCAudGl0bGUgPiBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gICAgLmhlYWRlciAucHJvamVjdCAudGl0bGUgLmRyb3AtZG93biA+IGRpdiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIH1cbiAgICAuaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93ID4gaW1nLFxuICAgIC5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzID4gaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICB9XG5cbiAgICAubWFpbi5hbGwtbGlzdC12aWV3IGRpdiA+IGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuXG4gICAgZGlhbG9nIHtcbiAgICAgICAgbWluLXdpZHRoOiA5MCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDkwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgIGRpYWxvZyBmb3JtID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDVweDtcbiAgICB9XG4gICAgZGlhbG9nIGRpdiA+IGxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAuY2hlY2tsaXN0LWNyZWF0ZSBsYWJlbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0QixtSkFBbUo7QUFDdko7Ozs7QUFJQSxZQUFZOztBQUVaO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7SUFFaEIsbUJBQW1COztJQUVuQix5Q0FBeUM7SUFDekMsZ0RBQWdEO0lBQ2hE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QVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7O0lBRXRCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLG1CQUFtQjs7QUFFbkI7SUFDSTs7T0FFRzs7SUFFSDtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBOztRQUVJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLFFBQVE7SUFDWjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5cXG4vKiBVVElMSVRZICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLUJHLUNPTE9SOiAjMzMzO1xcbiAgICAtLUZHLUNPTE9SOiAjY2NjO1xcblxcbiAgICAtLUhPVkVSLUNPTE9SOiAjNTU1O1xcblxcbiAgICAtLUxPVy1QUklPUklUWS1DT0xPUjogaHNsKDEwMCwgMTAwJSwgODAlKTtcXG4gICAgLS1MT1ctTUVESVVNLVBSSU9SSVRZLUNPTE9SOiBoc2woMjAwLCAxMDAlLCA4MCUpO1xcbiAgICAtLU1FRElVTS1QUklPUklUWS1DT0xPUjogaHNsKDUwLCAxMDAlLCA4MCUpO1xcbiAgICAtLU1FRElVTS1ISUdILVBSSU9SSVRZLUNPTE9SOiBoc2woMzAwLCAxMDAlLCA4MCUpO1xcbiAgICAtLUhJR0gtUFJJT1JJVFktQ09MT1I6IGhzbCgwLCAxMDAlLCA4MCUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG5cXG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkctQ09MT1IpO1xcbn1cXG5cXG5cXG5cXG4vKiBQUklPUklUWSBDT0xPUiBDTEFTU0VTICovXFxuXFxuLmxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUxPVy1QUklPUklUWS1DT0xPUik7XFxufVxcbi5sb3ctbWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTE9XLU1FRElVTS1QUklPUklUWS1DT0xPUik7XFxufVxcbi5tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NRURJVU0tUFJJT1JJVFktQ09MT1IpO1xcbn1cXG4ubWVkaXVtLWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NRURJVU0tSElHSC1QUklPUklUWS1DT0xPUik7XFxufVxcbi5oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSElHSC1QUklPUklUWS1DT0xPUik7XFxufVxcblxcblxcblxcbi8qIEhFQURFUiBTRUNUSU9OICovXFxuXFxuLmhlYWRlciB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLUZHLUNPTE9SKTtcXG59XFxuLmhlYWRlciA+IC5wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgPiBoMiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlID4gaDI6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tSE9WRVItQ09MT1IpO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSA+IC5kcm9wLWRvd24ge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbGVmdDogMDtcXG5cXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tQkctQ09MT1IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlIC5kcm9wLWRvd24udmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgLmRyb3AtZG93biA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlIC5kcm9wLWRvd24gPiBkaXY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhPVkVSLUNPTE9SKTtcXG59XFxuLmhlYWRlciAucHJvamVjdCA+IC5hY3Rpb25zIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyA+IGRpdiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93LFxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgPiBpbWcsXFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAvKiBtYWtlIGJsYWNrIGljb24gY29sb3IgIzMzMyAoIC0tQkctQ09MT1IgKSAqL1xcbiAgICBmaWx0ZXI6IGludmVydCgxOCUpIHNlcGlhKDElKSBzYXR1cmF0ZSg0MjgxJSkgaHVlLXJvdGF0ZSg0NWRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCg5MyUpO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93ID4gaW1nOmhvdmVyLCBcXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyA+IGltZzpob3ZlciB7XFxuICAgIC8qIG1ha2UgaWNvbiBjb2xvciAjNTU1ICggLS1IT1ZFUi1DT0xPUiApICovXFxuICAgIGZpbHRlcjogaW52ZXJ0KDMxJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIxODglKSBodWUtcm90YXRlKDEzNGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDgyJSk7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgLmRyb3AtZG93bixcXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyAuZHJvcC1kb3duIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICByaWdodDogMDtcXG5cXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tQkctQ09MT1IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgLmRyb3AtZG93bi52aXNpYmxlLFxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIC5kcm9wLWRvd24udmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duID4gZGl2LFxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIC5kcm9wLWRvd24gPiBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93IC5kcm9wLWRvd24gPiBkaXY6aG92ZXIsXFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93biA+IGRpdjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSE9WRVItQ09MT1IpO1xcbn1cXG5cXG5cXG5cXG4vKiBDT05URU5UIFNFQ1RJT04gKi9cXG5cXG4uY29udGVudCB7XFxuICAgIG1hcmdpbjogMTVweCAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLUZHLUNPTE9SKTtcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcblxcbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xcbn1cXG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiA+IGgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiA+IC5leHBhbmQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNTAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiA+IC5leHBhbmQudmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgLmV4cGFuZCA+IHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2IC5leHBhbmQgPiAuY2hlY2tsaXN0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDIwcHggMHB4IDUwcHggMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgLmV4cGFuZCAuY2hlY2tsaXN0ID4gLml0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2IC5leHBhbmQgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcblxcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG59XFxuXFxuXFxuXFxuLyogRk9STSBUTyBBREQgVE9ETyAqL1xcblxcbmRpYWxvZyB7XFxuICAgIG1heC1oZWlnaHQ6IDY1MHB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG5cXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tQkctQ09MT1IpO1xcbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxuXFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xcbn1cXG5kaWFsb2cgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTVweDtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuXFxuICAgIC8qIC0tQkctQ09MT1IgKi9cXG4gICAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSgxJSkgc2F0dXJhdGUoNDI4MSUpIGh1ZS1yb3RhdGUoNDVkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoOTMlKTtcXG59XFxuZGlhbG9nID4gaW1nOmhvdmVyIHtcXG4gICAgLyogLS1IT1ZFUi1DT0xPUiAqL1xcbiAgICBmaWx0ZXI6IGludmVydCgzMSUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgyMTg4JSkgaHVlLXJvdGF0ZSgxMzRkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCg4MiUpO1xcbn1cXG5kaWFsb2cgPiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuZGlhbG9nIGZvcm0ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTVweDtcXG59XFxuZGlhbG9nIGZvcm0gPiBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5kaWFsb2cgZm9ybSA+IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5kaWFsb2cgZm9ybSBkaXYgPiBzZWxlY3QsXFxuZGlhbG9nIGZvcm0gZGl2ID4gaW5wdXQge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuZGlhbG9nIGZvcm0gZGl2ID4gbGFiZWwsXFxuZGlhbG9nIGZvcm0gZGl2ID4gYnV0dG9uIHtcXG4gICAgd29yZC13cmFwOiBub25lO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5kaWFsb2cgZm9ybSBidXR0b24ge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxufVxcbmRpYWxvZyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IT1ZFUi1DT0xPUik7XFxufVxcbmRpYWxvZyAuY3JlYXRlZC1jaGVja3Mge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDUwcHg7XFxufVxcbmRpYWxvZyAuY3JlYXRlZC1jaGVja3MgLml0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5kaWFsb2cgLmNyZWF0ZWQtY2hlY2tzIGlucHV0IHtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBSRVNQT05TSVZFTkVTUyAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcXG4gICAgLyogYm9keSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIH0gKi9cXG5cXG4gICAgLmhlYWRlciAucHJvamVjdCAudGl0bGUgPiBoMiB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG4gICAgLmhlYWRlciAucHJvamVjdCAudGl0bGUgLmRyb3AtZG93biA+IGRpdiB7XFxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgfVxcbiAgICAuaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93ID4gaW1nLFxcbiAgICAuaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyA+IGltZyB7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgfVxcblxcbiAgICAubWFpbi5hbGwtbGlzdC12aWV3IGRpdiA+IGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxuXFxuICAgIGRpYWxvZyB7XFxuICAgICAgICBtaW4td2lkdGg6IDkwJTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDkwJTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuICAgIGRpYWxvZyBmb3JtID4gZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICB9XFxuICAgIGRpYWxvZyBkaXYgPiBsYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG4gICAgLmNoZWNrbGlzdC1jcmVhdGUgbGFiZWwge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFkZFRvZG9Ub0FsbFByb2plY3RzIH0gZnJvbSAnLi90cmFja0FsbFByb2plY3RzLmpzJztcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lPVwiUHJvamVjdFwiKSB7XG5cbiAgICBmdW5jdGlvbiBhZGRUb2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0KSB7XG4gICAgICAgIGxldCB0b2RvT2JqZWN0ID0ge1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkZXNjLFxuICAgICAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgICAgIHByaW9yaXR5LFxuICAgICAgICAgICAgY2hlY2tsaXN0XG4gICAgICAgIH07XG5cbiAgICAgICAgYWRkVG9kb1RvQWxsUHJvamVjdHModGhpcy5uYW1lLCB0aXRsZSwgdG9kb09iamVjdCk7XG4gICAgICAgIHRoaXNbdGl0bGVdID0gdG9kb09iamVjdDtcbiAgICB9O1xuXG5cbiAgICByZXR1cm4geyBuYW1lLCBhZGRUb2RvIH07XG59O1xuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0IH07IiwiaW1wb3J0IGRvd25BcnJvd1BuZyBmcm9tICcuL2Rvd24tYXJyb3cuc3ZnJztcbmltcG9ydCBzZXR0aW5nc1BuZyBmcm9tICcuL3NldHRpbmdzLWljb24uc3ZnJztcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSAnLi90cmFja0FsbFByb2plY3RzJztcbmltcG9ydCBDYW5jZWxTdmcgZnJvbSAnLi9jYW5jZWwuc3ZnJztcblxuY29uc3QgaGFuZGxlRE9NID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgbGV0IGhlYWRlciwgcHJvamVjdCwgcHJvamVjdFRpdGxlLCBhY3Rpb25zLCBkb3duQXJyb3csIGFycm93TWVudSwgc2V0dGluZ3MsIHNldHRpbmdzTWVudTtcbiAgICBsZXQgaDIsIHByb2plY3RNZW51O1xuICAgIGxldCBtYWluO1xuICAgIGxldCBhcnJvd01lbnVJdGVtcyA9IFsnQWRkLVRvZG8nXTtcbiAgICBsZXQgc2V0dGluZ3NNZW51SXRlbXMgPSBbJ3NldHRpbmdzJywgJ21lbnUnLCAnb3B0aW9ucyddO1xuICAgIGxldCBwcm9qZWN0TWVudUl0ZW1zID0gW107XG5cbiAgICBsZXQgcHJpb3JpdHlDbGFzc2VzID0gW1xuICAgICAgICAnbG93JyxcbiAgICAgICAgJ2xvdycsXG4gICAgICAgICdsb3ctbWVkaXVtJyxcbiAgICAgICAgJ2xvdy1tZWRpdW0nLFxuICAgICAgICAnbG93LW1lZGl1bScsXG4gICAgICAgICdtZWRpdW0nLFxuICAgICAgICAnbWVkaXVtLWhpZ2gnLFxuICAgICAgICAnbWVkaXVtLWhpZ2gnLFxuICAgICAgICAnbWVkaXVtLWhpZ2gnLFxuICAgICAgICAnaGlnaCdcbiAgICBdO1xuXG4gICAgY29uc3QgYWRkT3B0aW9uc1RvTWVudSA9IChhcHBlbmRUbywgYXJyKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gYXJyKSB7XG4gICAgICAgICAgICBsZXQgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0bXAuY2xhc3NMaXN0LmFkZChgJHthcnJbaV19YCk7XG4gICAgICAgICAgICB0bXAuaW5uZXJUZXh0ID0gYCR7YXJyW2ldLnJlcGxhY2UoLy0vZywgJyAnKX1gO1xuICAgICAgICAgICAgYXBwZW5kVG8uYXBwZW5kQ2hpbGQodG1wKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlSWNvbiA9IChpbWcsIGFwcGVuZHRvKSA9PiB7XG4gICAgICAgIGxldCB0bXAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdG1wLnNyYyA9IGltZztcbiAgICAgICAgdG1wLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICAgICAgdG1wLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgZmFsc2UpO1xuICAgICAgICBhcHBlbmR0by5hcHBlbmRDaGlsZCh0bXApO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVQcmlvcml0eUxldmVsID0gKGVsZSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSAxMCkgeyBwcmlvcml0eS0tIH07XG4gICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5Q2xhc3Nlc1twcmlvcml0eV0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0RGl2ID0gKCkgPT4ge1xuICAgICAgICBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgIHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgICAgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQoaDIpO1xuICAgICAgICBwcm9qZWN0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0TWVudS5jbGFzc0xpc3QuYWRkKCdkcm9wLWRvd24nKTtcbiAgICAgICAgcHJvamVjdE1lbnVJdGVtcyA9IGFsbFByb2plY3RzLm1hcChvID0+IG8ubmFtZSk7XG4gICAgICAgIHByb2plY3RNZW51SXRlbXMucHVzaCgnQWxsLUxpc3QtVmlldycpO1xuICAgICAgICBhZGRPcHRpb25zVG9NZW51KHByb2plY3RNZW51LCBwcm9qZWN0TWVudUl0ZW1zKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHByb2plY3RNZW51KTtcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVBY3Rpb25zRGl2ID0gKCkgPT4ge1xuICAgICAgICBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFjdGlvbnMuY2xhc3NMaXN0LmFkZCgnYWN0aW9ucycpO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGFjdGlvbnMpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVEb3duQXJyb3dNZW51ID0gKGFwcGVuZFRvKSA9PiB7XG4gICAgICAgIGRvd25BcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjcmVhdGVJY29uKGRvd25BcnJvd1BuZywgZG93bkFycm93KTtcbiAgICAgICAgZG93bkFycm93LmNsYXNzTGlzdC5hZGQoJ2Rvd24tYXJyb3cnKTtcbiAgICAgICAgYXJyb3dNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFycm93TWVudS5jbGFzc0xpc3QuYWRkKCdkcm9wLWRvd24nKTtcbiAgICAgICAgYWRkT3B0aW9uc1RvTWVudShhcnJvd01lbnUsIGFycm93TWVudUl0ZW1zKTtcbiAgICAgICAgZG93bkFycm93LmFwcGVuZENoaWxkKGFycm93TWVudSk7XG4gICAgICAgIGFwcGVuZFRvLmFwcGVuZENoaWxkKGRvd25BcnJvdyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVNldHRpbmdzTWVudSA9IChhcHBlbmRUbykgPT4ge1xuICAgICAgICBzZXR0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjcmVhdGVJY29uKHNldHRpbmdzUG5nLCBzZXR0aW5ncyk7XG4gICAgICAgIHNldHRpbmdzLmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzJyk7XG4gICAgICAgIHNldHRpbmdzTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZXR0aW5nc01lbnUuY2xhc3NMaXN0LmFkZCgnZHJvcC1kb3duJyk7XG4gICAgICAgIGFkZE9wdGlvbnNUb01lbnUoc2V0dGluZ3NNZW51LCBzZXR0aW5nc01lbnVJdGVtcyk7XG4gICAgICAgIHNldHRpbmdzLmFwcGVuZENoaWxkKHNldHRpbmdzTWVudSk7XG4gICAgICAgIGFwcGVuZFRvLmFwcGVuZENoaWxkKHNldHRpbmdzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgICAgICBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgICBib2R5Lmluc2VydEJlZm9yZShoZWFkZXIsIGNvbnRlbnQpO1xuXG4gICAgICAgIGNyZWF0ZVByb2plY3REaXYoKTtcblxuICAgICAgICBjcmVhdGVBY3Rpb25zRGl2KCk7XG4gICAgICAgIGNyZWF0ZURvd25BcnJvd01lbnUoYWN0aW9ucyk7XG4gICAgICAgIGNyZWF0ZVNldHRpbmdzTWVudShhY3Rpb25zKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlTWFpbkRpdiA9ICgpID0+IHtcbiAgICAgICAgLy8gY3JlYXRlIG1haW4gZGl2ICggZGl2IHdpdGggYWxsIGNvbnRlbnQgKVxuICAgICAgICBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgICAgLy8gbWFpbiB0b2RvIGVsZW1lbnQgd2l0aCB0aXRsZSBhbmQgZHVlIGRhdGVcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgZGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBkaXZUaXRsZS5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xuICAgICAgICBsZXQgZGl2RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGRpdkR1ZURhdGUuaW5uZXJUZXh0ID0gdG9kby5kdWVEYXRlO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2RHVlRGF0ZSk7XG4gICAgICAgIHVwZGF0ZVByaW9yaXR5TGV2ZWwoZGl2LCB0b2RvLnByaW9yaXR5KTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgIC8vIGV4cGFuZCBlbGVtZW50IGZvciB3aGVuIHRvZG8gY2xpY2tlZFxuICAgICAgICBsZXQgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKVxuICAgICAgICB1cGRhdGVQcmlvcml0eUxldmVsKGV4cGFuZCwgdG9kby5wcmlvcml0eSk7XG5cbiAgICAgICAgLy8gYWRkIGRlc2NyaXB0aW9uIG9uIGV4cGFuZCBlbGVtZW50XG4gICAgICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgZGVzYy50b2RvID0gdG9kbzsgLy90aGlzIGFzc29jY2lhdGVzIHRoZSBlbGVtZW50IHdpdGggdGhlIHRvZG8gb2JqZWN0XG4gICAgICAgIGRlc2MuaW5uZXJUZXh0ID0gdG9kby5kZXNjO1xuICAgICAgICBleHBhbmQuYXBwZW5kQ2hpbGQoZGVzYyk7XG5cbiAgICAgICAgLy8gYWRkIGNoZWNrbGlzdCBvbiBleHBhbmQgZWxlbWVudFxuICAgICAgICBsZXQgY2hlY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrTGlzdC5jbGFzc0xpc3QuYWRkKCdjaGVja2xpc3QnKTtcblxuICAgICAgICB0b2RvLmNoZWNrbGlzdC5mb3JFYWNoKG9iamVjdCA9PiB7Ly9hcnJheSBvZiBvYmplY3RzXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0KSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGNoZWNrLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgIGNoZWNrLmlkID0ga2V5O1xuICAgICAgICAgICAgICAgIGNoZWNrLm5hbWUgPSBrZXk7XG4gICAgICAgICAgICAgICAgY2hlY2sudmFsdWUgPSBrZXk7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdFtrZXldKSB7IGNoZWNrLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICd0cnVlJykgfTtcblxuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBrZXkpO1xuICAgICAgICAgICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGtleS5yZXBsYWNlKC9fL2csICcgJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICAgICAgICAgIGl0ZW0udG9kbyA9IG9iamVjdDtcbiAgICAgICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGNoZWNrKTtcbiAgICAgICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgICAgICAgICAgICAgIGNoZWNrTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBleHBhbmQuYXBwZW5kQ2hpbGQoY2hlY2tMaXN0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYWRkIGRlbGV0ZSB0b2RvIGJ1dHRvblxuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5pbm5lclRleHQgPSAnRGVsZXRlIFRvZG8nO1xuICAgICAgICBidG4udG9kbyA9IHRvZG87XG4gICAgICAgIGJ0bi5kZWxUb2RvID0gKCkgPT4ge1xuICAgICAgICAgICAgLy9zZWFyY2ggYWxsUHJvamVjdHMgYXJyYXkgZm9yIHRvZG8gYW5kIHJlbW92ZSBpdFxuICAgICAgICAgICAgYWxsUHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IGJ0bi50b2RvLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcHJvamVjdFtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZXhwYW5kLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGV4cGFuZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRvZG9Gb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKTtcblxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ0FkZC1Ub2RvJyk7XG4gICAgICAgIGZvcm0ubWV0aG9kID0gJ2RpYWxvZyc7XG4gICAgICAgIGNyZWF0ZUljb24oQ2FuY2VsU3ZnLCBkaWFsb2cpO1xuXG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaDIuaW5uZXJUZXh0ID0gJ0FkZCBUb2RvJztcbiAgICAgICAgZGlhbG9nLmFwcGVuZENoaWxkKGgyKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RTZWxlY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1zZWxlY3QnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJvamVjdExhYmVsLmlubmVyVGV4dCA9ICdQcm9qZWN0OidcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGFsbFByb2plY3RzKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gYWxsUHJvamVjdHNba2V5XS5uYW1lLnJlcGxhY2UoLy0vZywgJyAnKTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfTtcbiAgICAgICAgcHJvamVjdFNlbGVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3REaXYpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGVJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZS1pbnB1dCcpO1xuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSAnVGl0bGU6JztcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICB0aXRsZUlucHV0RGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICB0aXRsZUlucHV0RGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXREaXYpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjSW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnZGVzYy1pbnB1dCcpO1xuICAgICAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkZXNjTGFiZWwuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOic7XG4gICAgICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRlc2NJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGRlc2NJbnB1dERpdi5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuICAgICAgICBkZXNjSW5wdXREaXYuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjSW5wdXREaXYpO1xuXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRlSW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnZGF0ZS1pbnB1dCcpO1xuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlOic7XG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICBkYXRlSW5wdXREaXYuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICAgICAgZGF0ZUlucHV0RGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0RGl2KTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaW9yaXR5SW5wdXREaXYuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktaW5wdXQnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5IExldmVsOic7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwcmlvcml0eUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC50eXBlID0gJ251bWJlcic7XG4gICAgICAgIHByaW9yaXR5SW5wdXQubWluID0gMFxuICAgICAgICBwcmlvcml0eUlucHV0Lm1heCA9IDEwXG4gICAgICAgIHByaW9yaXR5SW5wdXREaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIHByaW9yaXR5SW5wdXREaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dERpdik7XG5cbiAgICAgICAgY29uc3QgY2hlY2tsaXN0Q3JlYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrbGlzdENyZWF0ZURpdi5jbGFzc0xpc3QuYWRkKCdjaGVja2xpc3QtY3JlYXRlJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdENyZWF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0NyZWF0ZSBDaGVja2xpc3Q6JztcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY2hlY2tJbnB1dCcpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RDcmVhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrbGlzdENyZWF0ZUlucHV0LmlkID0gJ2NoZWNrSW5wdXQnO1xuICAgICAgICBjaGVja2xpc3RDcmVhdGVJbnB1dC5tYXhMZW5ndGggPSAzMDtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0Q3JlYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNoZWNrbGlzdENyZWF0ZUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGNoZWNrbGlzdENyZWF0ZUJ0bi5pbm5lclRleHQgPSAnTmV3IENoZWNrJztcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlRGl2LmFwcGVuZENoaWxkKGNoZWNrbGlzdENyZWF0ZUxhYmVsKTtcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlRGl2LmFwcGVuZENoaWxkKGNoZWNrbGlzdENyZWF0ZUlucHV0KTtcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlRGl2LmFwcGVuZENoaWxkKGNoZWNrbGlzdENyZWF0ZUJ0bik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2hlY2tsaXN0Q3JlYXRlRGl2KTtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0Q3JlYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGVja2xpc3RDcmVhdGVkLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZWQtY2hlY2tzJyk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2hlY2tsaXN0Q3JlYXRlZCk7XG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQnKTtcbiAgICAgICAgc3VibWl0QnRuLmlubmVyVGV4dCA9ICdTdWJtaXQnO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cblxuXG4gICAgICAgIGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChkaWFsb2cpO1xuICAgIH07XG5cbiAgICBjb25zdCBhbGxMaXN0VmlldyA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFoZWFkZXIpIHsgY3JlYXRlSGVhZGVyKCkgfVxuICAgICAgICBlbHNlIHsgY29udGVudC5pbm5lclRleHQgPSAnJyB9O1xuXG4gICAgICAgIGgyLmlubmVyVGV4dCA9ICdBbGwgTGlzdCBWaWV3JztcblxuICAgICAgICBjcmVhdGVNYWluRGl2KCk7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnYWxsLWxpc3QtdmlldycpO1xuXG4gICAgICAgIC8vIHJlbmRlciBhbGwgdG9kb3MgZnJvbSBhbGwgcHJvamVjdHMgb24gc2NyZWVuXG4gICAgICAgIGFsbFByb2plY3RzLmZpbHRlcihvYmplY3QgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICduYW1lJyAmJiBrZXkgIT09ICdhZGRUb2RvJykge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2RvKG9iamVjdFtrZXldKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignZGlhbG9nJykgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJykpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0VmlldyA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICBtYWluLmlubmVyVGV4dCA9ICcnO1xuXG4gICAgICAgIGgyLmlubmVyVGV4dCA9IHByb2plY3ROYW1lLnJlcGxhY2UoLy0vZywgJyAnKTtcblxuICAgICAgICAvL2ZpbHRlciBhbGxQcm9qZWN0cyBmb3IgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkXG4gICAgICAgIGxldCByZXN1bHQgPSBhbGxQcm9qZWN0cy5maWx0ZXIob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PT0gcHJvamVjdE5hbWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vcmVuZGVyIGFsbCB0b2RvcyBmcm9tIHRoZSBzZWxlY3RlZCBwcm9qZWN0XG4gICAgICAgIHJlc3VsdC5maWx0ZXIob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnbmFtZScgJiYga2V5ICE9PSAnYWRkVG9kbycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVG9kbyhvYmplY3Rba2V5XSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG5cblxuXG5cblxuICAgIFxuXG5cbiAgICByZXR1cm4geyBhbGxMaXN0VmlldywgcHJvamVjdFZpZXcsIGFkZFRvZG9Gb3JtIH07XG59KSgpO1xuXG5leHBvcnQgeyBoYW5kbGVET00gfTtcbiIsImltcG9ydCB7IGhhbmRsZURPTSB9IGZyb20gXCIuL2hhbmRsZURPTVwiO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi90cmFja0FsbFByb2plY3RzXCI7XG5cbmxldCBuZXdDaGVja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3QtY3JlYXRlIGJ1dHRvbicpO1xuXG5mdW5jdGlvbiBzdWJtaXRGb3JtKGUpIHtcbiAgICBsZXQgZm9ybSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAoZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ0FkZC1Ub2RvJykpIHtcbiAgICAgICAgbGV0IGNyZWF0ZWRDaGVja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtID4gLmNyZWF0ZWQtY2hlY2tzIC5pdGVtJyk7XG4gICAgICAgIGxldCBzZWxlY3QgPSBmb3JtWzBdLnZhbHVlO1xuICAgICAgICBsZXQgdGl0bGUgPSBmb3JtWzFdLnZhbHVlO1xuICAgICAgICBsZXQgZGVzYyA9IGZvcm1bMl0udmFsdWU7XG4gICAgICAgIGxldCBkdWUgPSBmb3JtWzNdLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBmb3JtWzRdLnZhbHVlO1xuICAgICAgICBsZXQgY2hlY2tsaXN0ID0gW107XG5cbiAgICAgICAgY29uc29sZS5sb2codGl0bGUsIGRlc2MsIGR1ZSwgcHJpb3JpdHkpO1xuICAgICAgICAvLyBpZiBhbGwgcmVxdWlyZWQgZmllbGRzIGFyZW50IGVtcHR5XG4gICAgICAgIGlmICh0aXRsZSAhPT0gJycgJiYgZGVzYyAhPT0gJycgJiYgZHVlICE9PSAnJyAmJiBwcmlvcml0eSAhPT0gJycpIHtcbiAgICAgICAgICAgIHJlbW92ZURpYWxvZygpO1xuXG4gICAgICAgICAgICBjcmVhdGVkQ2hlY2tzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrID0gaXRlbS5jaGlsZHJlblswXS5jaGVja2VkO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGl0ZW0uY2hpbGRyZW5bMV0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIGNoZWNrbGlzdC5wdXNoKHtbbGFiZWxdOiBjaGVja30pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFsbFByb2plY3RzLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm5hbWUgPT09IHNlbGVjdC5yZXBsYWNlKC8gL2csICctJykpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmFkZFRvZG8odGl0bGUsIGRlc2MsIGR1ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgfTtcbn07XG5cbmZ1bmN0aW9uIG5ld0NoZWNrKGUpIHtcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC5wcmV2aW91c1NpYmxpbmcudmFsdWU7XG4gICAgbGV0IGNyZWF0ZWRDaGVja3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlZC1jaGVja3MnKTtcbiAgICBsZXQgbGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNyZWF0ZWQtY2hlY2tzIGxhYmVsJyk7XG5cbiAgICAvLyBtYWtlIHN1cmUgbm8gZHVwbGljYXRlIGxhYmVscyBhbmQgY2hlY2tib3hlc1xuICAgIGxhYmVscy5mb3JFYWNoKGxhYmVsID0+IHtcbiAgICAgICAgaWYgKGxhYmVsLmlubmVyVGV4dCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBsZXQgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgY2hlY2suaWQgPSBgJHt2YWx1ZS5yZXBsYWNlKC8gL2csICdfJyl9YDtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHt2YWx1ZS5yZXBsYWNlKC8gL2csICdfJyl9YCk7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IHZhbHVlO1xuXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2spO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgY3JlYXRlZENoZWNrc0Rpdi5hcHBlbmRDaGlsZChpdGVtKTtcblxuICAgICAgICBlLnRhcmdldC5wcmV2aW91c1NpYmxpbmcudmFsdWUgPSAnJztcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlRGlhbG9nKCkge1xuICAgIGxldCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKTtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICBkaWFsb2cuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkaWFsb2cuaW5uZXJIVE1MID0gJyc7XG59O1xuXG5mdW5jdGlvbiBzaG93RGlhbG9nKCkge1xuICAgIGxldCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKTtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgZGlhbG9nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG59O1xuXG5mdW5jdGlvbiBhcnJvd0NsaWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdBZGQtVG9kbycpKSB7XG4gICAgICAgIGhhbmRsZURPTS5hZGRUb2RvRm9ybSgpO1xuICAgICAgICBzaG93RGlhbG9nKCk7XG5cbiAgICAgICAgbmV3Q2hlY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0LWNyZWF0ZSBidXR0b24nKTtcbiAgICAgICAgbmV3Q2hlY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdDaGVjayk7XG5cbiAgICAgICAgbGV0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gLnN1Ym1pdCcpO1xuICAgICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRGb3JtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBhZGQgcHJvamVjdCBpcyBjbGlja2VkXG4gICAgfTtcblxuICAgIGxldCBleGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nID4gaW1nJyk7XG4gICAgZXhpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZURpYWxvZyk7XG59O1xuXG5leHBvcnQgeyBhcnJvd0NsaWNrLCByZW1vdmVEaWFsb2cgfTsiLCJcbmxldCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5mdW5jdGlvbiB0cmFja0FsbFByb2plY3RzKHByb2plY3QpIHtcbiAgICBhbGxQcm9qZWN0cy5wdXNoKCBwcm9qZWN0ICk7XG59O1xuXG5mdW5jdGlvbiBhZGRUb2RvVG9BbGxQcm9qZWN0cyhwcm9qZWN0TmFtZSwgdG9kb05hbWUsIHRvZG9PYmplY3QpIHtcbiAgICBhbGxQcm9qZWN0cy5maWx0ZXIob2JqZWN0ID0+IHtcbiAgICAgICAgaWYgKG9iamVjdC5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgb2JqZWN0W3RvZG9OYW1lXSA9IHRvZG9PYmplY3Q7XG4gICAgICAgIH07XG4gICAgfSk7XG59O1xuXG5leHBvcnQgeyB0cmFja0FsbFByb2plY3RzLCBhbGxQcm9qZWN0cywgYWRkVG9kb1RvQWxsUHJvamVjdHMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4vY3JlYXRlUHJvamVjdC5qcyc7XG5pbXBvcnQgeyBoYW5kbGVET00gfSBmcm9tICcuL2hhbmRsZURPTS5qcyc7XG5pbXBvcnQgeyB0cmFja0FsbFByb2plY3RzIH0gZnJvbSAnLi90cmFja0FsbFByb2plY3RzLmpzJztcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSAnLi90cmFja0FsbFByb2plY3RzLmpzJztcbmltcG9ydCAqIGFzIGhhbmRsZUZvcm1zIGZyb20gJy4vaGFuZGxlRm9ybXMuanMnO1xuXG4vLyAvLyBjcmVhdGUgbmV3IHByb2plY3Qgb2JqZWN0IHRvIHN0b3JlIGFsbCB0b2Rvc1xuLy8gLy8gYWxsIHNwYWNlcyBpbiBuYW1lIG11c3QgYmUgcmVwbGFjZWQgd2l0aCBkYXNoZXNcbi8vIGxldCB0ZXN0ID0gY3JlYXRlUHJvamVjdCgnUHJvamVjdC1OYW1lJyk7XG5cbi8vIC8vIGFkZCB0b2RvIHRvIHRoZSBwcm9qZWN0IG9iamVjdCB1c2luZyBhZGRUb2RvIG1ldGhvZCBhbmQgY3JlYXRlVG9kbyBtb2R1bGVcbi8vIHRlc3QuYWRkVG9kbygndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnZHVlZGF0ZScsICdwcmlvcml0eScsICdjaGVja2xpc3QnKTtcblxuLy8gLy8gcmVzdWx0IGlzIHRoZSBwcm9qZWN0IG9iamVjdCB3aXRoIGFsbCB0b2RvcyBzdG9yZWQgYXMgb2JqZWN0c1xuLy8gY29uc29sZS5sb2codGVzdCk7XG5cblxuLypcbioqKm5lZWQgdG8gZml4IGhvdyBkaWFsb2dzIHdvcmsgaWRrIGhvdyB0aGV5IHdvcmsgYnV0IHdpbGwgY29tZSBiYWNrKioqXG4qL1xuXG5cblxubGV0IHRlc3QgPSBjcmVhdGVQcm9qZWN0KCdUZXN0LVByb2plY3QnKTsvLyBzdG9yZSBuYW1lcyB3aXRoIGRhc2hlcyBhZGQgc3BhY2UgbGF0ZXJcbnRyYWNrQWxsUHJvamVjdHModGVzdCk7XG5cbi8vIHN0b3JlIGNoZWNrbGlzdCBrZXlzIHdpdGggdW5kZXJzY29yZXMgaW5zdGVhZCBvZiBzcGFjZXMgYW5kIGFkZCB0aGVtIGxhdGVyXG5sZXQgZXhhbXBsZUNoZWNrbGlzdCA9IFtcbiAgICB7U3RlcF9PbmU6IHRydWV9LFxuICAgIHtTdGVwX1R3bzogZmFsc2V9LFxuICAgIHtUZXN0aW5nX0xvbmdlcl9uYW1lX3RvX1NlZV9XaGF0X0hhcHBlbnM6IGZhbHNlfSxcbiAgICB7U3RlcF9Gb3VyOiB0cnVlfSxcbiAgICB7U3RlcF9GaXZlOiBmYWxzZX0sXG4gICAge1N0ZXBfU2l4OiBmYWxzZX0sXG4gICAge1N0ZXBfU2V2ZW46IGZhbHNlfSxcbiAgICB7U3RlcF9FaWdodDogZmFsc2V9LFxuICAgIHtTdGVwX05pbmU6IGZhbHNlfSxcbiAgICB7U3RlcF9UZW46IGZhbHNlfVxuXTsgLy8gbWFrZSBzdXJlIGZvcm0gcmVxdWlyZXMgaW5wdXQgYW5kIGRvZXNudCBsZXQgeW91IHN1Ym1pdCB1bmRlZmluZWQgc3R1ZmZcblxudGVzdC5hZGRUb2RvKCd0aXRsZTEnLCAnZXhhbXBsZSB0ZXh0JywgJ2R1ZScsIDIsIGV4YW1wbGVDaGVja2xpc3QpO1xudGVzdC5hZGRUb2RvKCd0aXRsZTInLCAnZGVzYycsICdkdWUnLCA2LCBbe2FiY2Q6IGZhbHNlfV0pO1xudGVzdC5hZGRUb2RvKCd0aXRsZTMnLCAnZGVzYycsICdkdWUnLCAwLCBbe2VmZ2g6IGZhbHNlfV0pO1xuXG5sZXQgdGVzdHR3byA9IGNyZWF0ZVByb2plY3QoJ0Fub3RoZXItUHJvamVjdCcpO1xudHJhY2tBbGxQcm9qZWN0cyh0ZXN0dHdvKTtcblxudGVzdHR3by5hZGRUb2RvKCd0aXRsZTQnLCAnZGVzYycsICdkdWUnLCA1LCBbe2lqa2w6IGZhbHNlfV0pO1xudGVzdHR3by5hZGRUb2RvKCd0aXRsZTUnLCAnZGVzYycsICdkdWUnLCAxMCwgW3ttbm9wOiBmYWxzZX1dKTtcbnRlc3R0d28uYWRkVG9kbygndGl0bGU2JywgJ2Rlc2MnLCAnZHVlJywgMywgW3txcnN0OiBmYWxzZX1dKTtcblxuaGFuZGxlRE9NLmFsbExpc3RWaWV3KCk7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5jb25zdCBkb3duQXJyb3dJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93bi1hcnJvdyA+IGltZycpO1xuY29uc3Qgc2V0dGluZ3NJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MgPiBpbWcnKTtcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUgPiBoMicpO1xuY29uc3QgdGl0bGVEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZSA+IC5kcm9wLWRvd24nKTtcblxubGV0IHRleHRhcmVhID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJyldO1xubGV0IGV4cGFuZCA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbiA+IGRpdiA+IC5leHBhbmQnKV07XG5sZXQgaXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrbGlzdCA+IC5pdGVtJyldO1xubGV0IGRlbEJ0bnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4cGFuZCA+IGJ1dHRvbicpXTtcbmxldCBhcnJvd09wdGlvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvd24tYXJyb3cgLmRyb3AtZG93biA+IGRpdicpXTtcbmxldCBzZXR0aW5nc09wdGlvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNldHRpbmdzIC5kcm9wLWRvd24gPiBkaXYnKV07XG5cbmRvd25BcnJvd0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xufSk7XG5cbnNldHRpbmdzSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC5uZXh0U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XG59KTtcblxudGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTsgXG59KTtcblxudGl0bGVEcm9wRG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ0FsbC1MaXN0LVZpZXcnKSB7XG4gICAgICAgIGhhbmRsZURPTS5hbGxMaXN0VmlldygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRsZURPTS5wcm9qZWN0VmlldyhlLnRhcmdldC5jbGFzc05hbWUpO1xuICAgIH07XG59KTtcblxudGV4dGFyZWEuZm9yRWFjaChhcmVhID0+IHtcbiAgICBhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudG9kby5kZXNjID0gZS50YXJnZXQudmFsdWU7XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKSB9O1xuZnVuY3Rpb24gdG9nZ2xlVmlzaWJsZShlKSB7XG4gICAgLy9pZiBlLnRhcmdldC5jaGlsZHJlblsyXSBpcyB1bmRlZmluZWQgdGhlbiBpIG11c3R2ZSBjbGlja2VkIGFuIGgyIGNoaWxkIG9mIHRoZSB0b2RvIGVsZW1lbnRcbiAgICBpZiAoZS50YXJnZXQuY2hpbGRyZW5bMl0pIHsgZS50YXJnZXQuY2hpbGRyZW5bMl0uY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpIH1cbiAgICBlbHNlIHsgZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblsyXS5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJykgfTtcbn07XG5leHBhbmQuZm9yRWFjaChleHBhbmRlZCA9PiB7XG4gICAgZXhwYW5kZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdG9wUHJvcGFnYXRpb24pO1xuICAgIGV4cGFuZGVkLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVWaXNpYmxlKTtcbn0pO1xuXG5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW0udG9kbykge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnRvZG9ba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnRvZG9ba2V5XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udG9kb1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBkZWxldGVUb2RvKGUpIHtcbiAgICBlLnRhcmdldC5kZWxUb2RvKCk7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4ucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbn07XG5kZWxCdG5zLmZvckVhY2goYnRuID0+IHsgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9kbykgfSk7XG5cblxuXG5cbmFycm93T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUZvcm1zLmFycm93Q2xpY2spIH0pO1xuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSBkb3duQXJyb3dJbWcpIHsgXG4gICAgICAgIGRvd25BcnJvd0ltZy5uZXh0U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfTtcblxuICAgIGlmIChlLnRhcmdldCAhPT0gc2V0dGluZ3NJbWcpIHsgXG4gICAgICAgIHNldHRpbmdzSW1nLm5leHRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICB9O1xuXG4gICAgaWYgKGUudGFyZ2V0ICE9PSB0aXRsZSkge1xuICAgICAgICB0aXRsZS5uZXh0U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfTtcblxuICAgIGV4cGFuZC5mb3JFYWNoKGV4cGFuZGVkID0+IHtcbiAgICAgICAgLy9nZXQgdGhlIGgyIGNoaWxkcmVuIG9mIGVhY2ggdG9kbyBzbyBpIGNhbiBleHBhbmQgdG9kbyB3aGlsZSBjbGlja2luZyB0aGUgaDIgYXN3ZWxsXG4gICAgICAgIGxldCBoMiA9IFsuLi5leHBhbmRlZC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuXS5zcGxpY2UoMCwgMik7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBleHBhbmRlZC5wYXJlbnRFbGVtZW50ICYmIGUudGFyZ2V0ICE9PSBoMlswXSAmJiBlLnRhcmdldCAhPT0gaDJbMV0pIHtcbiAgICAgICAgICAgIGV4cGFuZGVkLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHsgaGFuZGxlRm9ybXMucmVtb3ZlRGlhbG9nKCkgfTtcbn0pO1xuXG5jb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICB0ZXh0YXJlYSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpXTtcbiAgICBleHBhbmQgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4gPiBkaXYgPiAuZXhwYW5kJyldO1xuICAgIGl0ZW1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2xpc3QgPiAuaXRlbScpXTtcbiAgICBkZWxCdG5zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHBhbmQgPiBidXR0b24nKV07XG4gICAgXG4gICAgdGV4dGFyZWEuZm9yRWFjaChhcmVhID0+IHtcbiAgICAgICAgYXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnRhcmdldC50b2RvLmRlc2MgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBleHBhbmQuZm9yRWFjaChleHBhbmRlZCA9PiB7XG4gICAgICAgIGV4cGFuZGVkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcFByb3BhZ2F0aW9uKTtcbiAgICAgICAgZXhwYW5kZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdG9wUHJvcGFnYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgZXhwYW5kZWQucGFyZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVZpc2libGUpO1xuICAgICAgICBleHBhbmRlZC5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVmlzaWJsZSk7XG4gICAgfSk7XG5cbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW0udG9kbykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50b2RvW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udG9kb1trZXldID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRvZG9ba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVsQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvZG8pO1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUb2RvKTtcbiAgICB9KTtcbn0pO1xuXG5jb25zdCBjb25maWcgPSB7XG4gICAgc3VidHJlZTogdHJ1ZSxcbiAgICBjaGlsZExpc3Q6IHRydWUsXG59O1xuXG5vYnNlcnZlci5vYnNlcnZlKGNvbnRlbnQsIGNvbmZpZylcblxuXG5cblxuLypcblxuQWxsICdQcm9qZWN0cycgYXJlIE9iamVjdHMgdGhhdCBIb2xkICdUb2RvcydcbkFsbCAnVG9kb3MnIGFyZSBPYmplY3RzXG4nVG9kb3MnIGNhbiBvbmx5IGJlIG1hZGUgb24gYSAnUHJvamVjdCcgYnV0IHRoZXJlIGlzIGFuICdBbGwgTGlzdCBWaWV3J1xuXG4tIFlvdSBjYW4ndCBoYXZlIDIgJ1Byb2plY3RzJyB3aXRoIHRoZSBzYW1lIG5hbWVcbi0gUHJpb3JpdHkgbXVzdCBiZSBmcm9tIDAtMTAgKGluY2x1c2l2ZSlcblxuKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=