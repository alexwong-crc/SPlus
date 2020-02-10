import { shallow } from "enzyme";
import React from "react";
import Button, { StyledButton } from "./Button";

describe("Button Component", () => {
  it("should snapshot the button", () => {
    const component = shallow(<Button>Click Here</Button>);
    expect(component).toMatchSnapshot();
  });

  it("should contain text in the button", () => {
    const component = shallow(<Button>Click Here</Button>);
    expect(component.text()).toEqual("Click Here");
  });

  it("should default to type button when type is not supplied", () => {
    const component = shallow(<Button>Click Here</Button>);
    expect(component.props().type).toEqual("button");
  });

  it("should accept the button type value", () => {
    const component = shallow(<Button type="submit">Click Here</Button>);
    expect(component.props().type).toEqual("submit");
  });
});

describe("StyledButton Component", () => {
  it("should snapshot the styled button", () => {
    const component = shallow(<StyledButton type="button" />);
    expect(component).toMatchSnapshot();
  });
});
