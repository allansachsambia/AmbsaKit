import React from "react";
import ReactDOM from "react-dom";
import BallOfYarn from "./../svgs/BallOfYarn";
import { AmbsaNav } from "./../../../src/";
import Styles from "./ambsa-nav.css";

export default function App() {
  return (
    <div className="ambsa-kit ambsa-kit-nav">
      <AmbsaNav brand={<BallOfYarn />}>
        <div className="menu-title">MENU</div>
        <ul>
          <li className="item">
            <a href="#">LINK 1</a>
          </li>
          <li className="item">
            <a href="#">LINK 2</a>
          </li>
          <li className="item">
            <a href="#">LINK 3</a>
          </li>
          <li className="item">
            <a href="#">LINK 4</a>
          </li>
          <li className="item">
            <a href="#">LINK 5</a>
          </li>
          <li className="item">
            <a href="#">LINK 6</a>
          </li>
        </ul>
      </AmbsaNav>
    </div>
  );
}
