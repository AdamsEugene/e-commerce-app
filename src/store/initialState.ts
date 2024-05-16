export type Colors = {
  Background: string;
  Headline: string;
  Description: string;
  Button: string;
  "Button Text": string;
};

export const adColor: { [type: string]: { light: Colors; dark: Colors } } = {
  default: {
    light: {
      Background: "#FFFFFF",
      Headline: "#333333",
      Description: "#666666",
      Button: "#FF5733",
      "Button Text": "#FFFFFF",
    },
    dark: {
      Background: "#18181B",
      Headline: "#FFFFFF",
      Description: "#CCCCCC",
      Button: "#E63946",
      "Button Text": "#FFFFFF",
    },
  },
};
