import React from "react";
import ReactDOM from "react-dom";
import { AmbsaFooter } from "./../../../src/";
import "./ambsa-footer.css";

const about =
  "Qui ipsum elit ex fabulas. In dolore occaecat si cillum proident an velit velit, si ubi ipsum enim export, esse singulis est summis legam, est ad familiaritatem, est id enim nescius, voluptate export quibusdam cernantur non consequat ab esse.";
const copyright = "Copyright © 2018 Allan Sachs-Ambia";

export default function App() {
  return (
    <div className="ambsa-kit">
      <AmbsaFooter about={about} copyright={copyright}>
        <div className="explore">
          <span>
            <i className="fa fa-angle-right" />
            <a href="#">Link 1</a>
          </span>
          <span>
            <i className="fa fa-angle-right" />
            <a href="#">Link 2</a>
          </span>
          <span>
            <i className="fa fa-angle-right" />
            <a href="#">Link 3</a>
          </span>
          <span>
            <i className="fa fa-angle-right" />
            <a href="#">Link 4</a>
          </span>
          <span>
            <i className="fa fa-angle-right" />
            <a href="#">Link 5</a>
          </span>
          <span>
            <i className="fa fa-angle-right" />
            <a href="#">Link 6</a>
          </span>
          <span>
            <i className="fa fa-angle-right" />
            <a href="#">Link 7</a>
          </span>
        </div>
        <div className="icons">
          <a href="#">
            <i className="fa fa-envelope" aria-hidden="true" />
          </a>
          <a href="#">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
          <a href="#">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>
        </div>
      </AmbsaFooter>
    </div>
  );
}
