"use client"; // this is a client component
import React from "react";
import { useMantineColorScheme } from '@mantine/core';
import LightIcon from "../../../public/images/darkLight/light.svg";
import DarkIcon from "../../../public/images/darkLight/dark.svg";
import Image from "next/image";

const SwitchDarkLight = () => {

  const { colorScheme: isDarkMode, toggleColorScheme } = useMantineColorScheme();
  return (
    <>
      <button className="bg-transparent border-none cursor-pointer mx-3" onClick={() => toggleColorScheme()}>
        {isDarkMode === "light" ? (
          <div className="p-1 rounded-full">
            {/* <Image alt="L" src={DarkIcon} width="24" height="24" /> */}
            <DarkIcon className="w-7 h-7" />
          </div>
        ) : (
          <div className="p-1 rounded-full">
            {/* <Image alt="L" src={LightIcon} width="24" height="24" /> */}
            <LightIcon className="w-7 h-7" />
          </div>
        )}
      </button>
    </>
  );
};

export default SwitchDarkLight;
