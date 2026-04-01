import { createContext, useState } from "react";
export type ThemeContextType = "light" | "dark";

// 1. Define the context interface
export interface ThemeContextType2 {
  type?: "light" | "dark";
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// 2. Create the context
export const ThemeContext = createContext<ThemeContextType2 | null>(null);

// 3. Create the provider component
/*
export const ThemeProvider = ({ children }) => {
  //const [theme, setTheme] = useState<ThemeContextType>("light");

  const [mode, setMode] = useState<string>("dark");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
*/
// Alternatively, you can use `React.FunctionComponent` (or `React.FC`), if you prefer.
// With latest React types and TypeScript 5.1. it's mostly a stylistic choice, otherwise discouraged.
