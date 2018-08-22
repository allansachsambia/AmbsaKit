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

var _DefaultSeparator = require("./DefaultSeparator");

var _DefaultSeparator2 = _interopRequireDefault(_DefaultSeparator);

var _ambsaBreadcrumbs = require("./ambsa-breadcrumbs.css");

var _ambsaBreadcrumbs2 = _interopRequireDefault(_ambsaBreadcrumbs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AmbsaBreadcrumbs = function (_React$Component) {
  _inherits(AmbsaBreadcrumbs, _React$Component);

  function AmbsaBreadcrumbs() {
    _classCallCheck(this, AmbsaBreadcrumbs);

    var _this = _possibleConstructorReturn(this, (AmbsaBreadcrumbs.__proto__ || Object.getPrototypeOf(AmbsaBreadcrumbs)).call(this));

    _this.renderBreadcrumbBlock = _this.renderBreadcrumbBlock.bind(_this);
    return _this;
  }

  /**
   * @method renderHeadBreadcrumb
   * @param {object} - The first child of the component.
   * @returns {object} - returns an object block of JSX containing the
   * head breadcrumb.
   */


  _createClass(AmbsaBreadcrumbs, [{
    key: "renderHeadBreadcrumb",
    value: function renderHeadBreadcrumb(child) {
      return _react2.default.createElement(
        "div",
        {
          "data-test": "component-ambsa-breadcrumb-head",
          className: "ambsa-breadcrumb ambsa-breadcrumb-head"
        },
        child
      );
    }

    /**
     * @method renderBodyBreadcrumb
     * @param {object} - The children of the component that are not first or last.
     * @returns {object} - returns an object block of JSX containing the
     * body breadcrumb.
     */

  }, {
    key: "renderBodyBreadcrumb",
    value: function renderBodyBreadcrumb(child) {
      var separator = this.props.separator || _react2.default.createElement(_DefaultSeparator2.default, null);
      return _react2.default.createElement(
        "div",
        {
          "data-test": "component-ambsa-breadcrumb-body",
          className: "ambsa-breadcrumb ambsa-breadcrumb-body"
        },
        separator,
        child
      );
    }

    /**
     * @method renderTailBreadcrumb
     * @param {object} - The last child of the component.
     * @returns {object} - returns an object block of JSX containing the
     * tail breadcrumb.
     */

  }, {
    key: "renderTailBreadcrumb",
    value: function renderTailBreadcrumb(child) {
      var separator = this.props.separator || _react2.default.createElement(_DefaultSeparator2.default, null);
      return _react2.default.createElement(
        "div",
        {
          "data-test": "component-ambsa-breadcrumb-tail",
          className: "ambsa-breadcrumb ambsa-breadcrumb-tail"
        },
        separator,
        child
      );
    }

    /**
     * @method renderBreadcrumbBlock
     * @returns {object} - returns an object block of JSX containing a
     * breadcrumb.
     */

  }, {
    key: "renderBreadcrumbBlock",
    value: function renderBreadcrumbBlock() {
      var _this2 = this;

      return _react2.default.Children.map(this.props.children, function (child, i) {
        var head = i === 0;
        var tail = _this2.props.children.length === i + 1;
        var body = !head && !tail;
        if (head) {
          return _this2.renderHeadBreadcrumb(child);
        } else if (body) {
          return _this2.renderBodyBreadcrumb(child);
        } else if (tail) {
          return _this2.renderTailBreadcrumb(child);
        }
        return _react2.default.createElement("div", null);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var breadcrumbs = this.props.breadcrumbs;

      return _react2.default.createElement(
        "div",
        {
          "data-test": "component-ambsa-breadcrumbs",
          className: "ambsa-breadcrumbs"
        },
        this.renderBreadcrumbBlock()
      );
    }
  }]);

  return AmbsaBreadcrumbs;
}(_react2.default.Component);

AmbsaBreadcrumbs.propTypes = {
  separator: _propTypes2.default.object
};

exports.default = AmbsaBreadcrumbs;