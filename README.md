![image](https://github.com/allansachsambia/AmbsaKit/blob/master/ambsakit-logo.png?raw=true)

# Ambsa Kit

React components for web development.

## Contents

- [AmbsaHero](#AmbsaHero)
- [AmbsaFooter](#AmbsaFooter)
- [Installation](#Installation)
- [Example](Example)

## AmbsaHero

A hero wrapper.

![image](https://github.com/allansachsambia/AmbsaKit/blob/master/_mockups/ambsa-hero/with-children/desktop.png?raw=true)

#### Use

```
import { AmbsaHero } from "ambsa-kit";

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
```

#### Properties

Property        |       Type            |       Description
:---------------|:----------------------|:--------------------------------
image           | String                | optional; background image url
stick           | String                | optional; background-position position helper for the background image limited to max-width: 1300px.  Options: '***left***', '***center***', and '***right***'
brightness      | String                | optional; sets the brightness of the background image. Options: '***darker***', '***dark***', '***light***', and '***lighter***'.

## AmbsaFooter

A footer wrapper

![image](https://github.com/allansachsambia/AmbsaKit/blob/master/_mockups/ambsa-footer/desktop.png?raw=true)

#### Use

AmbsaFooter takes two values as attributes: `about` adds content under
the about section, and `copyright` adds copyright content to the bottom of
the page.  Both should be of type `String`.  AmbsaFooter also accepts nested
content and expects two div elements with specific classNames, the first is
`explore`, the second is `icons`.  The element with the explore className should
have nested spans as children which themselves contain links related to the
site.  The icons section expects links that wrap icons.  FontAwesome works
well but incorporating it is optional.

```
import { AmbsaFooter } from "ambsa-kit";

export default class Index extends React.Component {
  render() {
    const about = "Qui ipsum elit ex fabulas.";
    const copyright = "Copyright © 2018 Allan Sachs-Ambia";
    return (
      <div>
      <AmbsaFooter about={about} copyright={copyright}>
        <div className="explore">
          <span>
            <i className="fa fa-angle-right" />
            <a href="http://tinytuba.com/">Tiny Tuba</a>
          </span>
          <span>
            <i className="fa fa-angle-right" />
            <a href="http://heeeeeeeey.com/">Heeeeeeeey</a>
          </span>
          <span>
            <i className="fa fa-angle-right" />
            <a href="http://endless.horse/">Endless Horse</a>
          </span>
          <span>
            <i className="fa fa-angle-right" />
            <a href="http://www.fallingfalling.com/">Falling</a>
          </span>
          <span>
            <i className="fa fa-angle-right" />
            <a href="http://beesbeesbees.com/">Bees Bees Bees</a>
          </span>
        </div>
        <div className="icons">
          <a href="http://www.mail.com">
            <i className="fa fa-envelope" aria-hidden="true" />
          </a>
          <a href="http://www.facebook.com">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>
          <a href="http://www.twitter.com">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
          <a href="http://www.instagram.com">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>
        </div>
      </AmbsaFooter>
      </div>
    );
  }
}
```

#### Properties

Property        |       Type            |       Description
:---------------|:----------------------|:--------------------------------
about           | String                | optional; a short website description
copyright       | String                | optional; copyright text







#### Installation

To install:

```
npm install ambsa-kit
```

#### Example

To build an example locally:

Clone the project:

```
git clone https://github.com/allansachsambia/AmbsaKit.git
```

Go into the AmbsaKit directory and run:

```
npm run start
```

Go to `http://localhost:8000/` in your web browser.
