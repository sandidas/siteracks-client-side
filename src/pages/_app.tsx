import type { AppProps } from "next/app";
import Layout from "@/Components/Layout/Layout";
import "@/styles/globals.css";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Loader from "@/Components/Loader/Loader";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppProps) {
  // To show loader
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);
  //# To show loader
  return (
    <Layout>
      {/* Loader  */}
      {loading && <Loader />}
      <Component {...pageProps} />
    </Layout>
  );
}
