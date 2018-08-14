import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import AmbsaKitLogo from "./../svgs/AmbsaKitLogo";
import Breadcrumbs from "./Breadcrumbs";
import Styles from "./example-header.css";

export default class ExampleHeader extends React.Component {
  render() {
    return (
      <div className="example-header">
        <Link to={"/"}>
          <AmbsaKitLogo />
        </Link>
        <Breadcrumbs page={this.props.page} />
      </div>
    );
  }
}
