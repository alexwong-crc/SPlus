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

  const resetButton = (): void => {
    setShowText(true);
    setStatus(null);
  };

  useEffect(() => {
    if (loading) {
      setShowText(false);
      setStatus("loading");
    } else {
      if (success) {
        setShowText(false);
        setStatus("success");
        setTimeout(resetButton, 1000);
      } else if (failure) {
        setShowText(false);
        setStatus("failure");
        setTimeout(resetButton, 1000);
      }
    }
  }, [loading, success, failure]);

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
