import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";
import Styles from "./ambsa-footer.css";

const styles = {
  fadeInUp: {
    animation: "x 1.25s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp")
  }
};

class AmbsaFooter extends React.Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.renderStyles = this.renderStyles.bind(this);
    this.state = { thresholdReached: false };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  /**
   * @method handleScroll
   * @returns {void} - check that the user is 600px from the bottom of the page
   * to set the threshold state to true.  The threshold state is used to
   * determine whether or not the footers contents should "fadeInUp".
   */
  handleScroll() {
    const distanceFromBottom =
      document.body.scrollHeight - window.innerHeight - window.scrollY;
    if (distanceFromBottom < 600) {
      if (this.state.thresholdReached === false) {
        this.setState({ thresholdReached: true });
      }
    }
  }

  /**
   * @method handleScroll
   * @returns {object} - An inline style object
   */
  renderStyles() {
    // if (this.props.fadeInUp) {
    //   if (this.state.thresholdReached) {
    return styles.fadeInUp;
    //   }
    //   return null;
    // }
  }

  render() {
    const { about, copyright } = this.props;
    return (
      <StyleRoot>
        <footer data-test="component-ambsa-footer" className="ambsa-footer">
          <div className="inner-wrap" style={this.renderStyles()}>
            <div className="about-section">
              <div className="title">ABOUT</div>
              <div data-test="component-ambsa-footer-about" className="about">
                {about}
              </div>
            </div>

            <div className="explore-section">
              <div className="title">EXPLORE</div>
              {this.props.children}
            </div>

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
      </StyleRoot>
    );
  }
}

AmbsaFooter.propTypes = {
  about: PropTypes.string,
  copyright: PropTypes.string,
  fadeInUp: PropTypes.bool
};

export default AmbsaFooter;
