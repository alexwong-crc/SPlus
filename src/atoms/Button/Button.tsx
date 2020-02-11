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
