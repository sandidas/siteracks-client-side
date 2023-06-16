import React, { useContext, createContext } from "react";
import axios from "axios";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { GetStaticProps } from "next";

interface ReactQueryProviderProps {
  children?: React.ReactNode;
  dehydratedState?: unknown;
}
interface ReactQueryContextProps {
  queryClient: QueryClient;
}
// ReactQueryContext is a context object that is created using createContext from the react module. It is used to pass the query client instance down to the components that need it.
export const ReactQueryContext = createContext<ReactQueryContextProps>({
  queryClient: new QueryClient(),
});
const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

// fetchProducts is an asynchronous function that uses Axios to fetch data from a REST API endpoint. It returns the data from the response.
export const fetchProducts = async () => {
  const API_URL = `${process.env.API_URL}/api/package/packages`;
  const response = await axios.get(API_URL);
  return response.data;
};
// ReactQueryProvider is a component that wraps the children components with a QueryClient provider. It initializes a new QueryClient instance and passes it down through the context. If dehydratedState is passed in as a prop, it resets the queries of the QueryClient with that data.
export const ReactQueryProvider = ({ children, dehydratedState }: ReactQueryProviderProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
      },
    },
  });

  if (dehydratedState) {
    queryClient.resetQueries(dehydratedState);
  }

  return (
    <>
      <ReactQueryContext.Provider value={{ queryClient }}>{children}</ReactQueryContext.Provider>
    </>
  );
};
// getServerSideProps is a function that is used with Next.js to prefetch data on the server-side before rendering the page. It creates a new QueryClient instance, prefetches data for the "products" key using the fetchProducts function, and returns the dehydrated state of the query client.
export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: twentyFourHoursInMs,
        cacheTime: 5000000,
      },
    },
  });

  await queryClient.prefetchQuery(["products"], fetchProducts, {
    staleTime: twentyFourHoursInMs,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
   
  };
};
// useReactQueryContext is a custom hook that uses the useContext hook from React to access the ReactQueryContext context object and returns the query client instance.
export const useReactQueryContext = () => useContext(ReactQueryContext);

export const useProducts = () => {
  const { queryClient } = useReactQueryContext();
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(["products"], fetchProducts, {
    staleTime: twentyFourHoursInMs,
  });

  return {
    products,
    isLoading,
    isError,
  };
};
