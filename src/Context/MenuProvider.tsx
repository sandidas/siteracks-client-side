import React, { createContext, useContext, useState } from "react";

interface MyProps {
  children?: React.ReactNode;
}
interface IMenuProps {
  menuItems?: any;
}

export const MenuContext = createContext<IMenuProps>({
  menuItems: null,
});

export const MenuProvider: React.FC<MyProps> = ({ children }) => {
  const [menuItems, setMenuItems] = useState("Sandipan Das");
  return (
    <>
      <MenuContext.Provider value={{ menuItems }}>{children}</MenuContext.Provider>
    </>
  );
};

export const useMenuContext = () => useContext(MenuContext);
