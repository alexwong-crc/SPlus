import { shallow } from "enzyme";
import React from "react";
import Button, { StyledButton } from "./Button";

describe("Button", () => {
  it("should snapshot the button", () => {
    const component = shallow(<Button name="Submit" />);
    expect(component).toMatchSnapshot();
  });

  it("should contain text in the button", () => {
    const component = shallow(<Button name="Click Here" />);
    expect(component.text()).toEqual("Click Here");
  });

  it("should default to type button when type is not supplied", () => {
    const component = shallow(<Button name="No Type" />);
    expect(component.props().type).toEqual("button");
  });

  it("should accept the button type value", () => {
    const component = shallow(<Button name="Submit Type" type="submit" />);
    expect(component.props().type).toEqual("submit");
  });
});

describe("StyledButton", () => {
  it("should snapshot the styled button", () => {
    const component = shallow(<StyledButton type="button" />);
    expect(component).toMatchSnapshot();
  });
});
