import React, { useState, useEffect } from "react";
import StatusIcon from "./StatusIcon";
import StyledButton from "./StyledButton";

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
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(true);

  useEffect(() => {
    if (loading) {
      setShowText(false);
      setShowIcon(true);
      setStatus("loading");
    } else {
      if (success) {
        setShowText(false);
        setShowIcon(true);
        setStatus("success");
      } else if (failure) {
        setShowText(false);
        setShowIcon(true);
        setStatus("failure");
      }
    }
  });

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      showText={showText}
      showIcon={showIcon}
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
