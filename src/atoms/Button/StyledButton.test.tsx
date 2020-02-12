import { shallow } from "enzyme";
import React from "react";
import StyledButton from "./StyledButton";
import defaultProps from "../../../services/tests/defaultProps";

describe("StyledButton Component", () => {
  it("should snapshot the styled button", () => {
    const component = shallow(<StyledButton type="button" {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
