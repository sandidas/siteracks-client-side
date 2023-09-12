import Head from "next/head";
import { ThemeProvider } from "@/Context/ThemeProvider";
import React from "react";

import { ModalProvider } from "@/Context/ModalProvider";
import { LoaderProvider } from "@/Context/LoaderProvider";
import { ReactQueryProvider } from "@/Context/ReactQueryProvider";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../Header/Header"));
const Footer = dynamic(() => import("../Footer/Footer"));

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>SiteRacks</title>
        <meta name="description" content="SiteRacks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/SiteRacksFavIcon.ico" />
      </Head>

      <ThemeProvider>
        <LoaderProvider>
          <ModalProvider>
            <Header />
            <ReactQueryProvider>{children}</ReactQueryProvider>
            <Footer />
          </ModalProvider>
        </LoaderProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
