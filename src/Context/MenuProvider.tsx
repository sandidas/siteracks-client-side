"use client"; // this is a client component
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
  const [menuItems, setMenuItems] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMenuItems() {
      const response = await fetch("http://localhost:3000/json/navigation.json");
      const data = await response.json();
      setMenuItems(data);
      setLoading(false);
    }
    fetchMenuItems();
  }, []);

  if (loading) {
    return <>Loading....</>;
  }

  return (
    <>
      <MenuContext.Provider value={{ menuItems, loading, setLoading }}>{children}</MenuContext.Provider>
    </>
  );
};

export const useMenuContext = () => useContext(MenuContext);
