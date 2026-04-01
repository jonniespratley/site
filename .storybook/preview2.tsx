// .storybook/preview.ts
import React, { FC, ReactNode, Suspense, useMemo } from "react";
import type { Preview } from "@storybook/react";
// import { I18nextProvider  } from '@storybook/react';

import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider, StyledEngineProvider } from "@mui/material";

import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";

import {
  CssVarsProvider as JoyCssVarsProvider,
  ThemeProvider as JoyThemeProvider,
  THEME_ID as JOY_THEME_ID,
} from "@mui/joy/styles";

import { CssBaseline } from "@mui/joy";

import { joyThemes } from "../src/joy.themes";
import { darkTheme } from "../src/themes/dark.theme";
import { lightTheme } from "../src/themes/light.theme";

// import '../src/index.css';

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

// Decorator to wrap stories with I18nextProvider
const withI18next = (Story: FC) => {
  return (
    // This catches the suspense from components not yet ready (still loading translations)
    // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
    <Suspense fallback={<div>loading translations...</div>}>
      <Story />
    </Suspense>
  );
};

const withTheme = (Story: FC, context) => {
  const { theme: themeKey } = context.globals;
  const theme = useMemo(() => THEMES[themeKey] || THEMES["light"], [themeKey]);

  // const materialTheme = materialExtendTheme();

  return (
    <StyledEngineProvider injectFirst>
      {/* <ThemeProvider theme={theme}> */}
      <ThemeProvider theme={{ [MATERIAL_THEME_ID]: theme }}>
        <MaterialCssVarsProvider theme={joyThemes}>
          <CssBaseline enableColorScheme />
          <Story />
        </MaterialCssVarsProvider>
      </ThemeProvider>
      {/* </ThemeProvider> */}
    </StyledEngineProvider>
  );
};

const withNewTheme = withThemeFromJSXProvider({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  defaultTheme: "light",
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
});

const preview: Preview = {
  decorators: [withI18next, withTheme],
  // Add the i18n decorator here
  parameters: {
    actions: { fn: "^on[A-Z].*" },
    controls: {
      expanded: true, // will show all controls by default
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
