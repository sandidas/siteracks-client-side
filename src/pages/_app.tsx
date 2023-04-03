import type { AppProps } from "next/app";
import Layout from "@/Components/Layout/Layout";
import "@/styles/globals.css";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Loader from "@/Components/Loader/Loader";
import { toast, ToastBar, Toaster } from "react-hot-toast";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

  const queryClient = new QueryClient();

  return (
    <Layout>
      {/* Loader  */}
      {loading && <Loader />}
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>

      <Toaster
        reverseOrder={false}
        position="top-right"
        toastOptions={{
          className: "flex shadow shadow-primary gap-6 rounded-lg overflow-hidden max-w-sm dark:bg-gray-700 dark:text-white divide-gray-700 text-sm p-0 pl-2",
          duration: 5000,
          style: {},
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button className="bg-surface dark:hover:bg-red-600 hover:bg-primary group h-full w-2/6 max-w-[40px] flex justify-center items-center" onClick={() => toast.dismiss(t.id)}>
                    <XMarkIcon className="w-5 h-5 dark:fill-white fill-primary group-hover:fill-white" />
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </Layout>
  );
}
