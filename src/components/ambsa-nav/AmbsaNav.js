import React, { Component } from "react";
import PropTypes from "prop-types";
import Styles from "./ambsa-nav.css";

class AmbsaNav extends Component {
  constructor() {
    super();
    this.toggleNav = this.toggleNav.bind(this);
    this.closeNavIfOpen = this.closeNavIfOpen.bind(this);
    this.state = { opened: false };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.closeNavIfOpen(prevState);
  }

  /**
   * @method toggleNav
   * @returns {void} - Toggles `opened` state and document overflow styles.
   */
  toggleNav() {
    if (this.state.opened) {
      document.body.style.overflow = "initial";
      this.setState({ opened: false });
    } else {
      document.body.style.overflow = "hidden";
      this.setState({ opened: true });
    }
  }

  /**
   * @method closeNavIfOpen
   * @returns {void} - Sets `opened` state to false only if it is set to true.
   */
  closeNavIfOpen(prevState) {
    if (prevState.opened) {
      this.setState({ opened: false });
    }
  }

  renderPancake() {
    return (
      <div
        data-test="component-pancake"
        className="pancake"
        onClick={this.toggleNav}
      >
        <svg viewBox="0 0 800 600">
          <path
            d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,
            420 C440,340 300,200 300,200"
            id="top"
          />
          <path d="M300,320 L540,320" id="middle" />
          <path
            d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,
            410 C440,330 300,190 300,190"
            id="bottom"
            transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
          />
        </svg>
      </div>
    );
  }

  render() {
    return (
      <nav
        data-test="component-ambsa-nav"
        className={`ambsa-nav opened-${this.state.opened}`}
      >
        <span className="brand">{this.props.brand}</span>
        <div className="pancake-wrap">{this.renderPancake()}</div>
        <div className="list-wrap">{this.props.children}</div>
      </nav>
    );
  }
}

AmbsaNav.propTypes = {
  brand: PropTypes.object
};

export default AmbsaNav;
