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
let newCheckBtn = document.querySelector('.checklist-create button');

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

            _trackAllProjects_js__WEBPACK_IMPORTED_MODULE_3__.allProjects.forEach(object => {
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
        _handleDOM_js__WEBPACK_IMPORTED_MODULE_2__.handleDOM.addTodoForm();
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
arrowOptions.forEach(option => { option.addEventListener('click', arrowClick) });


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
    if (e.key === 'Escape') { removeDialog() };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksYUFBYSxTQUFTLFdBQVcsS0FBSyxZQUFZLGNBQWMsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLFdBQVcsYUFBYSxhQUFhLGFBQWEsU0FBUyxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxTQUFTLGFBQWEsTUFBTSxVQUFVLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxZQUFZLFVBQVUsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFNBQVMsYUFBYSxNQUFNLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsYUFBYSxhQUFhLFdBQVcsVUFBVSxRQUFRLGFBQWEsTUFBTSxZQUFZLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxjQUFjLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksWUFBWSxh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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZURPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdHJhY2tBbGxQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxuXG5cbi8qIFVUSUxJVFkgKi9cblxuOnJvb3Qge1xuICAgIC0tQkctQ09MT1I6ICMzMzM7XG4gICAgLS1GRy1DT0xPUjogI2NjYztcblxuICAgIC0tSE9WRVItQ09MT1I6ICM1NTU7XG5cbiAgICAtLUxPVy1QUklPUklUWS1DT0xPUjogaHNsKDEwMCwgMTAwJSwgODAlKTtcbiAgICAtLUxPVy1NRURJVU0tUFJJT1JJVFktQ09MT1I6IGhzbCgyMDAsIDEwMCUsIDgwJSk7XG4gICAgLS1NRURJVU0tUFJJT1JJVFktQ09MT1I6IGhzbCg1MCwgMTAwJSwgODAlKTtcbiAgICAtLU1FRElVTS1ISUdILVBSSU9SSVRZLUNPTE9SOiBoc2woMzAwLCAxMDAlLCA4MCUpO1xuICAgIC0tSElHSC1QUklPUklUWS1DT0xPUjogaHNsKDAsIDEwMCUsIDgwJSk7XG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xuXG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG59XG5cblxuXG4vKiBQUklPUklUWSBDT0xPUiBDTEFTU0VTICovXG5cbi5sb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUxPVy1QUklPUklUWS1DT0xPUik7XG59XG4ubG93LW1lZGl1bSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTE9XLU1FRElVTS1QUklPUklUWS1DT0xPUik7XG59XG4ubWVkaXVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NRURJVU0tUFJJT1JJVFktQ09MT1IpO1xufVxuLm1lZGl1bS1oaWdoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NRURJVU0tSElHSC1QUklPUklUWS1DT0xPUik7XG59XG4uaGlnaCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSElHSC1QUklPUklUWS1DT0xPUik7XG59XG5cblxuXG4vKiBIRUFERVIgU0VDVElPTiAqL1xuXG4uaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMTBweDtcblxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLUZHLUNPTE9SKTtcbn1cbi5oZWFkZXIgPiAucHJvamVjdCB7XG4gICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xufVxuLmhlYWRlciAucHJvamVjdCAudGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlID4gaDIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcblxuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSA+IGgyOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tSE9WRVItQ09MT1IpO1xufVxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgPiAuZHJvcC1kb3duIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1CRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xufVxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgLmRyb3AtZG93bi52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSAuZHJvcC1kb3duID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSAuZHJvcC1kb3duID4gZGl2OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IT1ZFUi1DT0xPUik7XG59XG4uaGVhZGVyIC5wcm9qZWN0ID4gLmFjdGlvbnMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBnYXA6IDEwcHg7XG59XG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zID4gZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyA+IGltZyxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzID4gaW1nIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLyogbWFrZSBibGFjayBpY29uIGNvbG9yICMzMzMgKCAtLUJHLUNPTE9SICkgKi9cbiAgICBmaWx0ZXI6IGludmVydCgxOCUpIHNlcGlhKDElKSBzYXR1cmF0ZSg0MjgxJSkgaHVlLXJvdGF0ZSg0NWRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCg5MyUpO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyA+IGltZzpob3ZlciwgXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyA+IGltZzpob3ZlciB7XG4gICAgLyogbWFrZSBpY29uIGNvbG9yICM1NTUgKCAtLUhPVkVSLUNPTE9SICkgKi9cbiAgICBmaWx0ZXI6IGludmVydCgzMSUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgyMTg4JSkgaHVlLXJvdGF0ZSgxMzRkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCg4MiUpO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duLFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93biB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1CRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duLnZpc2libGUsXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyAuZHJvcC1kb3duLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duID4gZGl2LFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93biA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duID4gZGl2OmhvdmVyLFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93biA+IGRpdjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSE9WRVItQ09MT1IpO1xufVxuXG5cblxuLyogQ09OVEVOVCBTRUNUSU9OICovXG5cbi5jb250ZW50IHtcbiAgICBtYXJnaW46IDE1cHggMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1GRy1DT0xPUik7XG59XG4ubWFpbi5hbGwtbGlzdC12aWV3IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuLm1haW4uYWxsLWxpc3QtdmlldyA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG59XG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiA+IGgyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiA+IC5leHBhbmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgXG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgPiAuZXhwYW5kLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2IC5leHBhbmQgPiB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2IC5leHBhbmQgPiAuY2hlY2tsaXN0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDIwcHggMHB4IDUwcHggMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiAuZXhwYW5kIC5jaGVja2xpc3QgPiAuaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNXB4O1xufVxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgLmV4cGFuZCBidXR0b24ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICByaWdodDogMHB4O1xufVxuXG5cblxuLyogRk9STSBUTyBBREQgVE9ETyAqL1xuXG5kaWFsb2cge1xuICAgIG1heC1oZWlnaHQ6IDY1MHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nOiAyNXB4O1xuXG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1MHB4O1xuXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tQkctQ09MT1IpO1xuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xuXG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xufVxuZGlhbG9nID4gaW1nIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogMTVweDtcblxuICAgIC8qIC0tQkctQ09MT1IgKi9cbiAgICBmaWx0ZXI6IGludmVydCgxOCUpIHNlcGlhKDElKSBzYXR1cmF0ZSg0MjgxJSkgaHVlLXJvdGF0ZSg0NWRlZykgYnJpZ2h0bmVzcygxMDQlKSBjb250cmFzdCg5MyUpO1xufVxuZGlhbG9nID4gaW1nOmhvdmVyIHtcbiAgICAvKiAtLUhPVkVSLUNPTE9SICovXG4gICAgZmlsdGVyOiBpbnZlcnQoMzElKSBzZXBpYSgwJSkgc2F0dXJhdGUoMjE4OCUpIGh1ZS1yb3RhdGUoMTM0ZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoODIlKTtcbn1cbmRpYWxvZyA+IGgyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbmRpYWxvZyBmb3JtIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxNXB4O1xufVxuZGlhbG9nIGZvcm0gPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAyNXB4O1xufVxuZGlhbG9nIGZvcm0gPiBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuZGlhbG9nIGZvcm0gZGl2ID4gc2VsZWN0LFxuZGlhbG9nIGZvcm0gZGl2ID4gaW5wdXQge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5kaWFsb2cgZm9ybSBkaXYgPiBsYWJlbCxcbmRpYWxvZyBmb3JtIGRpdiA+IGJ1dHRvbiB7XG4gICAgd29yZC13cmFwOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5kaWFsb2cgZm9ybSBidXR0b24ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkctQ09MT1IpO1xufVxuZGlhbG9nIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSE9WRVItQ09MT1IpO1xufVxuZGlhbG9nIC5jcmVhdGVkLWNoZWNrcyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiA1MHB4O1xufVxuZGlhbG9nIC5jcmVhdGVkLWNoZWNrcyAuaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cbmRpYWxvZyAuY3JlYXRlZC1jaGVja3MgaW5wdXQge1xuICAgIHdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qIFJFU1BPTlNJVkVORVNTICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgICAvKiBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIH0gKi9cblxuICAgIC5oZWFkZXIgLnByb2plY3QgLnRpdGxlID4gaDIge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICAgIC5oZWFkZXIgLnByb2plY3QgLnRpdGxlIC5kcm9wLWRvd24gPiBkaXYge1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG4gICAgLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyA+IGltZyxcbiAgICAuaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyA+IGltZyB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxuXG4gICAgLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgPiBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cblxuICAgIGRpYWxvZyB7XG4gICAgICAgIG1pbi13aWR0aDogOTAlO1xuICAgICAgICBtaW4taGVpZ2h0OiA5MCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICBkaWFsb2cgZm9ybSA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgfVxuICAgIGRpYWxvZyBkaXYgPiBsYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgLmNoZWNrbGlzdC1jcmVhdGUgbGFiZWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsbUpBQW1KO0FBQ3ZKOzs7O0FBSUEsWUFBWTs7QUFFWjtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0lBRWhCLG1CQUFtQjs7SUFFbkIseUNBQXlDO0lBQ3pDLGdEQUFnRDtJQUNoRCwyQ0FBMkM7SUFDM0MsaURBQWlEO0lBQ2pELHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1COztJQUVuQixhQUFhO0lBQ2IsbUNBQW1DOztJQUVuQyxzQkFBc0I7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QUVmLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCOztJQUV0QixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxtQkFBbUI7O0FBRW5CO0lBQ0k7O09BRUc7O0lBRUg7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTs7UUFFSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGVBQWU7UUFDZix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2QixRQUFRO0lBQ1o7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuXFxuLyogVVRJTElUWSAqL1xcblxcbjpyb290IHtcXG4gICAgLS1CRy1DT0xPUjogIzMzMztcXG4gICAgLS1GRy1DT0xPUjogI2NjYztcXG5cXG4gICAgLS1IT1ZFUi1DT0xPUjogIzU1NTtcXG5cXG4gICAgLS1MT1ctUFJJT1JJVFktQ09MT1I6IGhzbCgxMDAsIDEwMCUsIDgwJSk7XFxuICAgIC0tTE9XLU1FRElVTS1QUklPUklUWS1DT0xPUjogaHNsKDIwMCwgMTAwJSwgODAlKTtcXG4gICAgLS1NRURJVU0tUFJJT1JJVFktQ09MT1I6IGhzbCg1MCwgMTAwJSwgODAlKTtcXG4gICAgLS1NRURJVU0tSElHSC1QUklPUklUWS1DT0xPUjogaHNsKDMwMCwgMTAwJSwgODAlKTtcXG4gICAgLS1ISUdILVBSSU9SSVRZLUNPTE9SOiBoc2woMCwgMTAwJSwgODAlKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG59XFxuXFxuXFxuXFxuLyogUFJJT1JJVFkgQ09MT1IgQ0xBU1NFUyAqL1xcblxcbi5sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1MT1ctUFJJT1JJVFktQ09MT1IpO1xcbn1cXG4ubG93LW1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUxPVy1NRURJVU0tUFJJT1JJVFktQ09MT1IpO1xcbn1cXG4ubWVkaXVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUVESVVNLVBSSU9SSVRZLUNPTE9SKTtcXG59XFxuLm1lZGl1bS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTUVESVVNLUhJR0gtUFJJT1JJVFktQ09MT1IpO1xcbn1cXG4uaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhJR0gtUFJJT1JJVFktQ09MT1IpO1xcbn1cXG5cXG5cXG5cXG4vKiBIRUFERVIgU0VDVElPTiAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1GRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgPiAucHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG59XFxuLmhlYWRlciAucHJvamVjdCAudGl0bGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlID4gaDIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcblxcbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSA+IGgyOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLUhPVkVSLUNPTE9SKTtcXG59XFxuLmhlYWRlciAucHJvamVjdCAudGl0bGUgPiAuZHJvcC1kb3duIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGxlZnQ6IDA7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLUJHLUNPTE9SKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSAuZHJvcC1kb3duLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLnRpdGxlIC5kcm9wLWRvd24gPiBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC50aXRsZSAuZHJvcC1kb3duID4gZGl2OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1IT1ZFUi1DT0xPUik7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgPiAuYWN0aW9ucyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweCAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgPiBkaXYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyxcXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93ID4gaW1nLFxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgLyogbWFrZSBibGFjayBpY29uIGNvbG9yICMzMzMgKCAtLUJHLUNPTE9SICkgKi9cXG4gICAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSgxJSkgc2F0dXJhdGUoNDI4MSUpIGh1ZS1yb3RhdGUoNDVkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoOTMlKTtcXG59XFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyA+IGltZzpob3ZlciwgXFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgPiBpbWc6aG92ZXIge1xcbiAgICAvKiBtYWtlIGljb24gY29sb3IgIzU1NSAoIC0tSE9WRVItQ09MT1IgKSAqL1xcbiAgICBmaWx0ZXI6IGludmVydCgzMSUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgyMTg4JSkgaHVlLXJvdGF0ZSgxMzRkZWcpIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCg4MiUpO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93IC5kcm9wLWRvd24sXFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgLmRyb3AtZG93biB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgcmlnaHQ6IDA7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLUJHLUNPTE9SKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcbn1cXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5kb3duLWFycm93IC5kcm9wLWRvd24udmlzaWJsZSxcXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyAuZHJvcC1kb3duLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLmRvd24tYXJyb3cgLmRyb3AtZG93biA+IGRpdixcXG4uaGVhZGVyIC5wcm9qZWN0IC5hY3Rpb25zIC5zZXR0aW5ncyAuZHJvcC1kb3duID4gZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyAuZHJvcC1kb3duID4gZGl2OmhvdmVyLFxcbi5oZWFkZXIgLnByb2plY3QgLmFjdGlvbnMgLnNldHRpbmdzIC5kcm9wLWRvd24gPiBkaXY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUhPVkVSLUNPTE9SKTtcXG59XFxuXFxuXFxuXFxuLyogQ09OVEVOVCBTRUNUSU9OICovXFxuXFxuLmNvbnRlbnQge1xcbiAgICBtYXJnaW46IDE1cHggMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1GRy1DT0xPUik7XFxufVxcbi5tYWluLmFsbC1saXN0LXZpZXcge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5tYWluLmFsbC1saXN0LXZpZXcgPiBkaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgPiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgPiAuZXhwYW5kIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgPiAuZXhwYW5kLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2IC5leHBhbmQgPiB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiAuZXhwYW5kID4gLmNoZWNrbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAyMHB4IDBweCA1MHB4IDBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5tYWluLmFsbC1saXN0LXZpZXcgZGl2IC5leHBhbmQgLmNoZWNrbGlzdCA+IC5pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG4ubWFpbi5hbGwtbGlzdC12aWV3IGRpdiAuZXhwYW5kIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxufVxcblxcblxcblxcbi8qIEZPUk0gVE8gQUREIFRPRE8gKi9cXG5cXG5kaWFsb2cge1xcbiAgICBtYXgtaGVpZ2h0OiA2NTBweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcblxcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDUwcHg7XFxuXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLUJHLUNPTE9SKTtcXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcblxcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcXG59XFxuZGlhbG9nID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIHJpZ2h0OiAxNXB4O1xcblxcbiAgICAvKiAtLUJHLUNPTE9SICovXFxuICAgIGZpbHRlcjogaW52ZXJ0KDE4JSkgc2VwaWEoMSUpIHNhdHVyYXRlKDQyODElKSBodWUtcm90YXRlKDQ1ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDkzJSk7XFxufVxcbmRpYWxvZyA+IGltZzpob3ZlciB7XFxuICAgIC8qIC0tSE9WRVItQ09MT1IgKi9cXG4gICAgZmlsdGVyOiBpbnZlcnQoMzElKSBzZXBpYSgwJSkgc2F0dXJhdGUoMjE4OCUpIGh1ZS1yb3RhdGUoMTM0ZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoODIlKTtcXG59XFxuZGlhbG9nID4gaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxufVxcbmRpYWxvZyBmb3JtIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcbmRpYWxvZyBmb3JtID4gZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMjVweDtcXG59XFxuZGlhbG9nIGZvcm0gPiBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuZGlhbG9nIGZvcm0gZGl2ID4gc2VsZWN0LFxcbmRpYWxvZyBmb3JtIGRpdiA+IGlucHV0IHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbmRpYWxvZyBmb3JtIGRpdiA+IGxhYmVsLFxcbmRpYWxvZyBmb3JtIGRpdiA+IGJ1dHRvbiB7XFxuICAgIHdvcmQtd3JhcDogbm9uZTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuZGlhbG9nIGZvcm0gYnV0dG9uIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkctQ09MT1IpO1xcbn1cXG5kaWFsb2cgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tSE9WRVItQ09MT1IpO1xcbn1cXG5kaWFsb2cgLmNyZWF0ZWQtY2hlY2tzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5kaWFsb2cgLmNyZWF0ZWQtY2hlY2tzIC5pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuZGlhbG9nIC5jcmVhdGVkLWNoZWNrcyBpbnB1dCB7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogUkVTUE9OU0lWRU5FU1MgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XFxuICAgIC8qIGJvZHkge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICB9ICovXFxuXFxuICAgIC5oZWFkZXIgLnByb2plY3QgLnRpdGxlID4gaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuICAgIC5oZWFkZXIgLnByb2plY3QgLnRpdGxlIC5kcm9wLWRvd24gPiBkaXYge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIH1cXG4gICAgLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuZG93bi1hcnJvdyA+IGltZyxcXG4gICAgLmhlYWRlciAucHJvamVjdCAuYWN0aW9ucyAuc2V0dGluZ3MgPiBpbWcge1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4uYWxsLWxpc3QtdmlldyBkaXYgPiBoMiB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcblxcbiAgICBkaWFsb2cge1xcbiAgICAgICAgbWluLXdpZHRoOiA5MCU7XFxuICAgICAgICBtaW4taGVpZ2h0OiA5MCU7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgfVxcbiAgICBkaWFsb2cgZm9ybSA+IGRpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgfVxcbiAgICBkaWFsb2cgZGl2ID4gbGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuICAgIC5jaGVja2xpc3QtY3JlYXRlIGxhYmVsIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhZGRUb2RvVG9BbGxQcm9qZWN0cyB9IGZyb20gJy4vdHJhY2tBbGxQcm9qZWN0cy5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZT1cIlByb2plY3RcIikge1xuXG4gICAgZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCkge1xuICAgICAgICBsZXQgdG9kb09iamVjdCA9IHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzYyxcbiAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIGNoZWNrbGlzdFxuICAgICAgICB9O1xuXG4gICAgICAgIGFkZFRvZG9Ub0FsbFByb2plY3RzKHRoaXMubmFtZSwgdGl0bGUsIHRvZG9PYmplY3QpO1xuICAgICAgICB0aGlzW3RpdGxlXSA9IHRvZG9PYmplY3Q7XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIHsgbmFtZSwgYWRkVG9kbyB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCB9OyIsImltcG9ydCBkb3duQXJyb3dQbmcgZnJvbSAnLi9kb3duLWFycm93LnN2Zyc7XG5pbXBvcnQgc2V0dGluZ3NQbmcgZnJvbSAnLi9zZXR0aW5ncy1pY29uLnN2Zyc7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gJy4vdHJhY2tBbGxQcm9qZWN0cyc7XG5pbXBvcnQgQ2FuY2VsU3ZnIGZyb20gJy4vY2FuY2VsLnN2Zyc7XG5cbmNvbnN0IGhhbmRsZURPTSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGxldCBoZWFkZXIsIHByb2plY3QsIHByb2plY3RUaXRsZSwgYWN0aW9ucywgZG93bkFycm93LCBhcnJvd01lbnUsIHNldHRpbmdzLCBzZXR0aW5nc01lbnU7XG4gICAgbGV0IGgyLCBwcm9qZWN0TWVudTtcbiAgICBsZXQgbWFpbjtcbiAgICBsZXQgYXJyb3dNZW51SXRlbXMgPSBbJ0FkZC1Ub2RvJ107XG4gICAgbGV0IHNldHRpbmdzTWVudUl0ZW1zID0gWydzZXR0aW5ncycsICdtZW51JywgJ29wdGlvbnMnXTtcbiAgICBsZXQgcHJvamVjdE1lbnVJdGVtcyA9IFtdO1xuXG4gICAgbGV0IHByaW9yaXR5Q2xhc3NlcyA9IFtcbiAgICAgICAgJ2xvdycsXG4gICAgICAgICdsb3cnLFxuICAgICAgICAnbG93LW1lZGl1bScsXG4gICAgICAgICdsb3ctbWVkaXVtJyxcbiAgICAgICAgJ2xvdy1tZWRpdW0nLFxuICAgICAgICAnbWVkaXVtJyxcbiAgICAgICAgJ21lZGl1bS1oaWdoJyxcbiAgICAgICAgJ21lZGl1bS1oaWdoJyxcbiAgICAgICAgJ21lZGl1bS1oaWdoJyxcbiAgICAgICAgJ2hpZ2gnXG4gICAgXTtcblxuICAgIGNvbnN0IGFkZE9wdGlvbnNUb01lbnUgPSAoYXBwZW5kVG8sIGFycikgPT4ge1xuICAgICAgICBmb3IgKGxldCBpIGluIGFycikge1xuICAgICAgICAgICAgbGV0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdG1wLmNsYXNzTGlzdC5hZGQoYCR7YXJyW2ldfWApO1xuICAgICAgICAgICAgdG1wLmlubmVyVGV4dCA9IGAke2FycltpXS5yZXBsYWNlKC8tL2csICcgJyl9YDtcbiAgICAgICAgICAgIGFwcGVuZFRvLmFwcGVuZENoaWxkKHRtcCk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUljb24gPSAoaW1nLCBhcHBlbmR0bykgPT4ge1xuICAgICAgICBsZXQgdG1wID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRtcC5zcmMgPSBpbWc7XG4gICAgICAgIHRtcC5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgIHRtcC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIGZhbHNlKTtcbiAgICAgICAgYXBwZW5kdG8uYXBwZW5kQ2hpbGQodG1wKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlUHJpb3JpdHlMZXZlbCA9IChlbGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gMTApIHsgcHJpb3JpdHktLSB9O1xuICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChwcmlvcml0eUNsYXNzZXNbcHJpb3JpdHldKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdERpdiA9ICgpID0+IHtcbiAgICAgICAgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgIGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKGgyKTtcbiAgICAgICAgcHJvamVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdE1lbnUuY2xhc3NMaXN0LmFkZCgnZHJvcC1kb3duJyk7XG4gICAgICAgIHByb2plY3RNZW51SXRlbXMgPSBhbGxQcm9qZWN0cy5tYXAobyA9PiBvLm5hbWUpO1xuICAgICAgICBwcm9qZWN0TWVudUl0ZW1zLnB1c2goJ0FsbC1MaXN0LVZpZXcnKTtcbiAgICAgICAgYWRkT3B0aW9uc1RvTWVudShwcm9qZWN0TWVudSwgcHJvamVjdE1lbnVJdGVtcyk7XG4gICAgICAgIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChwcm9qZWN0TWVudSk7XG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlQWN0aW9uc0RpdiA9ICgpID0+IHtcbiAgICAgICAgYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhY3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2FjdGlvbnMnKTtcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChhY3Rpb25zKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlRG93bkFycm93TWVudSA9IChhcHBlbmRUbykgPT4ge1xuICAgICAgICBkb3duQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY3JlYXRlSWNvbihkb3duQXJyb3dQbmcsIGRvd25BcnJvdyk7XG4gICAgICAgIGRvd25BcnJvdy5jbGFzc0xpc3QuYWRkKCdkb3duLWFycm93Jyk7XG4gICAgICAgIGFycm93TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhcnJvd01lbnUuY2xhc3NMaXN0LmFkZCgnZHJvcC1kb3duJyk7XG4gICAgICAgIGFkZE9wdGlvbnNUb01lbnUoYXJyb3dNZW51LCBhcnJvd01lbnVJdGVtcyk7XG4gICAgICAgIGRvd25BcnJvdy5hcHBlbmRDaGlsZChhcnJvd01lbnUpO1xuICAgICAgICBhcHBlbmRUby5hcHBlbmRDaGlsZChkb3duQXJyb3cpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVTZXR0aW5nc01lbnUgPSAoYXBwZW5kVG8pID0+IHtcbiAgICAgICAgc2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY3JlYXRlSWNvbihzZXR0aW5nc1BuZywgc2V0dGluZ3MpO1xuICAgICAgICBzZXR0aW5ncy5jbGFzc0xpc3QuYWRkKCdzZXR0aW5ncycpO1xuICAgICAgICBzZXR0aW5nc01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2V0dGluZ3NNZW51LmNsYXNzTGlzdC5hZGQoJ2Ryb3AtZG93bicpO1xuICAgICAgICBhZGRPcHRpb25zVG9NZW51KHNldHRpbmdzTWVudSwgc2V0dGluZ3NNZW51SXRlbXMpO1xuICAgICAgICBzZXR0aW5ncy5hcHBlbmRDaGlsZChzZXR0aW5nc01lbnUpO1xuICAgICAgICBhcHBlbmRUby5hcHBlbmRDaGlsZChzZXR0aW5ncyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoaGVhZGVyLCBjb250ZW50KTtcblxuICAgICAgICBjcmVhdGVQcm9qZWN0RGl2KCk7XG5cbiAgICAgICAgY3JlYXRlQWN0aW9uc0RpdigpO1xuICAgICAgICBjcmVhdGVEb3duQXJyb3dNZW51KGFjdGlvbnMpO1xuICAgICAgICBjcmVhdGVTZXR0aW5nc01lbnUoYWN0aW9ucyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZU1haW5EaXYgPSAoKSA9PiB7XG4gICAgICAgIC8vIGNyZWF0ZSBtYWluIGRpdiAoIGRpdiB3aXRoIGFsbCBjb250ZW50IClcbiAgICAgICAgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIC8vIG1haW4gdG9kbyBlbGVtZW50IHdpdGggdGl0bGUgYW5kIGR1ZSBkYXRlXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGRpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgZGl2VGl0bGUuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcbiAgICAgICAgbGV0IGRpdkR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBkaXZEdWVEYXRlLmlubmVyVGV4dCA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRpdlRpdGxlKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRpdkR1ZURhdGUpO1xuICAgICAgICB1cGRhdGVQcmlvcml0eUxldmVsKGRpdiwgdG9kby5wcmlvcml0eSk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICAvLyBleHBhbmQgZWxlbWVudCBmb3Igd2hlbiB0b2RvIGNsaWNrZWRcbiAgICAgICAgbGV0IGV4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBleHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kJylcbiAgICAgICAgdXBkYXRlUHJpb3JpdHlMZXZlbChleHBhbmQsIHRvZG8ucHJpb3JpdHkpO1xuXG4gICAgICAgIC8vIGFkZCBkZXNjcmlwdGlvbiBvbiBleHBhbmQgZWxlbWVudFxuICAgICAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGRlc2MudG9kbyA9IHRvZG87IC8vdGhpcyBhc3NvY2NpYXRlcyB0aGUgZWxlbWVudCB3aXRoIHRoZSB0b2RvIG9iamVjdFxuICAgICAgICBkZXNjLmlubmVyVGV4dCA9IHRvZG8uZGVzYztcbiAgICAgICAgZXhwYW5kLmFwcGVuZENoaWxkKGRlc2MpO1xuXG4gICAgICAgIC8vIGFkZCBjaGVja2xpc3Qgb24gZXhwYW5kIGVsZW1lbnRcbiAgICAgICAgbGV0IGNoZWNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaGVja0xpc3QuY2xhc3NMaXN0LmFkZCgnY2hlY2tsaXN0Jyk7XG5cbiAgICAgICAgdG9kby5jaGVja2xpc3QuZm9yRWFjaChvYmplY3QgPT4gey8vYXJyYXkgb2Ygb2JqZWN0c1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG9iamVjdCkge1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICBjaGVjay5pZCA9IGtleTtcbiAgICAgICAgICAgICAgICBjaGVjay5uYW1lID0ga2V5O1xuICAgICAgICAgICAgICAgIGNoZWNrLnZhbHVlID0ga2V5O1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3Rba2V5XSkgeyBjaGVjay5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAndHJ1ZScpIH07XG5cbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywga2V5KTtcbiAgICAgICAgICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBrZXkucmVwbGFjZSgvXy9nLCAnICcpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICAgICAgICAgICAgICBpdGVtLnRvZG8gPSBvYmplY3Q7XG4gICAgICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChjaGVjayk7XG4gICAgICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgICAgICAgICBjaGVja0xpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZXhwYW5kLmFwcGVuZENoaWxkKGNoZWNrTGlzdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFkZCBkZWxldGUgdG9kbyBidXR0b25cbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4uaW5uZXJUZXh0ID0gJ0RlbGV0ZSBUb2RvJztcbiAgICAgICAgYnRuLnRvZG8gPSB0b2RvO1xuICAgICAgICBidG4uZGVsVG9kbyA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vc2VhcmNoIGFsbFByb2plY3RzIGFycmF5IGZvciB0b2RvIGFuZCByZW1vdmUgaXRcbiAgICAgICAgICAgIGFsbFByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBidG4udG9kby50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByb2plY3Rba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGV4cGFuZC5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChleHBhbmQpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRUb2RvRm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5tZXRob2QgPSAnZGlhbG9nJztcbiAgICAgICAgY3JlYXRlSWNvbihDYW5jZWxTdmcsIGRpYWxvZyk7XG5cbiAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoMi5pbm5lclRleHQgPSAnQWRkIFRvZG8nO1xuICAgICAgICBkaWFsb2cuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXNlbGVjdCcpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcm9qZWN0TGFiZWwuaW5uZXJUZXh0ID0gJ1Byb2plY3Q6J1xuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHByb2plY3RTZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYWxsUHJvamVjdHMpIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBhbGxQcm9qZWN0c1trZXldLm5hbWUucmVwbGFjZSgvLS9nLCAnICcpO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9O1xuICAgICAgICBwcm9qZWN0U2VsZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgICAgIHByb2plY3RTZWxlY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdERpdik7XG5cbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZUlucHV0RGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZTonO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIHRpdGxlSW5wdXREaXYuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIHRpdGxlSW5wdXREaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dERpdik7XG5cbiAgICAgICAgY29uc3QgZGVzY0lucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdkZXNjLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRlc2NMYWJlbC5pbm5lclRleHQgPSAnRGVzY3JpcHRpb246JztcbiAgICAgICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGVzY0lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgZGVzY0lucHV0RGl2LmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgICAgIGRlc2NJbnB1dERpdi5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NJbnB1dERpdik7XG5cbiAgICAgICAgY29uc3QgZGF0ZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGVJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdkYXRlLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlIERhdGU6JztcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGRhdGVJbnB1dERpdi5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgICAgICBkYXRlSW5wdXREaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXREaXYpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1pbnB1dCcpO1xuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSAnUHJpb3JpdHkgTGV2ZWw6JztcbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByaW9yaXR5SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBwcmlvcml0eUlucHV0LnR5cGUgPSAnbnVtYmVyJztcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5taW4gPSAwXG4gICAgICAgIHByaW9yaXR5SW5wdXQubWF4ID0gMTBcbiAgICAgICAgcHJpb3JpdHlJbnB1dERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0RGl2KTtcblxuICAgICAgICBjb25zdCBjaGVja2xpc3RDcmVhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2NoZWNrbGlzdC1jcmVhdGUnKTtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0Q3JlYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjaGVja2xpc3RDcmVhdGVMYWJlbC5pbm5lclRleHQgPSAnQ3JlYXRlIENoZWNrbGlzdDonO1xuICAgICAgICBjaGVja2xpc3RDcmVhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjaGVja0lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdENyZWF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlSW5wdXQuaWQgPSAnY2hlY2tJbnB1dCc7XG4gICAgICAgIGNoZWNrbGlzdENyZWF0ZUlucHV0Lm1heExlbmd0aCA9IDMwO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RDcmVhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgY2hlY2tsaXN0Q3JlYXRlQnRuLmlubmVyVGV4dCA9ICdOZXcgQ2hlY2snO1xuICAgICAgICBjaGVja2xpc3RDcmVhdGVEaXYuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0Q3JlYXRlTGFiZWwpO1xuICAgICAgICBjaGVja2xpc3RDcmVhdGVEaXYuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0Q3JlYXRlSW5wdXQpO1xuICAgICAgICBjaGVja2xpc3RDcmVhdGVEaXYuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0Q3JlYXRlQnRuKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjaGVja2xpc3RDcmVhdGVEaXYpO1xuICAgICAgICBjb25zdCBjaGVja2xpc3RDcmVhdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrbGlzdENyZWF0ZWQuY2xhc3NMaXN0LmFkZCgnY3JlYXRlZC1jaGVja3MnKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjaGVja2xpc3RDcmVhdGVkKTtcblxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdCcpO1xuICAgICAgICBzdWJtaXRCdG4uaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuXG5cbiAgICAgICAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGRpYWxvZyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFsbExpc3RWaWV3ID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWhlYWRlcikgeyBjcmVhdGVIZWFkZXIoKSB9XG4gICAgICAgIGVsc2UgeyBjb250ZW50LmlubmVyVGV4dCA9ICcnIH07XG5cbiAgICAgICAgaDIuaW5uZXJUZXh0ID0gJ0FsbCBMaXN0IFZpZXcnO1xuXG4gICAgICAgIGNyZWF0ZU1haW5EaXYoKTtcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdhbGwtbGlzdC12aWV3Jyk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGFsbCB0b2RvcyBmcm9tIGFsbCBwcm9qZWN0cyBvbiBzY3JlZW5cbiAgICAgICAgYWxsUHJvamVjdHMuZmlsdGVyKG9iamVjdCA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ25hbWUnICYmIGtleSAhPT0gJ2FkZFRvZG8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclRvZG8ob2JqZWN0W2tleV0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3RWaWV3ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIG1haW4uaW5uZXJUZXh0ID0gJyc7XG5cbiAgICAgICAgaDIuaW5uZXJUZXh0ID0gcHJvamVjdE5hbWUucmVwbGFjZSgvLS9nLCAnICcpO1xuXG4gICAgICAgIC8vZmlsdGVyIGFsbFByb2plY3RzIGZvciBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWRcbiAgICAgICAgbGV0IHJlc3VsdCA9IGFsbFByb2plY3RzLmZpbHRlcihvYmplY3QgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9yZW5kZXIgYWxsIHRvZG9zIGZyb20gdGhlIHNlbGVjdGVkIHByb2plY3RcbiAgICAgICAgcmVzdWx0LmZpbHRlcihvYmplY3QgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICduYW1lJyAmJiBrZXkgIT09ICdhZGRUb2RvJykge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJUb2RvKG9iamVjdFtrZXldKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG5cblxuXG4gICAgXG5cblxuICAgIHJldHVybiB7IGFsbExpc3RWaWV3LCBwcm9qZWN0VmlldywgYWRkVG9kb0Zvcm0gfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGhhbmRsZURPTSB9O1xuIiwiXG5sZXQgYWxsUHJvamVjdHMgPSBbXTtcblxuZnVuY3Rpb24gdHJhY2tBbGxQcm9qZWN0cyhwcm9qZWN0KSB7XG4gICAgYWxsUHJvamVjdHMucHVzaCggcHJvamVjdCApO1xufTtcblxuZnVuY3Rpb24gYWRkVG9kb1RvQWxsUHJvamVjdHMocHJvamVjdE5hbWUsIHRvZG9OYW1lLCB0b2RvT2JqZWN0KSB7XG4gICAgYWxsUHJvamVjdHMuZmlsdGVyKG9iamVjdCA9PiB7XG4gICAgICAgIGlmIChvYmplY3QucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIG9iamVjdFt0b2RvTmFtZV0gPSB0b2RvT2JqZWN0O1xuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxuZXhwb3J0IHsgdHJhY2tBbGxQcm9qZWN0cywgYWxsUHJvamVjdHMsIGFkZFRvZG9Ub0FsbFByb2plY3RzIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tICcuL2NyZWF0ZVByb2plY3QuanMnO1xuaW1wb3J0IHsgaGFuZGxlRE9NIH0gZnJvbSAnLi9oYW5kbGVET00uanMnO1xuaW1wb3J0IHsgdHJhY2tBbGxQcm9qZWN0cyB9IGZyb20gJy4vdHJhY2tBbGxQcm9qZWN0cy5qcyc7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gJy4vdHJhY2tBbGxQcm9qZWN0cy5qcyc7XG5cbi8vIC8vIGNyZWF0ZSBuZXcgcHJvamVjdCBvYmplY3QgdG8gc3RvcmUgYWxsIHRvZG9zXG4vLyAvLyBhbGwgc3BhY2VzIGluIG5hbWUgbXVzdCBiZSByZXBsYWNlZCB3aXRoIGRhc2hlc1xuLy8gbGV0IHRlc3QgPSBjcmVhdGVQcm9qZWN0KCdQcm9qZWN0LU5hbWUnKTtcblxuLy8gLy8gYWRkIHRvZG8gdG8gdGhlIHByb2plY3Qgb2JqZWN0IHVzaW5nIGFkZFRvZG8gbWV0aG9kIGFuZCBjcmVhdGVUb2RvIG1vZHVsZVxuLy8gdGVzdC5hZGRUb2RvKCd0aXRsZScsICdkZXNjcmlwdGlvbicsICdkdWVkYXRlJywgJ3ByaW9yaXR5JywgJ2NoZWNrbGlzdCcpO1xuXG4vLyAvLyByZXN1bHQgaXMgdGhlIHByb2plY3Qgb2JqZWN0IHdpdGggYWxsIHRvZG9zIHN0b3JlZCBhcyBvYmplY3RzXG4vLyBjb25zb2xlLmxvZyh0ZXN0KTtcblxuXG4vKlxuKioqbmVlZCB0byBmaXggaG93IGRpYWxvZ3Mgd29yayBpZGsgaG93IHRoZXkgd29yayBidXQgd2lsbCBjb21lIGJhY2sqKipcbiovXG5cblxuXG5sZXQgdGVzdCA9IGNyZWF0ZVByb2plY3QoJ1Rlc3QtUHJvamVjdCcpOy8vIHN0b3JlIG5hbWVzIHdpdGggZGFzaGVzIGFkZCBzcGFjZSBsYXRlclxudHJhY2tBbGxQcm9qZWN0cyh0ZXN0KTtcblxuLy8gc3RvcmUgY2hlY2tsaXN0IGtleXMgd2l0aCB1bmRlcnNjb3JlcyBpbnN0ZWFkIG9mIHNwYWNlcyBhbmQgYWRkIHRoZW0gbGF0ZXJcbmxldCBleGFtcGxlQ2hlY2tsaXN0ID0gW1xuICAgIHtTdGVwX09uZTogdHJ1ZX0sXG4gICAge1N0ZXBfVHdvOiBmYWxzZX0sXG4gICAge1Rlc3RpbmdfTG9uZ2VyX25hbWVfdG9fU2VlX1doYXRfSGFwcGVuczogZmFsc2V9LFxuICAgIHtTdGVwX0ZvdXI6IHRydWV9LFxuICAgIHtTdGVwX0ZpdmU6IGZhbHNlfSxcbiAgICB7U3RlcF9TaXg6IGZhbHNlfSxcbiAgICB7U3RlcF9TZXZlbjogZmFsc2V9LFxuICAgIHtTdGVwX0VpZ2h0OiBmYWxzZX0sXG4gICAge1N0ZXBfTmluZTogZmFsc2V9LFxuICAgIHtTdGVwX1RlbjogZmFsc2V9XG5dOyAvLyBtYWtlIHN1cmUgZm9ybSByZXF1aXJlcyBpbnB1dCBhbmQgZG9lc250IGxldCB5b3Ugc3VibWl0IHVuZGVmaW5lZCBzdHVmZlxuXG50ZXN0LmFkZFRvZG8oJ3RpdGxlMScsICdleGFtcGxlIHRleHQnLCAnZHVlJywgMiwgZXhhbXBsZUNoZWNrbGlzdCk7XG50ZXN0LmFkZFRvZG8oJ3RpdGxlMicsICdkZXNjJywgJ2R1ZScsIDYsIFt7YWJjZDogZmFsc2V9XSk7XG50ZXN0LmFkZFRvZG8oJ3RpdGxlMycsICdkZXNjJywgJ2R1ZScsIDAsIFt7ZWZnaDogZmFsc2V9XSk7XG5cbmxldCB0ZXN0dHdvID0gY3JlYXRlUHJvamVjdCgnQW5vdGhlci1Qcm9qZWN0Jyk7XG50cmFja0FsbFByb2plY3RzKHRlc3R0d28pO1xuXG50ZXN0dHdvLmFkZFRvZG8oJ3RpdGxlNCcsICdkZXNjJywgJ2R1ZScsIDUsIFt7aWprbDogZmFsc2V9XSk7XG50ZXN0dHdvLmFkZFRvZG8oJ3RpdGxlNScsICdkZXNjJywgJ2R1ZScsIDEwLCBbe21ub3A6IGZhbHNlfV0pO1xudGVzdHR3by5hZGRUb2RvKCd0aXRsZTYnLCAnZGVzYycsICdkdWUnLCAzLCBbe3Fyc3Q6IGZhbHNlfV0pO1xuXG5oYW5kbGVET00uYWxsTGlzdFZpZXcoKTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbmNvbnN0IGRvd25BcnJvd0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3duLWFycm93ID4gaW1nJyk7XG5jb25zdCBzZXR0aW5nc0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncyA+IGltZycpO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZSA+IGgyJyk7XG5jb25zdCB0aXRsZURyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlID4gLmRyb3AtZG93bicpO1xuXG5sZXQgdGV4dGFyZWEgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEnKV07XG5sZXQgZXhwYW5kID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluID4gZGl2ID4gLmV4cGFuZCcpXTtcbmxldCBpdGVtcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tsaXN0ID4gLml0ZW0nKV07XG5sZXQgZGVsQnRucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwYW5kID4gYnV0dG9uJyldO1xubGV0IGFycm93T3B0aW9ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG93bi1hcnJvdyAuZHJvcC1kb3duID4gZGl2JyldO1xubGV0IHNldHRpbmdzT3B0aW9ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2V0dGluZ3MgLmRyb3AtZG93biA+IGRpdicpXTtcbmxldCBuZXdDaGVja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3QtY3JlYXRlIGJ1dHRvbicpO1xuXG5kb3duQXJyb3dJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbn0pO1xuXG5zZXR0aW5nc0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xufSk7XG5cbnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC5uZXh0U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7IFxufSk7XG5cbnRpdGxlRHJvcERvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdBbGwtTGlzdC1WaWV3Jykge1xuICAgICAgICBoYW5kbGVET00uYWxsTGlzdFZpZXcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBoYW5kbGVET00ucHJvamVjdFZpZXcoZS50YXJnZXQuY2xhc3NOYW1lKTtcbiAgICB9O1xufSk7XG5cbnRleHRhcmVhLmZvckVhY2goYXJlYSA9PiB7XG4gICAgYXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnRvZG8uZGVzYyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbihlKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCkgfTtcbmZ1bmN0aW9uIHRvZ2dsZVZpc2libGUoZSkge1xuICAgIC8vaWYgZS50YXJnZXQuY2hpbGRyZW5bMl0gaXMgdW5kZWZpbmVkIHRoZW4gaSBtdXN0dmUgY2xpY2tlZCBhbiBoMiBjaGlsZCBvZiB0aGUgdG9kbyBlbGVtZW50XG4gICAgaWYgKGUudGFyZ2V0LmNoaWxkcmVuWzJdKSB7IGUudGFyZ2V0LmNoaWxkcmVuWzJdLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKSB9XG4gICAgZWxzZSB7IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMl0uY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpIH07XG59O1xuZXhwYW5kLmZvckVhY2goZXhwYW5kZWQgPT4ge1xuICAgIGV4cGFuZGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcFByb3BhZ2F0aW9uKTtcbiAgICBleHBhbmRlZC5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVmlzaWJsZSk7XG59KTtcblxuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBpdGVtLnRvZG8pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS50b2RvW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS50b2RvW2tleV0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnRvZG9ba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gZGVsZXRlVG9kbyhlKSB7XG4gICAgZS50YXJnZXQuZGVsVG9kbygpO1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLnJlbW92ZUNoaWxkKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG59O1xuZGVsQnRucy5mb3JFYWNoKGJ0biA9PiB7IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvZG8pIH0pO1xuXG5mdW5jdGlvbiBzdWJtaXRGb3JtKGUpIHtcbiAgICBsZXQgZm9ybSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IGNyZWF0ZWRDaGVja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtID4gLmNyZWF0ZWQtY2hlY2tzIC5pdGVtJyk7XG4gICAgbGV0IGgyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nID4gaDInKTtcblxuXG4gICAgaWYgKGgyLmlubmVyVGV4dCA9PT0gJ0FkZCBUb2RvJykge1xuICAgICAgICBsZXQgc2VsZWN0ID0gZm9ybVswXS52YWx1ZTtcbiAgICAgICAgbGV0IHRpdGxlID0gZm9ybVsxXS52YWx1ZTtcbiAgICAgICAgbGV0IGRlc2MgPSBmb3JtWzJdLnZhbHVlO1xuICAgICAgICBsZXQgZHVlID0gZm9ybVszXS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZm9ybVs0XS52YWx1ZTtcbiAgICAgICAgbGV0IGNoZWNrbGlzdCA9IFtdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5KTtcbiAgICAgICAgLy8gaWYgYWxsIHJlcXVpcmVkIGZpZWxkcyBhcmVudCBlbXB0eVxuICAgICAgICBpZiAodGl0bGUgIT09ICcnICYmIGRlc2MgIT09ICcnICYmIGR1ZSAhPT0gJycgJiYgcHJpb3JpdHkgIT09ICcnKSB7XG4gICAgICAgICAgICByZW1vdmVEaWFsb2coKTtcblxuICAgICAgICAgICAgY3JlYXRlZENoZWNrcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IGl0ZW0uY2hpbGRyZW5bMF0uY2hlY2tlZDtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBpdGVtLmNoaWxkcmVuWzFdLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICBjaGVja2xpc3QucHVzaCh7W2xhYmVsXTogY2hlY2t9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lID09PSBzZWxlY3QucmVwbGFjZSgvIC9nLCAnLScpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5hZGRUb2RvKHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5LCBjaGVja2xpc3QpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgIH07XG59O1xuZnVuY3Rpb24gbmV3Q2hlY2soZSkge1xuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnByZXZpb3VzU2libGluZy52YWx1ZTtcbiAgICBsZXQgY3JlYXRlZENoZWNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVkLWNoZWNrcycpO1xuICAgIGxldCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3JlYXRlZC1jaGVja3MgbGFiZWwnKTtcblxuICAgIC8vIG1ha2Ugc3VyZSBubyBkdXBsaWNhdGUgbGFiZWxzIGFuZCBjaGVja2JveGVzXG4gICAgbGFiZWxzLmZvckVhY2gobGFiZWwgPT4ge1xuICAgICAgICBpZiAobGFiZWwuaW5uZXJUZXh0ID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgICAgIGxldCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBjaGVjay5pZCA9IGAke3ZhbHVlLnJlcGxhY2UoLyAvZywgJ18nKX1gO1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGAke3ZhbHVlLnJlcGxhY2UoLyAvZywgJ18nKX1gKTtcbiAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gdmFsdWU7XG5cbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChjaGVjayk7XG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBjcmVhdGVkQ2hlY2tzRGl2LmFwcGVuZENoaWxkKGl0ZW0pO1xuXG4gICAgICAgIGUudGFyZ2V0LnByZXZpb3VzU2libGluZy52YWx1ZSA9ICcnO1xuICAgIH07XG59O1xuZnVuY3Rpb24gcmVtb3ZlRGlhbG9nKCkge1xuICAgIGxldCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKTtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICBkaWFsb2cuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkaWFsb2cuaW5uZXJIVE1MID0gJyc7XG4gICAgbmV3Q2hlY2tCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdDaGVjayk7XG59O1xuZnVuY3Rpb24gYXJyb3dDbGljayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnQWRkLVRvZG8nKSkge1xuICAgICAgICBsZXQgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyk7XG4gICAgICAgIGRpYWxvZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBoYW5kbGVET00uYWRkVG9kb0Zvcm0oKTtcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuXG4gICAgICAgIG5ld0NoZWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdC1jcmVhdGUgYnV0dG9uJyk7XG4gICAgICAgIG5ld0NoZWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3Q2hlY2spO1xuXG4gICAgICAgIGxldCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIC5zdWJtaXQnKTtcbiAgICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0Rm9ybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgYWRkIHByb2plY3QgaXMgY2xpY2tlZFxuICAgIH07XG5cbiAgICBsZXQgZXhpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZyA+IGltZycpO1xuICAgIGV4aXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVEaWFsb2cpO1xufTtcbmFycm93T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFycm93Q2xpY2spIH0pO1xuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSBkb3duQXJyb3dJbWcpIHsgXG4gICAgICAgIGRvd25BcnJvd0ltZy5uZXh0U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfTtcblxuICAgIGlmIChlLnRhcmdldCAhPT0gc2V0dGluZ3NJbWcpIHsgXG4gICAgICAgIHNldHRpbmdzSW1nLm5leHRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICB9O1xuXG4gICAgaWYgKGUudGFyZ2V0ICE9PSB0aXRsZSkge1xuICAgICAgICB0aXRsZS5uZXh0U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfTtcblxuICAgIGV4cGFuZC5mb3JFYWNoKGV4cGFuZGVkID0+IHtcbiAgICAgICAgLy9nZXQgdGhlIGgyIGNoaWxkcmVuIG9mIGVhY2ggdG9kbyBzbyBpIGNhbiBleHBhbmQgdG9kbyB3aGlsZSBjbGlja2luZyB0aGUgaDIgYXN3ZWxsXG4gICAgICAgIGxldCBoMiA9IFsuLi5leHBhbmRlZC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuXS5zcGxpY2UoMCwgMik7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBleHBhbmRlZC5wYXJlbnRFbGVtZW50ICYmIGUudGFyZ2V0ICE9PSBoMlswXSAmJiBlLnRhcmdldCAhPT0gaDJbMV0pIHtcbiAgICAgICAgICAgIGV4cGFuZGVkLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHsgcmVtb3ZlRGlhbG9nKCkgfTtcbn0pO1xuXG5jb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICB0ZXh0YXJlYSA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpXTtcbiAgICBleHBhbmQgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4gPiBkaXYgPiAuZXhwYW5kJyldO1xuICAgIGl0ZW1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2xpc3QgPiAuaXRlbScpXTtcbiAgICBkZWxCdG5zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHBhbmQgPiBidXR0b24nKV07XG4gICAgXG4gICAgdGV4dGFyZWEuZm9yRWFjaChhcmVhID0+IHtcbiAgICAgICAgYXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnRhcmdldC50b2RvLmRlc2MgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBleHBhbmQuZm9yRWFjaChleHBhbmRlZCA9PiB7XG4gICAgICAgIGV4cGFuZGVkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcFByb3BhZ2F0aW9uKTtcbiAgICAgICAgZXhwYW5kZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdG9wUHJvcGFnYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgZXhwYW5kZWQucGFyZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVZpc2libGUpO1xuICAgICAgICBleHBhbmRlZC5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVmlzaWJsZSk7XG4gICAgfSk7XG5cbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW0udG9kbykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50b2RvW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udG9kb1trZXldID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRvZG9ba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVsQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvZG8pO1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUb2RvKTtcbiAgICB9KTtcbn0pO1xuXG5jb25zdCBjb25maWcgPSB7XG4gICAgc3VidHJlZTogdHJ1ZSxcbiAgICBjaGlsZExpc3Q6IHRydWUsXG59O1xuXG5vYnNlcnZlci5vYnNlcnZlKGNvbnRlbnQsIGNvbmZpZylcblxuXG5cblxuLypcblxuQWxsICdQcm9qZWN0cycgYXJlIE9iamVjdHMgdGhhdCBIb2xkICdUb2RvcydcbkFsbCAnVG9kb3MnIGFyZSBPYmplY3RzXG4nVG9kb3MnIGNhbiBvbmx5IGJlIG1hZGUgb24gYSAnUHJvamVjdCcgYnV0IHRoZXJlIGlzIGFuICdBbGwgTGlzdCBWaWV3J1xuXG4tIFlvdSBjYW4ndCBoYXZlIDIgJ1Byb2plY3RzJyB3aXRoIHRoZSBzYW1lIG5hbWVcbi0gUHJpb3JpdHkgbXVzdCBiZSBmcm9tIDAtMTAgKGluY2x1c2l2ZSlcblxuKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=