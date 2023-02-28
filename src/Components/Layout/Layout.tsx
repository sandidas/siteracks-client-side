import Head from "next/head";
import { ThemeProvider } from "@/Context/ThemeProvider";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ModalProvider } from "@/Context/ModalProvider";
import { MenuProvider } from "@/Context/MenuProvider";

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
        <MenuProvider>
          <ModalProvider>
            <Header />
            {children}
            <Footer />
          </ModalProvider>
        </MenuProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
