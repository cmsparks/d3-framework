var d3framework =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Bar", {
  enumerable: true,
  get: function get() {
    return _Bar.default;
  }
});
Object.defineProperty(exports, "Pie", {
  enumerable: true,
  get: function get() {
    return _Pie.default;
  }
});
Object.defineProperty(exports, "Line", {
  enumerable: true,
  get: function get() {
    return _Line.default;
  }
});

var _Bar = _interopRequireDefault(__webpack_require__(1));

var _Pie = _interopRequireDefault(__webpack_require__(2));

var _Line = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*-- Bar.js
 * Constructs a bar chart.
 * Data format:
 * [ [index, value, name], [...] ]
 * 
 * The index is stored in the array due to D3 making it 
 * complicated to access the index of data while
 * manipulating it.
 *
 * TODO Automatically build indexes inside data
 * TODO: Use the name and add labels + label opts
 * TODO: Add axes + axes opts
 * TODO: Add lists of opts
/*/
var Bar =
/*#__PURE__*/
function () {
  function Bar(data, opts, domNode) {
    _classCallCheck(this, Bar);

    this.data = data;
    this.opts = opts;
  }

  _createClass(Bar, [{
    key: "render",
    value: function render(domNode) {
      //set options because d3 resets the value of 'this'
      var options = this.opts;
      d3.select(domNode).selectAll("rect").data(this.data).enter().append("rect").attr(options.vert ? "height" : "width", function (d) {
        return d[1] * Number(options.h) + "px";
      }).attr(options.vert ? "width" : "height", Number(options.w) + "px").attr(options.vert ? "x" : "y", function (d) {
        return d[0] * (10 + Number(options.space)) + "px";
      }).attr("fill", options.fill).text(function (d) {
        return d[1];
      });
    }
  }]);

  return Bar;
}();

exports.default = Bar;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*-- Pie.js
 * Constructs a Pie chart.
 * Data format:
 * [ [value, name], [...] ]
 *
 * TODO: Add more opts
 * TODO: Add styling
 * TODO: Add labeling
/*/
var Pie =
/*#__PURE__*/
function () {
  function Pie(data, opts) {
    _classCallCheck(this, Pie);

    this.data = data;
    this.opts = opts;
  }

  _createClass(Pie, [{
    key: "render",
    value: function render(domNode) {
      //set options because d3 resets the value of 'this'
      var options = this.opts; // Data set up

      var arcSegs = d3.pie()(this.data);
      console.log(arcSegs);
      var arcPaths = d3.arc().outerRadius(options.outerRadius).innerRadius(options.innerRadius).startAngle(function (d) {
        return d.startAngle;
      }).endAngle(function (d) {
        return d.endAngle;
      }); // SVG Rendering

      var colors = d3.scaleOrdinal(d3.schemeCategory10);
      d3.select(domNode).selectAll('path').data(arcSegs).enter().append('path').attr('d', arcPaths).attr('fill', function (d, i) {
        return colors(i);
      });
    }
  }]);

  return Pie;
}();

exports.default = Pie;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*-- Line.js
 * Constructs a line chart.
 * Data format:
/*/
var Line =
/*#__PURE__*/
function () {
  function Line(name, data, opts) {
    _classCallCheck(this, Line);

    this.name = name;
    this.data = data;
    this.opts = opts;
  }

  _createClass(Line, [{
    key: "render",
    value: function render(domNode) {
      //set options because d3 resets the value of 'this'
      var options = this.opts;
    }
  }]);

  return Line;
}();

exports.default = Line;

/***/ })
/******/ ]);