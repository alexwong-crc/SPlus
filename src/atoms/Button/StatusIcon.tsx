import React from "react";
import styled from "styled-components";
import { StatusProps } from "./Button";
import Icon from "../Icon";

interface IStatusIcon {
  status?: StatusProps;
}

type IconNames = "spinner" | "check" | "times";

const StyledIcon = styled.div<IStatusIcon>`
  position: absolute;
  transform: translateY(-200%);
  transition: 0.3s;
  &.slideInOut {
    animation-name: slideInOut;
    animation-duration: 1s;
  }

  @keyframes slideInOut {
    0% {
      transform: translateY(-200%);
    }
    25% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-200%);
    }
  }
`;

const StatusIcon: React.SFC<IStatusIcon> = ({ status }: IStatusIcon) => {
  const renderIcon = (): IconNames => {
    switch (status) {
      case "success":
        return "check";
      case "failure":
        return "times";
      default:
        return "times";
    }
  };

  return (
    <>
      <StyledIcon
        className={
          status === "success" || status === "failure" ? "slideInOut" : ""
        }
      >
        <Icon icon={renderIcon()} transform="grow-5" />
      </StyledIcon>
      {status === "loading" ? (
        <Icon icon="spinner" spin transform="grow-5" />
      ) : null}
    </>
  );
};

export default StatusIcon;
