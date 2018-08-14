import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import AmbsaKitLogo from "./../svgs/AmbsaKitLogo";
import GithubLogo from "./../svgs/GithubLogo";
import NPMLogo from "./../svgs/NPMLogo";
import Styles from "./example-footer.css";

export default class ExampleFooter extends React.Component {
  render() {
    return (
      <div className="example-footer">
        <div className="link-logos">
          <a href="https://github.com/allansachsambia/AmbsaKit" target="_blank">
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
    );
  }
}
