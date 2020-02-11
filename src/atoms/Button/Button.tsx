import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StatusIcon from "./StatusIcon";

interface IStyledButton {
  type: "button" | "submit" | "reset";
  showText?: boolean;
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
    opacity: ${({ showText }): number => (showText ? 1 : 0)};
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
  disabled?: boolean;
  children: React.ReactNode;
  loading?: boolean;
  success?: boolean;
  failure?: boolean;
}

export type StatusProps = "loading" | "success" | "failure" | null;

const Button: React.SFC<IButton> = ({
  type = "button",
  onClick,
  children,
  disabled,
  loading,
  success,
  failure
}) => {
  const [status, setStatus] = useState<StatusProps>(null);
  const [showText, setShowText] = useState<boolean>(true);

  useEffect(() => {
    if (loading) {
      setShowText(false);
      setStatus("loading");
    }
    if (success) {
      setShowText(false);
      setStatus("success");
    }
    if (failure) {
      setShowText(false);
      setStatus("failure");
    }
  });

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      showText={showText}
      disabled={disabled}
    >
      <span className="icon">
        <StatusIcon status={status} />
      </span>
      <span className="text">{children}</span>
    </StyledButton>
  );
};

export default Button;
