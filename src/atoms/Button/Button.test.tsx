import { shallow } from "enzyme";
import React from "react";
import Button from "./Button";
import defaultProps from "../../../services/tests/defaultProps";

describe("Button Component", () => {
  it("should snapshot the button", () => {
    const component = shallow(<Button {...defaultProps}>Click Here</Button>);
    expect(component).toMatchSnapshot();
  });

  it("should contain text in the button", () => {
    const component = shallow(<Button {...defaultProps}>Click Here</Button>);
    expect(component.contains("Click Here")).toBeTruthy();
  });

  it("should default to type button when type is not supplied", () => {
    const component = shallow(<Button {...defaultProps}>Click Here</Button>);
    expect(component.props().type).toEqual("button");
  });

  it("should accept the button type value", () => {
    const component = shallow(
      <Button type="submit" {...defaultProps}>
        Click Here
      </Button>
    );
    expect(component.props().type).toEqual("submit");
  });
});
