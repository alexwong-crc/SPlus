import React from "react";
import Button from "./index";

export default { title: "Button" };

export const withText: React.SFC = () => <Button>Click Here</Button>;

export const withLoader: React.SFC = () => <Button loading>Click Here</Button>;
