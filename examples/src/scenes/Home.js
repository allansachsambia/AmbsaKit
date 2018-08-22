import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import AmbsaLogo from "./../svgs/AmbsaLogo";
import GithubLogo from "./../svgs/GithubLogo";
import NPMLogo from "./../svgs/NPMLogo";
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
          <AmbsaLogo />
        </div>
        <div className="ambsa-kit-title">AmbsaKit</div>
        <div className="ambsa-kit-subtitle">
          React components for web development.
        </div>
        <div className="ambsa-kit-buttons">
          <div className="ambsa-kit-buttons-inner-wrap">
            <Link to={"/ambsa-hero"} target="_blank">
              <button>AmbsaHero</button>
            </Link>
            <Link to={"/ambsa-footer"} target="_blank">
              <button>AmbsaFooter</button>
            </Link>
            <Link to={"/ambsa-nav"} target="_blank">
              <button>AmbsaNav</button>
            </Link>
            <Link to={"/ambsa-breadcrumbs"} target="_blank">
              <button>AmbsaBreadcrumbs</button>
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
        <div className="example-footer">
          <div className="link-logos">
            <a
              href="https://github.com/allansachsambia/AmbsaKit"
              target="_blank"
            >
              <GithubLogo />
            </a>
            <a href="https://www.npmjs.com/package/ambsa-kit" target="_blank">
              <NPMLogo />
            </a>
          </div>
          <div className="copyright">
            <a
              href="https://github.com/allansachsambia/AmbsaKit/blob/master/LICENSE"
              target="_blank"
            >
              Copyright © 2018 Allan Sachs-Ambia
            </a>
          </div>
        </div>
      </div>
    );
  }
}
