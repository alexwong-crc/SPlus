import React from "react";
import { ThemeProvider } from "styled-components";
import colourTheme from "../../colourTheme";

interface ITheme {
  [index: string]: string | object;
}

interface IProps {
  children: React.ReactNode;
  theme: ITheme;
}

const Theme: React.SFC<IProps> = ({
  children,
  theme = colourTheme
}: IProps) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
