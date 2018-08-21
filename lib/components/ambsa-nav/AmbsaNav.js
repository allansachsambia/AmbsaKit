"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ambsaNav = require("./ambsa-nav.css");

var _ambsaNav2 = _interopRequireDefault(_ambsaNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AmbsaNav = function (_Component) {
  _inherits(AmbsaNav, _Component);

  function AmbsaNav() {
    _classCallCheck(this, AmbsaNav);

    var _this = _possibleConstructorReturn(this, (AmbsaNav.__proto__ || Object.getPrototypeOf(AmbsaNav)).call(this));

    _this.toggleNav = _this.toggleNav.bind(_this);
    _this.closeNavIfOpen = _this.closeNavIfOpen.bind(_this);
    _this.state = { opened: false };
    return _this;
  }

  _createClass(AmbsaNav, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.closeNavIfOpen(prevState);
    }

    /**
     * @method toggleNav
     * @returns {void} - Toggles `opened` state.
     */

  }, {
    key: "toggleNav",
    value: function toggleNav() {
      if (this.state.opened) {
        this.setState({ opened: false });
      } else {
        this.setState({ opened: true });
      }
    }

    /**
     * @method closeNavIfOpen
     * @returns {void} - Sets `opened` state to false only if it is set to true.
     */

  }, {
    key: "closeNavIfOpen",
    value: function closeNavIfOpen(prevState) {
      if (prevState.opened) {
        this.setState({ opened: false });
      }
    }
  }, {
    key: "renderPancake",
    value: function renderPancake() {
      return _react2.default.createElement(
        "div",
        {
          "data-test": "component-pancake",
          className: "pancake",
          onClick: this.toggleNav
        },
        _react2.default.createElement(
          "svg",
          { viewBox: "0 0 800 600" },
          _react2.default.createElement("path", {
            d: "M300,220 C300,220 520,220 540,220 C740,220 640,540 520, 420 C440,340 300,200 300,200",
            id: "top"
          }),
          _react2.default.createElement("path", { d: "M300,320 L540,320", id: "middle" }),
          _react2.default.createElement("path", {
            d: "M300,210 C300,210 520,210 540,210 C740,210 640,530 520, 410 C440,330 300,190 300,190",
            id: "bottom",
            transform: "translate(480, 320) scale(1, -1) translate(-480, -318)"
          })
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "nav",
        {
          "data-test": "component-ambsa-nav",
          className: "ambsa-nav opened-" + this.state.opened
        },
        _react2.default.createElement(
          "span",
          { className: "brand" },
          this.props.brand
        ),
        _react2.default.createElement(
          "div",
          { className: "pancake-wrap" },
          this.renderPancake()
        ),
        _react2.default.createElement(
          "div",
          { className: "list-wrap" },
          this.props.children
        )
      );
    }
  }]);

  return AmbsaNav;
}(_react.Component);

AmbsaNav.propTypes = {
  brand: _propTypes2.default.object
};

exports.default = AmbsaNav;