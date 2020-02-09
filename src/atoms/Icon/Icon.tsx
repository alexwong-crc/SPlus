import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

const Icon: React.SFC<FontAwesomeIconProps> = ({
  icon,
  flip,
  rotation,
  size,
  inverse,
  spin,
  listItem,
  border,
  pull,
  transform,
  mask,
  fixedWidth,
  className,
  pulse,
  swapOpacity,
  symbol,
  title,
  color
}: FontAwesomeIconProps) => (
  <FontAwesomeIcon
    color={color}
    className={className}
    icon={icon}
    size={size}
    spin={spin}
    inverse={inverse}
    listItem={listItem}
    flip={flip}
    rotation={rotation}
    border={border}
    pull={pull}
    transform={transform}
    mask={mask}
    fixedWidth={fixedWidth}
    pulse={pulse}
    swapOpacity={swapOpacity}
    symbol={symbol}
    title={title}
  />
);

export default Icon;
