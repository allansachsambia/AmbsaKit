import React from "react";
import ReactDOM from "react-dom";
import AmbsaHero from "./../../src/components/ambsa-hero/AmbsaHero";

export default class Index extends React.Component {
  render() {
    const image = "https://picsum.photos/1800/1224/?random";
    return (
      <div>
        <AmbsaHero image={image} stick="right" brightness="lighter">
          <div>
            <h1 className="ambsa-hero-display">Ambsa Hero</h1>
            <p className="ambsa-hero-lead">
              Maecenas gravida, sem id tincidunt aliquam, lorem nunc vulputate
              mauris, non gravida arcu nisi quis tellus. Integer euismod
              molestie elit, et euismod felis tristique et. Proin tristique
              tempor erat, nec scelerisque diam varius quis. Ut convallis mi non
              tortor egestas vulputate. Maecenas eu varius dui. Duis eget augue
              nec orci fringilla bibendum.
            </p>
          </div>
        </AmbsaHero>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("react-root"));
