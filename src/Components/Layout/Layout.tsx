import { ThemeProvider } from "@/Context/ThemeProvider";
import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-[4vw] dark:bg-background">
      <ThemeProvider>
        <Header />
        {children}
      </ThemeProvider>
    </div>
  );
};

export default Layout;
