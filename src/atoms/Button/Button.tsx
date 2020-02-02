import React from "react";
import styled from "styled-components";

interface IStyledButton {
  type: "button" | "submit" | "reset";
}

const StyledButton = styled.button<IStyledButton>`
  padding: 1rem;
`;
interface IProps {
  name: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.SFC<IProps> = ({ name, type = "button" }: IProps) => (
  <StyledButton type={type}>{name}</StyledButton>
);

export default Button;
