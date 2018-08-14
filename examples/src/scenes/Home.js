import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import ExampleFooter from "./../components/ExampleFooter";
import AmbsaKitLogo from "./../svgs/AmbsaKitLogo";
import Styles from "./home.css";

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
        <div className="main-logo-wrap">
          <AmbsaKitLogo />
        </div>
        <div className="ambsa-kit-title">AmbsaKit</div>
        <div className="ambsa-kit-subtitle">
          A collection of react components for use in web development.
        </div>
        <div className="ambsa-kit-buttons">
          <div className="ambsa-kit-buttons-inner-wrap">
            <Link to={"/ambsa-hero"}>
              <button>AmbsaHero</button>
            </Link>
            <Link to={"/ambsa-footer"}>
              <button>AmbsaFooter</button>
            </Link>
          </div>
        </div>
        <div className="ambsa-kit-links">
          <ul>
            <li>
              <a
                href="https://github.com/allansachsambia/AmbsaKit/blob/master/README.md"
                target="_blank"
              >
                README.md
              </a>
            </li>
          </ul>
        </div>
        <ExampleFooter />
      </div>
    );
  }
}
