export default {
  primary: {
    main: { code: "#214464", text: "#FFFFFF" },
    light: { code: "#3777B2", text: "#FFFFFF" },
    dark: { code: "#0C2134", text: "#FFFFFF" }
  },
  secondary: {
    main: { code: "#C14050", text: "#FFFFFF" },
    light: { code: "#FA485E", text: "#FFFFFF" },
    dark: { code: "#74212B", text: "#FFFFFF" }
  },
  complimentary: {
    main: { code: "#F1F45A", text: "#2C2C2C" },
    light: { code: "#FAFC97", text: "#2C2C2C" },
    dark: { code: "#DBDF16", text: "#2C2C2C" }
  },
  action: {
    main: { code: "#76C56F", text: "#FFFFFF" },
    light: { code: "#A0F199", text: "#FFFFFF" },
    dark: { code: "#32AA27", text: "#FFFFFF" }
  },
  error: {
    main: { code: "#FF001F", text: "#FFFFFF" },
    light: { code: "#FF4E4E", text: "#FFFFFF" },
    dark: { code: "#CB0018", text: "#FFFFFF" }
  },
  black: {
    main: { code: "#2C2C2C", text: "#FFFFFF" },
    shadeOne: { code: "#454545", text: "#FFFFFF" },
    shadeTwo: { code: "#696767", text: "#FFFFFF" },
    shadeThree: { code: "#979797", text: "#FFFFFF" },
    shadeFour: { code: "#CCCCCC", text: "#2C2C2C" },
    shadeFive: { code: "#ECECEC", text: "#2C2C2C" },
    shadeSix: { code: "#F8F8F8", text: "#2C2C2C" }
  }
};

interface IColourCode {
  code: string;
  text: string;
}

interface IColour {
  main: IColourCode;
  light: IColourCode;
  dark: IColourCode;
}

interface IColourBlack {
  main: IColourCode;
  shadeOne: IColourCode;
  shadeTwo: IColourCode;
  shadeThree: IColourCode;
  shadeFour: IColourCode;
  shadeFive: IColourCode;
  shadeSix: IColourCode;
}

export interface IColourTheme {
  primary: IColour;
  secondary: IColour;
  complimentary: IColour;
  action: IColour;
  error: IColour;
  black: IColourBlack;
}
