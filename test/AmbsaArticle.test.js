import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./testUtils";
import AmbsaArticle from "../src/components/ambsa-article/AmbsaArticle";

/**
 * Factory function to create a ShallowWrapper for the AmbsaArticle component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state = Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<AmbsaArticle {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Rendering Test
 */
test("renders without errors", () => {
  const wrapper = setup();
  const ambsaArticleComponent = findByTestAttr(
    wrapper,
    "component-ambsa-article"
  );
  expect(ambsaArticleComponent.length).toBe(1);
});

/**
 * Props Tests
 */
describe("check 'about' prop values on ambsa-article", () => {
  test("does not throw a warning with expected props types", () => {
    const expectedProps = { title: "", image: "" };
    checkProps(AmbsaArticle, expectedProps);
  });
});
