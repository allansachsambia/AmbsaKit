"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Fade = require("react-reveal/Fade");

var _Fade2 = _interopRequireDefault(_Fade);

var _ambsaFooter = require("./ambsa-footer.css");

var _ambsaFooter2 = _interopRequireDefault(_ambsaFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AmbsaFooter = function (_React$Component) {
  _inherits(AmbsaFooter, _React$Component);

  function AmbsaFooter() {
    _classCallCheck(this, AmbsaFooter);

    return _possibleConstructorReturn(this, (AmbsaFooter.__proto__ || Object.getPrototypeOf(AmbsaFooter)).apply(this, arguments));
  }

  _createClass(AmbsaFooter, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          about = _props.about,
          copyright = _props.copyright;

      return _react2.default.createElement(
        "footer",
        { "data-test": "component-ambsa-footer", className: "ambsa-footer" },
        _react2.default.createElement(
          "div",
          { className: "inner-wrap" },
          _react2.default.createElement(
            _Fade2.default,
            { up: true },
            _react2.default.createElement(
              "div",
              { className: "about-section" },
              _react2.default.createElement(
                "div",
                { className: "title" },
                "ABOUT"
              ),
              _react2.default.createElement(
                "div",
                { "data-test": "component-ambsa-footer-about", className: "about" },
                about
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "explore-section" },
            _react2.default.createElement(
              "div",
              { className: "title" },
              "EXPLORE"
            ),
            this.props.children
          ),
          _react2.default.createElement(
            "div",
            { className: "copyright-section" },
            _react2.default.createElement(
              "span",
              {
                "data-test": "component-ambsa-footer-copyright",
                className: "copyright"
              },
              copyright
            )
          )
        )
      );
    }
  }]);

  return AmbsaFooter;
}(_react2.default.Component);

AmbsaFooter.propTypes = {
  about: _propTypes2.default.string,
  copyright: _propTypes2.default.string,
  fadeInUp: _propTypes2.default.bool
};

exports.default = AmbsaFooter;