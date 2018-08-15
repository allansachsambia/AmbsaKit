import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { AmbsaFooter } from "./../../../src/";
import ExampleHeader from "./../components/ExampleHeader";
import ExampleFooter from "./../components/ExampleFooter";
import Styles from "./ambsa-footer.css";

export default class Home extends React.Component {
  renderSiteMap() {
    return {
      about:
        "Qui ipsum elit ex fabulas. In dolore occaecat si cillum proident an velit velit, si ubi ipsum enim export, esse singulis est summis legam, est ad familiaritatem, est id enim nescius, voluptate export quibusdam cernantur non consequat ab esse.",
      copyright: "Copyright © 2018 Allan Sachs-Ambia"
    };
  }

  render() {
    const image1 = "./joanna-kosinska-453787-unsplash.jpg";
    const image2 = "elizabeth-lies-190771-unsplash.jpg";
    const { about, copyright, icons } = this.renderSiteMap();
    return (
      <div className="ambsa-kit">
        <ExampleHeader page="Ambsa Footer" />
        <h1 className="ambsa-kit-title">Ambsa Footer</h1>
        <AmbsaFooter about={about} copyright={copyright}>
          <div className="explore">
            <span>
              <i className="fa fa-angle-right" />
              <a href="http://tinytuba.com/">Tiny Tuba</a>
            </span>
            <span>
              <i className="fa fa-angle-right" />
              <a href="http://heeeeeeeey.com/">Heeeeeeeey</a>
            </span>
            <span>
              <i className="fa fa-angle-right" />
              <a href="http://endless.horse/">Endless Horse</a>
            </span>
            <span>
              <i className="fa fa-angle-right" />
              <a href="http://www.fallingfalling.com/">Falling</a>
            </span>
            <span>
              <i className="fa fa-angle-right" />
              <a href="http://beesbeesbees.com/">Bees Bees Bees</a>
            </span>
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
        <ExampleFooter />
      </div>
    );
  }
}
