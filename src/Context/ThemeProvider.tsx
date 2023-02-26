"use client"; // this is a client component
import React, { useState, useEffect, createContext, useContext } from "react";
import { checkCurrentTheme, setCurrentTheme } from "@/Helpers/DarkLightTheme";
import { createEmotionCache } from "@mantine/core";
import { ColorSchemeProvider, MantineProvider, ColorScheme } from "@mantine/styles";

// ================
// Context of Theme Settings
// ================
interface iContextProps {
  toggleColorScheme: () => void;
  colorScheme: string | null | undefined;
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

  // const [colorScheme, setColorScheme] = useState<string>("dark");
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const myCache = createEmotionCache({ key: "mantine" });

  // ================
  // check current device status of dark / light
  // ================

  useEffect(() => {
    // check user selected color scheme
    let currentTheme = localStorage.getItem("isDarkMode");

    // check device color scheme [it's return boolean]
    let systemColorScheme: boolean | string | undefined = window.matchMedia("(prefers-color-scheme:dark)").matches;
    // convert boolean to string
    systemColorScheme = systemColorScheme === true ? "dark" : "light";
    // set color scheme to system color scheme
    // if current theme is dark, set dark, if light set light or set system color scheme. If user manually set system color name from local storage this feature will prevent bug or user define custom error
    // @ts-ignore
    setColorScheme(currentTheme === "dark" ? "dark" : currentTheme === "light" ? "light" : systemColorScheme);

    //   //
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
    let currentTheme = checkCurrentTheme();

    if (currentTheme == "dark") {
      setColorScheme("light");
      setCurrentTheme("light"); // save to local storage
    } else {
      setColorScheme("dark");
      setCurrentTheme("dark"); // save to local storage
    }
  };

  return (
    <>
      <ThemeContext.Provider value={{ toggleColorScheme, colorScheme }}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider
            emotionCache={myCache}
            theme={{
              colorScheme: colorScheme,
              colors: {
                main: ["#72cb66", "#5bc24d", "#43b933", "#2cb11a", "#14a800", "#14a800", "#14A800", "#108600", "#0e7600", "#084300"],
                dark: ["#9c9da4", "#83858d", "#6a6c76", "#51545f", "#393b49", "#202332", "#070a1b", "#070A1B", "#060816", "#111424"],
              },
              primaryColor: "main",
              fontFamily: "Poppins, Mulish, Ubuntu, sans-serif",
              // lineHeight: "2.1rem",

              fontSizes: {
                xs: 12,
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
    </>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
