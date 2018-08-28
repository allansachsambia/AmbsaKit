import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Styles from "./ambsa-article.css";

class AmbsaArticle extends React.Component {
  render() {
    const { title, image } = this.props;
    return (
      <div data-test="component-ambsa-article" className="ambsa-article">
        <div className="header">
          <img className="header-image" src={image} />
        </div>
        <div className="content">
          <div className="main">
            <div className="title">{title}</div>
            <div className="body">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

AmbsaArticle.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
};

export default AmbsaArticle;
