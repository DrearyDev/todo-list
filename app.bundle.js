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
    white-space: nowrap;

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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n\n\n/* UTILITY */\n\n:root {\n    --BG-COLOR: #333;\n    --FG-COLOR: #ccc;\n\n    --HOVER-COLOR: #555;\n\n    --LOW-PRIORITY-COLOR: hsl(100, 100%, 80%);\n    --LOW-MEDIUM-PRIORITY-COLOR: hsl(200, 100%, 80%);\n    --MEDIUM-PRIORITY-COLOR: hsl(50, 100%, 80%);\n    --MEDIUM-HIGH-PRIORITY-COLOR: hsl(300, 100%, 80%);\n    --HIGH-PRIORITY-COLOR: hsl(0, 100%, 80%);\n}\n\nbody {\n    height: 100vh;\n    font-size: 2rem;\n    font-weight: bolder;\n\n    display: grid;\n    grid-template-rows: min-content 1fr;\n\n    color: var(--FG-COLOR);\n    background-color: var(--BG-COLOR);\n}\n\n\n\n/* PRIORITY COLOR CLASSES */\n\n.low {\n    background-color: var(--LOW-PRIORITY-COLOR);\n}\n.low-medium {\n    background-color: var(--LOW-MEDIUM-PRIORITY-COLOR);\n}\n.medium {\n    background-color: var(--MEDIUM-PRIORITY-COLOR);\n}\n.medium-high {\n    background-color: var(--MEDIUM-HIGH-PRIORITY-COLOR);\n}\n.high {\n    background-color: var(--HIGH-PRIORITY-COLOR);\n}\n\n\n\n/* HEADER SECTION */\n\n.header {\n    height: 100px;\n    padding: 10px;\n\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 10px;\n\n    border: 5px solid var(--FG-COLOR);\n}\n.header > .project {\n    padding: 0px 20px 0px 20px;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    background-color: var(--FG-COLOR);\n}\n.header .project .title {\n    position: relative;\n}\n.header .project .title > h2 {\n    cursor: pointer;\n    font-size: 2.5rem;\n\n    color: var(--BG-COLOR);\n}\n.header .project .title > h2:hover {\n    color: var(--HOVER-COLOR);\n}\n.header .project .title > .drop-down {\n    user-select: none;\n    display: none;\n    position: absolute;\n    float: left;\n    left: 0;\n    white-space: nowrap;\n\n    color: var(--BG-COLOR);\n    border: 5px solid var(--BG-COLOR);\n    background-color: var(--FG-COLOR);\n}\n.header .project .title .drop-down.visible {\n    display: inline-block;\n}\n.header .project .title .drop-down > div {\n    width: 100%;\n    font-size: 1.5rem;\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.header .project .title .drop-down > div:hover {\n    cursor: pointer;\n    color: var(--FG-COLOR);\n    background-color: var(--HOVER-COLOR);\n}\n.header .project > .actions {\n    height: 100%;\n    padding: 10px 0px;\n\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    gap: 10px;\n}\n.header .project .actions > div {\n    position: relative;\n    display: inline-block;\n}\n.header .project .actions .down-arrow,\n.header .project .actions .settings {\n    display: inline-block;\n    position: relative;\n}\n.header .project .actions .down-arrow > img,\n.header .project .actions .settings > img {\n    height: 35px;\n    width: 35px;\n    user-select: none;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n\n    /* make black icon color #333 ( --BG-COLOR ) */\n    filter: invert(18%) sepia(1%) saturate(4281%) hue-rotate(45deg) brightness(104%) contrast(93%);\n}\n.header .project .actions .down-arrow > img:hover, \n.header .project .actions .settings > img:hover {\n    /* make icon color #555 ( --HOVER-COLOR ) */\n    filter: invert(31%) sepia(0%) saturate(2188%) hue-rotate(134deg) brightness(95%) contrast(82%);\n}\n.header .project .actions .down-arrow .drop-down,\n.header .project .actions .settings .drop-down {\n    user-select: none;\n    display: none;\n    position: absolute;\n    float: right;\n    right: 0;\n\n    color: var(--BG-COLOR);\n    border: 5px solid var(--BG-COLOR);\n    background-color: var(--FG-COLOR);\n}\n.header .project .actions .down-arrow .drop-down.visible,\n.header .project .actions .settings .drop-down.visible {\n    display: inline-block;\n    white-space: nowrap;\n}\n.header .project .actions .down-arrow .drop-down > div,\n.header .project .actions .settings .drop-down > div {\n    width: 100%;\n    padding: 10px;\n    font-size: 1.5rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.header .project .actions .down-arrow .drop-down > div:hover,\n.header .project .actions .settings .drop-down > div:hover {\n    cursor: pointer;\n    color: var(--FG-COLOR);\n    background-color: var(--HOVER-COLOR);\n}\n\n\n\n/* CONTENT SECTION */\n\n.content {\n    margin: 15px 0px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.main {\n    height: 100%;\n    width: 100%;\n\n    border: 5px solid var(--FG-COLOR);\n}\n.main.all-list-view {\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.main.all-list-view > div {\n    width: 100%;\n    padding: 10px;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n\n    color: var(--BG-COLOR);\n}\n.main.all-list-view div > h2 {\n    font-size: 2rem;\n}\n.main.all-list-view div > .expand {\n    width: 100%;\n    min-height: 500px;\n    margin-top: 10px;\n    \n    display: none;\n\n    border: 1px solid black;\n\n    position: relative;\n}\n.main.all-list-view div > .expand.visible {\n    display: inline-block;\n}\n.main.all-list-view div .expand > textarea {\n    width: 100%;\n    min-height: 200px;\n    padding: 20px;\n    word-wrap: break-word;\n\n    background-color: rgba(255,255,255,0.5);\n    border: none;\n    resize: none;\n}\n.main.all-list-view div .expand > .checklist {\n    font-size: 1rem;\n    padding: 10px;\n    margin: 20px 0px 50px 0px;\n\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    flex-wrap: wrap;\n}\n.main.all-list-view div .expand .checklist > .item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n.main.all-list-view div .expand button {\n    padding: 10px;\n    margin: 10px;\n\n    border: none;\n    border-radius: 0px;\n\n    position: absolute;\n    bottom: 0px;\n    right: 0px;\n}\n\n\n\n/* FORM TO ADD TODO */\n\ndialog {\n    max-height: 650px;\n    width: fit-content;\n    padding: 25px;\n\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n\n    border: 5px solid var(--BG-COLOR);\n    color: var(--BG-COLOR);\n    background-color: var(--FG-COLOR);\n\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\ndialog::backdrop {\n    background-color: rgba(0,0,0,0.3);\n}\ndialog > img {\n    height: 25px;\n    width: 25px;\n    user-select: none;\n    cursor: pointer;\n\n    position: absolute;\n    top: 15px;\n    right: 15px;\n\n    /* --BG-COLOR */\n    filter: invert(18%) sepia(1%) saturate(4281%) hue-rotate(45deg) brightness(104%) contrast(93%);\n}\ndialog > img:hover {\n    /* --HOVER-COLOR */\n    filter: invert(31%) sepia(0%) saturate(2188%) hue-rotate(134deg) brightness(95%) contrast(82%);\n}\ndialog > h2 {\n    font-size: 2rem;\n    margin-bottom: 25px;\n}\ndialog form {\n    font-size: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 15px;\n}\ndialog form > div {\n    width: 100%;\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 25px;\n}\ndialog form > button {\n    width: 100%;\n}\ndialog form div > select,\ndialog form div > input {\n    width: 200px;\n    padding: 5px;\n}\ndialog form div > label,\ndialog form div > button {\n    word-wrap: none;\n    white-space: nowrap;\n}\ndialog form button {\n    font-weight: bolder;\n    padding: 10px;\n    border: none;\n    border-radius: 0px;\n    cursor: pointer;\n\n    color: var(--FG-COLOR);\n    background-color: var(--BG-COLOR);\n}\ndialog button:hover {\n    background-color: var(--HOVER-COLOR);\n}\ndialog .created-checks {\n    font-size: 1rem;\n    width: 100%;\n    padding: 5px;\n    background-color: #fff;\n\n    flex-wrap: wrap;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 50px;\n}\ndialog .created-checks .item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\ndialog .created-checks input {\n    width: min-content;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* RESPONSIVENESS */\n\n@media only screen and (max-width: 460px) {\n    /* body {\n        background-color: red;\n    } */\n\n    .header .project .title > h2 {\n        font-size: 2rem;\n    }\n    .header .project .title .drop-down > div {\n        font-size: 1.3rem;\n    }\n    .header .project .actions .down-arrow > img,\n    .header .project .actions .settings > img {\n        height: 30px;\n        width: 30px;\n    }\n\n    .main.all-list-view div > h2 {\n        font-size: 1.5rem;\n    }\n\n    dialog {\n        min-width: 90%;\n        min-height: 90%;\n        align-items: flex-start;\n    }\n    dialog form > div {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: center;\n        gap: 5px;\n    }\n    dialog div > label {\n        font-size: 1rem;\n    }\n    .checklist-create label {\n        width: 100%;\n    }\n}"],"sourceRoot":""}]);
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
    let arrowMenuItems = ['Add-Project', 'Add-Todo'];
    let settingsMenuItems = ['settings', 'menu', 'options'];
    let projectMenuItems = _trackAllProjects__WEBPACK_IMPORTED_MODULE_2__.allProjects.map(o => o.name);


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

    const addProjectForm = () => {
        const dialog = document.querySelector('dialog');

        const form = document.createElement('form');
        form.classList.add('Add-Project');
        form.method = 'dialog';
        createIcon(_cancel_svg__WEBPACK_IMPORTED_MODULE_3__, dialog);

        const h2 = document.createElement('h2');
        h2.innerText = 'Add Project';
        dialog.appendChild(h2);

        const projectNameDiv = document.createElement('div');
        const projectLabel = document.createElement('label');
        projectLabel.innerText = 'Name of Project:';
        const projectInput = document.createElement('input');
        projectInput.required = true;
        projectNameDiv.appendChild(projectLabel);
        projectNameDiv.appendChild(projectInput);
        form.appendChild(projectNameDiv);

        const submitBtn = document.createElement('button');
        submitBtn.classList.add('submit');
        submitBtn.innerText = 'Submit';
        form.appendChild(submitBtn);

        dialog.appendChild(form);
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


    const observer = new MutationObserver(() => {
        projectMenu.innerHTML = '';
        projectMenuItems = _trackAllProjects__WEBPACK_IMPORTED_MODULE_2__.allProjects.map(o => o.name);
        projectMenuItems.push('All-List-View');
        addOptionsToMenu(projectMenu, projectMenuItems);
    });

    const config = {
        subtree: true,
        childList: true,
    };

    observer.observe(document.querySelector('.content'), config)

    


    return { allListView, projectView, addTodoForm, addProjectForm };
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
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _handleDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleDOM */ "./src/handleDOM.js");
/* harmony import */ var _trackAllProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trackAllProjects */ "./src/trackAllProjects.js");




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

         // if all required fields arent empty
        if (title !== '' && desc !== '' && due !== '' && priority !== '') {
            removeDialog();

            createdChecks.forEach(item => {
                let check = item.children[0].checked;
                let label = item.children[1].innerText;
                checklist.push({[label]: check});
            });

            _trackAllProjects__WEBPACK_IMPORTED_MODULE_2__.allProjects.forEach(object => {
                if (object.name === select.replace(/ /g, '-')) {
                    object.addTodo(title, desc, due, priority, checklist);
                };
            });

            _handleDOM__WEBPACK_IMPORTED_MODULE_1__.handleDOM.projectView(select.replace(/ /g, '-'));
        };
    } else if (form.classList.contains('Add-Project')){
        let title = form[0].value;

        if (title !== '') {
            removeDialog();
            (0,_trackAllProjects__WEBPACK_IMPORTED_MODULE_2__.trackAllProjects)((0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)(title));
            _handleDOM__WEBPACK_IMPORTED_MODULE_1__.handleDOM.projectView(title);
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
        _handleDOM__WEBPACK_IMPORTED_MODULE_1__.handleDOM.addTodoForm();
        showDialog();
        newCheckBtn = document.querySelector('.checklist-create button');
        newCheckBtn.addEventListener('click', newCheck);
    } else {
        _handleDOM__WEBPACK_IMPORTED_MODULE_1__.handleDOM.addProjectForm();
        showDialog();
    };

    let exitBtn = document.querySelector('dialog > img');
    exitBtn.addEventListener('click', removeDialog);

    let submitBtn = document.querySelector('form .submit');
    submitBtn.addEventListener('click', submitForm);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLFNBQVMsV0FBVyxLQUFLLFlBQVksY0FBYyxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxhQUFhLGFBQWEsYUFBYSxTQUFTLGFBQWEsTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFNBQVMsYUFBYSxNQUFNLFVBQVUsV0FBVyxVQUFVLFlBQVksWUFBWSxZQUFZLE1BQU0sS0FBSyxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksWUFBWSxVQUFVLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxTQUFTLGFBQWEsTUFBTSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLE1BQU0sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLGFBQWEsYUFBYSxXQUFXLFVBQVUsUUFBUSxhQUFhLE1BQU0sWUFBWSxhQUFhLFlBQVksVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsY0FBYyxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVkscUJBQXFCLGNBQWMsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyw0QkFBNEIsaUJBQWlCLGdCQUFnQiw2QkFBNkIsMEpBQTBKLEdBQUcsZ0NBQWdDLHVCQUF1Qix1QkFBdUIsNEJBQTRCLGtEQUFrRCx1REFBdUQsa0RBQWtELHdEQUF3RCwrQ0FBK0MsR0FBRyxVQUFVLG9CQUFvQixzQkFBc0IsMEJBQTBCLHNCQUFzQiwwQ0FBMEMsK0JBQStCLHdDQUF3QyxHQUFHLDhDQUE4QyxrREFBa0QsR0FBRyxlQUFlLHlEQUF5RCxHQUFHLFdBQVcscURBQXFELEdBQUcsZ0JBQWdCLDBEQUEwRCxHQUFHLFNBQVMsbURBQW1ELEdBQUcseUNBQXlDLG9CQUFvQixvQkFBb0Isc0JBQXNCLGlDQUFpQyxnQkFBZ0IsMENBQTBDLEdBQUcsc0JBQXNCLGlDQUFpQyxzQkFBc0IsMEJBQTBCLHFDQUFxQywwQ0FBMEMsR0FBRywyQkFBMkIseUJBQXlCLEdBQUcsZ0NBQWdDLHNCQUFzQix3QkFBd0IsK0JBQStCLEdBQUcsc0NBQXNDLGdDQUFnQyxHQUFHLHdDQUF3Qyx3QkFBd0Isb0JBQW9CLHlCQUF5QixrQkFBa0IsY0FBYywwQkFBMEIsK0JBQStCLHdDQUF3Qyx3Q0FBd0MsR0FBRyw4Q0FBOEMsNEJBQTRCLEdBQUcsNENBQTRDLGtCQUFrQix3QkFBd0Isb0JBQW9CLHNCQUFzQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixHQUFHLGtEQUFrRCxzQkFBc0IsNkJBQTZCLDJDQUEyQyxHQUFHLCtCQUErQixtQkFBbUIsd0JBQXdCLHNCQUFzQiwwQkFBMEIsMkJBQTJCLGdCQUFnQixHQUFHLG1DQUFtQyx5QkFBeUIsNEJBQTRCLEdBQUcsK0VBQStFLDRCQUE0Qix5QkFBeUIsR0FBRywyRkFBMkYsbUJBQW1CLGtCQUFrQix3QkFBd0Isc0JBQXNCLHNCQUFzQiwwQkFBMEIsNEpBQTRKLEdBQUcsd0dBQXdHLHVKQUF1SixHQUFHLHFHQUFxRyx3QkFBd0Isb0JBQW9CLHlCQUF5QixtQkFBbUIsZUFBZSwrQkFBK0Isd0NBQXdDLHdDQUF3QyxHQUFHLHFIQUFxSCw0QkFBNEIsMEJBQTBCLEdBQUcsaUhBQWlILGtCQUFrQixvQkFBb0Isd0JBQXdCLHNCQUFzQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixHQUFHLDZIQUE2SCxzQkFBc0IsNkJBQTZCLDJDQUEyQyxHQUFHLDJDQUEyQyx1QkFBdUIsc0JBQXNCLDZCQUE2QiwwQkFBMEIsOEJBQThCLEdBQUcsV0FBVyxtQkFBbUIsa0JBQWtCLDBDQUEwQyxHQUFHLHVCQUF1QixvQkFBb0Isc0JBQXNCLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEdBQUcsNkJBQTZCLGtCQUFrQixvQkFBb0Isc0JBQXNCLHNCQUFzQiwwQkFBMEIscUNBQXFDLHNCQUFzQiwrQkFBK0IsR0FBRyxnQ0FBZ0Msc0JBQXNCLEdBQUcscUNBQXFDLGtCQUFrQix3QkFBd0IsdUJBQXVCLDBCQUEwQixnQ0FBZ0MsMkJBQTJCLEdBQUcsNkNBQTZDLDRCQUE0QixHQUFHLDhDQUE4QyxrQkFBa0Isd0JBQXdCLG9CQUFvQiw0QkFBNEIsZ0RBQWdELG1CQUFtQixtQkFBbUIsR0FBRyxnREFBZ0Qsc0JBQXNCLG9CQUFvQixnQ0FBZ0Msc0JBQXNCLDBCQUEwQixnQkFBZ0Isc0JBQXNCLEdBQUcsc0RBQXNELG9CQUFvQiwwQkFBMEIsOEJBQThCLGVBQWUsR0FBRywwQ0FBMEMsb0JBQW9CLG1CQUFtQixxQkFBcUIseUJBQXlCLDJCQUEyQixrQkFBa0IsaUJBQWlCLEdBQUcsMENBQTBDLHdCQUF3Qix5QkFBeUIsb0JBQW9CLHNCQUFzQiw2QkFBNkIsMEJBQTBCLGdCQUFnQiwwQ0FBMEMsNkJBQTZCLHdDQUF3QyxpQkFBaUIsZ0JBQWdCLHVDQUF1QyxHQUFHLG9CQUFvQix3Q0FBd0MsR0FBRyxnQkFBZ0IsbUJBQW1CLGtCQUFrQix3QkFBd0Isc0JBQXNCLDJCQUEyQixnQkFBZ0Isa0JBQWtCLDZIQUE2SCxHQUFHLHNCQUFzQiw4SEFBOEgsR0FBRyxlQUFlLHNCQUFzQiwwQkFBMEIsR0FBRyxlQUFlLHdCQUF3QixvQkFBb0IsNkJBQTZCLDhCQUE4QixnQkFBZ0IsR0FBRyxxQkFBcUIsa0JBQWtCLHdCQUF3QixvQkFBb0IsMEJBQTBCLHFDQUFxQyxnQkFBZ0IsR0FBRyx3QkFBd0Isa0JBQWtCLEdBQUcsc0RBQXNELG1CQUFtQixtQkFBbUIsR0FBRyxzREFBc0Qsc0JBQXNCLDBCQUEwQixHQUFHLHNCQUFzQiwwQkFBMEIsb0JBQW9CLG1CQUFtQix5QkFBeUIsc0JBQXNCLCtCQUErQix3Q0FBd0MsR0FBRyx1QkFBdUIsMkNBQTJDLEdBQUcsMEJBQTBCLHNCQUFzQixrQkFBa0IsbUJBQW1CLDZCQUE2Qix3QkFBd0Isb0JBQW9CLDBCQUEwQixrQ0FBa0MsZ0JBQWdCLEdBQUcsZ0NBQWdDLG9CQUFvQiwwQkFBMEIsOEJBQThCLGdCQUFnQixHQUFHLGdDQUFnQyx5QkFBeUIsR0FBRyxtR0FBbUcsZUFBZSxnQ0FBZ0MsUUFBUSx3Q0FBd0MsMEJBQTBCLE9BQU8sZ0RBQWdELDRCQUE0QixPQUFPLG1HQUFtRyx1QkFBdUIsc0JBQXNCLE9BQU8sc0NBQXNDLDRCQUE0QixPQUFPLGdCQUFnQix5QkFBeUIsMEJBQTBCLGtDQUFrQyxPQUFPLHlCQUF5Qix3QkFBd0IsaUNBQWlDLGtDQUFrQyxrQ0FBa0MsbUJBQW1CLE9BQU8sMEJBQTBCLDBCQUEwQixPQUFPLCtCQUErQixzQkFBc0IsT0FBTyxHQUFHLG1CQUFtQjtBQUNoeVo7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN6YzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiNkQ7O0FBRTdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSwwRUFBb0I7QUFDNUI7QUFDQTs7O0FBR0EsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CNEM7QUFDRTtBQUNHO0FBQ1o7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBEQUFXOzs7QUFHdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPO0FBQ3hDLCtCQUErQiwwQkFBMEI7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLCtDQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3Q0FBUzs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3Q0FBUzs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwREFBVztBQUNuQztBQUNBLCtCQUErQiwwREFBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2QixlQUFlOztBQUVmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDBEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsMERBQVc7QUFDaEM7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0EsMkJBQTJCLDBEQUFXO0FBQ3RDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1WDJCO0FBQ1I7QUFDMkI7O0FBRW5FOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0MsYUFBYTs7QUFFYixZQUFZLDBEQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWIsWUFBWSxpREFBUztBQUNyQjtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxtRUFBZ0IsQ0FBQyw2REFBYTtBQUMxQyxZQUFZLGlEQUFTO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlCQUF5QjtBQUMvQztBQUNBLHFDQUFxQyx5QkFBeUI7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxpREFBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sUUFBUSxpREFBUztBQUNqQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM4QjtBQUNSO0FBQ2M7QUFDTDtBQUNKOztBQUVoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQSxXQUFXLGdFQUFhLGlCQUFpQjtBQUN6QyxzRUFBZ0I7O0FBRWhCO0FBQ0E7QUFDQSxLQUFLLGVBQWU7QUFDcEIsS0FBSyxnQkFBZ0I7QUFDckIsS0FBSywrQ0FBK0M7QUFDcEQsS0FBSyxnQkFBZ0I7QUFDckIsS0FBSyxpQkFBaUI7QUFDdEIsS0FBSyxnQkFBZ0I7QUFDckIsS0FBSyxrQkFBa0I7QUFDdkIsS0FBSyxrQkFBa0I7QUFDdkIsS0FBSyxpQkFBaUI7QUFDdEIsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSwyQ0FBMkMsWUFBWTtBQUN2RCwyQ0FBMkMsWUFBWTs7QUFFdkQsY0FBYyxnRUFBYTtBQUMzQixzRUFBZ0I7O0FBRWhCLDhDQUE4QyxZQUFZO0FBQzFELCtDQUErQyxZQUFZO0FBQzNELDhDQUE4QyxZQUFZOztBQUUxRCxvREFBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxRQUFRLG9EQUFTO0FBQ2pCLE1BQU07QUFDTixRQUFRLG9EQUFTO0FBQ2pCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkNBQTJDOzs7OztBQUtwRSxpQ0FBaUMsaUNBQWlDLHVEQUFzQixHQUFHOzs7QUFHM0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBLDhCQUE4Qix5REFBd0I7QUFDdEQsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZURPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlRm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RyYWNrQWxsUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG5cblxuXG4vKiBVVElMSVRZICovXG5cbjpyb290IHtcbiAgICAtLUJHLUNPTE9SOiAjMzMzO1xuICAgIC0tRkctQ09MT1I6ICNjY2M7XG5cbiAgICAtLUhPVkVSLUNPTE9SOiAjNTU1O1xuXG4gICAgLS1MT1ctUFJJT1JJVFktQ09MT1I6IGhzbCgxMDAsIDEwMCUsIDgwJSk7XG4gICAgLS1MT1ctTUVESVVNLVBSSU9SSVRZLUNPTE9SOiBoc2woMjAwLCAxMDAlLCA4MCUpO1xuICAgIC0tTUVESVVNLVBSSU9SSVRZLUNPTE9SOiBoc2woNTAsIDEwMCUsIDgwJSk7XG4gICAgLS1NRURJVU0tSElHSC1QUklPUklUWS1DT0xPUjogaHNsKDMwMCwgMTAwJSwgODAlKTtcbiAgICAtLUhJR0gtUFJJT1JJVFktQ09MT1I6IGhzbCgwLCAxMDAlLCA4MCUpO1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcblxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkctQ09MT1IpO1xufVxuXG5cblxuLyogUFJJT1JJVFkgQ09MT1IgQ0xBU1NFUyAqL1xuXG4ubG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MT1ctUFJJT1JJVFktQ09MT1IpO1xufVxuLmxvdy1tZWRpdW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUxPVy1NRURJVU0tUFJJT1JJVFktQ09MT1IpO1xufVxuLm1lZGl1bSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUVESVVNLVBSSU9SSVRZLUNPTE9SKTtcbn1cbi5tZWRpdW0taGlnaCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUVESVVNLUhJR0gtUFJJT1JJVFktQ09MT1IpO1xufVxuLmhpZ2gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhJR0gtUFJJT1JJVFktQ09MT1IpO1xufVxuXG5cblxuLyogSEVBREVSIFNFQ1RJT04gKi9cblxuLmhlYWRlciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1GRy1DT0xPUik7XG59XG4uaGVhZGVyID4gLnByb2plY3Qge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcbn1cbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSA+IGgyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG5cbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xufVxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgPiBoMjpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLUhPVkVSLUNPTE9SKTtcbn1cbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlID4gLmRyb3AtZG93biB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbGVmdDogMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1CRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xufVxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgLmRyb3AtZG93bi52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSAuZHJvcC1kb3duID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSAuZHJvcC1kb3duID4gZGl2OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IT1ZFUi1DT0xPUik7XG59XG4uaGVhZGVyIC5wcm9qZWN0ID4gLmFjdGlvbnMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBnYXA6IDEwcHg7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zID4gZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyA+IGltZyxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzID4gaW1nIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLyogbWFrZSBibGFjayBpY29uIGNvbG9yICMzMzMgKCAtLUJHLUNPTE9SICkgKi9cbiAgICBmaWx0ZXI6IGludmVydCgxOCUpIHNlcGlhKDElKSBzYXR1cmF0ZSg0MjgxJSkgaHVlLXJvdGF0ZSg0NWRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCg5MyUpO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyA+IGltZzpob3ZlciwgXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyA+IGltZzpob3ZlciB7XG4gICAgLyogbWFrZSBpY29uIGNvbG9yICM1NTUgKCAtLUhPVkVSLUNPTE9SICkgKi9cbiAgICBmaWx0ZXI6IGludmVydCgzMSUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgyMTg4JSkgaHVlLXJvdGF0ZSgxMzRkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCg4MiUpO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duLFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93biB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1CRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duLnZpc2libGUsXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyAuZHJvcC1kb3duLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duID4gZGl2LFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93biA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duID4gZGl2OmhvdmVyLFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93biA+IGRpdjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSE9WRVItQ09MT1IpO1xufVxuXG5cblxuLyogQ09OVEVOVCBTRUNUSU9OICovXG5cbi5jb250ZW50IHtcbiAgICBtYXJnaW46IDE1cHggMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1GRy1DT0xPUik7XG59XG4ubWFpbi5hbGwtbGlzdC12aWV3IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuLm1haW4uYWxsLWxpc3QtdmlldyA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG59XG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiA+IGgyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiA+IC5leHBhbmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgXG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgPiAuZXhwYW5kLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2IC5leHBhbmQgPiB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2IC5leHBhbmQgPiAuY2hlY2tsaXN0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDIwcHggMHB4IDUwcHggMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiAuZXhwYW5kIC5jaGVja2xpc3QgPiAuaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNXB4O1xufVxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgLmV4cGFuZCBidXR0b24ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICByaWdodDogMHB4O1xufVxuXG5cblxuLyogRk9STSBUTyBBREQgVE9ETyAqL1xuXG5kaWFsb2cge1xuICAgIG1heC1oZWlnaHQ6IDY1MHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuXG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1MHB4O1xuXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tQkctQ09MT1IpO1xuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xuXG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xufVxuZGlhbG9nID4gaW1nIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogMTVweDtcblxuICAgIC8qIC0tQkctQ09MT1IgKi9cbiAgICBmaWx0ZXI6IGludmVydCgxOCUpIHNlcGlhKDElKSBzYXR1cmF0ZSg0MjgxJSkgaHVlLXJvdGF0ZSg0NWRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCg5MyUpO1xufVxuZGlhbG9nID4gaW1nOmhvdmVyIHtcbiAgICAvKiAtLUhPVkVSLUNPTE9SICovXG4gICAgZmlsdGVyOiBpbnZlcnQoMzElKSBzZXBpYSgwJSkgc2F0dXJhdGUoMjE4OCUpIGh1ZS1yb3RhdGUoMTM0ZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoODIlKTtcbn1cbmRpYWxvZyA+IGgyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbmRpYWxvZyBmb3JtIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxNXB4O1xufVxuZGlhbG9nIGZvcm0gPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAyNXB4O1xufVxuZGlhbG9nIGZvcm0gPiBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuZGlhbG9nIGZvcm0gZGl2ID4gc2VsZWN0LFxuZGlhbG9nIGZvcm0gZGl2ID4gaW5wdXQge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5kaWFsb2cgZm9ybSBkaXYgPiBsYWJlbCxcbmRpYWxvZyBmb3JtIGRpdiA+IGJ1dHRvbiB7XG4gICAgd29yZC13cmFwOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5kaWFsb2cgZm9ybSBidXR0b24ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkctQ09MT1IpO1xufVxuZGlhbG9nIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSE9WRVItQ09MT1IpO1xufVxuZGlhbG9nIC5jcmVhdGVkLWNoZWNrcyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiA1MHB4O1xufVxuZGlhbG9nIC5jcmVhdGVkLWNoZWNrcyAuaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cbmRpYWxvZyAuY3JlYXRlZC1jaGVja3MgaW5wdXQge1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qIFJFU1BPTlNJVkVORVNTICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgICAvKiBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIH0gKi9cblxuICAgIC5oZWFkZXIgLnByb2plY3QgLnRpdGxlID4gaDIge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICAgIC5oZWFkZXIgLnByb2plY3QgLnRpdGxlIC5kcm9wLWRvd24gPiBkaXYge1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG4gICAgLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyA+IGltZyxcbiAgICAuaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyA+IGltZyB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxuXG4gICAgLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgPiBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cblxuICAgIGRpYWxvZyB7XG4gICAgICAgIG1pbi13aWR0aDogOTAlO1xuICAgICAgICBtaW4taGVpZ2h0OiA5MCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICBkaWFsb2cgZm9ybSA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgfVxuICAgIGRpYWxvZyBkaXYgPiBsYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgLmNoZWNrbGlzdC1jcmVhdGUgbGFiZWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsbUpBQW1KO0FBQ3ZKOzs7O0FBSUEsWUFBWTs7QUFFWjtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0lBRWhCLG1CQUFtQjs7SUFFbkIseUNBQXlDO0lBQ3pDLGdEQUFnRDtJQUNoRCwyQ0FBMkM7SUFDM0MsaURBQWlEO0lBQ2pELHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1COztJQUVuQixhQUFhO0lBQ2IsbUNBQW1DOztJQUVuQyxzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOzs7O0FBSUEsMkJBQTJCOztBQUUzQjtJQUNJLDJDQUEyQztBQUMvQztBQUNBO0lBQ0ksa0RBQWtEO0FBQ3REO0FBQ0E7SUFDSSw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLG1EQUFtRDtBQUN2RDtBQUNBO0lBQ0ksNENBQTRDO0FBQ2hEOzs7O0FBSUEsbUJBQW1COztBQUVuQjtJQUNJLGFBQWE7SUFDYixhQUFhOztJQUViLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsU0FBUzs7SUFFVCxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLDBCQUEwQjs7SUFFMUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7O0lBRTlCLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCOztJQUVqQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxtQkFBbUI7O0lBRW5CLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCOztJQUVqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTs7SUFFSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTs7SUFFZixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQiw4Q0FBOEM7SUFDOUMsOEZBQThGO0FBQ2xHO0FBQ0E7O0lBRUksMkNBQTJDO0lBQzNDLDhGQUE4RjtBQUNsRztBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFROztJQUVSLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsaUNBQWlDO0FBQ3JDO0FBQ0E7O0lBRUkscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCOztJQUVqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTs7SUFFSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG9DQUFvQztBQUN4Qzs7OztBQUlBLG9CQUFvQjs7QUFFcEI7SUFDSSxnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXOztJQUVYLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTs7SUFFZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixlQUFlOztJQUVmLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0lBRWhCLGFBQWE7O0lBRWIsdUJBQXVCOztJQUV2QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUJBQXFCOztJQUVyQix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IseUJBQXlCOztJQUV6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0FBQ1o7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZOztJQUVaLFlBQVk7SUFDWixrQkFBa0I7O0lBRWxCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtBQUNkOzs7O0FBSUEscUJBQXFCOztBQUVyQjtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTOztJQUVULGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsaUNBQWlDOztJQUVqQyxRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlOztJQUVmLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVzs7SUFFWCxlQUFlO0lBQ2YsOEZBQThGO0FBQ2xHO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsOEZBQThGO0FBQ2xHO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7O0lBRUksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjs7SUFFdEIsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsbUJBQW1COztBQUVuQjtJQUNJOztPQUVHOztJQUVIO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7O1FBRUksWUFBWTtRQUNaLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2YsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsUUFBUTtJQUNaO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcblxcbi8qIFVUSUxJVFkgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tQkctQ09MT1I6ICMzMzM7XFxuICAgIC0tRkctQ09MT1I6ICNjY2M7XFxuXFxuICAgIC0tSE9WRVItQ09MT1I6ICM1NTU7XFxuXFxuICAgIC0tTE9XLVBSSU9SSVRZLUNPTE9SOiBoc2woMTAwLCAxMDAlLCA4MCUpO1xcbiAgICAtLUxPVy1NRURJVU0tUFJJT1JJVFktQ09MT1I6IGhzbCgyMDAsIDEwMCUsIDgwJSk7XFxuICAgIC0tTUVESVVNLVBSSU9SSVRZLUNPTE9SOiBoc2woNTAsIDEwMCUsIDgwJSk7XFxuICAgIC0tTUVESVVNLUhJR0gtUFJJT1JJVFktQ09MT1I6IGhzbCgzMDAsIDEwMCUsIDgwJSk7XFxuICAgIC0tSElHSC1QUklPUklUWS1DT0xPUjogaHNsKDAsIDEwMCUsIDgwJSk7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcblxcbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxufVxcblxcblxcblxcbi8qIFBSSU9SSVRZIENPTE9SIENMQVNTRVMgKi9cXG5cXG4ubG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTE9XLVBSSU9SSVRZLUNPTE9SKTtcXG59XFxuLmxvdy1tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MT1ctTUVESVVNLVBSSU9SSVRZLUNPTE9SKTtcXG59XFxuLm1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU1FRElVTS1QUklPUklUWS1DT0xPUik7XFxufVxcbi5tZWRpdW0taGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU1FRElVTS1ISUdILVBSSU9SSVRZLUNPTE9SKTtcXG59XFxuLmhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ISUdILVBSSU9SSVRZLUNPTE9SKTtcXG59XFxuXFxuXFxuXFxuLyogSEVBREVSIFNFQ1RJT04gKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tRkctQ09MT1IpO1xcbn1cXG4uaGVhZGVyID4gLnByb2plY3Qge1xcbiAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSA+IGgyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG5cXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG59XFxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgPiBoMjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1IT1ZFUi1DT0xPUik7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlID4gLmRyb3AtZG93biB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1CRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG59XFxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgLmRyb3AtZG93bi52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSAuZHJvcC1kb3duID4gZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgLmRyb3AtZG93biA+IGRpdjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSE9WRVItQ09MT1IpO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0ID4gLmFjdGlvbnMge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zID4gZGl2IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3csXFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3Mge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyA+IGltZyxcXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyA+IGltZyB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC8qIG1ha2UgYmxhY2sgaWNvbiBjb2xvciAjMzMzICggLS1CRy1DT0xPUiApICovXFxuICAgIGZpbHRlcjogaW52ZXJ0KDE4JSkgc2VwaWEoMSUpIHNhdHVyYXRlKDQyODElKSBodWUtcm90YXRlKDQ1ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDkzJSk7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgPiBpbWc6aG92ZXIsIFxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzID4gaW1nOmhvdmVyIHtcXG4gICAgLyogbWFrZSBpY29uIGNvbG9yICM1NTUgKCAtLUhPVkVSLUNPTE9SICkgKi9cXG4gICAgZmlsdGVyOiBpbnZlcnQoMzElKSBzZXBpYSgwJSkgc2F0dXJhdGUoMjE4OCUpIGh1ZS1yb3RhdGUoMTM0ZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoODIlKTtcXG59XFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duLFxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIC5kcm9wLWRvd24ge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHJpZ2h0OiAwO1xcblxcbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1CRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG59XFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duLnZpc2libGUsXFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93bi52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93IC5kcm9wLWRvd24gPiBkaXYsXFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93biA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgLmRyb3AtZG93biA+IGRpdjpob3ZlcixcXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyAuZHJvcC1kb3duID4gZGl2OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IT1ZFUi1DT0xPUik7XFxufVxcblxcblxcblxcbi8qIENPTlRFTlQgU0VDVElPTiAqL1xcblxcbi5jb250ZW50IHtcXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tRkctQ09MT1IpO1xcbn1cXG4ubWFpbi5hbGwtbGlzdC12aWV3IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4ubWFpbi5hbGwtbGlzdC12aWV3ID4gZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxufVxcbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gLmV4cGFuZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gLmV4cGFuZC52aXNpYmxlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiAuZXhwYW5kID4gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgLmV4cGFuZCA+IC5jaGVja2xpc3Qge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMjBweCAwcHggNTBweCAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiAuZXhwYW5kIC5jaGVja2xpc3QgPiAuaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgLmV4cGFuZCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICByaWdodDogMHB4O1xcbn1cXG5cXG5cXG5cXG4vKiBGT1JNIFRPIEFERCBUT0RPICovXFxuXFxuZGlhbG9nIHtcXG4gICAgbWF4LWhlaWdodDogNjUwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMjVweDtcXG5cXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcblxcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1CRy1DT0xPUik7XFxuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG5cXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XFxufVxcbmRpYWxvZyA+IGltZyB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICByaWdodDogMTVweDtcXG5cXG4gICAgLyogLS1CRy1DT0xPUiAqL1xcbiAgICBmaWx0ZXI6IGludmVydCgxOCUpIHNlcGlhKDElKSBzYXR1cmF0ZSg0MjgxJSkgaHVlLXJvdGF0ZSg0NWRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCg5MyUpO1xcbn1cXG5kaWFsb2cgPiBpbWc6aG92ZXIge1xcbiAgICAvKiAtLUhPVkVSLUNPTE9SICovXFxuICAgIGZpbHRlcjogaW52ZXJ0KDMxJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIxODglKSBodWUtcm90YXRlKDEzNGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDgyJSk7XFxufVxcbmRpYWxvZyA+IGgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG5kaWFsb2cgZm9ybSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5kaWFsb2cgZm9ybSA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDI1cHg7XFxufVxcbmRpYWxvZyBmb3JtID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbmRpYWxvZyBmb3JtIGRpdiA+IHNlbGVjdCxcXG5kaWFsb2cgZm9ybSBkaXYgPiBpbnB1dCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5kaWFsb2cgZm9ybSBkaXYgPiBsYWJlbCxcXG5kaWFsb2cgZm9ybSBkaXYgPiBidXR0b24ge1xcbiAgICB3b3JkLXdyYXA6IG5vbmU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbmRpYWxvZyBmb3JtIGJ1dHRvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG59XFxuZGlhbG9nIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhPVkVSLUNPTE9SKTtcXG59XFxuZGlhbG9nIC5jcmVhdGVkLWNoZWNrcyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogNTBweDtcXG59XFxuZGlhbG9nIC5jcmVhdGVkLWNoZWNrcyAuaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmRpYWxvZyAuY3JlYXRlZC1jaGVja3MgaW5wdXQge1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIFJFU1BPTlNJVkVORVNTICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xcbiAgICAvKiBib2R5IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgfSAqL1xcblxcbiAgICAuaGVhZGVyIC5wcm9qZWN0IC50aXRsZSA+IGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcbiAgICAuaGVhZGVyIC5wcm9qZWN0IC50aXRsZSAuZHJvcC1kb3duID4gZGl2IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB9XFxuICAgIC5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgPiBpbWcsXFxuICAgIC5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzID4gaW1nIHtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgIC5tYWluLmFsbC1saXN0LXZpZXcgZGl2ID4gaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgZGlhbG9nIHtcXG4gICAgICAgIG1pbi13aWR0aDogOTAlO1xcbiAgICAgICAgbWluLWhlaWdodDogOTAlO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG4gICAgZGlhbG9nIGZvcm0gPiBkaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG4gICAgZGlhbG9nIGRpdiA+IGxhYmVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcbiAgICAuY2hlY2tsaXN0LWNyZWF0ZSBsYWJlbCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWRkVG9kb1RvQWxsUHJvamVjdHMgfSBmcm9tICcuL3RyYWNrQWxsUHJvamVjdHMuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWU9XCJQcm9qZWN0XCIpIHtcblxuICAgIGZ1bmN0aW9uIGFkZFRvZG8odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QpIHtcbiAgICAgICAgbGV0IHRvZG9PYmplY3QgPSB7XG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGRlc2MsXG4gICAgICAgICAgICBkdWVEYXRlLFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBjaGVja2xpc3RcbiAgICAgICAgfTtcblxuICAgICAgICBhZGRUb2RvVG9BbGxQcm9qZWN0cyh0aGlzLm5hbWUsIHRpdGxlLCB0b2RvT2JqZWN0KTtcbiAgICAgICAgdGhpc1t0aXRsZV0gPSB0b2RvT2JqZWN0O1xuICAgIH07XG5cblxuICAgIHJldHVybiB7IG5hbWUsIGFkZFRvZG8gfTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QgfTsiLCJpbXBvcnQgZG93bkFycm93UG5nIGZyb20gJy4vZG93bi1hcnJvdy5zdmcnO1xuaW1wb3J0IHNldHRpbmdzUG5nIGZyb20gJy4vc2V0dGluZ3MtaWNvbi5zdmcnO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tICcuL3RyYWNrQWxsUHJvamVjdHMnO1xuaW1wb3J0IENhbmNlbFN2ZyBmcm9tICcuL2NhbmNlbC5zdmcnO1xuXG5jb25zdCBoYW5kbGVET00gPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBsZXQgaGVhZGVyLCBwcm9qZWN0LCBwcm9qZWN0VGl0bGUsIGFjdGlvbnMsIGRvd25BcnJvdywgYXJyb3dNZW51LCBzZXR0aW5ncywgc2V0dGluZ3NNZW51O1xuICAgIGxldCBoMiwgcHJvamVjdE1lbnU7XG4gICAgbGV0IG1haW47XG4gICAgbGV0IGFycm93TWVudUl0ZW1zID0gWydBZGQtUHJvamVjdCcsICdBZGQtVG9kbyddO1xuICAgIGxldCBzZXR0aW5nc01lbnVJdGVtcyA9IFsnc2V0dGluZ3MnLCAnbWVudScsICdvcHRpb25zJ107XG4gICAgbGV0IHByb2plY3RNZW51SXRlbXMgPSBhbGxQcm9qZWN0cy5tYXAobyA9PiBvLm5hbWUpO1xuXG5cbiAgICBsZXQgcHJpb3JpdHlDbGFzc2VzID0gW1xuICAgICAgICAnbG93JyxcbiAgICAgICAgJ2xvdycsXG4gICAgICAgICdsb3ctbWVkaXVtJyxcbiAgICAgICAgJ2xvdy1tZWRpdW0nLFxuICAgICAgICAnbG93LW1lZGl1bScsXG4gICAgICAgICdtZWRpdW0nLFxuICAgICAgICAnbWVkaXVtLWhpZ2gnLFxuICAgICAgICAnbWVkaXVtLWhpZ2gnLFxuICAgICAgICAnbWVkaXVtLWhpZ2gnLFxuICAgICAgICAnaGlnaCdcbiAgICBdO1xuXG4gICAgY29uc3QgYWRkT3B0aW9uc1RvTWVudSA9IChhcHBlbmRUbywgYXJyKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gYXJyKSB7XG4gICAgICAgICAgICBsZXQgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0bXAuY2xhc3NMaXN0LmFkZChgJHthcnJbaV19YCk7XG4gICAgICAgICAgICB0bXAuaW5uZXJUZXh0ID0gYCR7YXJyW2ldLnJlcGxhY2UoLy0vZywgJyAnKX1gO1xuICAgICAgICAgICAgYXBwZW5kVG8uYXBwZW5kQ2hpbGQodG1wKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlSWNvbiA9IChpbWcsIGFwcGVuZHRvKSA9PiB7XG4gICAgICAgIGxldCB0bXAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdG1wLnNyYyA9IGltZztcbiAgICAgICAgdG1wLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICAgICAgdG1wLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgZmFsc2UpO1xuICAgICAgICBhcHBlbmR0by5hcHBlbmRDaGlsZCh0bXApO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVQcmlvcml0eUxldmVsID0gKGVsZSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSAxMCkgeyBwcmlvcml0eS0tIH07XG4gICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5Q2xhc3Nlc1twcmlvcml0eV0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0RGl2ID0gKCkgPT4ge1xuICAgICAgICBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgICAgIHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgICAgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQoaDIpO1xuICAgICAgICBwcm9qZWN0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0TWVudS5jbGFzc0xpc3QuYWRkKCdkcm9wLWRvd24nKTtcbiAgICAgICAgcHJvamVjdE1lbnVJdGVtcy5wdXNoKCdBbGwtTGlzdC1WaWV3Jyk7XG4gICAgICAgIGFkZE9wdGlvbnNUb01lbnUocHJvamVjdE1lbnUsIHByb2plY3RNZW51SXRlbXMpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQocHJvamVjdE1lbnUpO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUFjdGlvbnNEaXYgPSAoKSA9PiB7XG4gICAgICAgIGFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWN0aW9ucy5jbGFzc0xpc3QuYWRkKCdhY3Rpb25zJyk7XG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZURvd25BcnJvd01lbnUgPSAoYXBwZW5kVG8pID0+IHtcbiAgICAgICAgZG93bkFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNyZWF0ZUljb24oZG93bkFycm93UG5nLCBkb3duQXJyb3cpO1xuICAgICAgICBkb3duQXJyb3cuY2xhc3NMaXN0LmFkZCgnZG93bi1hcnJvdycpO1xuICAgICAgICBhcnJvd01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYXJyb3dNZW51LmNsYXNzTGlzdC5hZGQoJ2Ryb3AtZG93bicpO1xuICAgICAgICBhZGRPcHRpb25zVG9NZW51KGFycm93TWVudSwgYXJyb3dNZW51SXRlbXMpO1xuICAgICAgICBkb3duQXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dNZW51KTtcbiAgICAgICAgYXBwZW5kVG8uYXBwZW5kQ2hpbGQoZG93bkFycm93KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlU2V0dGluZ3NNZW51ID0gKGFwcGVuZFRvKSA9PiB7XG4gICAgICAgIHNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNyZWF0ZUljb24oc2V0dGluZ3NQbmcsIHNldHRpbmdzKTtcbiAgICAgICAgc2V0dGluZ3MuY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3MnKTtcbiAgICAgICAgc2V0dGluZ3NNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNldHRpbmdzTWVudS5jbGFzc0xpc3QuYWRkKCdkcm9wLWRvd24nKTtcbiAgICAgICAgYWRkT3B0aW9uc1RvTWVudShzZXR0aW5nc01lbnUsIHNldHRpbmdzTWVudUl0ZW1zKTtcbiAgICAgICAgc2V0dGluZ3MuYXBwZW5kQ2hpbGQoc2V0dGluZ3NNZW51KTtcbiAgICAgICAgYXBwZW5kVG8uYXBwZW5kQ2hpbGQoc2V0dGluZ3MpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGhlYWRlciwgY29udGVudCk7XG5cbiAgICAgICAgY3JlYXRlUHJvamVjdERpdigpO1xuXG4gICAgICAgIGNyZWF0ZUFjdGlvbnNEaXYoKTtcbiAgICAgICAgY3JlYXRlRG93bkFycm93TWVudShhY3Rpb25zKTtcbiAgICAgICAgY3JlYXRlU2V0dGluZ3NNZW51KGFjdGlvbnMpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVNYWluRGl2ID0gKCkgPT4ge1xuICAgICAgICAvLyBjcmVhdGUgbWFpbiBkaXYgKCBkaXYgd2l0aCBhbGwgY29udGVudCApXG4gICAgICAgIG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlclRvZG8gPSAodG9kbykgPT4ge1xuICAgICAgICAvLyBtYWluIHRvZG8gZWxlbWVudCB3aXRoIHRpdGxlIGFuZCBkdWUgZGF0ZVxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGRpdlRpdGxlLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XG4gICAgICAgIGxldCBkaXZEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgZGl2RHVlRGF0ZS5pbm5lclRleHQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkaXZUaXRsZSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkaXZEdWVEYXRlKTtcbiAgICAgICAgdXBkYXRlUHJpb3JpdHlMZXZlbChkaXYsIHRvZG8ucHJpb3JpdHkpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgICAgLy8gZXhwYW5kIGVsZW1lbnQgZm9yIHdoZW4gdG9kbyBjbGlja2VkXG4gICAgICAgIGxldCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZXhwYW5kLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZCcpXG4gICAgICAgIHVwZGF0ZVByaW9yaXR5TGV2ZWwoZXhwYW5kLCB0b2RvLnByaW9yaXR5KTtcblxuICAgICAgICAvLyBhZGQgZGVzY3JpcHRpb24gb24gZXhwYW5kIGVsZW1lbnRcbiAgICAgICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBkZXNjLnRvZG8gPSB0b2RvOyAvL3RoaXMgYXNzb2NjaWF0ZXMgdGhlIGVsZW1lbnQgd2l0aCB0aGUgdG9kbyBvYmplY3RcbiAgICAgICAgZGVzYy5pbm5lclRleHQgPSB0b2RvLmRlc2M7XG4gICAgICAgIGV4cGFuZC5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgICAgICAvLyBhZGQgY2hlY2tsaXN0IG9uIGV4cGFuZCBlbGVtZW50XG4gICAgICAgIGxldCBjaGVja0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlY2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrbGlzdCcpO1xuXG4gICAgICAgIHRvZG8uY2hlY2tsaXN0LmZvckVhY2gob2JqZWN0ID0+IHsvL2FycmF5IG9mIG9iamVjdHNcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBvYmplY3QpIHtcblxuICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2sudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgY2hlY2suaWQgPSBrZXk7XG4gICAgICAgICAgICAgICAgY2hlY2submFtZSA9IGtleTtcbiAgICAgICAgICAgICAgICBjaGVjay52YWx1ZSA9IGtleTtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0W2tleV0pIHsgY2hlY2suc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ3RydWUnKSB9O1xuXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGtleSk7XG4gICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0ga2V5LnJlcGxhY2UoL18vZywgJyAnKTtcblxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgICAgICAgICAgICAgaXRlbS50b2RvID0gb2JqZWN0O1xuICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2spO1xuICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgY2hlY2tMaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGV4cGFuZC5hcHBlbmRDaGlsZChjaGVja0xpc3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgZGVsZXRlIHRvZG8gYnV0dG9uXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnRuLmlubmVyVGV4dCA9ICdEZWxldGUgVG9kbyc7XG4gICAgICAgIGJ0bi50b2RvID0gdG9kbztcbiAgICAgICAgYnRuLmRlbFRvZG8gPSAoKSA9PiB7XG4gICAgICAgICAgICAvL3NlYXJjaCBhbGxQcm9qZWN0cyBhcnJheSBmb3IgdG9kbyBhbmQgcmVtb3ZlIGl0XG4gICAgICAgICAgICBhbGxQcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gYnRuLnRvZG8udGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcm9qZWN0W2tleV07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBleHBhbmQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZXhwYW5kKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnQWRkLVByb2plY3QnKTtcbiAgICAgICAgZm9ybS5tZXRob2QgPSAnZGlhbG9nJztcbiAgICAgICAgY3JlYXRlSWNvbihDYW5jZWxTdmcsIGRpYWxvZyk7XG5cbiAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoMi5pbm5lclRleHQgPSAnQWRkIFByb2plY3QnO1xuICAgICAgICBkaWFsb2cuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByb2plY3RMYWJlbC5pbm5lclRleHQgPSAnTmFtZSBvZiBQcm9qZWN0Oic7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByb2plY3RJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIHByb2plY3ROYW1lRGl2LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgICAgIHByb2plY3ROYW1lRGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVEaXYpO1xuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0Jyk7XG4gICAgICAgIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnU3VibWl0JztcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgICAgIGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkVG9kb0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnQWRkLVRvZG8nKTtcbiAgICAgICAgZm9ybS5tZXRob2QgPSAnZGlhbG9nJztcbiAgICAgICAgY3JlYXRlSWNvbihDYW5jZWxTdmcsIGRpYWxvZyk7XG5cbiAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoMi5pbm5lclRleHQgPSAnQWRkIFRvZG8nO1xuICAgICAgICBkaWFsb2cuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXNlbGVjdCcpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcm9qZWN0TGFiZWwuaW5uZXJUZXh0ID0gJ1Byb2plY3Q6J1xuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHByb2plY3RTZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYWxsUHJvamVjdHMpIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBhbGxQcm9qZWN0c1trZXldLm5hbWUucmVwbGFjZSgvLS9nLCAnICcpO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9O1xuICAgICAgICBwcm9qZWN0U2VsZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgICAgIHByb2plY3RTZWxlY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdERpdik7XG5cbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZUlucHV0RGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZTonO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIHRpdGxlSW5wdXREaXYuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIHRpdGxlSW5wdXREaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dERpdik7XG5cbiAgICAgICAgY29uc3QgZGVzY0lucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdkZXNjLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRlc2NMYWJlbC5pbm5lclRleHQgPSAnRGVzY3JpcHRpb246JztcbiAgICAgICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGVzY0lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgZGVzY0lucHV0RGl2LmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgICAgIGRlc2NJbnB1dERpdi5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NJbnB1dERpdik7XG5cbiAgICAgICAgY29uc3QgZGF0ZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGVJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdkYXRlLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlIERhdGU6JztcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGRhdGVJbnB1dERpdi5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgICAgICBkYXRlSW5wdXREaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXREaXYpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1pbnB1dCcpO1xuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSAnUHJpb3JpdHkgTGV2ZWw6JztcbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByaW9yaXR5SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBwcmlvcml0eUlucHV0LnR5cGUgPSAnbnVtYmVyJztcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5taW4gPSAwXG4gICAgICAgIHByaW9yaXR5SW5wdXQubWF4ID0gMTBcbiAgICAgICAgcHJpb3JpdHlJbnB1dERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0RGl2KTtcblxuICAgICAgICBjb25zdCBjaGVja2xpc3RDcmVhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2NoZWNrbGlzdC1jcmVhdGUnKTtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0Q3JlYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjaGVja2xpc3RDcmVhdGVMYWJlbC5pbm5lclRleHQgPSAnQ3JlYXRlIENoZWNrbGlzdDonO1xuICAgICAgICBjaGVja2xpc3RDcmVhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjaGVja0lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdENyZWF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlSW5wdXQuaWQgPSAnY2hlY2tJbnB1dCc7XG4gICAgICAgIGNoZWNrbGlzdENyZWF0ZUlucHV0Lm1heExlbmd0aCA9IDMwO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RDcmVhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlQnRuLmlubmVyVGV4dCA9ICdOZXcgQ2hlY2snO1xuICAgICAgICBjaGVja2xpc3RDcmVhdGVEaXYuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0Q3JlYXRlTGFiZWwpO1xuICAgICAgICBjaGVja2xpc3RDcmVhdGVEaXYuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0Q3JlYXRlSW5wdXQpO1xuICAgICAgICBjaGVja2xpc3RDcmVhdGVEaXYuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0Q3JlYXRlQnRuKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjaGVja2xpc3RDcmVhdGVEaXYpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RDcmVhdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrbGlzdENyZWF0ZWQuY2xhc3NMaXN0LmFkZCgnY3JlYXRlZC1jaGVja3MnKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjaGVja2xpc3RDcmVhdGVkKTtcblxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdCcpO1xuICAgICAgICBzdWJtaXRCdG4uaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuXG5cbiAgICAgICAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFsbExpc3RWaWV3ID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWhlYWRlcikgeyBjcmVhdGVIZWFkZXIoKSB9XG4gICAgICAgIGVsc2UgeyBjb250ZW50LmlubmVyVGV4dCA9ICcnIH07XG5cbiAgICAgICAgaDIuaW5uZXJUZXh0ID0gJ0FsbCBMaXN0IFZpZXcnO1xuXG4gICAgICAgIGNyZWF0ZU1haW5EaXYoKTtcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdhbGwtbGlzdC12aWV3Jyk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGFsbCB0b2RvcyBmcm9tIGFsbCBwcm9qZWN0cyBvbiBzY3JlZW5cbiAgICAgICAgYWxsUHJvamVjdHMuZmlsdGVyKG9iamVjdCA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ25hbWUnICYmIGtleSAhPT0gJ2FkZFRvZG8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclRvZG8ob2JqZWN0W2tleV0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3RWaWV3ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIG1haW4uaW5uZXJUZXh0ID0gJyc7XG5cbiAgICAgICAgaDIuaW5uZXJUZXh0ID0gcHJvamVjdE5hbWUucmVwbGFjZSgvLS9nLCAnICcpO1xuXG4gICAgICAgIC8vZmlsdGVyIGFsbFByb2plY3RzIGZvciBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWRcbiAgICAgICAgbGV0IHJlc3VsdCA9IGFsbFByb2plY3RzLmZpbHRlcihvYmplY3QgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9yZW5kZXIgYWxsIHRvZG9zIGZyb20gdGhlIHNlbGVjdGVkIHByb2plY3RcbiAgICAgICAgcmVzdWx0LmZpbHRlcihvYmplY3QgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICduYW1lJyAmJiBrZXkgIT09ICdhZGRUb2RvJykge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2RvKG9iamVjdFtrZXldKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIHByb2plY3RNZW51LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBwcm9qZWN0TWVudUl0ZW1zID0gYWxsUHJvamVjdHMubWFwKG8gPT4gby5uYW1lKTtcbiAgICAgICAgcHJvamVjdE1lbnVJdGVtcy5wdXNoKCdBbGwtTGlzdC1WaWV3Jyk7XG4gICAgICAgIGFkZE9wdGlvbnNUb01lbnUocHJvamVjdE1lbnUsIHByb2plY3RNZW51SXRlbXMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgfTtcblxuICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSwgY29uZmlnKVxuXG4gICAgXG5cblxuICAgIHJldHVybiB7IGFsbExpc3RWaWV3LCBwcm9qZWN0VmlldywgYWRkVG9kb0Zvcm0sIGFkZFByb2plY3RGb3JtIH07XG59KSgpO1xuXG5leHBvcnQgeyBoYW5kbGVET00gfTtcbiIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgeyBoYW5kbGVET00gfSBmcm9tIFwiLi9oYW5kbGVET01cIjtcbmltcG9ydCB7IGFsbFByb2plY3RzLCB0cmFja0FsbFByb2plY3RzIH0gZnJvbSBcIi4vdHJhY2tBbGxQcm9qZWN0c1wiO1xuXG5sZXQgbmV3Q2hlY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0LWNyZWF0ZSBidXR0b24nKTtcblxuZnVuY3Rpb24gc3VibWl0Rm9ybShlKSB7XG4gICAgbGV0IGZvcm0gPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKGZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdBZGQtVG9kbycpKSB7XG4gICAgICAgIGxldCBjcmVhdGVkQ2hlY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybSA+IC5jcmVhdGVkLWNoZWNrcyAuaXRlbScpO1xuICAgICAgICBsZXQgc2VsZWN0ID0gZm9ybVswXS52YWx1ZTtcbiAgICAgICAgbGV0IHRpdGxlID0gZm9ybVsxXS52YWx1ZTtcbiAgICAgICAgbGV0IGRlc2MgPSBmb3JtWzJdLnZhbHVlO1xuICAgICAgICBsZXQgZHVlID0gZm9ybVszXS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZm9ybVs0XS52YWx1ZTtcbiAgICAgICAgbGV0IGNoZWNrbGlzdCA9IFtdO1xuXG4gICAgICAgICAvLyBpZiBhbGwgcmVxdWlyZWQgZmllbGRzIGFyZW50IGVtcHR5XG4gICAgICAgIGlmICh0aXRsZSAhPT0gJycgJiYgZGVzYyAhPT0gJycgJiYgZHVlICE9PSAnJyAmJiBwcmlvcml0eSAhPT0gJycpIHtcbiAgICAgICAgICAgIHJlbW92ZURpYWxvZygpO1xuXG4gICAgICAgICAgICBjcmVhdGVkQ2hlY2tzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrID0gaXRlbS5jaGlsZHJlblswXS5jaGVja2VkO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGl0ZW0uY2hpbGRyZW5bMV0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIGNoZWNrbGlzdC5wdXNoKHtbbGFiZWxdOiBjaGVja30pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFsbFByb2plY3RzLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm5hbWUgPT09IHNlbGVjdC5yZXBsYWNlKC8gL2csICctJykpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmFkZFRvZG8odGl0bGUsIGRlc2MsIGR1ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBoYW5kbGVET00ucHJvamVjdFZpZXcoc2VsZWN0LnJlcGxhY2UoLyAvZywgJy0nKSk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChmb3JtLmNsYXNzTGlzdC5jb250YWlucygnQWRkLVByb2plY3QnKSl7XG4gICAgICAgIGxldCB0aXRsZSA9IGZvcm1bMF0udmFsdWU7XG5cbiAgICAgICAgaWYgKHRpdGxlICE9PSAnJykge1xuICAgICAgICAgICAgcmVtb3ZlRGlhbG9nKCk7XG4gICAgICAgICAgICB0cmFja0FsbFByb2plY3RzKGNyZWF0ZVByb2plY3QodGl0bGUpKTtcbiAgICAgICAgICAgIGhhbmRsZURPTS5wcm9qZWN0Vmlldyh0aXRsZSk7XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIG5ld0NoZWNrKGUpIHtcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC5wcmV2aW91c1NpYmxpbmcudmFsdWU7XG4gICAgbGV0IGNyZWF0ZWRDaGVja3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlZC1jaGVja3MnKTtcbiAgICBsZXQgbGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNyZWF0ZWQtY2hlY2tzIGxhYmVsJyk7XG5cbiAgICAvLyBtYWtlIHN1cmUgbm8gZHVwbGljYXRlIGxhYmVscyBhbmQgY2hlY2tib3hlc1xuICAgIGxhYmVscy5mb3JFYWNoKGxhYmVsID0+IHtcbiAgICAgICAgaWYgKGxhYmVsLmlubmVyVGV4dCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBsZXQgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgY2hlY2suaWQgPSBgJHt2YWx1ZS5yZXBsYWNlKC8gL2csICdfJyl9YDtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHt2YWx1ZS5yZXBsYWNlKC8gL2csICdfJyl9YCk7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IHZhbHVlO1xuXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2spO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgY3JlYXRlZENoZWNrc0Rpdi5hcHBlbmRDaGlsZChpdGVtKTtcblxuICAgICAgICBlLnRhcmdldC5wcmV2aW91c1NpYmxpbmcudmFsdWUgPSAnJztcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlRGlhbG9nKCkge1xuICAgIGxldCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKTtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICBkaWFsb2cuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkaWFsb2cuaW5uZXJIVE1MID0gJyc7XG59O1xuXG5mdW5jdGlvbiBzaG93RGlhbG9nKCkge1xuICAgIGxldCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKTtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgZGlhbG9nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG59O1xuXG5mdW5jdGlvbiBhcnJvd0NsaWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdBZGQtVG9kbycpKSB7XG4gICAgICAgIGhhbmRsZURPTS5hZGRUb2RvRm9ybSgpO1xuICAgICAgICBzaG93RGlhbG9nKCk7XG4gICAgICAgIG5ld0NoZWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdC1jcmVhdGUgYnV0dG9uJyk7XG4gICAgICAgIG5ld0NoZWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3Q2hlY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRsZURPTS5hZGRQcm9qZWN0Rm9ybSgpO1xuICAgICAgICBzaG93RGlhbG9nKCk7XG4gICAgfTtcblxuICAgIGxldCBleGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nID4gaW1nJyk7XG4gICAgZXhpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZURpYWxvZyk7XG5cbiAgICBsZXQgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSAuc3VibWl0Jyk7XG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0Rm9ybSk7XG59O1xuXG5leHBvcnQgeyBhcnJvd0NsaWNrLCByZW1vdmVEaWFsb2cgfTsiLCJcbmxldCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5mdW5jdGlvbiB0cmFja0FsbFByb2plY3RzKHByb2plY3QpIHtcbiAgICBhbGxQcm9qZWN0cy5wdXNoKCBwcm9qZWN0ICk7XG59O1xuXG5mdW5jdGlvbiBhZGRUb2RvVG9BbGxQcm9qZWN0cyhwcm9qZWN0TmFtZSwgdG9kb05hbWUsIHRvZG9PYmplY3QpIHtcbiAgICBhbGxQcm9qZWN0cy5maWx0ZXIob2JqZWN0ID0+IHtcbiAgICAgICAgaWYgKG9iamVjdC5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgb2JqZWN0W3RvZG9OYW1lXSA9IHRvZG9PYmplY3Q7XG4gICAgICAgIH07XG4gICAgfSk7XG59O1xuXG5leHBvcnQgeyB0cmFja0FsbFByb2plY3RzLCBhbGxQcm9qZWN0cywgYWRkVG9kb1RvQWxsUHJvamVjdHMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4vY3JlYXRlUHJvamVjdC5qcyc7XG5pbXBvcnQgeyBoYW5kbGVET00gfSBmcm9tICcuL2hhbmRsZURPTS5qcyc7XG5pbXBvcnQgeyB0cmFja0FsbFByb2plY3RzIH0gZnJvbSAnLi90cmFja0FsbFByb2plY3RzLmpzJztcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSAnLi90cmFja0FsbFByb2plY3RzLmpzJztcbmltcG9ydCAqIGFzIGhhbmRsZUZvcm1zIGZyb20gJy4vaGFuZGxlRm9ybXMuanMnO1xuXG4vLyAvLyBjcmVhdGUgbmV3IHByb2plY3Qgb2JqZWN0IHRvIHN0b3JlIGFsbCB0b2Rvc1xuLy8gLy8gYWxsIHNwYWNlcyBpbiBuYW1lIG11c3QgYmUgcmVwbGFjZWQgd2l0aCBkYXNoZXNcbi8vIGxldCB0ZXN0ID0gY3JlYXRlUHJvamVjdCgnUHJvamVjdC1OYW1lJyk7XG5cbi8vIC8vIGFkZCB0b2RvIHRvIHRoZSBwcm9qZWN0IG9iamVjdCB1c2luZyBhZGRUb2RvIG1ldGhvZCBhbmQgY3JlYXRlVG9kbyBtb2R1bGVcbi8vIHRlc3QuYWRkVG9kbygndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnZHVlZGF0ZScsICdwcmlvcml0eScsICdjaGVja2xpc3QnKTtcblxuLy8gLy8gcmVzdWx0IGlzIHRoZSBwcm9qZWN0IG9iamVjdCB3aXRoIGFsbCB0b2RvcyBzdG9yZWQgYXMgb2JqZWN0c1xuLy8gY29uc29sZS5sb2codGVzdCk7XG5cblxuLypcbioqKm5lZWQgdG8gZml4IGhvdyBkaWFsb2dzIHdvcmsgaWRrIGhvdyB0aGV5IHdvcmsgYnV0IHdpbGwgY29tZSBiYWNrKioqXG4qL1xuXG5cblxubGV0IHRlc3QgPSBjcmVhdGVQcm9qZWN0KCdUZXN0LVByb2plY3QnKTsvLyBzdG9yZSBuYW1lcyB3aXRoIGRhc2hlcyBhZGQgc3BhY2UgbGF0ZXJcbnRyYWNrQWxsUHJvamVjdHModGVzdCk7XG5cbi8vIHN0b3JlIGNoZWNrbGlzdCBrZXlzIHdpdGggdW5kZXJzY29yZXMgaW5zdGVhZCBvZiBzcGFjZXMgYW5kIGFkZCB0aGVtIGxhdGVyXG5sZXQgZXhhbXBsZUNoZWNrbGlzdCA9IFtcbiAgICB7U3RlcF9PbmU6IHRydWV9LFxuICAgIHtTdGVwX1R3bzogZmFsc2V9LFxuICAgIHtUZXN0aW5nX0xvbmdlcl9uYW1lX3RvX1NlZV9XaGF0X0hhcHBlbnM6IGZhbHNlfSxcbiAgICB7U3RlcF9Gb3VyOiB0cnVlfSxcbiAgICB7U3RlcF9GaXZlOiBmYWxzZX0sXG4gICAge1N0ZXBfU2l4OiBmYWxzZX0sXG4gICAge1N0ZXBfU2V2ZW46IGZhbHNlfSxcbiAgICB7U3RlcF9FaWdodDogZmFsc2V9LFxuICAgIHtTdGVwX05pbmU6IGZhbHNlfSxcbiAgICB7U3RlcF9UZW46IGZhbHNlfVxuXTsgLy8gbWFrZSBzdXJlIGZvcm0gcmVxdWlyZXMgaW5wdXQgYW5kIGRvZXNudCBsZXQgeW91IHN1Ym1pdCB1bmRlZmluZWQgc3R1ZmZcblxudGVzdC5hZGRUb2RvKCd0aXRsZTEnLCAnZXhhbXBsZSB0ZXh0JywgJ2R1ZScsIDIsIGV4YW1wbGVDaGVja2xpc3QpO1xudGVzdC5hZGRUb2RvKCd0aXRsZTInLCAnZGVzYycsICdkdWUnLCA2LCBbe2FiY2Q6IGZhbHNlfV0pO1xudGVzdC5hZGRUb2RvKCd0aXRsZTMnLCAnZGVzYycsICdkdWUnLCAwLCBbe2VmZ2g6IGZhbHNlfV0pO1xuXG5sZXQgdGVzdHR3byA9IGNyZWF0ZVByb2plY3QoJ0Fub3RoZXItUHJvamVjdCcpO1xudHJhY2tBbGxQcm9qZWN0cyh0ZXN0dHdvKTtcblxudGVzdHR3by5hZGRUb2RvKCd0aXRsZTQnLCAnZGVzYycsICdkdWUnLCA1LCBbe2lqa2w6IGZhbHNlfV0pO1xudGVzdHR3by5hZGRUb2RvKCd0aXRsZTUnLCAnZGVzYycsICdkdWUnLCAxMCwgW3ttbm9wOiBmYWxzZX1dKTtcbnRlc3R0d28uYWRkVG9kbygndGl0bGU2JywgJ2Rlc2MnLCAnZHVlJywgMywgW3txcnN0OiBmYWxzZX1dKTtcblxuaGFuZGxlRE9NLmFsbExpc3RWaWV3KCk7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5jb25zdCBkb3duQXJyb3dJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93bi1hcnJvdyA+IGltZycpO1xuY29uc3Qgc2V0dGluZ3NJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MgPiBpbWcnKTtcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUgPiBoMicpO1xuY29uc3QgdGl0bGVEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZSA+IC5kcm9wLWRvd24nKTtcblxubGV0IHRleHRhcmVhID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJyldO1xubGV0IGV4cGFuZCA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbiA+IGRpdiA+IC5leHBhbmQnKV07XG5sZXQgaXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrbGlzdCA+IC5pdGVtJyldO1xubGV0IGRlbEJ0bnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4cGFuZCA+IGJ1dHRvbicpXTtcbmxldCBhcnJvd09wdGlvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvd24tYXJyb3cgLmRyb3AtZG93biA+IGRpdicpXTtcbmxldCBzZXR0aW5nc09wdGlvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNldHRpbmdzIC5kcm9wLWRvd24gPiBkaXYnKV07XG5cbmRvd25BcnJvd0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xufSk7XG5cbnNldHRpbmdzSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC5uZXh0U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XG59KTtcblxudGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTsgXG59KTtcblxudGl0bGVEcm9wRG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ0FsbC1MaXN0LVZpZXcnKSB7XG4gICAgICAgIGhhbmRsZURPTS5hbGxMaXN0VmlldygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbmRsZURPTS5wcm9qZWN0VmlldyhlLnRhcmdldC5jbGFzc05hbWUpO1xuICAgIH07XG59KTtcblxudGV4dGFyZWEuZm9yRWFjaChhcmVhID0+IHtcbiAgICBhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudG9kby5kZXNjID0gZS50YXJnZXQudmFsdWU7XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKSB9O1xuZnVuY3Rpb24gdG9nZ2xlVmlzaWJsZShlKSB7XG4gICAgLy9pZiBlLnRhcmdldC5jaGlsZHJlblsyXSBpcyB1bmRlZmluZWQgdGhlbiBpIG11c3R2ZSBjbGlja2VkIGFuIGgyIGNoaWxkIG9mIHRoZSB0b2RvIGVsZW1lbnRcbiAgICBpZiAoZS50YXJnZXQuY2hpbGRyZW5bMl0pIHsgZS50YXJnZXQuY2hpbGRyZW5bMl0uY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpIH1cbiAgICBlbHNlIHsgZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblsyXS5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJykgfTtcbn07XG5leHBhbmQuZm9yRWFjaChleHBhbmRlZCA9PiB7XG4gICAgZXhwYW5kZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdG9wUHJvcGFnYXRpb24pO1xuICAgIGV4cGFuZGVkLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVWaXNpYmxlKTtcbn0pO1xuXG5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW0udG9kbykge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnRvZG9ba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnRvZG9ba2V5XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udG9kb1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBkZWxldGVUb2RvKGUpIHtcbiAgICBlLnRhcmdldC5kZWxUb2RvKCk7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4ucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbn07XG5kZWxCdG5zLmZvckVhY2goYnRuID0+IHsgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9kbykgfSk7XG5cblxuXG5cbmFycm93T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUZvcm1zLmFycm93Q2xpY2spIH0pO1xuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSBkb3duQXJyb3dJbWcpIHsgXG4gICAgICAgIGRvd25BcnJvd0ltZy5uZXh0U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfTtcblxuICAgIGlmIChlLnRhcmdldCAhPT0gc2V0dGluZ3NJbWcpIHsgXG4gICAgICAgIHNldHRpbmdzSW1nLm5leHRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICB9O1xuXG4gICAgaWYgKGUudGFyZ2V0ICE9PSB0aXRsZSkge1xuICAgICAgICB0aXRsZS5uZXh0U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfTtcblxuICAgIGV4cGFuZC5mb3JFYWNoKGV4cGFuZGVkID0+IHtcbiAgICAgICAgLy9nZXQgdGhlIGgyIGNoaWxkcmVuIG9mIGVhY2ggdG9kbyBzbyBpIGNhbiBleHBhbmQgdG9kbyB3aGlsZSBjbGlja2luZyB0aGUgaDIgYXN3ZWxsXG4gICAgICAgIGxldCBoMiA9IFsuLi5leHBhbmRlZC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuXS5zcGxpY2UoMCwgMik7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBleHBhbmRlZC5wYXJlbnRFbGVtZW50ICYmIGUudGFyZ2V0ICE9PSBoMlswXSAmJiBlLnRhcmdldCAhPT0gaDJbMV0pIHtcbiAgICAgICAgICAgIGV4cGFuZGVkLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHsgaGFuZGxlRm9ybXMucmVtb3ZlRGlhbG9nKCkgfTtcbn0pO1xuXG5jb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICB0ZXh0YXJlYSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpXTtcbiAgICBleHBhbmQgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4gPiBkaXYgPiAuZXhwYW5kJyldO1xuICAgIGl0ZW1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2xpc3QgPiAuaXRlbScpXTtcbiAgICBkZWxCdG5zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHBhbmQgPiBidXR0b24nKV07XG4gICAgXG4gICAgdGV4dGFyZWEuZm9yRWFjaChhcmVhID0+IHtcbiAgICAgICAgYXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnRhcmdldC50b2RvLmRlc2MgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBleHBhbmQuZm9yRWFjaChleHBhbmRlZCA9PiB7XG4gICAgICAgIGV4cGFuZGVkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcFByb3BhZ2F0aW9uKTtcbiAgICAgICAgZXhwYW5kZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdG9wUHJvcGFnYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgZXhwYW5kZWQucGFyZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVZpc2libGUpO1xuICAgICAgICBleHBhbmRlZC5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVmlzaWJsZSk7XG4gICAgfSk7XG5cbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW0udG9kbykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50b2RvW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udG9kb1trZXldID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRvZG9ba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVsQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvZG8pO1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUb2RvKTtcbiAgICB9KTtcbn0pO1xuXG5jb25zdCBjb25maWcgPSB7XG4gICAgc3VidHJlZTogdHJ1ZSxcbiAgICBjaGlsZExpc3Q6IHRydWUsXG59O1xuXG5vYnNlcnZlci5vYnNlcnZlKGNvbnRlbnQsIGNvbmZpZylcblxuXG5cblxuLypcblxuQWxsICdQcm9qZWN0cycgYXJlIE9iamVjdHMgdGhhdCBIb2xkICdUb2RvcydcbkFsbCAnVG9kb3MnIGFyZSBPYmplY3RzXG4nVG9kb3MnIGNhbiBvbmx5IGJlIG1hZGUgb24gYSAnUHJvamVjdCcgYnV0IHRoZXJlIGlzIGFuICdBbGwgTGlzdCBWaWV3J1xuXG4tIFlvdSBjYW4ndCBoYXZlIDIgJ1Byb2plY3RzJyB3aXRoIHRoZSBzYW1lIG5hbWVcbi0gUHJpb3JpdHkgbXVzdCBiZSBmcm9tIDAtMTAgKGluY2x1c2l2ZSlcblxuKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=