import type { AppProps } from "next/app";
import Layout from "@/Components/Layout/Layout";
import "@/styles/globals.css";
import { ReactElement, ReactNode, useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import LoaderComponent from "@/Components/Loader/LoaderComponent";
import { toast, ToastBar, Toaster } from "react-hot-toast";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Progress } from "@mantine/core";
// https://www.youtube.com/watch?v=0ofxWRzBLWY

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// Creating a new instance of the QueryClient class and passing it as a prop to the QueryClientProvider ensures that all child components have access to the same instance of the queryClient. This is important because it allows the child components to share the same cache, which improves performance by preventing unnecessary network requests when the same data is requested multiple times.
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  // To show loader
  const [loading, setLoading] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const router = useRouter();

  // VERSION 1.0
  // useEffect(() => {
  //   const handleStart = () => {
  //     setLoading(true);
  //     setProgressValue(0);
  //   };
  //   const handleComplete = () => setLoading(false);

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);

  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleComplete);
  //   };
  // }, [router]);
  //# To show loader

  // VERSION 2.0
  const progressIntervalRef = useRef<number | null>(null);

  const handleStart = () => {
    setLoading(true);
    setProgressValue(0);
  };

  const handleComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    const startLoading = () => {
      handleStart();
      progressIntervalRef.current = setInterval(() => {
        setProgressValue((prevValue) => (prevValue + 5) % 100);
      }, 800) as unknown as number;
    };

    const completeLoading = () => {
      clearInterval(progressIntervalRef.current as number);
      handleComplete();
    };

    router.events.on("routeChangeStart", startLoading);
    router.events.on("routeChangeComplete", completeLoading);

    return () => {
      clearInterval(progressIntervalRef.current as number);
      router.events.off("routeChangeStart", startLoading);
      router.events.off("routeChangeComplete", completeLoading);
    };
  }, [router]);

  return (
    <Layout>
      {/* Loader  */}
      {/* {loading && <LoaderComponent />} */}
      {loading && <Progress  size="sm" className="fixed z-auto left-0 w-full top-16" color="green" value={progressValue} />}
      {/* by wrapping the component tree with the QueryClientProvider, you're setting up the queryClient object, which provides a centralized data management system and caching mechanism for all the child components that use the react-query library. */}
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
