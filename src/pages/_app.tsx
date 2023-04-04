import type { AppProps } from "next/app";
import Layout from "@/Components/Layout/Layout";
import "@/styles/globals.css";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Loader from "@/Components/Loader/Loader";
import { toast, ToastBar, Toaster } from "react-hot-toast";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryProvider } from "@/Context/ReactQueryProvider";

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

  // Creating a new instance of the QueryClient class and passing it as a prop to the QueryClientProvider ensures that all child components have access to the same instance of the queryClient. This is important because it allows the child components to share the same cache, which improves performance by preventing unnecessary network requests when the same data is requested multiple times.
  const queryClient = new QueryClient();

  return (
    <Layout>
      {/* Loader  */}
      {loading && <Loader />}
      {/* by wrapping the component tree with the QueryClientProvider, you're setting up the queryClient object, which provides a centralized data management system and caching mechanism for all the child components that use the react-query library. */}
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryProvider>
            <Component {...pageProps} />
          </ReactQueryProvider>
        </Hydrate>
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
