import React from "react";
import { shallow } from "enzyme";
import AmbsaHero from "../src/components/ambsa-hero/AmbsaHero";

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state = Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<AmbsaHero {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * Rendering Test
 */
test("renders without errors", () => {
  const wrapper = setup();
  const ambsaHeroComponent = findByTestAttr(wrapper, "component-ambsa-hero");
  expect(ambsaHeroComponent.length).toBe(1);
});

/**
 * Image Prop Tests
 */
describe("check image prop values on ambsa-hero", () => {
  test("it can set the backgroundImage inline style to the image prop value if a string with an image URL is passed to it", () => {
    const imageVal = "https://picsum.photos/1800/1224/?image=465";
    const wrapper = setup({ image: imageVal });
    const ambsaHero = findByTestAttr(wrapper, "component-ambsa-hero");
    const containerStyle = ambsaHero.props().style;
    expect(containerStyle).toEqual({ backgroundImage: `url(${imageVal})` });
  });

  test("it will set the backgroundImage inline style to an empty object if the wrong data type is passed as an image prop", () => {
    const imageVal = [];
    const wrapper = setup({ image: imageVal });
    const ambsaHero = findByTestAttr(wrapper, "component-ambsa-hero");
    const containerStyle = ambsaHero.props().style;
    expect(containerStyle).toEqual({});
  });

  test("it will set the backgroundImage inline style to an empty object if nothing is passed as an image prop", () => {
    const wrapper = setup();
    const ambsaHero = findByTestAttr(wrapper, "component-ambsa-hero");
    const containerStyle = ambsaHero.props().style;
    expect(containerStyle).toEqual({});
  });
});

/**
 * Stick Prop Tests
 */
describe("check stick prop values on ambsa-hero", () => {
  test("if `left` is passed, the data-stick attribute value should be set to `left`", () => {
    const propVal = "left";
    const wrapper = setup({ stick: propVal });
    const el = findByTestAttr(wrapper, "component-ambsa-hero");
    const attrVal = el.props()["data-stick"];
    expect(attrVal).toBe(propVal);
  });

  test("if `center` is passed, the data-stick attribute value should be set to `center`", () => {
    const propVal = "center";
    const wrapper = setup({ stick: propVal });
    const el = findByTestAttr(wrapper, "component-ambsa-hero");
    const attrVal = el.props()["data-stick"];
    expect(attrVal).toBe(propVal);
  });

  test("if `right` is passed, the data-stick attribute value should be set to `right`", () => {
    const propVal = "right";
    const wrapper = setup({ stick: propVal });
    const el = findByTestAttr(wrapper, "component-ambsa-hero");
    const attrVal = el.props()["data-stick"];
    expect(attrVal).toBe(propVal);
  });

  test("if a string that is not `left`, `center`, or `right` is passed, the data-stick attribute value should be set to an empty string", () => {
    const propVal = "x";
    const wrapper = setup({ stick: propVal });
    const el = findByTestAttr(wrapper, "component-ambsa-hero");
    const attrVal = el.props()["data-stick"];
    expect(attrVal).toBe("");
  });

  test("if a non-string type is passed, the data-stick attribute value should be set to an empty string", () => {
    const propVal = [];
    const wrapper = setup({ stick: propVal });
    const el = findByTestAttr(wrapper, "component-ambsa-hero");
    const attrVal = el.props()["data-stick"];
    expect(attrVal).toBe("");
  });

  test("if no props are passed, the data-stick attribute value should be set to an empty string", () => {
    const wrapper = setup();
    const el = findByTestAttr(wrapper, "component-ambsa-hero");
    const attrVal = el.props()["data-stick"];
    expect(attrVal).toBe("");
  });
});

/**
 * Brightness Prop Tests
 */
describe("check brightness prop values on ambsa-hero-inner-wrap", () => {
  test("if `darker` is passed, the data-brightness attribute value should be set to `darker`", () => {
    const propVal = "darker";
    const wrapper = setup({ brightness: propVal });
    const el = findByTestAttr(wrapper, "component-ambsa-hero-inner-wrap");
    const attrVal = el.props()["data-brightness"];
    expect(attrVal).toBe(propVal);
  });

  test("if `dark` is passed, the data-brightness attribute value should be set to `dark`", () => {
    const propVal = "dark";
    const wrapper = setup({ brightness: propVal });
    const el = findByTestAttr(wrapper, "component-ambsa-hero-inner-wrap");
    const attrVal = el.props()["data-brightness"];
    expect(attrVal).toBe(propVal);
  });

  test("if `light` is passed, the data-brightness attribute value should be set to `light`", () => {
    const propVal = "light";
    const wrapper = setup({ brightness: propVal });
    const el = findByTestAttr(wrapper, "component-ambsa-hero-inner-wrap");
    const attrVal = el.props()["data-brightness"];
    expect(attrVal).toBe(propVal);
  });

  test("if `lighter` is passed, the data-brightness attribute value should be set to `lighter`", () => {
    const propVal = "lighter";
    const wrapper = setup({ brightness: propVal });
    const el = findByTestAttr(wrapper, "component-ambsa-hero-inner-wrap");
    const attrVal = el.props()["data-brightness"];
    expect(attrVal).toBe(propVal);
  });

  test("if a string that is not `darker`, `dark`, `light`, or `lighter` is passed, the data-brightness attribute value should be set to an empty string", () => {
    const propVal = "x";
    const wrapper = setup({ brightness: propVal });
    const el = findByTestAttr(wrapper, "component-ambsa-hero-inner-wrap");
    const attrVal = el.props()["data-brightness"];
    expect(attrVal).toBe("");
  });

  test("if a non-string type is passed, the data-brightness attribute value should be set to an empty string", () => {
    const propVal = [];
    const wrapper = setup({ brightness: propVal });
    const el = findByTestAttr(wrapper, "component-ambsa-hero-inner-wrap");
    const attrVal = el.props()["data-brightness"];
    expect(attrVal).toBe("");
  });

  test("if no props are passed, the data-brightness attribute value should be set to an empty string", () => {
    const wrapper = setup();
    const el = findByTestAttr(wrapper, "component-ambsa-hero-inner-wrap");
    const attrVal = el.props()["data-brightness"];
    expect(attrVal).toBe("");
  });
});
