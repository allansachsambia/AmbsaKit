import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Styles from "./ambsa-hero.css";

class AmbsaHero extends React.Component {
  /**
   * @method ambsaHeroStyle
   * @returns {object} - for setting the ambsa-hero backgroundImage style with
   * the image prop.  If no prop is passed returns an empty object.
   */
  ambsaHeroStyle() {
    const { image } = this.props;
    return image && typeof image === "string"
      ? { backgroundImage: `url(${image})` }
      : {};
  }

  /**
   * @method stick
   * @returns {string} - for setting the ambsa-hero data-background-position
   * attribute, which in turn is used to set background-position styles
   * by way of an external stylesheet.  If the stick prop is set to 'left',
   * 'center' or 'right' this method returns that value, otherwise it returns
   * an empty string.
   */
  stick() {
    const { stick } = this.props;
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
  brightness() {
    const { brightness } = this.props;
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

  render() {
    return (
      <div
        data-test="component-ambsa-hero"
        data-children={this.props.children ? true : false}
        data-stick={this.stick()}
        className="ambsa-hero"
        style={this.ambsaHeroStyle()}
      >
        <div
          data-test="component-ambsa-hero-inner-wrap"
          className="ambsa-hero-inner-wrap"
          data-brightness={this.brightness()}
        >
          <div className="ambsa-hero-contents">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

AmbsaHero.propTypes = {
  image: PropTypes.string,
  stick: PropTypes.string,
  brightness: PropTypes.string
};

export default AmbsaHero;
