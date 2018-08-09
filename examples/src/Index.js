import React from "react";
import ReactDOM from "react-dom";
import AmbsaHero from "./../../src/components/ambsa-hero/AmbsaHero";
import AmbsaFooter from "./../../src/components/ambsa-footer/AmbsaFooter";

export default class Index extends React.Component {
  renderSiteMap() {
    return {
      about:
        "Qui ipsum elit ex fabulas. In dolore occaecat si cillum proident an velit velit, si ubi ipsum enim export, esse singulis est summis legam, est ad familiaritatem, est id enim nescius, voluptate export quibusdam cernantur non consequat ab esse.",
      copyright: "Copyright © 2018 Allan Sachs-Ambia"
    };
  }

  // Photo by Bryan Goff on Unsplash

  render() {
    const image1 = "./joanna-kosinska-453787-unsplash.jpg";
    const image2 = "elizabeth-lies-190771-unsplash.jpg";
    const { about, copyright, icons } = this.renderSiteMap();
    return (
      <div className="ambsa-kit">
        {/* First Example */}
        <h1 className="ambsa-kit-title">Ambsa Hero</h1>
        <h3 className="ambsa-kit-subtitle">Example with Nested Content</h3>
        <AmbsaHero image={image1} stick="right">
          <div>
            <h1 className="ambsa-hero-display">Ambsa Hero</h1>
            <p className="ambsa-hero-lead">
              Maecenas gravida, sem id tincidunt aliquam, lorem nunc vulputate
              mauris, non gravida arcu nisi quis tellus. Integer euismod
              molestie elit, et euismod felis tristique et. Proin tristique
              tempor erat, nec scelerisque diam varius quis. Ut convallis mi non
              tortor egestas vulputate. Maecenas eu varius dui. Duis eget augue
              nec orci fringilla bibendum.
            </p>
          </div>
        </AmbsaHero>
        {/* Second Example */}
        <h1 className="ambsa-kit-title">Ambsa Hero</h1>
        <h3 className="ambsa-kit-subtitle">Example without Nested Content</h3>
        <AmbsaHero image={image2} stick="right" />
        {/* Third Example */}
        <h1 className="ambsa-kit-title">Ambsa Footer</h1>
        <AmbsaFooter about={about} copyright={copyright}>
          <div className="explore">
            <a href="http://tinytuba.com/">
              <i className="fa fa-angle-right" />
              Tiny Tuba
            </a>
            <a href="http://heeeeeeeey.com/">
              <i className="fa fa-angle-right" />
              Heeeeeeeey
            </a>
            <a href="http://endless.horse/">
              <i className="fa fa-angle-right" />
              Endless Horse
            </a>
            <a href="http://tinytuba.com/">
              <i className="fa fa-angle-right" />
              Tiny Tuba
            </a>
            <a href="http://www.fallingfalling.com/">
              <i className="fa fa-angle-right" />
              Falling
            </a>
            <a href="http://beesbeesbees.com/">
              <i className="fa fa-angle-right" />
              BeesBeesBeees
            </a>
          </div>
          <div className="icons">
            <a href="http://www.mail.com">
              <i className="fa fa-envelope" aria-hidden="true" />
            </a>
            <a href="http://www.facebook.com">
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
            <a href="http://www.twitter.com">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
            <a href="http://www.instagram.com">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </div>
        </AmbsaFooter>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("react-root"));
