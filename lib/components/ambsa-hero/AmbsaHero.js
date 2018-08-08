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

var _ambsaHero = require("./ambsa-hero.css");

var _ambsaHero2 = _interopRequireDefault(_ambsaHero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AmbsaHero = function (_React$Component) {
  _inherits(AmbsaHero, _React$Component);

  function AmbsaHero() {
    _classCallCheck(this, AmbsaHero);

    return _possibleConstructorReturn(this, (AmbsaHero.__proto__ || Object.getPrototypeOf(AmbsaHero)).apply(this, arguments));
  }

  _createClass(AmbsaHero, [{
    key: "ambsaHeroStyle",

    /**
     * @method ambsaHeroStyle
     * @returns {object} - for setting the ambsa-hero backgroundImage style with
     * the image prop.  If no prop is passed returns an empty object.
     */
    value: function ambsaHeroStyle() {
      var image = this.props.image;

      return image && typeof image === "string" ? { backgroundImage: "url(" + image + ")" } : {};
    }

    /**
     * @method stick
     * @returns {string} - for setting the ambsa-hero data-background-position
     * attribute, which in turn is used to set background-position styles
     * by way of an external stylesheet.  If the stick prop is set to 'left',
     * 'center' or 'right' this method returns that value, otherwise it returns
     * an empty string.
     */

  }, {
    key: "stick",
    value: function stick() {
      var stick = this.props.stick;

      switch (stick) {
        case "left":
          return stick;
          break;
        case "center":
          return stick;
          break;
        case "right":
          return stick;
          break;
        default:
          return "";
          break;
      }
    }

    /**
     * @method brightness
     * @returns {string} - for setting the ambsa-hero-inner-wrap data-brightness
     * attribute, which in turn is used to set background-color styles
     * by way of an external stylesheet.  If the brightness prop passed in is set
     * to 'lighter', 'light', 'dark', or 'darker' this method will return that
     * props value, otherwise it returns an empty string.
     */

  }, {
    key: "brightness",
    value: function brightness() {
      var brightness = this.props.brightness;

      switch (brightness) {
        case "lighter":
          return brightness;
          break;
        case "light":
          return brightness;
          break;
        case "dark":
          return brightness;
          break;
        case "darker":
          return brightness;
          break;
        default:
          return "";
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        {
          "data-test": "component-ambsa-hero",
          "data-children": this.props.children ? true : false,
          "data-stick": this.stick(),
          className: "ambsa-hero",
          style: this.ambsaHeroStyle()
        },
        _react2.default.createElement(
          "div",
          {
            "data-test": "component-ambsa-hero-inner-wrap",
            className: "ambsa-hero-inner-wrap",
            "data-brightness": this.brightness()
          },
          _react2.default.createElement(
            "div",
            { className: "ambsa-hero-contents" },
            this.props.children
          )
        )
      );
    }
  }]);

  return AmbsaHero;
}(_react2.default.Component);

AmbsaHero.propTypes = {
  image: _propTypes2.default.string,
  stick: _propTypes2.default.string,
  brightness: _propTypes2.default.string
};

exports.default = AmbsaHero;