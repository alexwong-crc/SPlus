import { shallow } from "enzyme";
import React from "react";
import StyledButton from "./StyledButton";
import defaultProps from "../../../services/tests/defaultProps";

describe("StyledButton Component", () => {
  it("should snapshot the styled button", () => {
    const component = shallow(<StyledButton type="button" {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });

  it("should hide the span with className text if showText is false", () => {
    const component = shallow(
      <StyledButton type="button" showText={false} {...defaultProps}>
        <span className="icon" />
      </StyledButton>
    );
    // @ts-ignore
    expect(component).toHaveStyleRule("opacity", "0", {
      modifier: "span.text"
    });
    // TODO: Need a test to check whether or not Icon is visible
  });

  it("should show the span with className text if showText is true", () => {
    const component = shallow(
      <StyledButton type="button" showText {...defaultProps}>
        <span className="icon" />
      </StyledButton>
    );
    // @ts-ignore
    expect(component).toHaveStyleRule("opacity", "1", {
      modifier: "span.text"
    });
    // TODO: Need a test to check whether or not Icon is visible
  });
});
