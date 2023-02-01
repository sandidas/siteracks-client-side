
import type { AppProps } from "next/app";
import Layout from "@/Components/Layout/Layout";
import "@/styles/globals.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="dark:bg-background px-[4vw]">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
