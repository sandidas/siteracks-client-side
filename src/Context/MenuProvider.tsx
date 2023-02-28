"use client"; // this is a client component
import Loader from "@/Components/Loader/Loader";
import React, { createContext, useContext, useState, useEffect } from "react";

interface MyProps {
  children?: React.ReactNode;
}
interface IMenuProps {
  menuItems?: any;
  loading?: boolean;
  setLoading?: any;
}

export const MenuContext = createContext<IMenuProps>({
  menuItems: null,
});

/** menu items  */

/** # menu items  */

export const MenuProvider: React.FC<MyProps> = ({ children }) => {
  // const [menuItems, setMenuItems] = useState();
  const [loading, setLoading] = useState(true);
  const [realTime, setRealTime] = useState(false);
  const [counter, setCounter] = useState(0);
  // useEffect(() => {
  //   async function fetchMenuItems() {
  //     const response = await fetch("http://localhost:3000/json/navigation.json");
  //     const data = await response.json();
  //     setMenuItems(data);
  //     setLoading(false);
  //   }
  //   fetchMenuItems();
  // }, []);

  useEffect(() => {
    let interval: any;
    if (loading) {
      interval = setInterval(() => {
        setLoading(false);
        console.log("In setInterval");
        // The logic of changing counter value to come soon.
      }, 2000);
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

      <MenuContext.Provider value={{ loading, setLoading }}>{children}</MenuContext.Provider>
    </>
  );
};

export const useMenuContext = () => useContext(MenuContext);
