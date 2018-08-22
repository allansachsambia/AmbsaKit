import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import DefaultSeparator from "./DefaultSeparator";
import Styles from "./ambsa-breadcrumbs.css";

class AmbsaBreadcrumbs extends React.Component {
  constructor() {
    super();
    this.renderBreadcrumbBlock = this.renderBreadcrumbBlock.bind(this);
  }

  /**
   * @method renderHeadBreadcrumb
   * @param {object} - The first child of the component.
   * @returns {object} - returns an object block of JSX containing the
   * head breadcrumb.
   */
  renderHeadBreadcrumb(child) {
    return (
      <div
        data-test="component-ambsa-breadcrumb-head"
        className="ambsa-breadcrumb ambsa-breadcrumb-head"
      >
        {child}
      </div>
    );
  }

  /**
   * @method renderBodyBreadcrumb
   * @param {object} - The children of the component that are not first or last.
   * @returns {object} - returns an object block of JSX containing the
   * body breadcrumb.
   */
  renderBodyBreadcrumb(child) {
    const separator = this.props.separator || <DefaultSeparator />;
    return (
      <div
        data-test="component-ambsa-breadcrumb-body"
        className="ambsa-breadcrumb ambsa-breadcrumb-body"
      >
        {separator}
        {child}
      </div>
    );
  }

  /**
   * @method renderTailBreadcrumb
   * @param {object} - The last child of the component.
   * @returns {object} - returns an object block of JSX containing the
   * tail breadcrumb.
   */
  renderTailBreadcrumb(child) {
    const separator = this.props.separator || <DefaultSeparator />;
    return (
      <div
        data-test="component-ambsa-breadcrumb-tail"
        className="ambsa-breadcrumb ambsa-breadcrumb-tail"
      >
        {separator}
        {child}
      </div>
    );
  }

  /**
   * @method renderBreadcrumbBlock
   * @returns {object} - returns an object block of JSX containing a
   * breadcrumb.
   */
  renderBreadcrumbBlock() {
    return React.Children.map(this.props.children, (child, i) => {
      const head = i === 0;
      const tail = this.props.children.length === i + 1;
      const body = !head && !tail;
      if (head) {
        return this.renderHeadBreadcrumb(child);
      } else if (body) {
        return this.renderBodyBreadcrumb(child);
      } else if (tail) {
        return this.renderTailBreadcrumb(child);
      }
      return <div />;
    });
  }

  render() {
    const { breadcrumbs } = this.props;
    return (
      <div
        data-test="component-ambsa-breadcrumbs"
        className="ambsa-breadcrumbs"
      >
        {this.renderBreadcrumbBlock()}
      </div>
    );
  }
}

AmbsaBreadcrumbs.propTypes = {
  separator: PropTypes.object
};

export default AmbsaBreadcrumbs;
