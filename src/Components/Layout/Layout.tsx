import Head from "next/head";
import { ThemeProvider } from "@/Context/ThemeProvider";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ModalProvider } from "@/Context/ModalProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>SiteRacks</title>
        <meta name="description" content="SiteRacks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/siteRacksFav.ico" />
      </Head>
      <ThemeProvider>
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
