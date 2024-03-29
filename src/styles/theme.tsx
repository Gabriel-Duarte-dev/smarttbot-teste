import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const colors = {
  transparent: "transparent",
  white: "#fff",
  black: {
      "default": "#343234",
      "900": "#000"
  },
  gray: {
    "50": "#E3E2E3",
    "100": "#BEBDBF",
    "200": "#BCC3CD",
    "300": "#A2ABB9",
    "400": "#8893A5",
    "500": "#6D7C92",
    "600": "#576375",
    "700": "#424A57",
    "800": "#2C313A",
    "900": "#16191D",
    "regular": "#888689",
    "low": "#B1B0B2",
    "veryLow": "#E3E2E3",
    "medium": "#959AA2"
  },
  cyan: {
    "primary": "#15B8A1",
    "secondary": "#00B39D"
  },
  price: {
      "negative": "#FF4501"
  },

  theme: {
    light: "#E5E5E5",
    dark: "#333",
    primary: "#199EB8",
    secondary: "#E04F00",
  },
};

const fonts = {
  heading: "roboto",
  body: "roboto",
  mono: "roboto",
};

const styles = {
  global: {
    "html, body": {
      backgroundColor: "theme.light",
    },
    button: {
      borderRadius: "none",
    },
  },
};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  colors,
  fonts,
  styles,
  config
});
