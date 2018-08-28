import React from "react";
import ReactDOM from "react-dom";
import { AmbsaHero } from "./../../../src/";
import "./ambsa-hero.css";

const image =
  "https://github.com/allansachsambia/AmbsaKit/blob/master/examples/src/media/joanna-kosinska-453787-unsplash.jpg?raw=true";
const about =
  "Qui ipsum elit ex fabulas. In dolore occaecat si cillum proident an velit velit, si ubi ipsum enim export, esse singulis est summis legam, est ad familiaritatem, est id enim nescius, voluptate export quibusdam cernantur non consequat ab esse.";
const copyright = "Copyright © 2018 Allan Sachs-Ambia";

export default function App() {
  return (
    <div className="ambsa-kit ambsa-kit-hero">
      <AmbsaHero image={image} stick="right">
        <div>
          <h1 className="ambsa-hero-display">Lorem Ipsum</h1>
          <p className="ambsa-hero-lead">
            Maecenas gravida, sem id tincidunt aliquam, lorem nunc vulputate
            mauris, non gravida arcu nisi quis tellus. Integer euismod molestie
            elit, et euismod felis tristique et. Proin tristique tempor erat,
            nec scelerisque diam varius quis. Ut convallis mi non tortor egestas
            vulputate. Maecenas eu varius dui. Duis eget augue nec orci
            fringilla bibendum.
          </p>
        </div>
      </AmbsaHero>
    </div>
  );
}
