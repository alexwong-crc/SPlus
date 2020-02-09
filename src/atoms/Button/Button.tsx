import React from "react";
import styled from "styled-components";
import colourTheme from "../../colorTheme";

const { action } = colourTheme;

interface IStyledButton {
  type: "button" | "submit" | "reset";
}

export const StyledButton = styled.button<IStyledButton>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: ${action.main.code};
  color: ${action.main.text};
  border: none;
  transition: 0.3s;
  font-size: 0.8rem;
  :active {
    background-color: ${action.dark.code};
  }
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

interface IProps {
  name: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.SFC<IProps> = ({ name, type = "button" }: IProps) => (
  <StyledButton type={type}>{name}</StyledButton>
);

export default Button;
