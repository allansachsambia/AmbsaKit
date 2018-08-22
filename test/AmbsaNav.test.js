import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./testUtils";
import AmbsaNav from "../src/components/ambsa-nav/AmbsaNav";

/**
 * Factory function to create a ShallowWrapper for the AmbsaFooter component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state = Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<AmbsaNav {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Rendering Test
 */
test("renders without errors", () => {
  const wrapper = setup();
  const ambsaNavComponent = findByTestAttr(wrapper, "component-ambsa-nav");
  expect(ambsaNavComponent.length).toBe(1);
});

/**
 * Props Tests
 */
describe("check 'about' prop values on ambsa-footer", () => {
  test("does not throw a warning with expected props types", () => {
    const expectedProps = { brand: {} };
    checkProps(AmbsaNav, expectedProps);
  });
});

/**
 * Opened State
 */
describe("Opened state", () => {
  test("Opened state is initially set to false", () => {
    const wrapper = setup();
    const openedState = wrapper.state("opened");
    expect(openedState).toBe(false);
  });

  test("Opened state is set to true after pancake element is clicked", () => {
    const wrapper = setup({});
    const el = findByTestAttr(wrapper, "component-pancake");
    el.simulate("click");
    wrapper.update();
    const counterStateAfterFirstClick = wrapper.state("opened");
    expect(counterStateAfterFirstClick).toBe(true);
  });

  test("Opened state is set to false again after pancake element is clicked a second time", () => {
    const wrapper = setup({});
    const el = findByTestAttr(wrapper, "component-pancake");
    el.simulate("click");
    wrapper.update();
    el.simulate("click");
    wrapper.update();
    const counterStateAfterFirstClick = wrapper.state("opened");
    expect(counterStateAfterFirstClick).toBe(false);
  });
});
