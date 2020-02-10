import { shallow } from "enzyme";
import React from "react";
import colourTheme from "../../styles/colourTheme";
import Button, { StyledButton } from "./Button";

const themeProp = { theme: colourTheme };
describe("Button Component", () => {
  it("should snapshot the button", () => {
    const component = shallow(<Button {...themeProp}>Click Here</Button>);
    expect(component).toMatchSnapshot();
  });

  it("should contain text in the button", () => {
    const component = shallow(<Button {...themeProp}>Click Here</Button>);
    expect(component.text()).toEqual("Click Here");
  });

  it("should default to type button when type is not supplied", () => {
    const component = shallow(<Button {...themeProp}>Click Here</Button>);
    expect(component.props().type).toEqual("button");
  });

  it("should accept the button type value", () => {
    const component = shallow(
      <Button type="submit" {...themeProp}>
        Click Here
      </Button>
    );
    expect(component.props().type).toEqual("submit");
  });
});

describe("StyledButton Component", () => {
  it("should snapshot the styled button", () => {
    const component = shallow(<StyledButton type="button" {...themeProp} />);
    expect(component).toMatchSnapshot();
  });
});
