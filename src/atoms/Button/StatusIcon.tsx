import React from "react";
import { StatusProps } from "./Button";
import Icon from "../Icon";

interface IStatusIcon {
  status?: StatusProps;
}

type IconNames = "spinner" | "check" | "times";

const StatusIcon: React.SFC<IStatusIcon> = ({ status }: IStatusIcon) => {
  const renderIcon = (): IconNames => {
    switch (status) {
      case "loading":
        return "spinner";
      case "success":
        return "check";
      case "failure":
        return "times";
      default:
        return "spinner";
    }
  };
  return !status ? null : (
    <Icon
      icon={renderIcon()}
      spin={status === "loading" ? true : false}
      transform="grow-5"
    />
  );
};

export default StatusIcon;
