import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import Styles from "./ambsa-footer.css";

class AmbsaFooter extends React.Component {
  render() {
    const { about, copyright } = this.props;
    return (
      <footer data-test="component-ambsa-footer" className="ambsa-footer">
        <div className="inner-wrap">
          <Fade up>
            <div className="about-section">
              <div className="title">ABOUT</div>
              <div data-test="component-ambsa-footer-about" className="about">
                {about}
              </div>
            </div>
          </Fade>

          <Fade up>
            <div className="explore-section">
              <div className="title">EXPLORE</div>
              {this.props.children}
            </div>
          </Fade>

          <div className="copyright-section">
            <span
              data-test="component-ambsa-footer-copyright"
              className="copyright"
            >
              {copyright}
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

AmbsaFooter.propTypes = {
  about: PropTypes.string,
  copyright: PropTypes.string,
  fadeInUp: PropTypes.bool
};

export default AmbsaFooter;
