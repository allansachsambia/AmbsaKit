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

var _ambsaArticle = require("./ambsa-article.css");

var _ambsaArticle2 = _interopRequireDefault(_ambsaArticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AmbsaArticle = function (_React$Component) {
  _inherits(AmbsaArticle, _React$Component);

  function AmbsaArticle() {
    _classCallCheck(this, AmbsaArticle);

    return _possibleConstructorReturn(this, (AmbsaArticle.__proto__ || Object.getPrototypeOf(AmbsaArticle)).apply(this, arguments));
  }

  _createClass(AmbsaArticle, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          image = _props.image;

      return _react2.default.createElement(
        "div",
        { "data-test": "component-ambsa-article", className: "ambsa-article" },
        _react2.default.createElement(
          "div",
          { className: "header" },
          _react2.default.createElement("img", { className: "header-image", src: image })
        ),
        _react2.default.createElement(
          "div",
          { className: "content" },
          _react2.default.createElement(
            "div",
            { className: "main" },
            _react2.default.createElement(
              "div",
              { className: "title" },
              title
            ),
            _react2.default.createElement(
              "div",
              { className: "body" },
              this.props.children
            )
          )
        )
      );
    }
  }]);

  return AmbsaArticle;
}(_react2.default.Component);

AmbsaArticle.propTypes = {
  title: _propTypes2.default.string,
  image: _propTypes2.default.string
};

exports.default = AmbsaArticle;