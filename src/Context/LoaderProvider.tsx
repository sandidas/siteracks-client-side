"use client"; // this is a client component
import Loader from "@/Components/Loader/Loader";
import TawkTo from "@/lib/tawkto";
import React, { createContext, useContext, useState, useEffect } from "react";

interface MyProps {
  children?: React.ReactNode;
}
interface IMenuProps {
  menuItems?: any;
  loading?: boolean;
  setLoading?: any;
}

export const LoaderContext = createContext<IMenuProps>({
  menuItems: null,
});

export const LoaderProvider: React.FC<MyProps> = ({ children }) => {
  // const [menuItems, setMenuItems] = useState();
  const [loading, setLoading] = useState(false);
  const [realTime, setRealTime] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    TawkTo.initialize();
  }, []);

  useEffect(() => {
    let interval: any;
    if (loading) {
      interval = setInterval(() => {
        setLoading(false);
        // The logic of changing counter value to come soon.
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [loading]);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <LoaderContext.Provider value={{ loading, setLoading }}>{children}</LoaderContext.Provider>
    </>
  );
};

export const useLoaderContext = () => useContext(LoaderContext);
