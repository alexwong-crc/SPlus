import React from "react";
import styled from "styled-components";
import { Icon } from "../../index";

interface IStyledButton {
  type: "button" | "submit" | "reset";
  loading?: boolean;
}

export const StyledButton = styled.button<IStyledButton>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }): string => theme.action.main.code};
  color: ${({ theme }): string => theme.action.main.text};
  border: none;
  font-size: 0.8rem;
  position: relative;
  :active {
    background-color: ${({ theme }): string => theme.action.dark.code};
  }
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
  :disabled {
    cursor: default;
    opacity: 0.6;
    background-color: ${({ theme }): string => theme.action.main.code};
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
  disabled?: boolean;
}
interface IProps extends IButton {
  children: React.ReactNode;
}

const Button: React.SFC<IButton> = ({
  type = "button",
  onClick,
  children,
  loading,
  disabled
}: IProps) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
    >
      {loading && (
        <span className="icon">
          <Icon icon="spinner" spin transform="grow-5" />
        </span>
      )}
      <span className="text">{children}</span>
    </StyledButton>
  );
};

export default Button;
