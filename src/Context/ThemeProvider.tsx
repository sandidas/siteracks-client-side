"use client"; // this is a client component
import React, { useState, useEffect, createContext, useContext } from "react";
import { checkCurrentTheme, setCurrentTheme } from "@/Helpers/DarkLightTheme";
import { Button, createEmotionCache } from "@mantine/core";
import { ColorSchemeProvider, MantineProvider, ColorScheme } from "@mantine/styles";

// ================
// Context of Theme Settings
// ================
interface iContextProps {
  toggleColorScheme: () => void;
  colorScheme: string | null;
}
export const ThemeContext = createContext<iContextProps>({
  toggleColorScheme: () => {}, // define a function
  colorScheme: "",
});

// ================
// Context of Theme Settings
// ================

export const ThemeProvider = ({ children }: any) => {
  // ================
  // State for color scheme settings
  // ================

  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const myCache = createEmotionCache({ key: "mantine" });

  // ================
  // check current device status of dark / light
  // ================

  useEffect(() => {
    const currentTheme = checkCurrentTheme();
    if (currentTheme) {
      //@ts-ignore
      setColorScheme(currentTheme);
    } else {
      if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
        setColorScheme("dark");
        setCurrentTheme("dark");
      } else {
        setColorScheme("light");
        setCurrentTheme("light");
      }
    }
  }, []);
  // ================
  //
  // ================
  useEffect(() => {
    if (colorScheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colorScheme]);

  const toggleColorScheme = () => {
    const currentTheme = checkCurrentTheme();
    if (currentTheme == "dark") {
      setColorScheme("light");
      setCurrentTheme("light");
    } else {
      setColorScheme("dark");
      setCurrentTheme("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleColorScheme, colorScheme }}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          emotionCache={myCache}
          theme={{
            colorScheme: colorScheme,
            colors: {
              main: ["#72cb66", "#5bc24d", "#43b933", "#2cb11a", "#14a800", "#14a800", "#14A800", "#108600", "#0e7600", "#084300"],
            },
            primaryColor: "main",
            fontFamily: 'Poppins, Mulish, Ubuntu, sans-serif',

            fontSizes: {
              xs: 17,
              sm: 17,
              md: 18,
              lg: 20,
              xl: 22,
            },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
