import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { AmbsaHero } from "./../../../src/";
import AmbsaFooter from "./../../../src/components/ambsa-footer/AmbsaFooter";
import ExampleHeader from "./../components/ExampleHeader";
import ExampleFooter from "./../components/ExampleFooter";
import Styles from "./ambsa-hero.css";

export default class Home extends React.Component {
  renderSiteMap() {
    return {
      about:
        "Qui ipsum elit ex fabulas. In dolore occaecat si cillum proident an velit velit, si ubi ipsum enim export, esse singulis est summis legam, est ad familiaritatem, est id enim nescius, voluptate export quibusdam cernantur non consequat ab esse.",
      copyright: "Copyright © 2018 Allan Sachs-Ambia"
    };
  }

  render() {
    const image1 = "./media/joanna-kosinska-453787-unsplash.jpg";
    const image2 = "./media/elizabeth-lies-190771-unsplash.jpg";
    const { about, copyright, icons } = this.renderSiteMap();
    return (
      <div className="ambsa-kit">
        <ExampleHeader page="Ambsa Hero" />
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
        <ExampleFooter />
      </div>
    );
  }
}
