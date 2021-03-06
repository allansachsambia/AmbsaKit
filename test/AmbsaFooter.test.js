import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./testUtils";
import AmbsaFooter from "../src/components/ambsa-footer/AmbsaFooter";

/**
 * Factory function to create a ShallowWrapper for the AmbsaFooter component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state = Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<AmbsaFooter {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Rendering Test
 */
test("renders without errors", () => {
  const wrapper = setup();
  const ambsaFooterComponent = findByTestAttr(
    wrapper,
    "component-ambsa-footer"
  );
  expect(ambsaFooterComponent.length).toBe(1);
});

/**
 * Props Tests
 */
describe("check 'about' prop values on ambsa-footer", () => {
  test("does not throw a warning with expected props types", () => {
    const expectedProps = { about: "" };
    checkProps(AmbsaFooter, expectedProps);
  });

  test("it nests the about prop text inside the component with the data-test attribute value of component-ambsa-footer-about", () => {
    const txt = "Lorem ipsum dolor sit amet.";
    const wrapper = setup({ about: txt });
    const el = findByTestAttr(wrapper, "component-ambsa-footer-about");
    expect(el.text()).toBe(txt);
  });
});

/**
 * Copyright Prop Tests
 */
describe("check 'copyright' prop values on ambsa-footer", () => {
  test("does not throw a warning with expected props types", () => {
    const expectedProps = { copyright: "" };
    checkProps(AmbsaFooter, expectedProps);
  });

  test("it nests the copyright prop text inside the component with the data-test attribute value of component-ambsa-footer-copyright", () => {
    const txt = "Lorem ipsum dolor sit amet.";
    const wrapper = setup({ copyright: txt });
    const el = findByTestAttr(wrapper, "component-ambsa-footer-copyright");
    expect(el.text()).toBe(txt);
  });
});
