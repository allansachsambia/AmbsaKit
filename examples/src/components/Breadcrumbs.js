import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import AmbsaKitLogo from "./../svgs/AmbsaKitLogo";
import Styles from "./breadcrumbs.css";

export default class Breadcrumbs extends React.Component {
  render() {
    return (
      <div className="breadcrumbs">
        <Link to={"/"}>Home</Link>
        <span> / </span>
        <span>{this.props.page}</span>
      </div>
    );
  }
}
