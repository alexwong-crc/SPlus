import React from "react";

interface IProps {
  name: string;
}

const Button: React.SFC<IProps> = ({ name }: IProps) => (
  <button type="button">
    Hello
    {name}
  </button>
);

export default Button;
