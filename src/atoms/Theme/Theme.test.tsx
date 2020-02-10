import React from "react";
import { shallow } from "enzyme";
import Theme from "./Theme";
import colourTheme from "../../styles/colourTheme";

describe("Theme component", () => {
  it("should match snapshot", () => {
    const component = shallow(
      <Theme>
        <div>hello</div>
      </Theme>
    );

    expect(component).toMatchSnapshot();
  });

  it("should render children components", () => {
    const component = shallow(
      <Theme>
        <div>hello</div>
      </Theme>
    );

    expect(component.contains(<div>hello</div>)).toBeTruthy();
  });

  it("should have a default colour theme when it is not passed", () => {
    const component = shallow(<Theme>Hello</Theme>);

    expect(component.props().theme).toMatchObject(colourTheme);
  });

  it("should take in a new theme when passed", () => {
    const testTheme = {
      primary: "bob"
    };
    const component = shallow(<Theme theme={testTheme}>Hello</Theme>);

    expect(component.props().theme).toMatchObject(testTheme);
  });
});
