
import React, { useContext, createContext, FC } from 'react';
import type { AppProps } from 'next/app';
import axios from 'axios';
import { useQuery,  QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface MyProps {
    children?: React.ReactNode;
  }
interface IContextProps {
    data?: any;
}

export const ReactQueryContext = createContext<IContextProps>({
    data:null
});

// Define a custom hook to use the data context
export function useData() {
    const context = useContext(ReactQueryContext);
    if (!context) {
      throw new Error('useData must be used within a DataProvider');
    }
    return context;
  }

  function useMyData() {
    return useQuery<MyData, Error>('myData', fetchMyData);
  }
  async function fetchMyData(): Promise<MyData> {
    const response = await axios.get<MyDataApiResponse>('/api/myData');
    return response.data.data;
  }



const ReactQueryProvider:FC<MyProps> = ({children}) => {
    return (
        <>
        <ReactQueryContext.Provider value={data}>
            {children}
        </ReactQueryContext.Provider>
            
        </>
    );
};

export const useReactQueryContext = () => useContext(ReactQueryContext);