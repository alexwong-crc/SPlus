import React from "react";

interface IProps {
  name: string;
}

export default (props: IProps) => <button>Hello {props.name}</button>;
