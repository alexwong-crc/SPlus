import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem;
`;
interface IProps {
  name: string;
}

const Button: React.SFC<IProps> = ({ name }: IProps) => (
  <StyledButton type="button">
    Hello
    {name}
  </StyledButton>
);

export default Button;
