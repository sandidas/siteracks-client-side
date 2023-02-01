import { ThemeProvider } from "@/Context/ThemeProvider";
import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider>
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
