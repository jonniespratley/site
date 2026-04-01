import type { Preview } from "@storybook/react";
import * as React from "react";

import {
  CssVarsProvider,
  ThemeProvider,
  THEME_ID,
  StyledEngineProvider,
} from "@mui/joy/styles";

import { CssBaseline } from "@mui/joy";

import { joyThemes } from "../src/joy.themes";
import { darkTheme } from "../src/themes/dark.theme";
import { lightTheme } from "../src/themes/light.theme";

import "../src/index.scss";

//import "@fontsource/material-icons";

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

const withTheme = (Story: React.FC, context) => {
  const { theme: themeKey } = context.globals;
  const theme = React.useMemo(
    () => THEMES[themeKey] || THEMES["light"],
    [themeKey]
  );

  return (
    <CssVarsProvider disableTransitionOnChange theme={theme}>
      <CssBaseline />
      <Story />
    </CssVarsProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
