import React from "react";
import ReactDOM from "react-dom";
import { AmbsaBreadcrumbs } from "./../../../src/";

import "./ambsa-breadcrumbs.css";

export default function App() {
  return (
    <div className="ambsa-kit ambsa-kit-breadcrumbs">
      <AmbsaBreadcrumbs>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
        <span>Link 5</span>
      </AmbsaBreadcrumbs>
    </div>
  );
}
