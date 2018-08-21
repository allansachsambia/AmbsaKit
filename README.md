![image](https://github.com/allansachsambia/AmbsaKit/blob/master/ambsakit-logo.png?raw=true)

# Ambsa Kit

React components for web development.

### Table of Contents

- [Installation](#installation)
- [Example](#example)
- [AmbsaHero](#ambsa-hero)
- [AmbsaFooter](#ambsa-footer)
- [AmbsaNav](#ambsa-nav)

### Installation

To install:

```
npm install ambsa-kit
```

### Example

To build an example locally first clone the project:

```
git clone https://github.com/allansachsambia/AmbsaKit.git
```

### CodeSandbox Links with Examples

- [AmbsaHero](https://codesandbox.io/s/w79zppvv7l)
- [AmbsaFooter](https://codesandbox.io/s/wkv6p61748)
- [AmbsaNav](https://codesandbox.io/s/w6zpwkz1vk)

### Ambsa Hero

![image](https://github.com/allansachsambia/AmbsaKit/blob/master/_mockups/ambsa-hero/with-children/desktop.png?raw=true)

#### Use

```
import { AmbsaNav } from "ambsa-kit";

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

## Ambsa Footer

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

## Ambsa Nav

<!-- Pending -->
![image](https://github.com/allansachsambia/AmbsaKit/blob/master/_mockups/ambsa-nav/ambsa-nav-closed.png?raw=true)

![image](https://github.com/allansachsambia/AmbsaKit/blob/master/_mockups/ambsa-nav/ambsa-nav-opened.png?raw=true)

#### Use

AmbsaNav takes one prop named 'brand' which expects an image wrapped in jsx.  
This element can be resized and styled. The child elements passed in will end
up as the content in the center of the menu area after the pancake button has
been clicked and the navbar expanded, for example: a list of links, with a
title.

```
import BallOfYarn from "./../svgs/BallOfYarn";
import { AmbsaNav } from "ambsa-kit";

export default function App() {
  return (
    <div className="ambsa-kit">
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

```

#### Properties

Property        |       Type            |       Description
:---------------|:----------------------|:--------------------------------
brand           | Object                | optional; an image wrapped in JSX
