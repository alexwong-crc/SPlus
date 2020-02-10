import React from "react";
import { shallow } from "enzyme";
import Icon from "./Icon";

describe("Icon Component", () => {
  it("should match snapshot", () => {
    const component = shallow(<Icon icon="spinner" />);
    expect(component).toMatchSnapshot();
  });

  it("should have default values for props other than icon prop", () => {
    const component = shallow(<Icon icon="spinner" />);
    const defaultProps = {
      icon: "spinner",
      inverse: false,
      border: false,
      className: "",
      fixedWidth: false,
      flip: null,
      listItem: false,
      mask: null,
      pull: null,
      pulse: false,
      rotation: null,
      size: null,
      spin: false,
      swapOpacity: false,
      symbol: false,
      title: "",
      transform: null
    };

    expect(component.props()).toMatchObject(defaultProps);
    expect(Object.keys(component.props()).length).toEqual(
      Object.keys(defaultProps).length
    );
  });

  it("should pass the prop: inverse", () => {
    const component = shallow(<Icon icon="spinner" inverse />);
    expect(component.props().inverse).toBeTruthy();
  });

  it("should pass the prop: border", () => {
    const component = shallow(<Icon icon="spinner" border />);
    expect(component.props().border).toBeTruthy();
  });

  it("should pass the prop: className", () => {
    const component = shallow(<Icon icon="spinner" className="icon-class" />);
    expect(component.props().className).toEqual("icon-class");
  });

  it("should pass the prop: fixedWidth", () => {
    const component = shallow(<Icon icon="spinner" fixedWidth />);
    expect(component.props().fixedWidth).toBeTruthy();
  });

  it("should pass the prop: flip", () => {
    const component = shallow(<Icon icon="spinner" flip="horizontal" />);
    expect(component.props().flip).toEqual("horizontal");
  });

  it("should pass the prop: listItem", () => {
    const component = shallow(<Icon icon="spinner" listItem />);
    expect(component.props().listItem).toBeTruthy();
  });

  it("should pass the prop: mask", () => {
    const component = shallow(
      <Icon icon="spinner" mask={["fas", "pencil-alt"]} />
    );
    expect(component.props().mask).toMatchObject(["fas", "pencil-alt"]);
  });

  it("should pass the prop: pull", () => {
    const component = shallow(<Icon icon="spinner" pull="right" />);
    expect(component.props().pull).toEqual("right");
  });

  it("should pass the prop: pulse", () => {
    const component = shallow(<Icon icon="spinner" pulse />);
    expect(component.props().pulse).toBeTruthy();
  });

  it("should pass the prop: rotation", () => {
    const component = shallow(<Icon icon="spinner" rotation={180} />);
    expect(component.props().rotation).toEqual(180);
  });

  it("should pass the prop: size", () => {
    const component = shallow(<Icon icon="spinner" size="lg" />);
    expect(component.props().size).toEqual("lg");
  });

  it("should pass the prop: spin", () => {
    const component = shallow(<Icon icon="spinner" spin />);
    expect(component.props().spin).toBeTruthy();
  });

  it("should pass the prop: swapOpacity", () => {
    const component = shallow(<Icon icon="spinner" swapOpacity />);
    expect(component.props().swapOpacity).toBeTruthy();
  });

  it("should pass the prop: symbol - boolean", () => {
    const component = shallow(<Icon icon="spinner" symbol />);
    expect(component.props().symbol).toBeTruthy();
  });

  it("should pass the prop: symbol - string", () => {
    const component = shallow(<Icon icon="spinner" symbol="symbol-eg" />);
    expect(component.props().symbol).toEqual("symbol-eg");
  });

  it("should pass the prop: title", () => {
    const component = shallow(<Icon icon="spinner" title="title-example" />);
    expect(component.props().title).toEqual("title-example");
  });

  it("should pass the prop: transform - string", () => {
    const component = shallow(<Icon icon="spinner" transform="shrink-6" />);
    expect(component.props().transform).toEqual("shrink-6");
  });

  it("should pass the prop: transform - object", () => {
    const transformOptions = {
      size: 5,
      x: 2,
      y: 3,
      rotate: 180,
      flipX: true,
      flipY: true
    };

    const component = shallow(
      <Icon icon="spinner" transform={transformOptions} />
    );

    expect(component.props().transform).toMatchObject(transformOptions);
  });
});
