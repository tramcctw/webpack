/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_addNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/addNumber */ \"./src/page/addNumber.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/page/addNumber.js":
/*!*******************************!*\
  !*** ./src/page/addNumber.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_getRandom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getRandom */ \"./src/utils/getRandom.js\");\n/* harmony import */ var _utils_isPrime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isPrime */ \"./src/utils/isPrime.js\");\n\r\n\r\nlet count = 1;\r\nlet timer\r\nconst divContainer = document.getElementById('divContainer');\r\nconst body = document.getElementsByTagName('body')[0]\r\nconst divCenter = document.getElementById('divCenter')\r\nlet key = false\r\nlet color\r\ndocument.addEventListener('click',function(){\r\n    if(key){\r\n     clearInterval(timer)\r\n     key = false\r\n     return;   \r\n    }\r\n    key = true\r\n    timer = setInterval(() => {\r\n        const span = document.createElement('span')\r\n        const div = document.createElement('div');\r\n        div.className = 'center'\r\n        div.innerText = count\r\n        span.innerText = count\r\n        divCenter.innerText = count\r\n        if(Object(_utils_isPrime__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(count)){\r\n            color = Object(_utils_getRandom__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5,0)\r\n            span.style.color = color  \r\n        }\r\n        divContainer.appendChild(span)\r\n        body.appendChild(div)\r\n        getComputedStyle(div).left;\r\n        div.style.color = color \r\n        const x = Object(_utils_getRandom__WEBPACK_IMPORTED_MODULE_0__[\"getRandom\"])(-200,200)\r\n        const y = Object(_utils_getRandom__WEBPACK_IMPORTED_MODULE_0__[\"getRandom\"])(-200,200)\r\n        div.style.transform = `translate(${x}px,${y}px)`,\r\n        div.style.opacity = '0'\r\n        count ++;\r\n    }, 100);\r\n})\n\n//# sourceURL=webpack:///./src/page/addNumber.js?");

/***/ }),

/***/ "./src/utils/getRandom.js":
/*!********************************!*\
  !*** ./src/utils/getRandom.js ***!
  \********************************/
/*! exports provided: default, getRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getRandomColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandom\", function() { return getRandom; });\nconst colors = [\"#f26395\", \"#62efab\", \"#ef7658\", \"#ffe868\", \"#80e3f7\", \"#d781f9\"];\r\n\r\nfunction getRandomColor(max,min){\r\n    return colors[Math.ceil(Math.random()*(max-min) + min)]\r\n}\r\n\r\nfunction getRandom(max,min){\r\n    return Math.ceil(Math.random()*(max-min) + min)\r\n}\n\n//# sourceURL=webpack:///./src/utils/getRandom.js?");

/***/ }),

/***/ "./src/utils/isPrime.js":
/*!******************************!*\
  !*** ./src/utils/isPrime.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isPrime; });\nfunction  isPrime(num) {\r\n    for(let i = 2;i < num;i ++){\r\n        if(num % i === 0){\r\n            return false\r\n        }else{\r\n            return true\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/utils/isPrime.js?");

/***/ })

/******/ });