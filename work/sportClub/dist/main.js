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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/public/javascript/index.js":
/*!****************************************!*\
  !*** ./src/public/javascript/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./src/public/javascript/module.js");


var hello = function hello(name) {
  return console.log("Heloo ".concat(name));
};

hello('Artem');
hello('world');
Object(_module__WEBPACK_IMPORTED_MODULE_0__["default"])();
$(document).ready(function () {
  //arrow in header
  $('#arrowDown').on('click', function (e) {
    e.preventDefault();
    var screenTop = document.documentElement.clientHeight;
    $("html, body").animate({
      scrollTop: "".concat(screenTop)
    }, 600);
  }); //section social, arrow in subMenu

  $('.drop').on('click', function (e) {
    e.preventDefault();
    $('.drop').toggleClass('submenu');
  });
  /*init tooltips */

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  }); //random trainer face

  var url = 'https://randomuser.me/api/?results=10';

  function fetchInformation(url) {
    var trainersSlider = $('#trainersSlider');
    /*let trainerCard = $('trainerCard');
    let img = $('trainerFace');
    let trainerName = $('trainerName');*/

    fetch(url).then(function (respons) {
      return respons.json();
    }).then(function (data) {
      console.log(data);
      console.log(data.results);
      data.results.forEach(function (person) {
        function createEl(elem) {
          return document.createElement(elem);
        }

        function appendEl(parent, elem) {
          return parent.append(elem);
        }

        var img = createEl('img');
        img.src = person.picture.medium;
        var trainerName = createEl('h4');
        trainerName.classList.add('trainerName');
        trainerName.innerHTML = person.name.first + ' ' + person.name.last;
        var trainerCard = createEl('div');
        trainerCard.classList.add('trainerCard');
        trainerCard.append(img);
        trainerCard.append(trainerName);
        trainersSlider.append(trainerCard);
      });
      return trainersSlider;
    });
  }

  fetchInformation(url);
});
/* video muted*/

var videoCam1 = document.getElementById("videoCam1");
videoCam1.muted = true;
videoCam1.autoplay = true;
var videoCam2 = document.getElementById("videoCam2");
videoCam2.muted = true;
videoCam2.autoplay = true;
var videoCam3 = document.getElementById("videoCam3");
videoCam3.muted = true;
videoCam3.autoplay = true;

/***/ }),

/***/ "./src/public/javascript/module.js":
/*!*****************************************!*\
  !*** ./src/public/javascript/module.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var colors = ['red', 'blue', 'white', 'yellow', 'brown'];

var addButton = function addButton() {
  var container = document.querySelector('#container');
  var button = document.createElement('button');
  button.innerText = 'Click me';

  button.onclick = function () {
    return button.style.color = colors[Math.round(Math.random() * colors.length - 1)];
  };

  container.appendChild(button);
};

/* harmony default export */ __webpack_exports__["default"] = (addButton);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map