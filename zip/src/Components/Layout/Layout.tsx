import { ThemeProvider } from "@/Context/ThemeProvider";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
