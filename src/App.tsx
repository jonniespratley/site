import { useState, useEffect } from "react";

import {
  Main,
  Project,
  Navigation,
  Footer,
} from "./components";

import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Publications from "./components/Publications";

import theme from "./theme";
import { lightTheme } from "./themes/light.theme";
import { darkTheme } from "./themes/dark.theme";
import "./index.scss";

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

function App() {
  //const [theme, setTheme] = useState<ThemeContextType>("light");
  const [mode, setMode] = useState<string>("dark");
  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <CssVarsProvider disableTransitionOnChange theme={theme}>
      <CssBaseline />

      <div
        className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"
          }`}
      >
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <Main />

        <Project />
        <Publications />
        <Footer />
      </div>
    </CssVarsProvider>
  );
}

export default App;
