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
      <div className="ambsa-kit ambsa-kit-home">
        <div className="main-outer-wrap">
          <div className="main-inner-wrap">
            <div className="ambsa-kit-title">AmbsaKit</div>
            <div className="ambsa-column-wrap">
              <div className="home-column">
                <h4>About</h4>
                <ul>
                  <li>
                    <span>React components for web development.</span>
                  </li>
                </ul>
              </div>
              <div className="home-column">
                <h4>Components</h4>
                <ul>
                  <li>
                    <Link to={"/ambsa-hero"} target="_blank">
                      Hero
                    </Link>
                  </li>
                  <li>
                    <Link to={"/ambsa-footer"} target="_blank">
                      Footer
                    </Link>
                  </li>
                  <li>
                    <Link to={"/ambsa-nav"} target="_blank">
                      Nav
                    </Link>
                  </li>
                  <li>
                    <Link to={"/ambsa-breadcrumbs"} target="_blank">
                      Breadcrumbs
                    </Link>
                  </li>
                  <li>
                    <Link to={"/ambsa-article"} target="_blank">
                      Article
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="home-column">
                <h4>Links</h4>
                <ul>
                  <li>
                    <a
                      href="https://github.com/allansachsambia/AmbsaKit"
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.npmjs.com/package/ambsa-kit"
                      target="_blank"
                    >
                      NPM
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer">
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
