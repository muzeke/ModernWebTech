"use strict";

var _myjsfile = _interopRequireDefault(require("../myjsfile.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log(_myjsfile["default"]);

var zeke =
/*#__PURE__*/
function () {
  function zeke() {
    _classCallCheck(this, zeke);
  }

  _createClass(zeke, [{
    key: "myFunc",
    value: function myFunc(a) {
      console.log(a);
    }
  }]);

  return zeke;
}();

zeke.myFunc("TEST");