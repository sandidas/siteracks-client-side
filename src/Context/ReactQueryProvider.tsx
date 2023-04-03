import React, { useContext, createContext } from "react";
import axios from "axios";
import { QueryClient, dehydrate } from "@tanstack/react-query";

interface ReactQueryProviderProps {
  children?: React.ReactNode;
  dehydratedState?: unknown;
}
interface ReactQueryContextProps {
  queryClient: QueryClient;
}

export const ReactQueryContext = createContext<ReactQueryContextProps>({
  queryClient: new QueryClient(),
});

export const fetchProducts = async () => {
  const response = await axios.get("http://localhost:5000/api/package/getpackages");
  return response.data;
};

const ReactQueryProvider = ({ children, dehydratedState }: ReactQueryProviderProps) => {
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

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["products"], fetchProducts, {
    staleTime: Infinity,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const useReactQueryContext = () => useContext(ReactQueryContext);
