import React from "react";
import { shallow } from "enzyme";
import StatusIcon, { StyledIcon } from "./StatusIcon";

describe("StatusIcon", () => {
  it("should match last snapshot", () => {
    const component = shallow(<StatusIcon />);
    expect(component).toMatchSnapshot();
  });

  it("should have className slideInOut if status is success", () => {
    const component = shallow(<StatusIcon status="success" />);
    expect(component.find("StyledIcon").props().className).toEqual(
      "slideInOut"
    );
  });

  it("should have className slideInOut if status is failure", () => {
    const component = shallow(<StatusIcon status="failure" />);
    expect(component.find("StyledIcon").props().className).toEqual(
      "slideInOut"
    );
  });

  it("should have empty string for className if status is undefined", () => {
    const component = shallow(<StatusIcon />);
    expect(component.find("StyledIcon").props().className).toEqual("");
  });

  it("should have empty string for className if status is loading", () => {
    const component = shallow(<StatusIcon status="loading" />);
    expect(component.find("StyledIcon").props().className).toEqual("");
  });
});

describe("StyledIcon", () => {
  it("should match snapshot", () => {
    const component = shallow(<StyledIcon />);
    expect(component).toMatchSnapshot();
  });
});
