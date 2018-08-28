![image](https://github.com/allansachsambia/AmbsaKit/blob/master/ambsakit-logo-white.png?raw=true)

# Ambsa Kit

[![Build Status](https://travis-ci.org/allansachsambia/AmbsaKit.svg?branch=master)](https://travis-ci.org/allansachsambia/AmbsaKit)
[![npm](https://img.shields.io/npm/v/ambsa-kit.svg?style=flat-square)](https://www.npmjs.com/package/ambsa-kit)

React components for web development.

## Table of Contents

- [Installation](#installation)
- [Examples](#examples)
  - [CodeSandbox Examples](#codesandbox-examples)
  - [Build Local Examples](#build-local-examples)
- [Components](#components)
  - [AmbsaHero](#ambsa-hero)
  - [AmbsaFooter](#ambsa-footer)
  - [AmbsaNav](#ambsa-nav)
  - [AmbsaBreadcrumbs](#ambsa-breadcrumbs)
  - [AmbsaArticle](#ambsa-article)

## Installation

To install:

```
npm install ambsa-kit
```

## Examples

### CodeSandbox Examples

- [AmbsaHero](https://codesandbox.io/s/w79zppvv7l)
- [AmbsaFooter](https://codesandbox.io/s/wkv6p61748)
- [AmbsaNav](https://codesandbox.io/s/w6zpwkz1vk)
- [AmbsaBreadcrumbs](https://codesandbox.io/s/rroz2616zq)
- [AmbsaArticle](https://codesandbox.io/s/kwpvx54mr3)

### Build Local Examples

To build an example clone the project, run the installer and start the app:

```
git clone https://github.com/allansachsambia/AmbsaKit.git
```

## Components

### Ambsa Hero

![image](https://github.com/allansachsambia/AmbsaKit/blob/master/_mockups/ambsa-hero/with-children/desktop.png?raw=true)

##### Use

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

##### Properties

Property        |       Type            |       Description
:---------------|:----------------------|:--------------------------------
image           | String                | optional; background image url
stick           | String                | optional; background-position position helper for the background image limited to max-width: 1300px.  Options: '***left***', '***center***', and '***right***'
brightness      | String                | optional; sets the brightness of the background image. Options: '***darker***', '***dark***', '***light***', and '***lighter***'.

### Ambsa Footer

![image](https://github.com/allansachsambia/AmbsaKit/blob/master/_mockups/ambsa-footer/desktop.png?raw=true)

##### Use

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

##### Properties

Property        |       Type            |       Description
:---------------|:----------------------|:--------------------------------
about           | String                | optional; a short website description
copyright       | String                | optional; copyright text

### Ambsa Nav

<!-- Pending -->
![image](https://github.com/allansachsambia/AmbsaKit/blob/master/_mockups/ambsa-nav/ambsa-nav-closed.png?raw=true)

![image](https://github.com/allansachsambia/AmbsaKit/blob/master/_mockups/ambsa-nav/ambsa-nav-opened.png?raw=true)

##### Use

AmbsaNav takes one prop named 'brand' which expects an image passed in as JSX.  
This element can be resized and styled. The child elements passed in will end
up as the content in the center of the menu area after the pancake button has
been clicked and the navbar expanded, for example: a list of links, with a
title.

```
import BallOfYarn from "./../svgs/BallOfYarn";
import { AmbsaNav } from "ambsa-kit";

export default function App() {
  return (
    <div>
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

##### Properties

Property        |       Type            |       Description
:---------------|:----------------------|:--------------------------------
brand           | Object                | optional; an image passed in as JSX

### Ambsa Breadcrumbs

<!-- Pending -->
![image](https://github.com/allansachsambia/AmbsaKit/blob/master/_mockups/ambsa-breadcrumbs/All.png?raw=true)

##### Use

Nest links and span elements inside AmbsaBreadcrumbs to make breadcrumbs.  To
change separators just pass your JSX svg image or plain <img> in as the value
of the separator attribute and override the styles to resize.

```
import { AmbsaBreadcrumbs } from "ambsa-kit";

export default function App() {
  return (
    <div>
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
```

##### Properties

Property        |       Type            |       Description
:---------------|:----------------------|:--------------------------------
separator       | Object                | optional; an image passed in as JSX

### Ambsa Article

<!-- Pending -->
![image](https://github.com/allansachsambia/AmbsaKit/blob/master/_mockups/ambsa-article/desktop.png?raw=true)

##### Use

Include the background image source and title, and nest paragraphs inside
AmbsaArticle to produce the article.

```
import { AmbsaArticle } from "ambsa-kit";

const image =
  "https://github.com/allansachsambia/AmbsaKit/blob/master/examples/src/media/tim-mossholder-530857-unsplash.jpg?raw=true";

export default function App() {
  return (
    <div className="ambsa-kit ambsa-kit-article">
      <AmbsaArticle title="Article" image={image}>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.{" "}
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.{" "}
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
      </AmbsaArticle>
    </div>
  );
}

```

##### Properties

Property        |       Type            |       Description
:---------------|:----------------------|:--------------------------------
title           | String                | optional; an article title
image           | String                | optional; a background image source
