import React from "react";
import styled from "styled-components";
import colourTheme from "../../colorTheme";
import { Icon } from "../../index";

const { action } = colourTheme;

interface IStyledButton {
  type: "button" | "submit" | "reset";
  loading?: boolean;
}

export const StyledButton = styled.button<IStyledButton>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: ${action.main.code};
  color: ${action.main.text};
  border: none;
  transition: 0.3s;
  font-size: 0.8rem;
  position: relative;
  :active {
    background-color: ${action.dark.code};
  }
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
  span.text {
    opacity: ${({ loading }): number => (loading ? 0 : 1)};
  }
  span.icon {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

interface IButton {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  loading?: boolean;
}
interface IProps extends IButton {
  children: React.ReactNode;
}

const Button: React.SFC<IButton> = ({
  type = "button",
  onClick,
  children,
  loading
}: IProps) => {
  return (
    <StyledButton type={type} onClick={onClick} loading={loading}>
      {loading && (
        <span className="icon">
          <Icon icon="spinner" spin />
        </span>
      )}
      <span className="text">{children}</span>
    </StyledButton>
  );
};

export default Button;
