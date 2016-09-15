/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _tetris_view = __webpack_require__(1);
	
	var _tetris_view2 = _interopRequireDefault(_tetris_view);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', function () {
	  var tetris = document.getElementById('tetris');
	  var view = new _tetris_view2.default(tetris);
	  window.view = view;
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _board = __webpack_require__(2);
	
	var _board2 = _interopRequireDefault(_board);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TetrisView = function () {
	  function TetrisView(tetris) {
	    _classCallCheck(this, TetrisView);
	
	    this.tetris = tetris;
	    this.board = new _board2.default();
	    this.clearedLineCount = document.getElementById('line-incrementor');
	    this.render();
	    this.startEventListeners();
	  }
	
	  _createClass(TetrisView, [{
	    key: 'startEventListeners',
	    value: function startEventListeners() {
	      var _this = this;
	
	      document.addEventListener('keydown', function (event) {
	        switch (event.key) {
	          case 's':
	            if (!_this.timerId) {
	              _this.play();
	            }
	            break;
	          case 'p':
	            window.clearInterval(_this.timerId);
	            _this.timerId = undefined;
	            break;
	          case 'ArrowLeft':
	            _this.board.moveLeft();
	            _this.board.update();
	            _this.render();
	            break;
	          case 'ArrowRight':
	            _this.board.moveRight();
	            _this.board.update();
	            _this.render();
	            break;
	          case 'z':
	            _this.board.rotateLeft();
	            _this.board.update();
	            _this.render();
	            break;
	          case 'x':
	            _this.board.rotateRight();
	            _this.board.update();
	            _this.render();
	            break;
	          default:
	            return;
	        }
	      });
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      var _this2 = this;
	
	      this.timerId = window.setInterval(function () {
	        _this2.board.fall();
	        if (_this2.board.gameOver()) {
	          window.clearInterval(_this2.timerId);
	          var GOMessage = document.getElementById('game-over');
	          GOMessage.setAttribute('class', 'show');
	        }
	        _this2.board.update();
	        _this2.render();
	      }, 100);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.clearedLineCount.innerHTML = 'Lines cleared: ' + this.board.clearedLineCount.toString();
	      this.tetris.innerHTML = this.board.toString();
	    }
	  }]);
	
	  return TetrisView;
	}();
	
	exports.default = TetrisView;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _tile = __webpack_require__(3);
	
	var _tile2 = _interopRequireDefault(_tile);
	
	var _i = __webpack_require__(4);
	
	var _i2 = _interopRequireDefault(_i);
	
	var _brick = __webpack_require__(5);
	
	var _brick2 = _interopRequireDefault(_brick);
	
	var _red_z = __webpack_require__(6);
	
	var _red_z2 = _interopRequireDefault(_red_z);
	
	var _green_z = __webpack_require__(7);
	
	var _green_z2 = _interopRequireDefault(_green_z);
	
	var _t = __webpack_require__(8);
	
	var _t2 = _interopRequireDefault(_t);
	
	var _orange_l = __webpack_require__(9);
	
	var _orange_l2 = _interopRequireDefault(_orange_l);
	
	var _blue_l = __webpack_require__(10);
	
	var _blue_l2 = _interopRequireDefault(_blue_l);
	
	var _util = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	(0, _util.monkeyPatches)();
	
	var Board = function () {
	  function Board() {
	    _classCallCheck(this, Board);
	
	    var grid = [];
	    for (var i = 0; i < 20; i++) {
	      var row = [];
	      for (var j = 0; j < 10; j++) {
	        row.push(new _tile2.default([i, j], ''));
	      }
	      grid.push(row);
	    }
	
	    this.clearedLineCount = 0;
	    this.fallenCoords = [];
	    this.grid = grid;
	    this.pieceTypes = [_i2.default, _brick2.default, _red_z2.default, _green_z2.default, _t2.default, _orange_l2.default, _blue_l2.default];
	    this.currentPiece = this.sample();
	  }
	
	  _createClass(Board, [{
	    key: 'clearLines',
	    value: function clearLines() {
	      var _this = this;
	
	      var yCoords = this.currentPiece.coords.map(function (coord) {
	        return coord[0];
	      }).uniq();
	      var that = this;
	      var clearedYs = [];
	      yCoords.forEach(function (yCoord) {
	        var clear = !_this.grid[yCoord].any(function (tile) {
	          return tile.className === '';
	        });
	        if (clear) {
	          that.clearLine(yCoord);
	          clearedYs.push(yCoord);
	        }
	      });
	      if (clearedYs.length > 1) {
	        (function () {
	          clearedYs = clearedYs.mergeSort();
	          var gapLines = [];
	          for (var i = clearedYs[0]; i < clearedYs.last(); i++) {
	            if (!clearedYs.includes(i)) {
	              gapLines.push(i);
	            }
	          }
	          var numDown = clearedYs.select(function (y) {
	            return y > gapLines.last();
	          }).length;
	          var grid = _this.grid;
	          gapLines.forEach(function (y) {
	            grid[y].forEach(function (tile) {
	              return (0, _util.moveSquareDown)(grid, [tile.i, tile.j], numDown);
	            });
	          });
	          var fallenCoords = _this.fallenCoords;
	          fallenCoords.forEach(function (coord, idx) {
	            if (coord[0] < clearedYs[0]) {
	              fallenCoords[idx] = (0, _util.moveSquareDown)(grid, coord, clearedYs.length);
	            }
	          });
	        })();
	      } else if (clearedYs.length === 1) {
	        (function () {
	          var grid = _this.grid;
	          var fallenCoords = _this.fallenCoords;
	          fallenCoords.forEach(function (coord, idx) {
	            if (coord[0] < clearedYs[0]) {
	              fallenCoords[idx] = (0, _util.moveSquareDown)(grid, coord, clearedYs.length);
	            }
	          });
	        })();
	      }
	    }
	  }, {
	    key: 'clearLine',
	    value: function clearLine(yCoord) {
	      this.clearedLineCount += 1;
	      var newRow = [];
	      this.grid[yCoord].forEach(function (tile, idx) {
	        newRow.push(new _tile2.default([yCoord, idx], ''));
	      });
	      this.grid[yCoord] = newRow;
	      for (var i = 0; i < this.fallenCoords.length; i++) {
	        if (this.fallenCoords[i][0] === yCoord) {
	          this.fallenCoords.splice(i, 1);
	          i -= 1;
	        }
	      }
	    }
	  }, {
	    key: 'sample',
	    value: function sample() {
	      var Piece = this.pieceTypes.sample();
	      return new Piece();
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var _this2 = this;
	
	      var grid = this.grid;
	      this.currentPiece.coords.forEach(function (coord) {
	        grid[coord[0]][coord[1]].className = _this2.currentPiece.className;
	      });
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      var result = '';
	      this.grid.forEach(function (row) {
	        result += '<ul>';
	        row.forEach(function (tile) {
	          result += tile.toString();
	        });
	        result += '</ul>';
	      });
	
	      return result;
	    }
	  }, {
	    key: 'fall',
	    value: function fall() {
	      this.maybeStop();
	      this.clearCurrentPieceTiles();
	      this.currentPiece.coords = this.currentPiece.coords.map(function (coord) {
	        return [coord[0] + 1, coord[1]];
	      });
	    }
	  }, {
	    key: 'clearCurrentPieceTiles',
	    value: function clearCurrentPieceTiles() {
	      var grid = this.grid;
	      var execute = this.currentPiece.coords.any(function (coord) {
	        return coord[0] >= 0;
	      });
	      if (execute) {
	        this.currentPiece.coords.forEach(function (coord) {
	          if (coord[0] >= 0) {
	            grid[coord[0]][coord[1]] = new _tile2.default([coord[0], coord[1]], '');
	          }
	        });
	      }
	    }
	  }, {
	    key: 'maybeStop',
	    value: function maybeStop() {
	      var stop = false;
	      var that = this;
	      (0, _util.lowestYCoords)(this.currentPiece).forEach(function (coord) {
	        if (coord[0] === 19) {
	          stop = true;
	          return;
	        } else if ((0, _util.tileBelow)(that, coord).className !== '') {
	          stop = true;
	        }
	      });
	
	      if (stop) {
	        var comparator = function comparator(arr1, arr2) {
	          if (arr1[0] > arr2[0]) {
	            return -1;
	          } else if (arr1[0] === arr2[0]) {
	            return 0;
	          } else {
	            return 1;
	          }
	        };
	        var sortedCoords = this.currentPiece.coords.mergeSort(comparator);
	        this.fallenCoords = (0, _util.merge)(this.fallenCoords, sortedCoords, comparator);
	        this.clearLines();
	        this.currentPiece = this.sample();
	      }
	    }
	  }, {
	    key: 'moveLeft',
	    value: function moveLeft() {
	      var newCoords = this.currentPiece.coords.map(function (coord) {
	        return [coord[0], coord[1] - 1];
	      });
	      if (this.validCoords(newCoords)) {
	        this.clearCurrentPieceTiles();
	        this.currentPiece.coords = newCoords;
	      }
	    }
	  }, {
	    key: 'moveRight',
	    value: function moveRight() {
	      var newCoords = this.currentPiece.coords.map(function (coord) {
	        return [coord[0], coord[1] + 1];
	      });
	      if (this.validCoords(newCoords)) {
	        this.clearCurrentPieceTiles();
	        this.currentPiece.coords = newCoords;
	      }
	    }
	  }, {
	    key: 'rotateLeft',
	    value: function rotateLeft() {
	      var newCoords = this.currentPiece.rotateLeftCoords();
	      if (this.validCoords(newCoords)) {
	        this.clearCurrentPieceTiles();
	        this.currentPiece.coords = newCoords;
	        this.currentPiece.executeRotationLeft(newCoords);
	      }
	    }
	  }, {
	    key: 'rotateRight',
	    value: function rotateRight() {
	      var newCoords = this.currentPiece.rotateRightCoords();
	      if (this.validCoords(newCoords)) {
	        this.clearCurrentPieceTiles();
	        this.currentPiece.coords = newCoords;
	        this.currentPiece.executeRotationRight(newCoords);
	      }
	    }
	  }, {
	    key: 'validCoords',
	    value: function validCoords(coords) {
	      var result = true;
	      var grid = this.grid;
	      var that = this;
	      coords.forEach(function (coord) {
	        if (that.currentPiece.coords.any(function (el) {
	          return el[0] === coord[0] && el[1] === coord[1];
	        })) {
	          return;
	        } else if (coord[0] < 0 || coord[0] > 19) {
	          result = false;
	        } else if (coord[1] < 0 || coord[1] > 9) {
	          result = false;
	          return;
	        } else if (grid[coord[0]][coord[1]].className !== '') {
	          result = false;
	          return;
	        }
	      });
	      return result;
	    }
	  }, {
	    key: 'gameOver',
	    value: function gameOver() {
	      return this.fallenCoords.any(function (coord) {
	        return coord[0] <= 0;
	      });
	    }
	  }]);
	
	  return Board;
	}();
	
	exports.default = Board;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Tile = function () {
	  function Tile(coords, className) {
	    _classCallCheck(this, Tile);
	
	    this.i = coords[0];
	    this.j = coords[1];
	    this.className = className;
	    this.toString = this.toString.bind(this);
	  }
	
	  _createClass(Tile, [{
	    key: "toString",
	    value: function toString() {
	      return "<li class=" + this.className + " />";
	    }
	  }]);
	
	  return Tile;
	}();
	
	exports.default = Tile;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var I = function () {
	  function I() {
	    _classCallCheck(this, I);
	
	    this.positions = ['horizontal', 'vertical'];
	    this.position = 'horizontal';
	    this.className = 'i';
	    this.coords = [[-1, 3], [-1, 4], [-1, 5], [-1, 6]];
	    this.rotateLeftCoords = this.rotateLeftCoords.bind(this);
	    this.executeRotationLeft = this.executeRotationLeft.bind(this);
	  }
	
	  _createClass(I, [{
	    key: 'rotateLeftCoords',
	    value: function rotateLeftCoords() {
	      if (this.position === 'horizontal') {
	        var first = [this.coords[0][0] - 1, this.coords[0][1] + 1];
	        var second = this.coords[1];
	        var third = [this.coords[2][0] + 1, this.coords[2][1] - 1];
	        var fourth = [this.coords[3][0] + 2, this.coords[3][1] - 2];
	        return [first, second, third, fourth];
	      } else {
	        var _first = [this.coords[0][0] + 1, this.coords[0][1] - 1];
	        var _second = this.coords[1];
	        var _third = [this.coords[2][0] - 1, this.coords[2][1] + 1];
	        var _fourth = [this.coords[3][0] - 2, this.coords[3][1] + 2];
	        return [_first, _second, _third, _fourth];
	      }
	    }
	  }, {
	    key: 'executeRotationLeft',
	    value: function executeRotationLeft(newCoords) {
	      this.coords = newCoords;
	      this.position = this.positions[(this.positions.indexOf(this.position) + 1) % this.positions.length];
	    }
	  }, {
	    key: 'rotateRightCoords',
	    value: function rotateRightCoords() {
	      if (this.position === 'horizontal') {
	        var first = [this.coords[0][0] - 1, this.coords[0][1] + 2];
	        var second = [this.coords[1][0], this.coords[1][1] + 1];
	        var third = [this.coords[2][0] + 1, this.coords[2][1]];
	        var fourth = [this.coords[3][0] + 2, this.coords[3][1] - 1];
	        return [first, second, third, fourth];
	      } else {
	        var _first2 = [this.coords[0][0] + 1, this.coords[0][1] - 2];
	        var _second2 = [this.coords[1][0], this.coords[1][1] - 1];
	        var _third2 = [this.coords[2][0] - 1, this.coords[2][1]];
	        var _fourth2 = [this.coords[3][0] - 2, this.coords[3][1] + 1];
	        return [_first2, _second2, _third2, _fourth2];
	      }
	    }
	  }, {
	    key: 'executeRotationRight',
	    value: function executeRotationRight(newCoords) {
	      this.coords = newCoords;
	      this.position = this.positions[(this.positions.indexOf(this.position) - 1) % this.positions.length];
	    }
	  }]);
	
	  return I;
	}();
	
	exports.default = I;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Brick = function () {
	  function Brick() {
	    _classCallCheck(this, Brick);
	
	    this.className = 'brick';
	    this.coords = [[-1, 4], [-1, 5], [0, 4], [0, 5]];
	  }
	
	  _createClass(Brick, [{
	    key: 'rotateLeftCoords',
	    value: function rotateLeftCoords() {
	      return this.coords;
	    }
	  }, {
	    key: 'rotateRightCoords',
	    value: function rotateRightCoords() {
	      return this.coords;
	    }
	  }, {
	    key: 'executeRotationLeft',
	    value: function executeRotationLeft() {}
	  }, {
	    key: 'executeRotationRight',
	    value: function executeRotationRight() {}
	  }]);
	
	  return Brick;
	}();
	
	exports.default = Brick;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RedZ = function () {
	  function RedZ() {
	    _classCallCheck(this, RedZ);
	
	    this.positions = ['horizontal', 'vertical'];
	    this.position = 'horizontal';
	    this.className = 'red-z';
	    this.coords = [[-1, 3], [-1, 4], [0, 4], [0, 5]];
	    this.rotateLeftCoords = this.rotateLeftCoords.bind(this);
	    this.executeRotationLeft = this.executeRotationLeft.bind(this);
	  }
	
	  _createClass(RedZ, [{
	    key: 'rotateLeftCoords',
	    value: function rotateLeftCoords() {
	      if (this.position === 'horizontal') {
	        var first = [this.coords[0][0] + 2, this.coords[0][1]];
	        var second = this.coords[1];
	        var third = this.coords[2];
	        var fourth = [this.coords[3][0], this.coords[3][1] - 2];
	        return [first, second, third, fourth];
	      } else {
	        var _first = [this.coords[0][0] - 2, this.coords[0][1]];
	        var _second = this.coords[1];
	        var _third = this.coords[2];
	        var _fourth = [this.coords[3][0], this.coords[3][1] + 2];
	        return [_first, _second, _third, _fourth];
	      }
	    }
	  }, {
	    key: 'executeRotationLeft',
	    value: function executeRotationLeft(newCoords) {
	      this.coords = newCoords;
	      this.position = this.positions[(this.positions.indexOf(this.position) + 1) % this.positions.length];
	    }
	  }, {
	    key: 'rotateRightCoords',
	    value: function rotateRightCoords() {
	      if (this.position === 'horizontal') {
	        var first = [this.coords[0][0] + 2, this.coords[0][1] + 1];
	        var second = [this.coords[1][0], this.coords[1][1] + 1];
	        var third = [this.coords[2][0], this.coords[2][1] + 1];
	        var fourth = [this.coords[3][0], this.coords[3][1] - 1];
	        return [first, second, third, fourth];
	      } else {
	        var _first2 = [this.coords[0][0] - 2, this.coords[0][1] - 1];
	        var _second2 = [this.coords[1][0], this.coords[1][1] - 1];
	        var _third2 = [this.coords[2][0], this.coords[2][1] - 1];
	        var _fourth2 = [this.coords[3][0], this.coords[3][1] + 1];
	        return [_first2, _second2, _third2, _fourth2];
	      }
	    }
	  }, {
	    key: 'executeRotationRight',
	    value: function executeRotationRight(newCoords) {
	      this.coords = newCoords;
	      this.position = this.positions[(this.positions.indexOf(this.position) - 1) % this.positions.length];
	    }
	  }]);
	
	  return RedZ;
	}();
	
	exports.default = RedZ;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GreenZ = function () {
	  function GreenZ() {
	    _classCallCheck(this, GreenZ);
	
	    this.positions = ['horizontal', 'vertical'];
	    this.position = 'horizontal';
	    this.className = 'green-z';
	    this.coords = [[-1, 4], [-1, 5], [0, 3], [0, 4]];
	    this.rotateLeftCoords = this.rotateLeftCoords.bind(this);
	    this.executeRotationLeft = this.executeRotationLeft.bind(this);
	  }
	
	  _createClass(GreenZ, [{
	    key: 'rotateLeftCoords',
	    value: function rotateLeftCoords() {
	      if (this.position === 'horizontal') {
	        var first = this.coords[0];
	        var second = this.coords[1];
	        var third = [this.coords[2][0], this.coords[2][1] + 2];
	        var fourth = [this.coords[3][0] - 2, this.coords[3][1]];
	        return [first, second, third, fourth];
	      } else {
	        var _first = this.coords[0];
	        var _second = this.coords[1];
	        var _third = [this.coords[2][0], this.coords[2][1] - 2];
	        var _fourth = [this.coords[3][0] + 2, this.coords[3][1]];
	        return [_first, _second, _third, _fourth];
	      }
	    }
	  }, {
	    key: 'executeRotationLeft',
	    value: function executeRotationLeft(newCoords) {
	      this.coords = newCoords;
	      this.position = this.positions[(this.positions.indexOf(this.position) + 1) % this.positions.length];
	    }
	  }, {
	    key: 'rotateRightCoords',
	    value: function rotateRightCoords() {
	      if (this.position === 'horizontal') {
	        var first = [this.coords[0][0], this.coords[0][1] + 1];
	        var second = [this.coords[1][0], this.coords[1][1] + 1];
	        var third = [this.coords[2][0], this.coords[2][1] + 3];
	        var fourth = [this.coords[3][0] - 2, this.coords[3][1] + 1];
	        return [first, second, third, fourth];
	      } else {
	        var _first2 = [this.coords[0][0], this.coords[0][1] - 1];
	        var _second2 = [this.coords[1][0], this.coords[1][1] - 1];
	        var _third2 = [this.coords[2][0], this.coords[2][1] - 3];
	        var _fourth2 = [this.coords[3][0] + 2, this.coords[3][1] - 1];
	        return [_first2, _second2, _third2, _fourth2];
	      }
	    }
	  }, {
	    key: 'executeRotationRight',
	    value: function executeRotationRight(newCoords) {
	      this.coords = newCoords;
	      this.position = this.positions[(this.positions.indexOf(this.position) - 1) % this.positions.length];
	    }
	  }]);
	
	  return GreenZ;
	}();
	
	exports.default = GreenZ;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var T = function () {
	  function T() {
	    _classCallCheck(this, T);
	
	    this.positions = ['down', 'right', 'up', 'left'];
	    this.position = 'down';
	    this.className = 't';
	    this.coords = [[-1, 3], [-1, 4], [-1, 5], [0, 4]];
	    this.rotateLeftCoords = this.rotateLeftCoords.bind(this);
	    this.executeRotationLeft = this.executeRotationLeft.bind(this);
	  }
	
	  _createClass(T, [{
	    key: 'rotateLeftCoords',
	    value: function rotateLeftCoords() {
	      var first = void 0,
	          second = void 0,
	          third = void 0,
	          fourth = void 0;
	      switch (this.position) {
	        case 'down':
	          first = [this.coords[0][0] - 1, this.coords[0][1] + 1];
	          second = this.coords[1];
	          third = this.coords[2];
	          fourth = this.coords[3];
	          return [first, second, third, fourth];
	        case 'right':
	          first = this.coords[0];
	          second = [this.coords[1][0], this.coords[1][1] - 1];
	          third = [this.coords[2][0], this.coords[2][1] - 1];
	          fourth = [this.coords[3][0] - 1, this.coords[3][1] + 1];
	          return [first, second, third, fourth];
	        case 'up':
	          first = this.coords[0];
	          second = this.coords[1];
	          third = this.coords[2];
	          fourth = [this.coords[3][0] + 1, this.coords[3][1] - 1];
	          return [first, second, third, fourth];
	        case 'left':
	          first = [this.coords[0][0] + 1, this.coords[0][1] - 1];
	          second = [this.coords[1][0], this.coords[1][1] + 1];
	          third = [this.coords[2][0], this.coords[2][1] + 1];
	          fourth = this.coords[3];
	          return [first, second, third, fourth];
	        default:
	          return this.coords;
	      }
	    }
	  }, {
	    key: 'executeRotationLeft',
	    value: function executeRotationLeft(newCoords) {
	      this.coords = newCoords;
	      this.position = this.positions[(this.positions.indexOf(this.position) + 1) % this.positions.length];
	    }
	  }, {
	    key: 'rotateRightCoords',
	    value: function rotateRightCoords() {
	      var first = void 0,
	          second = void 0,
	          third = void 0,
	          fourth = void 0;
	      switch (this.position) {
	        case 'down':
	          first = [this.coords[0][0] - 1, this.coords[0][1] + 1];
	          second = [this.coords[1][0], this.coords[1][1] - 1];
	          third = [this.coords[2][0], this.coords[2][1] - 1];
	          fourth = this.coords[3];
	          return [first, second, third, fourth];
	        case 'left':
	          first = this.coords[0];
	          second = this.coords[1];
	          third = this.coords[2];
	          fourth = [this.coords[3][0] - 1, this.coords[3][1] + 1];
	          return [first, second, third, fourth];
	        case 'up':
	          first = this.coords[0];
	          second = [this.coords[1][0], this.coords[1][1] + 1];
	          third = [this.coords[2][0], this.coords[2][1] + 1];
	          fourth = [this.coords[3][0] + 1, this.coords[3][1] - 1];
	          return [first, second, third, fourth];
	        case 'right':
	          first = [this.coords[0][0] + 1, this.coords[0][1] - 1];
	          second = this.coords[1];
	          third = this.coords[2];
	          fourth = this.coords[3];
	          return [first, second, third, fourth];
	        default:
	          return this.coords;
	      }
	    }
	  }, {
	    key: 'executeRotationRight',
	    value: function executeRotationRight(newCoords) {
	      this.coords = newCoords;
	      var idx = this.positions.indexOf(this.position);
	      var newIdx = ((idx - 1) % this.positions.length + this.positions.length) % this.positions.length;
	      this.position = this.positions[newIdx];
	    }
	  }]);
	
	  return T;
	}();
	
	exports.default = T;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var OrangeL = function () {
	  function OrangeL() {
	    _classCallCheck(this, OrangeL);
	
	    this.positions = ['down', 'right', 'up', 'left'];
	    this.position = 'right';
	    this.className = 'orange-l';
	    this.coords = [[-1, 5], [0, 3], [0, 4], [0, 5]];
	    this.rotateLeftCoords = this.rotateLeftCoords.bind(this);
	    this.executeRotationLeft = this.executeRotationLeft.bind(this);
	  }
	
	  _createClass(OrangeL, [{
	    key: 'rotateLeftCoords',
	    value: function rotateLeftCoords() {
	      var first = void 0,
	          second = void 0,
	          third = void 0,
	          fourth = void 0;
	      switch (this.position) {
	        case 'down':
	          first = [this.coords[0][0] + 1, this.coords[0][1] + 2];
	          second = [this.coords[1][0] + 1, this.coords[1][1]];
	          third = [this.coords[2][0], this.coords[2][1] + 1];
	          fourth = [this.coords[3][0], this.coords[3][1] + 1];
	          return [first, second, third, fourth];
	        case 'right':
	          first = [this.coords[0][0] - 1, this.coords[0][1] - 1];
	          second = [this.coords[1][0] - 2, this.coords[1][1] + 2];
	          third = [this.coords[2][0] - 1, this.coords[2][1] + 1];
	          fourth = [this.coords[3][0], this.coords[3][1]];
	          return [first, second, third, fourth];
	        case 'up':
	          first = [this.coords[0][0] + 1, this.coords[0][1] - 1];
	          second = [this.coords[1][0] + 1, this.coords[1][1] - 1];
	          third = this.coords[2];
	          fourth = [this.coords[3][0], this.coords[3][1] - 2];
	          return [first, second, third, fourth];
	        case 'left':
	          first = [this.coords[0][0] - 1, this.coords[0][1]];
	          second = [this.coords[1][0], this.coords[1][1] - 1];
	          third = [this.coords[2][0] + 1, this.coords[2][1] - 2];
	          fourth = [this.coords[3][0], this.coords[3][1] + 1];
	          return [first, second, third, fourth];
	        default:
	          return this.coords;
	      }
	    }
	  }, {
	    key: 'executeRotationLeft',
	    value: function executeRotationLeft(newCoords) {
	      this.coords = newCoords;
	      this.position = this.positions[(this.positions.indexOf(this.position) + 1) % this.positions.length];
	    }
	  }, {
	    key: 'rotateRightCoords',
	    value: function rotateRightCoords() {
	      var first = void 0,
	          second = void 0,
	          third = void 0,
	          fourth = void 0;
	      switch (this.position) {
	        case 'down':
	          first = [this.coords[0][0] + 1, this.coords[0][1]];
	          second = [this.coords[1][0], this.coords[1][1] + 1];
	          third = [this.coords[2][0] - 1, this.coords[2][1] + 2];
	          fourth = [this.coords[3][0], this.coords[3][1] - 1];
	          return [first, second, third, fourth];
	        case 'left':
	          first = [this.coords[0][0] - 1, this.coords[0][1] + 1];
	          second = [this.coords[1][0] - 1, this.coords[1][1] + 1];
	          third = [this.coords[2][0], this.coords[2][1]];
	          fourth = [this.coords[3][0], this.coords[3][1] + 2];
	          return [first, second, third, fourth];
	        case 'up':
	          first = [this.coords[0][0] + 1, this.coords[0][1] + 1];
	          second = [this.coords[1][0] + 2, this.coords[1][1] - 2];
	          third = [this.coords[2][0] + 1, this.coords[2][1] - 1];
	          fourth = [this.coords[3][0], this.coords[3][1]];
	          return [first, second, third, fourth];
	        case 'right':
	          first = [this.coords[0][0] - 1, this.coords[0][1] - 2];
	          second = [this.coords[1][0] - 1, this.coords[1][1]];
	          third = [this.coords[2][0], this.coords[2][1] - 1];
	          fourth = [this.coords[3][0], this.coords[3][1] - 1];
	          return [first, second, third, fourth];
	        default:
	          return this.coords;
	      }
	    }
	  }, {
	    key: 'executeRotationRight',
	    value: function executeRotationRight(newCoords) {
	      this.coords = newCoords;
	      var idx = this.positions.indexOf(this.position);
	      var newIdx = ((idx - 1) % this.positions.length + this.positions.length) % this.positions.length;
	      this.position = this.positions[newIdx];
	    }
	  }]);
	
	  return OrangeL;
	}();
	
	exports.default = OrangeL;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BlueL = function () {
	  function BlueL() {
	    _classCallCheck(this, BlueL);
	
	    this.positions = ['down', 'right', 'up', 'left'];
	    this.position = 'left';
	    this.className = 'blue-l';
	    this.coords = [[-1, 3], [0, 3], [0, 4], [0, 5]];
	    this.rotateLeftCoords = this.rotateLeftCoords.bind(this);
	    this.executeRotationLeft = this.executeRotationLeft.bind(this);
	  }
	
	  _createClass(BlueL, [{
	    key: 'rotateLeftCoords',
	    value: function rotateLeftCoords() {
	      var first = void 0,
	          second = void 0,
	          third = void 0,
	          fourth = void 0;
	      switch (this.position) {
	        case 'down':
	          first = [this.coords[0][0] + 1, this.coords[0][1] - 2];
	          second = [this.coords[1][0], this.coords[1][1] - 1];
	          third = [this.coords[2][0] - 1, this.coords[2][1] + 1];
	          fourth = this.coords[3];
	          return [first, second, third, fourth];
	        case 'right':
	          first = [this.coords[0][0] - 1, this.coords[0][1]];
	          second = [this.coords[1][0] - 1, this.coords[1][1]];
	          third = [this.coords[2][0], this.coords[2][1] - 2];
	          fourth = [this.coords[3][0], this.coords[3][1] - 2];
	          return [first, second, third, fourth];
	        case 'up':
	          first = [this.coords[0][0] + 1, this.coords[0][1]];
	          second = [this.coords[1][0] + 2, this.coords[1][1] - 1];
	          third = [this.coords[2][0] + 1, this.coords[2][1] + 1];
	          fourth = [this.coords[3][0], this.coords[3][1] + 2];
	          return [first, second, third, fourth];
	        case 'left':
	          first = [this.coords[0][0] - 1, this.coords[0][1] + 2];
	          second = [this.coords[1][0] - 1, this.coords[1][1] + 2];
	          third = this.coords[2];
	          fourth = this.coords[3];
	          return [first, second, third, fourth];
	        default:
	          return this.coords;
	      }
	    }
	  }, {
	    key: 'executeRotationLeft',
	    value: function executeRotationLeft(newCoords) {
	      this.coords = newCoords;
	      this.position = this.positions[(this.positions.indexOf(this.position) + 1) % this.positions.length];
	    }
	  }, {
	    key: 'rotateRightCoords',
	    value: function rotateRightCoords() {
	      var first = void 0,
	          second = void 0,
	          third = void 0,
	          fourth = void 0;
	      switch (this.position) {
	        case 'down':
	          first = [this.coords[0][0] + 1, this.coords[0][1] - 2];
	          second = [this.coords[1][0] + 1, this.coords[1][1] - 2];
	          third = this.coords[2];
	          fourth = this.coords[3];
	          return [first, second, third, fourth];
	        case 'left':
	          first = [this.coords[0][0] - 1, this.coords[0][1]];
	          second = [this.coords[1][0] - 2, this.coords[1][1] + 1];
	          third = [this.coords[2][0] - 1, this.coords[2][1] - 1];
	          fourth = [this.coords[3][0], this.coords[3][1] - 2];
	          return [first, second, third, fourth];
	        case 'up':
	          first = [this.coords[0][0] + 1, this.coords[0][1]];
	          second = [this.coords[1][0] + 1, this.coords[1][1]];
	          third = [this.coords[2][0], this.coords[2][1] + 2];
	          fourth = [this.coords[3][0], this.coords[3][1] + 2];
	          return [first, second, third, fourth];
	        case 'right':
	          first = [this.coords[0][0] - 1, this.coords[0][1] + 2];
	          second = [this.coords[1][0], this.coords[1][1] + 1];
	          third = [this.coords[2][0] + 1, this.coords[2][1] - 1];
	          fourth = this.coords[3];
	          return [first, second, third, fourth];
	        default:
	          return this.coords;
	      }
	    }
	  }, {
	    key: 'executeRotationRight',
	    value: function executeRotationRight(newCoords) {
	      this.coords = newCoords;
	      var idx = this.positions.indexOf(this.position);
	      var newIdx = ((idx - 1) % this.positions.length + this.positions.length) % this.positions.length;
	      this.position = this.positions[newIdx];
	    }
	  }]);
	
	  return BlueL;
	}();
	
	exports.default = BlueL;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var tileBelow = exports.tileBelow = function tileBelow(board, coord) {
	  return board.grid[coord[0] + 1][coord[1]];
	};
	
	var tileLeft = exports.tileLeft = function tileLeft(board, coord) {
	  return board.grid[coord[0]][coord[1] - 1];
	};
	
	var tileRight = exports.tileRight = function tileRight(board, coord) {
	  return board.grid[coord[0]][coord[1] + 1];
	};
	
	var lowestYCoords = exports.lowestYCoords = function lowestYCoords(piece) {
	  var answer = [];
	  piece.coords.forEach(function (coord) {
	    if (answer.myIncludes(function (savedCoord) {
	      return savedCoord[1] === coord[1];
	    })) {
	      var savedCoord = answer.find(function (answerCoord) {
	        return coord[1] === answerCoord[1];
	      });
	      if (coord[0] > savedCoord[0]) {
	        var answerIdx = answer.indexOf(savedCoord);
	        answer.splice(answerIdx, 1, coord);
	      }
	    } else {
	      answer.push(coord);
	    }
	  });
	  return answer;
	};
	
	var merge = exports.merge = function merge(arr1, arr2, callback) {
	  if (callback === undefined) {
	    callback = function callback(x, y) {
	      if (x < y) {
	        return -1;
	      } else if (x === y) {
	        return 0;
	      } else {
	        return 1;
	      }
	    };
	  }
	
	  var result = [];
	  while (arr1.length !== 0 && arr2.length !== 0) {
	    if (callback(arr1[0], arr2[0]) < 0) {
	      result.push(arr1.shift());
	    } else {
	      result.push(arr2.shift());
	    }
	  }
	
	  return result.concat(arr1).concat(arr2);
	};
	
	var moveSquareDown = exports.moveSquareDown = function moveSquareDown(grid, pos, numPositionsDown) {
	  var className = grid[pos[0]][pos[1]].className;
	  grid[pos[0]][pos[1]].className = '';
	  var updatedTile = grid[pos[0] + numPositionsDown][pos[1]];
	  updatedTile.className = className;
	  return [updatedTile.i, updatedTile.j];
	};
	
	var monkeyPatches = exports.monkeyPatches = function monkeyPatches() {
	  Array.prototype.sample = function () {
	    return this[Math.floor(Math.random() * this.length)];
	  };
	
	  Array.prototype.myIncludes = function (callback) {
	    var answer = false;
	    this.forEach(function (el) {
	      if (callback(el)) {
	        answer = true;
	      }
	    });
	
	    return answer;
	  };
	
	  Array.prototype.any = function (callback) {
	    var answer = void 0;
	    this.forEach(function (el) {
	      if (callback(el)) {
	        answer = true;
	      } else if (!callback(el) && answer === undefined) {
	        answer = false;
	      }
	    });
	
	    return answer;
	  };
	
	  Array.prototype.inject = function (callback, acc) {
	    var idx = 0;
	    if (acc === undefined) {
	      acc = this[0];
	      idx += 1;
	    }
	    for (idx; idx < this.length; idx++) {
	      acc = callback(acc, this[idx]);
	    }
	
	    return acc;
	  };
	
	  Array.prototype.flatten = function () {
	    return this.inject(function (a, b) {
	      if (b instanceof Array) {
	        return a.concat(b.flatten());
	      } else {
	        return a.concat(b);
	      }
	    }, []);
	  };
	
	  Array.prototype.select = function (callback) {
	    var result = [];
	    this.forEach(function (el) {
	      if (callback(el)) {
	        result.push(el);
	      }
	    });
	
	    return result;
	  };
	
	  Array.prototype.uniq = function (callback) {
	    if (callback === undefined) {
	      callback = function callback(el) {
	        return el;
	      };
	    }
	    var answer = [];
	    var callbackResults = [];
	    this.forEach(function (el) {
	      var callbackResult = callback(el);
	      if (!callbackResults.includes(callbackResult)) {
	        callbackResults.push(callbackResult);
	        answer.push(el);
	      }
	    });
	
	    return answer;
	  };
	
	  var merge = function merge(arr1, arr2, callback) {
	    if (callback === undefined) {
	      callback = function callback(x, y) {
	        if (x < y) {
	          return -1;
	        } else if (x === y) {
	          return 0;
	        } else {
	          return 1;
	        }
	      };
	    }
	
	    var result = [];
	    while (arr1.length !== 0 && arr2.length !== 0) {
	      if (callback(arr1[0], arr2[0]) < 0) {
	        result.push(arr1.shift());
	      } else {
	        result.push(arr2.shift());
	      }
	    }
	
	    return result.concat(arr1).concat(arr2);
	  };
	
	  Array.prototype.mergeSort = function (callback) {
	    if (this.length <= 1) {
	      return this;
	    }
	
	    var half = Math.floor(this.length / 2);
	    var left = this.slice(0, half);
	    var right = this.slice(half);
	
	    var sortedLeft = left.mergeSort(callback);
	    var sortedRight = right.mergeSort(callback);
	    return merge(sortedLeft, sortedRight, callback);
	  };
	
	  Array.prototype.last = function () {
	    return this[this.length - 1];
	  };
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map