import React from "react";
import { shallow } from "enzyme";
import Button from "./index";

describe("Button", () => {
  it("should snapshot the button", () => {
    const component = shallow(<Button name="typescript test" />);
    expect(component).toMatchSnapshot();
  });
});
