"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultSeparator = function DefaultSeparator() {
  return _react2.default.createElement(
    "svg",
    { className: "default-separator", viewBox: "0 0 1000 1000", version: "1.1" },
    _react2.default.createElement(
      "g",
      null,
      _react2.default.createElement(
        "g",
        { transform: "matrix(1 0 0 -1 0 1008)" },
        _react2.default.createElement("path", { d: "M780,508L377.5,18L220,158l280,350L220,858l157.5,140L780,508z" })
      )
    )
  );
};

exports.default = DefaultSeparator;