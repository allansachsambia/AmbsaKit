import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./testUtils";
import AmbsaBreadcrumbs from "../src/components/ambsa-breadcrumbs/AmbsaBreadcrumbs";

/**
 * Factory function to create a ShallowWrapper for the AmbsaBreadcrumbs component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state = Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<AmbsaBreadcrumbs {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Rendering Test
 */
test("renders without errors", () => {
  const wrapper = setup();
  const ambsaBreadcrumbsComponent = findByTestAttr(
    wrapper,
    "component-ambsa-breadcrumbs"
  );
  expect(ambsaBreadcrumbsComponent.length).toBe(1);
});

/**
 * Props Tests
 */
describe("check 'about' prop values on ambsa-footer", () => {
  test("does not throw a warning with expected props types", () => {
    const expectedProps = { separator: {} };
    checkProps(AmbsaBreadcrumbs, expectedProps);
  });
});
