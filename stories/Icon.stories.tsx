import React from "react";
import Icon from "../src/atoms/Icon/index";
import colourTheme from "../src/colourTheme";

export default { title: "Icon" };

export const basicIcon: React.SFC = () => <Icon icon="spinner" />;

export const withLayers: React.SFC = () => (
  <div className="fa-layers">
    <Icon
      icon="circle"
      transform="grow-10"
      color={colourTheme.action.main.code}
    />
    <Icon icon="spinner" inverse spin />
  </div>
);
