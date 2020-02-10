import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { Theme } from "../../src";

configure(require.context("../../stories", true, /\.stories\.tsx$/), module);

addDecorator(story => <Theme>{story()}</Theme>);
